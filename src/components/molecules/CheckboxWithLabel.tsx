import { Caption1, Label1 } from "@atoms/Typography";
import { Checkbox, CheckboxProps } from "@tamagui/checkbox";
import { SizeTokens, XStack } from "tamagui";
import { Image } from "./Image";

interface CheckboxWithLabelProps extends CheckboxProps {
  size: SizeTokens;
  label?: string;
  boldLabel?: string;
}

const CheckboxWithLabel = ({
  label,
  boldLabel,
  size,
  ...checkboxProps
}: CheckboxWithLabelProps) => {
  return (
    <XStack alignItems="center" space="$4">
      <Checkbox size={size} {...checkboxProps}>
        <Checkbox.Indicator>
          <Image image="check" />
        </Checkbox.Indicator>
      </Checkbox>

      <Label1
        color={"$neutral1"}
        onPress={checkboxProps.onPress}
        flexShrink={1}>
        {label}
        <Caption1 onPress={() => console.log("Register")} color={"$primary1"}>
          {boldLabel}
        </Caption1>
      </Label1>
    </XStack>
  );
};

export { CheckboxWithLabel };
