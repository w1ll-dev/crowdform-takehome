import { createContext, Dispatch } from "react";
import { UserActions } from "./reducer";

type UserState = {
  dispatch: Dispatch<UserActions>;
  user?: User;
};

const userInitialState: UserState = {
  dispatch: () => undefined,
};

const UserContext = createContext<UserState | undefined>(undefined);

const UserProvider = UserContext.Provider;

export { userInitialState, UserContext, UserProvider };

export type { UserState };
