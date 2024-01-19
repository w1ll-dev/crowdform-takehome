import { NavigationContainer } from "@react-navigation/native";
import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
import { render } from "@testing-library/react-native";
import { UserProvider } from "@providers/UserContext";
import { mockDispatch, mockUser } from "./mock";

type MockAppProviderProps = {
  children: ReactNode;
};

const userValue = {
  user: mockUser,
  dispatch: mockDispatch,
};

const MockAppProvider = ({ children }: MockAppProviderProps) => {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <NavigationContainer>
          <UserProvider value={userValue}>{children}</UserProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
};

const customRender = (children: ReactNode) => {
  return render(<MockAppProvider>{children}</MockAppProvider>);
};

export { customRender };
