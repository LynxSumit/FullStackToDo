import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendCookie } from "../utils/features.js";
export const getAllUsers = async (req, res) => {};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return next(new ErrorHandler("User With this email already exist", 404));
    } else {
      const Hashedpass = await bcrypt.hash(password, 10);
      user = await User.create({
        email,
        name,
        password: Hashedpass,
      });
      sendCookie(user, res, "Registered Successfully", 201);
    }
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }
    let match = await bcrypt.compare(password, user.password);
    if (!match) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }
    sendCookie(user, res, `Welcome back ${user.name}`, 200);
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("token", "", { expires: new Date(Date.now()),      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
    secure : process.env.NODE_ENV === "Development" ? false : true }).json({
      success: true,
      message: "Logout Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getMyDetails = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    next(error);
  }
};
