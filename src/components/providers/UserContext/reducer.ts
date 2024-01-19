import { Reducer } from "react";
import { UserState } from "./UserContext";

enum UserActionType {
  SET_USER = "SET_USER",
}

type UserActions = {
  type: UserActionType.SET_USER;
  payload: User;
};

const userReducer: Reducer<UserState, UserActions> = (state, action) => {
  switch (action.type) {
    case UserActionType.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export { UserActionType, UserActions, userReducer };
