import {
  users,
  contactSubmissions,
  type User,
  type UpsertUser,
  type Contact,
  type InsertContact,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User operations - mandatory for Replit Auth
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  getAllUsers(): Promise<User[]>;
  updateUserRole(id: string, role: string): Promise<User | undefined>;
  
  // Contact submissions
  createContactSubmission(contact: InsertContact, userId?: string): Promise<Contact>;
  getContactSubmissions(): Promise<Contact[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          profileImageUrl: userData.profileImageUrl,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return await db.select().from(users);
  }

  async updateUserRole(id: string, role: string): Promise<User | undefined> {
    const [user] = await db
      .update(users)
      .set({ role, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    return user;
  }

  async createContactSubmission(contact: InsertContact, userId?: string): Promise<Contact> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values({ ...contact, userId })
      .returning();
    return submission;
  }

  async getContactSubmissions(): Promise<Contact[]> {
    return await db.select().from(contactSubmissions);
  }
}

export const storage = new DatabaseStorage();
