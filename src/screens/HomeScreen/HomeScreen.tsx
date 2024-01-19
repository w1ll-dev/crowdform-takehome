import { ScreenContainer } from "@atoms/ScreenContainer";
import { Caption2 } from "@atoms/Typography";
import { YStack } from "tamagui";

const HomeScreen = () => {
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
        <Caption2 color={"$neutral1"}>Home</Caption2>
      </YStack>
    </ScreenContainer>
  );
};

export { HomeScreen };
