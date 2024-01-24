import Form from "./Form";
import TaskCard from "./TaskCard";

export default async function HomePage() {
  const api_url = process.env.API_URL;
  const getTasks = async () => {
    try {
      const res = await fetch(`${api_url}/api/Tasks`, {
        cache: "no-store",
      });
      // Check if the response status is okay
      if (!res.ok) {
        throw new Error(`Failed to fetch tasks. Status: ${res.status}`);
      }

      // Check if the content type is JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid content type. Expected JSON.");
      }

      // Parse the JSON content
      const { tasks } = await res.json();
      return { tasks };
    } catch (error) {
      console.log("Failed to get tickets", error);
      return { tasks: [] };
    }
  };

  const { tasks } = await getTasks();

  return (
    <div className="h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]">
      <div className="bg-slate-100 max-w-[800px] w-full m-auto rounded-md shadow-xl p-4  mt-20">
        <h3 className="text-3xl font-bold text-center text-gray-800 p-2">
          Todo App
        </h3>
        <Form />
        <ul>
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </ul>
        {tasks.length < 1 ? null : (
          <p className="text-center p-2"> {`You have ${tasks.length} tasks`}</p>
        )}
      </div>
    </div>
  );
}
