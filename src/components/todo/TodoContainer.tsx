import { useAppSelector } from "@/redux/hooks";
import AddTodoModel from "./AddTodoModel";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todo);
  console.log(todos);
  return (
    <div className="p-5">
      <div className="flex justify-between items-center my-4">
        <AddTodoModel></AddTodoModel>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-3">
        <div className="bg-white p-5 space-y-5">
          {todos.length > 0 ? (
            todos.map((todo) => <TodoCard key={todo.id} {...todo}></TodoCard>)
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
