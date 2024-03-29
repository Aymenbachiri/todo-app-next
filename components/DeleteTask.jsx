import { useRouter } from "next/navigation";
import { FaRegTrashAlt } from "react-icons/fa";

export default function DeleteTask({ id }) {
  const api_url = process.env.API_URL;
  const router = useRouter();
  const deleteTask = async () => {
    const res = await fetch(`/api/Tasks/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <button
      onClick={deleteTask}
      className="hover:bg-black hover:text-white rounded-full p-2"
    >
      <FaRegTrashAlt size={30} />
    </button>
  );
}
