import { ComponentVisibility } from "@atoms/ComponentVisibility";
import { Caption1, Caption2 } from "@atoms/Typography";
import { ReactNode, useMemo } from "react";
import { YStack } from "tamagui";

type InputFeedbackProps = {
  errorMessage?: string;
  label: string;
  children: ReactNode;
};

const InputFeedback = ({
  errorMessage,
  label,
  children,
}: InputFeedbackProps) => {
  const inputColor = useMemo(
    () => (errorMessage ? "$errorRed" : "$gray11Dark"),
    [errorMessage],
  );

  return (
    <YStack height="$10">
      <Caption1 color={inputColor}>{label}</Caption1>
      {children}
      <ComponentVisibility isVisible={!!errorMessage}>
        <Caption2 color={"$errorRed"}>{errorMessage}</Caption2>
      </ComponentVisibility>
    </YStack>
  );
};

export { InputFeedback };
