import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("fetch/todos", async () => {
  const response = await axios.get("http://localhost:8001/todos");
  //   await pause(1500);
  return response.data;
});

export const addTodo = createAsyncThunk("fetch/add", async (title) => {
  const response = await axios.post("http://localhost:8001/todos", {
    title,
    completed: false,
  });
  await pause(1500);
  return response.data;
});
export const deleteTodo = createAsyncThunk("fetch/delete", async (id) => {
  await axios.delete(`http://localhost:8001/todos/${id}`);
  return id;
});
export const toggleTodo = createAsyncThunk(
  "fetch/toggle",
  async ({ id, completed }) => {
    const response = await axios.patch(`http://localhost:8001/todos/${id}`, {
      completed: !completed,
    });
    return response.data;
  }
);
export const editTodo = createAsyncThunk(
  "fetch/edit",
  async ({ id, title }) => {
    const response = await axios.patch(`http://localhost:8001/todos/${id}`, {
      title,
    });
    await pause(1500);
    return response.data;
  }
);

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
  },
  extraReducers: (builders) => {
    builders.addCase(fetchTodos.pending, (state, action) => {
      console.log("fetchTodos, pending state...");
    });
    builders.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log("fetchTodos, fulfilled state...");
      state.data = action.payload;
    });
    builders.addCase(fetchTodos.rejected, (state, action) => {
      console.log("fetchTodos, rejected state...");
    });
    builders.addCase(addTodo.pending, (state, action) => {
      console.log("add todo, Pending state...");
    });
    builders.addCase(addTodo.fulfilled, (state, action) => {
      console.log("add todo, fulfilled state...");
      state.data.push(action.payload);
    });
    builders.addCase(addTodo.rejected, (state, action) => {
      console.log("add todo, rejected state...");
    });
    builders.addCase(deleteTodo.pending, (state, action) => {
      console.log("delete todo, Pending state...");
    });
    builders.addCase(deleteTodo.fulfilled, (state, action) => {
      console.log("delete todo, fulfilled state...");
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    });
    builders.addCase(deleteTodo.rejected, (state, action) => {
      console.log("delete todo, rejected state...");
    });
    builders.addCase(toggleTodo.pending, (state, action) => {
      console.log("toggle todo, Pending state...");
    });
    builders.addCase(toggleTodo.fulfilled, (state, action) => {
      console.log("toggle todo, fulfilled state...");
      state.data.forEach((todo) => {
        if (todo.id === action.payload.id)
          todo.completed = action.payload.completed;
      });
    });
    builders.addCase(editTodo.rejected, (state, action) => {
      console.log("edit todo, rejected state...");
    });
    builders.addCase(editTodo.pending, (state, action) => {
      console.log("edit todo, Pending state...");
    });
    builders.addCase(editTodo.fulfilled, (state, action) => {
      console.log("edit todo, fulfilled state...");
      state.data.forEach((todo) => {
        if (todo.id === action.payload.id) todo.title = action.payload.title;
      });
    });
    builders.addCase(toggleTodo.rejected, (state, action) => {
      console.log("toggle todo, rejected state...");
    });
  },
});

export const todosReducer = todosSlice.reducer;
