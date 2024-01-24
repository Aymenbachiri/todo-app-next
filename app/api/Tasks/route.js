import Task from "@/models/Task";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title } = await req.json();
    const taskData = { title };
    await Task.create(taskData);
    return NextResponse.json({ message: "Task Created" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const tasks = await Task.find();

    return NextResponse.json({ tasks }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
