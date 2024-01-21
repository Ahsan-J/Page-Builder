import { combineReducers } from "@reduxjs/toolkit";
import app from "./app/app.reducer";
import auth from "./auth/auth.reducer";

export default combineReducers({ app, auth });