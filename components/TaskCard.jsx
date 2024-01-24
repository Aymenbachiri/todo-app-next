"use client";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import DeleteTask from "./DeleteTask";

export default function TaskCard({ task }) {
  const [done, setDone] = useState(false);
  const formateTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
  };

  const style = {
    li: `flex justify-between items-center bg-slate-200 rounded-xl p-4 my-2 capitalize w-full`,
    liComplete: `flex justify-between bg-slate-400 rounded-xl p-4 my-2 capitalize`,
    row: `flex cursor-pointer items-center`,
    text: `ml-2 text-3xl cursor-pointer my-auto w-[380px]`,
    textComplete: `ml-2 text-3xl font-bold cursor-pointer line-through my-auto w-[380px]`,
    button: `cursor-pointer flex items-center`,
  };
  return (
    <>
      <li
        onClick={() => setDone(!done)}
        className={done ? style.liComplete : style.li}
      >
        <div className={style.row}>
          <input
            className="cursor-pointer"
            type="checkbox"
            checked={done ? true : false}
          />
          <p className={done ? style.textComplete : style.text}>
            {task.title}{" "}
          </p>
          <p>{formateTimestamp(task.createdAt)}</p>
        </div>
        <div className="flex  justify-center items-center">
          <DeleteTask id={task._id} />
        </div>
      </li>
    </>
  );
}
