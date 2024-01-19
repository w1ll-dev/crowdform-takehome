import { ScreenContainer } from "@atoms/ScreenContainer";
import { Caption2, Title } from "@atoms/Typography";
import { YStack } from "tamagui";
import { texts } from "./texts";

const RegisterScreen = () => {
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
          <Title color={"$primary1"}>{texts.createAnAccount}</Title>
          <Caption2 color={"$neutral1"}>
            {texts.addYourPersonalDetailsBelow}
          </Caption2>
        </YStack>
      </YStack>
    </ScreenContainer>
  );
};

export { RegisterScreen };
