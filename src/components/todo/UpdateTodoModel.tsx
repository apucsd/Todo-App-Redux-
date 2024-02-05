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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { PenBoxIcon } from "lucide-react";
import { useUpdateTodoMutation } from "@/redux/api/api";

const UpdateTodoModel = ({
  id,
  isCompleted,
}: {
  id: string;
  isCompleted: boolean;
}) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e: FormEvent) => {
    // const generateId = Math.random().toString(36).substring(2, 9);
    e.preventDefault();
    const todoDetails = {
      title: task,
      priority,
      description,
      isCompleted,
    };
    const options = {
      id,
      data: todoDetails,
    };
    updateTodo(options);
    // console.log(todoDetails);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-2 bg-primary-gradient">
          <PenBoxIcon></PenBoxIcon>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Task</DialogTitle>
          <DialogDescription>Update your task to complete...</DialogDescription>
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
              <Select onValueChange={(value) => setPriority(value)}>
                <SelectTrigger className="col-span-3">
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
              <Button type="submit">Update Task</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTodoModel;
