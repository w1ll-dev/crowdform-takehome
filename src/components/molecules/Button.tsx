import { ReactNode, useMemo } from "react";
import {
  ColorTokens,
  Button as TamaguiButton,
  ButtonProps as TamaguiButtonProps,
} from "tamagui";

interface ButtonProps extends TamaguiButtonProps {
  children: ReactNode;
  background?: ColorTokens;
}

const Button = ({ disabled, children, background, ...rest }: ButtonProps) => {
  const backgroundColor: ColorTokens = useMemo(() => {
    if (disabled) return "$primary4";

    return background ?? "$primary1";
  }, [background, disabled]);

  return (
    <TamaguiButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      fontFamily={"$poppins500"}
      height={"$button.primary"}
      size={"$button.primary"}
      color={"$white"}
      {...rest}>
      {children}
    </TamaguiButton>
  );
};

export { Button };
