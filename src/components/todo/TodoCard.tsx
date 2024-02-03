import { PenBoxIcon, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { removeTodo, toggleState } from "@/redux/features/todoSlice";
type TTodoCardProps = {
  id: string;
  title: string;
  priority: string;
  description: string;
  isCompleted?: boolean;
};
const TodoCard = ({
  id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const handleToggleState = () => {
    dispatch(toggleState(id));
  };
  return (
    <div className="flex justify-between items-center bg-white rounded-md p-4 border">
      <input
        onChange={handleToggleState}
        type="checkbox"
        name="todoCheckBox"
        id=""
      />
      <p className="font-medium">{title}</p>
      {/* <p>Time</p> */}
      <div>
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      <p>{description}</p>
      <div>
        {priority === "high" && <p className="text-green-500">High</p>}
        {priority === "medium" && <p className="text-blue-500">Medium</p>}
        {priority === "low" && <p className="text-blue-500">Low</p>}
      </div>
      <div className="flex justify-between items-center gap-4">
        <Button
          onClick={() => dispatch(removeTodo(id))}
          className="p-2"
          variant={"destructive"}
        >
          <Trash2></Trash2>
        </Button>
        <Button className="p-2 bg-primary-gradient">
          <PenBoxIcon></PenBoxIcon>
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
