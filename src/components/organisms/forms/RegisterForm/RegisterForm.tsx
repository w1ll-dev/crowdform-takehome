import { Caption1, Label1 } from "@atoms/Typography";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigationForRootStack } from "@hooks/navigation";
import { Button, CheckboxWithLabel, ControlledInput } from "@molecules";
import { useUserContext } from "@providers/UserContext";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Alert } from "react-native";
import { Square, YStack } from "tamagui";
import {
  textValidations,
  texts,
  yupRegisterSchema,
} from "./textsAndValidations";
import { registerTestIDs } from "@constants/testIds";

const RegisterForm = () => {
  const [acceptTerms, setAcceptTerms] = useState(true);

  const { setUser } = useUserContext();
  const { navigate } = useNavigationForRootStack();

  const toggleTermsAndConditions = () =>
    setAcceptTerms(currentState => !currentState);

  const methods = useForm<RegisterFieldValues>({
    mode: "onChange",
    resolver: yupResolver(yupRegisterSchema),
  });

  const { errors, isValid } = methods.formState;

  const onSubmit = async (formData: RegisterFieldValues) => {
    setUser({
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      password: formData.password,
    });

    Alert.alert(texts.success, texts.nowPlease, [
      {
        text: texts.logIn,
        onPress: () => navigate("Login"),
      },
    ]);
  };

  const onLoginLinkPress = () => {
    methods.reset();
    navigate("Login");
  };

  return (
    <YStack flex={1} justifyContent="space-between">
      <FormProvider {...methods}>
        <ControlledInput
          name="firstName"
          label={textValidations.labels.firstName}
          placeholder={textValidations.placeholders.firstName}
          errorMessage={errors.firstName?.message}
          testID={registerTestIDs.firstNameField}
        />
        <Square height={8} />
        <ControlledInput
          name="lastName"
          label={textValidations.labels.lastName}
          placeholder={textValidations.placeholders.lastName}
          errorMessage={errors.lastName?.message}
          testID={registerTestIDs.lastNameField}
        />
        <Square height={8} />
        <ControlledInput
          name="email"
          label={textValidations.labels.email}
          placeholder={textValidations.placeholders.email}
          errorMessage={errors.email?.message}
          testID={registerTestIDs.emailField}
        />
        <Square height={8} />
        <ControlledInput
          name="password"
          label={textValidations.labels.password}
          placeholder={textValidations.placeholders.password}
          errorMessage={errors.password?.message}
          testID={registerTestIDs.passwordField}
        />
        <Square height={8} />
        <CheckboxWithLabel
          width={24}
          height={24}
          size={24}
          checked={acceptTerms}
          borderColor={"$primary1"}
          borderWidth={2}
          label={`${texts.byCreating} `}
          boldLabel={texts.termAndConditions}
          onPress={toggleTermsAndConditions}
          testID={registerTestIDs.agreeTermsField}
        />
      </FormProvider>
      <YStack>
        <Square height={"$padding.large"} />
        <Button
          disabled={!isValid || !acceptTerms}
          testID={registerTestIDs.registerButton}
          onPress={methods.handleSubmit(onSubmit)}>
          {texts.signUp}
        </Button>
        <Square height={"$padding.large"} />
        <Label1 color={"$neutral1"} textAlign="center">
          {`${texts.alreadyHaveAnAccount} `}
          <Caption1 onPress={onLoginLinkPress} color={"$primary1"}>
            {texts.logIn}
          </Caption1>
        </Label1>
      </YStack>
    </YStack>
  );
};

export { RegisterForm };
