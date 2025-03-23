import { createSlice } from '@reduxjs/toolkit'

const initialStateValues = {
  africa: 0,
  asia: 0,
  europe: 0,
  americas: 0
}

export const continentsSlice = createSlice({
  name: 'continents',
  initialState: initialStateValues,
  reducers: {
    incrementAsia: (state) => {
      state.asia += 1
    },
    incrementAfrica: (state) => {
      state.africa += 1
    },
    incrementAmericas: (state) => {
      state.americas += 1
    },
    incrementEurope: (state) => {
      state.europe += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementAsia, incrementAfrica, incrementAmericas, incrementEurope } = continentsSlice.actions

export default continentsSlice.reducer