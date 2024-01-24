"use client";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const router = useRouter();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/Tasks", {
        method: "POST",
        body: JSON.stringify({ title }),
        headers: {
          "content-type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to create task");
      }

      await router.refresh();
    } catch (error) {
      console.error(error);
    }
  };
  const [title, setTitle] = useState("");
  return (
    <form
      method="post"
      onSubmit={handlesubmit}
      className="flex justify-between"
    >
      <input
        className="border rounded-xl outline-none p-2 w-full text-xl"
        type="text"
        placeholder="Add Task"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="border rounded-full p-4 ml-2 bg-purple-500 hover:bg-purple-700 text-slate-100"
      >
        <AiOutlinePlus size={30} />
      </button>
    </form>
  );
}
