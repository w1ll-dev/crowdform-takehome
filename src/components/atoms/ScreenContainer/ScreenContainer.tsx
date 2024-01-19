import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ColorTokens, Stack, YStack, YStackProps } from "tamagui";
import { ScrollView } from "./styles";

type ScreenContainerProps = {
  children: ReactNode;
  background: ColorTokens;
  footerBackground?: ColorTokens;
  statusBarStyle: "light" | "dark";
} & YStackProps;

const ScreenContainer = ({
  children,
  background,
  footerBackground,
  statusBarStyle = "light",
  ...props
}: ScreenContainerProps) => {
  const { bottom } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  return (
    <>
      <ScrollView backgroundColor={background} bounces={false}>
        <YStack {...props} width={width} flex={1} backgroundColor={background}>
          <StatusBar style={statusBarStyle} />
          {children}
        </YStack>
      </ScrollView>
      <Stack height={bottom} backgroundColor={footerBackground ?? background} />
    </>
  );
};

export { ScreenContainer };
