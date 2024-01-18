import { ScreenContainer } from "@atoms/ScreenContainer";
import { Caption2, Title } from "@atoms/Typography";
import { Image } from "@molecules/Image";
import { Stack, YStack } from "tamagui";
import { texts } from "./texts";

const LoginScreen = () => {
  return (
    <ScreenContainer
      background="$primary1"
      footerBackground="$white"
      statusBarStyle="light">
      <YStack
        backgroundColor={"$white"}
        flex={1}
        borderTopRightRadius={30}
        borderTopLeftRadius={30}
        padding={24}>
        <YStack>
          <Title color={"$primary1"}>{texts.welcomeBack}</Title>
          <Caption2 color={"$neutral1"}>{texts.logInToContinue}</Caption2>
        </YStack>
        <Stack alignItems="center" marginTop={47}>
          <Image image="lock-circle" />
        </Stack>
      </YStack>
    </ScreenContainer>
  );
};

export { LoginScreen };
