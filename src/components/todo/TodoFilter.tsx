// import { useState } from "react";
import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
// import { useAppDispatch } from "@/redux/hooks";
// import { filterTodo } from "@/redux/features/todoSlice";
type TTodoFilter = {
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
};
const TodoFilter = ({ priority, setPriority }: TTodoFilter) => {
  // const dispatch = useAppDispatch();

  // const handleFilter = (newPriority: string) => {
  //   setPriority(newPriority);
  //   dispatch(filterTodo(newPriority));
  // };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter By Priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
          <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
