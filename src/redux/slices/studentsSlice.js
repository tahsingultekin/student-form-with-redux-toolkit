import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";

let limit = 100;
const initialState = {
  users: [],
  studentStatus: STATUS.IDLE,
};

// get request
export const getStudents = createAsyncThunk("getStudent", async () => {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  console.log(data);
  return data.users;
});

// delete request
export const deleteStudents = createAsyncThunk("deleteStudent", async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return id;
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
});

// put request
export const updateStudents = createAsyncThunk(
  "updateStudent",
  async (updatedUser) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/users/${updatedUser}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedUser),
        }
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Kullanıcı güncelleme hatası");
      }
    } catch (error) {
      throw error;
    }
  }
);

// post request
export const addStudents = createAsyncThunk(
  "addStudent",
  async (newStudent) => {
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStudent),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

// Limit and skip users

export const paginateStudents = createAsyncThunk(
  "paginateStudent",
  async (page) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/users?limit=${limit}&skip=${page}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

// search users

export const searchStudents = createAsyncThunk(
  "searchStudent",
  async (query) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${query.toLowerCase().trim()}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const studentsSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.studentStatus = STATUS.LOADING;
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.studentStatus = STATUS.SUCCESS;
        state.users = action.payload;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.studentStatus = STATUS.FAIL;
      })
      .addCase(deleteStudents.fulfilled, (state, action) => {
        const deleteUserId = action.payload;
        state.users = state.users.filter((user) => user.id !== deleteUserId);
      })
      .addCase(deleteStudents.rejected, (state, action) => {
        console.log("FAIL!");
      })
      .addCase(updateStudents.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        state.users = state.users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
      })
      .addCase(addStudents.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(paginateStudents.pending, (state) => {
        state.studentStatus = STATUS.LOADING;
      })
      .addCase(paginateStudents.fulfilled, (state, action) => {
        state.studentStatus = STATUS.SUCCESS;
        state.users = action.payload.users;
      })
      .addCase(paginateStudents.rejected, (state, action) => {
        console.log("FAILLLL!!");
      })
      .addCase(searchStudents.fulfilled, (state, action) => {
        state.users = action.payload.users;
      });
  },
});

// Action creators are generated for each case reducer function
// export const {} = studentsSlice.actions;
export const {} = studentsSlice.actions;
export default studentsSlice.reducer;
