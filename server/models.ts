import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  _id: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  profileImageUrl: string | null;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

export interface IContact extends Document {
  _id: string;
  name: string;
  email: string;
  projectType: string;
  message: string;
  createdAt: Date;
}

export interface ISession extends Document {
  _id: string;
  sid: string;
  sess: object;
  expire: Date;
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

const sessionSchema = new Schema<ISession>({
  _id: { type: String, required: true },
  sid: { type: String, required: true, unique: true },
  sess: { type: Object, required: true },
  expire: { type: Date, required: true },
});

sessionSchema.index({ expire: 1 }, { expireAfterSeconds: 0 });

export const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export const Contact = mongoose.models.Contact || mongoose.model<IContact>("Contact", contactSchema);
export const Session = mongoose.models.Session || mongoose.model<ISession>("Session", sessionSchema);
