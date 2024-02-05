import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
import UpdateTodoModel from "./UpdateTodoModel";
import { TTodoProps } from "@/types/type";
// import { useAppDispatch } from "@/redux/hooks";
// import { removeTodo, toggleState } from "@/redux/features/todoSlice";

const TodoCard = ({
  _id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoProps) => {
  // const dispatch = useAppDispatch();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  // console.log({ isError, isSuccess, isLoading });

  const handleToggleState = () => {
    // dispatch(toggleState(_id));
    const taskDetails = {
      title,
      description,
      priority,
      isCompleted: !isCompleted,
    };
    const options = {
      id: _id,
      data: taskDetails,
    };
    updateTodo(options);
  };
  const handleDeleteTask = () => {
    deleteTodo(_id);
  };
  return (
    <div className="flex justify-between items-center bg-white rounded-md p-4 border">
      <input
        className="mr-3"
        onChange={handleToggleState}
        type="checkbox"
        name="todoCheckBox"
        defaultChecked={isCompleted}
      />
      <p className="font-medium flex-1">{title}</p>
      <div className="flex-1 flex items-center gap-1">
        <div
          className={`size-3 rounded-full 
          
          ${priority === "high" ? "bg-red-500" : ""}
          ${priority === "medium" ? "bg-yellow-500" : ""}
          ${priority === "low" ? "bg-green-500" : ""}
          
          
          
          `}
        ></div>
        <p>{priority}</p>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>

      <p className="flex-[2] truncate">{description}</p>
      <div className="flex justify-between items-center gap-4">
        <Button
          // onClick={() => dispatch(removeTodo(id))}
          onClick={handleDeleteTask}
          className="p-2"
          variant={"destructive"}
        >
          <Trash2></Trash2>
        </Button>

        <UpdateTodoModel
          id={_id}
          isCompleted={isCompleted as boolean}
        ></UpdateTodoModel>
      </div>
    </div>
  );
};

export default TodoCard;
