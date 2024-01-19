import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackNavigatorParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

type RootStackNavigatorRouteName = keyof RootStackNavigatorParamList;

type RootStackReactNavigationProps<S extends RootStackNavigatorRouteName> =
  NativeStackScreenProps<RootStackNavigatorParamList, S>;

export { RootStackReactNavigationProps, RootStackNavigatorParamList };
