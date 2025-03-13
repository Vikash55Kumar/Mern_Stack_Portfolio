import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("GET_USER_REQUEST", (state) => {
      state.loading = true;
    })
    .addCase("GET_USER_SUCCESS", (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase("GET_USER_FAILURE", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("CLEAR_ERROR", (state) => {
      state.error = null;
    })
    .addCase("CLEAR_MESSAGE", (state) => {
      state.message = null;
    });
});

export const loginReducer = createReducer({}, (builder) => {
  builder
    .addCase("LOGIN_REQUEST", (state) => {
      state.loading = true;
      state.isAuthenticate=false;
    })
    .addCase("LOGIN_SUCCESS", (state, action) => {
      state.loading = false;
      state.isAuthenticate=true;
      state.login = action.payload;
    })
    .addCase("LOGIN_FAILURE", (state, action) => {
      state.loading = false;
      state.isAuthenticate=false;
      state.error = action.payload;
    })

    .addCase("LOAD_USER_REQUEST", (state) => {
      state.loading = true;
      state.isAuthenticate=false;
    })
    .addCase("LOAD_USER_SUCCESS", (state, action) => {
      state.loading = false;
      state.isAuthenticate=true;
      state.login = action.payload;
    })
    .addCase("LOAD_USER_FAILURE", (state, action) => {
      state.loading = false;
      state.isAuthenticate=false;
      state.error = action.payload;
    })

    .addCase("LOGOUT_REQUEST", (state) => {
      state.loading = true;
    })
    .addCase("LOGOUT_SUCCESS", (state, action) => {
      state.loading = false;
      state.isAuthenticate=false;
      state.user=null;
      state.message = action.payload;
    })
    .addCase("LOGOUT_FAILURE", (state, action) => {
      state.loading = false;
      state.isAuthenticate=true;
      state.error = action.payload;
    })
    
    .addCase("CLEAR_ERROR", (state) => {
      state.error = null;
    })
    .addCase("CLEAR_MESSAGE", (state) => {
      state.message = null;
    })
});

export const updateReducer = createReducer({}, (builder) => {
  builder
    .addCase("UPDATE_USER_REQUEST", (state) => {
      state.loading = true;
    })
    .addCase("UPDATE_USER_SUCCESS", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("UPDATE_USER_FAILURE", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("ADD_PROJECT_REQUEST", (state) => {
      state.loading = true;
    })
    .addCase("ADD_PROJECT_SUCCESS", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("ADD_PROJECT_FAILURE", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("ADD_ACHIEVEMENT_REQUEST", (state) => { // Corrected typo
      state.loading = true;
    })
    .addCase("ADD_ACHIEVENENT_SUCCESS", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("ADD_ACHIEVEMENT_FAILURE", (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase("DELETE_ACHIEVEMENT_REQUEST", (state) => {
      state.loading = true;
    })
    .addCase("DELETE_ACHIEVEMENT_SUCCESS", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("DELETE_ACHIEVEMENT_FAILURE", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })


    .addCase("ADD_PASSIONATE_REQUEST", (state) => { // Corrected typo
      state.loading = true;
    })
    .addCase("ADD_PASSIONATE_SUCCESS", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("ADD_PASSIONATE_FAILURE", (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase("DELETE_PASSIONATE_REQUEST", (state) => {
      state.loading = true;
    })
    .addCase("DELETE_PASSIONATE_SUCCESS", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("DELETE_PASSIONATE_FAILURE", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase("DELETE_PROJECT_REQUEST", (state) => {
      state.loading = true;
    })
    .addCase("DELETE_PROJECT_SUCCESS", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("DELETE_PROJECT_FAILURE", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("ADD_TIMELINE_REQUEST", (state) => {
      state.loading = true;
    })
    .addCase("ADD_TIMELINE_SUCCESS", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("ADD_TIMELINE_FAILURE", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("DELETE_TIMELINE_REQUEST", (state) => {
      state.loading = true;
    })
    .addCase("DELETE_TIMELINE_SUCCESS", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("DELETE_TIMELINE_FAILURE", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("ADD_INTRO_REQUEST", (state) => {
      state.loading = true;
    })
    .addCase("ADD_INTRO_SUCCESS", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("ADD_INTRO_FAILURE", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("CLEAR_ERROR", (state) => {
      state.error = null;
    })
    .addCase("CLEAR_MESSAGE", (state) => {
      state.message = null;
    });
});

