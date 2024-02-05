import { useState } from "react";
import AddTodoModel from "./AddTodoModel";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { TTodoProps } from "@/types/type";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  const { isLoading, data: todos } = useGetTodosQuery(priority);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5">
      <div className="flex justify-between items-center my-4">
        <AddTodoModel></AddTodoModel>
        <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-3">
        <div className="bg-white p-5 space-y-5">
          {todos?.data?.length > 0 ? (
            todos?.data?.map((todo: TTodoProps) => (
              <TodoCard key={todo._id} {...todo}></TodoCard>
            ))
          ) : (
            <div className="text-center text-2xl font-bold">
              <p>There is no task pending...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
