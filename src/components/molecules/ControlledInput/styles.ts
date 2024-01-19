import { TextInput } from "react-native";
import { XStack, styled } from "tamagui";

const InputRow = styled(XStack, {
  borderColor: "$disabled",
  borderWidth: 1,
  borderRadius: "$borderRadius.medium",
  marginTop: "$margin.small",
  marginBottom: "$margin.small",
  padding: "$padding.small-plus",
  alignItems: "center",
});

const StyledTextInput = styled(TextInput, {
  flexGrow: 1,
  autoCapitalize: "none",
  fontFamily: "$poppins500",
  fontSize: "$2",
});

export { StyledTextInput, InputRow };
