import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { HomeScreen, LoginScreen, RegisterScreen } from "@screens";
import { fonts } from "@styles/fonts";
import { light } from "@styles/themes";
import { RootStackNavigatorParamList } from "src/types/navigation";
import { Square } from "tamagui";
import { texts } from "./texts";

const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();

const landingScreenOptions = ({
  title,
}: {
  title: string;
}): NativeStackNavigationOptions => ({
  presentation: "card",
  title,
  headerTitleAlign: "center",
  headerBackVisible: false,
  headerBackground: () => <Square flex={1} backgroundColor={"$primary1"} />,
  headerTitleStyle: {
    fontFamily: fonts["Poppins-SemiBold"],
    color: light.white,
  },
});

const RootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Group
        screenOptions={() => landingScreenOptions({ title: texts.logIn })}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={() => landingScreenOptions({ title: texts.signUp })}>
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={() => landingScreenOptions({ title: texts.signUp })}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export { RootStackNavigator };
