import { z } from "zod";

export interface User {
  id: string;
  _id: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  profileImageUrl: string | null;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

export interface UpsertUser {
  id: string;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  profileImageUrl?: string | null;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  projectType: string;
  message: string;
  createdAt: Date;
}

export type InsertContact = Omit<Contact, "id" | "createdAt">;

export const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(1, "Project type is required"),
  message: z.string().min(1, "Message is required"),
});
