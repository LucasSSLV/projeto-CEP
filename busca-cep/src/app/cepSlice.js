import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fecthCEP = createAsyncThunk(
  "cep/fecthCep",
  async (cep) => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if(response.status === 400) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    return data;
  }
);

// slice & selectors omitted

const initialState = {
  cep: {},
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCep: (state, action) => {
      state.cep = action.payload;
    },
  },
  extraReducers: (builder) => {
    // When our request is fulfilled:
    // - store the 'fulfilled' state as the status for the corresponding pokemon name
    // - and store the received payload as the data for the corresponding pokemon name
    builder.addCase(fecthCEP.fulfilled, (state, action) => {
        state.cep = action.payload
    });
  },
});

// Action creators are generated for each case reducer function
export const { setCep } = counterSlice.actions;

export default counterSlice.reducer;
