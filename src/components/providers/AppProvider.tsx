// this provides some helpful reset styles to ensure a more consistent look
// only import this from your web app, not native
import "@tamagui/core/reset.css";

import { TamaguiProvider } from "tamagui";

import { useCachedResources } from "@hooks/useCachedResources";
import config from "../../../tamagui.config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserProvider, userInitialState, userReducer } from "./UserContext";
import { useReducer } from "react";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);

  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null;

  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config}>
        <UserProvider value={{ ...userState, dispatch: userDispatch }}>
          {children}
        </UserProvider>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
};

export { AppProvider };
