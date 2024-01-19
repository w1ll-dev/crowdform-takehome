import { useCallback, useContext } from "react";
import { UserContext } from "./UserContext";
import { UserActionType } from "./reducer";

const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw Error("useUserContext must be used within UserProvider");
  }

  const { dispatch, ...userState } = context;

  const setUser = useCallback(
    (user: User) => {
      dispatch({
        type: UserActionType.SET_USER,
        payload: user,
      });
    },
    [dispatch],
  );

  return {
    setUser,
    ...userState,
  };
};

export { useUserContext };
