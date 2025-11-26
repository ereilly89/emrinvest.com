import { User, Contact, type IUser, type IContact } from "./models";
import type { User as UserSchema, Contact as ContactSchema } from "@shared/schema";

export interface UpsertUser {
  id: string;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  profileImageUrl?: string | null;
}

export interface InsertContact {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

function normalizeUser(user: IUser): UserSchema {
  return {
    id: user._id,
    _id: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    profileImageUrl: user.profileImageUrl,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}

export interface IStorage {
  getUser(id: string): Promise<UserSchema | undefined>;
  upsertUser(user: UpsertUser): Promise<UserSchema>;
  getAllUsers(): Promise<UserSchema[]>;
  updateUserRole(id: string, role: string): Promise<UserSchema | undefined>;
  
  createContactSubmission(contact: InsertContact): Promise<ContactSchema>;
  getContactSubmissions(): Promise<ContactSchema[]>;
}

export class MongoStorage implements IStorage {
  async getUser(id: string): Promise<UserSchema | undefined> {
    const user = await User.findById(id).lean() as IUser | null;
    return user ? normalizeUser(user) : undefined;
  }

  async upsertUser(userData: UpsertUser): Promise<UserSchema> {
    const user = await User.findByIdAndUpdate(
      userData.id,
      {
        $set: {
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          profileImageUrl: userData.profileImageUrl,
        },
        $setOnInsert: {
          _id: userData.id,
          role: "user",
        },
      },
      { upsert: true, new: true, lean: true }
    ) as IUser;
    return normalizeUser(user);
  }

  async getAllUsers(): Promise<UserSchema[]> {
    const users = await User.find().lean() as IUser[];
    return users.map(normalizeUser);
  }

  async updateUserRole(id: string, role: string): Promise<UserSchema | undefined> {
    if (!["user", "admin"].includes(role)) {
      throw new Error("Invalid role");
    }
    const user = await User.findByIdAndUpdate(
      id,
      { $set: { role } },
      { new: true, lean: true }
    ) as IUser | null;
    return user ? normalizeUser(user) : undefined;
  }

  async createContactSubmission(contact: InsertContact): Promise<ContactSchema> {
    const submission = await Contact.create(contact);
    const result = submission.toObject() as IContact;
    return {
      id: result._id.toString(),
      name: result.name,
      email: result.email,
      projectType: result.projectType,
      message: result.message,
      createdAt: result.createdAt,
    };
  }

  async getContactSubmissions(): Promise<ContactSchema[]> {
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean() as IContact[];
    return contacts.map((c) => ({
      id: c._id.toString(),
      name: c.name,
      email: c.email,
      projectType: c.projectType,
      message: c.message,
      createdAt: c.createdAt,
    }));
  }
}

export const storage = new MongoStorage();
