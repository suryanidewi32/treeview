import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../http";

const initialState = [];


const create = data => {
    return http.post("/trees", data);
  };

export const createTree = createAsyncThunk(
  "trees/create",
  async ({ hierarchy, name }) => {
    const res = await create({ hierarchy, name });
    return res.data;
  }
);


const getAll = () => {
    return http.get("/trees");
  };
  
export const retrieveTree = createAsyncThunk(
  "trees/retrieve",
  async () => {
    const res = await getAll();
    return res.data;
  }
);


const remove = id => {
    return http.delete(`/trees/${id}`);
  };

export const deleteTree = createAsyncThunk(
  "trees/delete",
  async ( id ) => {
    await remove(id);
    return id;
  }
);

const treeSlice = createSlice({
  name: "tree",
  initialState,
  extraReducers: {
    [createTree.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveTree.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [deleteTree.fulfilled]: (state, action) => {
      let index = state.findIndex(( id ) => id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

const { reducer } = treeSlice;
export default reducer;