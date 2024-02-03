import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  priority: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
  filteredTodos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
  filteredTodos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleState: (state, action: PayloadAction<string>) => {
      const updatedTask = state.todos.find(
        (todo) => todo.id === action.payload
      );
      updatedTask!.isCompleted = !updatedTask!.isCompleted;
      state.todos = state.todos.sort((a, b) =>
        a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
      );
    },

    filterTodo: (state, action: PayloadAction<string>) => {
      const targetPriority = action.payload;

      const filteredTodos = state.todos.filter(
        (todo) => todo.priority === targetPriority
      );

      state.filteredTodos = filteredTodos;
    },
  },
});

export const { addTodo, removeTodo, toggleState, filterTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
