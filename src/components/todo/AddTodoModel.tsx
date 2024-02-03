import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { addTodo } from "@/redux/features/todoSlice";

const AddTodoModel = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    const generateId = Math.random().toString(36).substring(2, 9);
    e.preventDefault();
    const todoDetails = {
      id: generateId,
      title: task,
      priority,
      description,
    };
    dispatch(addTodo(todoDetails));
  };

  const handleFieldValue = (value: string) => {
    setPriority(value);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient font-semibold">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>Add your task to complete...</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right font-semibold">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right font-semibold">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right font-semibold">
                Priority
              </Label>
              <Select onValueChange={handleFieldValue}>
                <SelectTrigger className="w-[17.2rem]">
                  <SelectValue placeholder="Select Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Add Task</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModel;
