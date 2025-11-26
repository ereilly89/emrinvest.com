import mongoose, { Schema } from "mongoose";

export interface IUser {
  _id: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  profileImageUrl: string | null;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

export interface IContact {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  projectType: string;
  message: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    _id: { type: String, required: true },
    email: { type: String, default: null },
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    profileImageUrl: { type: String, default: null },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  {
    timestamps: true,
    _id: false,
  }
);

const contactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    projectType: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

export const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export const Contact = mongoose.models.Contact || mongoose.model<IContact>("Contact", contactSchema);
