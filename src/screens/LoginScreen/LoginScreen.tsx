import { ScreenContainer } from "@atoms/ScreenContainer";
import { Caption2, Title } from "@atoms/Typography";
import { Image } from "@molecules/Image";
import { LoginForm } from "@organisms/forms";
import { Square, Stack, YStack } from "tamagui";
import { texts } from "./texts";

const LoginScreen = () => {
  return (
    <ScreenContainer
      background="$primary1"
      footerBackground="$white"
      marginTop="$padding.medium-plus"
      statusBarStyle="light">
      <YStack
        backgroundColor={"$white"}
        flex={1}
        borderTopRightRadius={"$borderRadius.large"}
        borderTopLeftRadius={"$borderRadius.large"}
        padding={"$padding.medium-plus"}>
        <YStack>
          <Title color={"$primary1"}>{texts.welcomeBack}</Title>
          <Caption2 color={"$neutral1"}>{texts.logInToContinue}</Caption2>
        </YStack>
        <Stack alignItems="center" marginTop={47}>
          <Image image="lock-circle" />
        </Stack>
        <Square height={"$margin.xl"} />
        <LoginForm />
      </YStack>
    </ScreenContainer>
  );
};

export { LoginScreen };
