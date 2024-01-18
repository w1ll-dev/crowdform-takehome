import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigator } from "./RootStackNavigator";

const Navigation = () => (
  <NavigationContainer>
    <RootStackNavigator />
  </NavigationContainer>
);

export { Navigation };
