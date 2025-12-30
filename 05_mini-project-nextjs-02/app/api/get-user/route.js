import { NextResponse } from "next/server";

export const users = [
  {
    id: "1",
    name: "john doe",
    email: "john@example.com",
    age: "23",
  },
  {
    id: "2",
    name: "jane doe",
    email: "jane@example.com",
    age: "24",
  },
  {
    id: "3",
    name: "johnny doe",
    email: "johnny@example.com",
    age: "25",
  },
];

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const name = searchParams.get("name");
    const age = searchParams.get("age");

    let filteredUser = users;
    if (age) {
      filteredUser = filteredUser.filter((user) => user.age === Number(age));
    }

    if (name) {
      filteredUser = filteredUser.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    return NextResponse.json({
      success: true,
      data: filteredUser,
      total: filteredUser.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to get user",
      },
      { status: 500 }
    );
  }
}
