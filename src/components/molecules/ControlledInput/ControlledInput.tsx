import { InputFeedback } from "@molecules/InputFeedBack";
import {
  UseControllerProps,
  useController,
  useFormContext,
} from "react-hook-form";
import { InputRow, StyledTextInput } from "./styles";
import { logFormError } from "./utils";
import { TextInputProps } from "react-native";

interface ControlledInputProps
  extends Omit<UseControllerProps, "defaultValue">,
    TextInputProps {
  rightIcon?: React.ReactNode;
  placeholder: string;
  errorMessage: string;
}

const ControlledInput = ({
  placeholder,
  errorMessage,
  name,
  rules,
  rightIcon,
  ...inputProps
}: ControlledInputProps) => {
  const { field } = useController({ name, rules });
  const formContext = useFormContext();

  if (!formContext || !name) {
    logFormError(formContext, name);
    return null;
  }

  return (
    <InputFeedback placeholder={placeholder} errorMessage={errorMessage}>
      <InputRow borderColor={errorMessage ? "$errorRed" : "$disabled"}>
        <StyledTextInput
          {...inputProps}
          placeholder={placeholder}
          onBlur={field.onBlur}
          value={field.value}
          onChangeText={field.onChange}
        />
        {rightIcon}
      </InputRow>
    </InputFeedback>
  );
};

export { ControlledInput };
