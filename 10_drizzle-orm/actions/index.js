"use server";

import { db } from "@/lib/db";
import { users } from "@/schema";
import { eq } from "drizzle-orm";

import { revalidatePath } from "next/cache";

//create a user

export async function createUser(formData) {
  const name = formData.get("name");
  const email = formData.get("email");

  const user = await db.insert(users).values({
    name,
    email,
  });

  revalidatePath("/");

  return user;
}

export async function getAllUsers() {
  const user = await db.select().from(users);

  return user || [];
}

export async function getUserById(id) {
  const user = await db.select().from(users).where(eq(users.id, id));

  return user;
}

export async function getUpdatedUser(id, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const isActive = formData.get("isActive");

  await db
    .update(users)
    .set({ name, email, isActive, updatedAt: new Date() })
    .where(eq(users.id, id));

  revalidatePath("/");

  return {
    message: "User updated successfully",
    success: true,
  };
}

export async function deleteUserById(id) {
  await db.delete(users).where(eq(users.id, id));

  revalidatePath("/");

  return {
    message: "User deleted successfully",
    success: true,
  };
}
