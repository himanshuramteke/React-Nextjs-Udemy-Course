import { NextResponse } from "next/server";
import { users } from "../get-user/route";

export async function POST(request) {
  try {
    const { name, email, age } = await request.json();

    if (!name || !email || !age) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, Email or Age is not found",
        },
        { status: 400 }
      );
    }

    const emailExists = users.find((user) => user.email === email);

    if (emailExists) {
      return NextResponse.json(
        {
          success: false,
          error: "email already exists",
        },
        { status: 400 }
      );
    }

    const newUser = {
      id: users.length + 1,
      name,
      email,
      age,
    };

    users.push(newUser);

    return NextResponse.json(
      {
        success: true,
        data: users,
        message: "New user created successfully!",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create user",
      },
      { status: 500 }
    );
  }
}
