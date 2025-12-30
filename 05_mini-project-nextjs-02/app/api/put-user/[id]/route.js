import { NextResponse } from "next/server";
import { users } from "../../get-user/route";

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const userId = parseInt(id);

    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: "User not found",
        },
        { status: 404 }
      );
    }

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

    users[userIndex] = {
      id: userId,
      name,
      age,
      email,
    };

    return NextResponse.json({
      success: true,
      data: users[userIndex],
      message: "User updated!",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update user" },
      { status: 500 }
    );
  }
}
