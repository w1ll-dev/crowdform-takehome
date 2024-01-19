import { Caption1, Caption2, Label1 } from "@atoms/Typography";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigationForRootStack } from "@hooks/navigation";
import { Button } from "@molecules/Button";
import { ControlledInput } from "@molecules/ControlledInput";
import { FormProvider, useForm } from "react-hook-form";
import { Alert } from "react-native";
import { Square, YStack } from "tamagui";
import { textValidations, texts, yupLoginSchema } from "./textsAndValidations";
import { Image } from "@molecules/Image";
import { useState } from "react";
import { useUserContext } from "@providers/UserContext";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { user } = useUserContext();

  const { navigate } = useNavigationForRootStack();

  const toggleShowPassword = () =>
    setShowPassword(currentState => !currentState);

  const methods = useForm<LoginFieldValues>({
    mode: "onChange",
    resolver: yupResolver(yupLoginSchema),
  });

  const { errors, isValid } = methods.formState;

  const onSubmit = async (formData: LoginFieldValues) => {
    if (
      user?.email !== formData.email ||
      user?.password !== formData.password
    ) {
      Alert.alert(texts.invalidCredentials, texts.pleaseTryAgain);
      return;
    }

    navigate("Home");
  };

  return (
    <YStack flex={1} justifyContent="space-between">
      <YStack>
        <FormProvider {...methods}>
          <ControlledInput
            label={textValidations.labels.email}
            name="email"
            placeholder={textValidations.placeholders.email}
            errorMessage={errors.email?.message}
          />
          <ControlledInput
            label={textValidations.labels.password}
            name="password"
            placeholder={textValidations.placeholders.password}
            errorMessage={errors.password?.message}
            secureTextEntry={!showPassword}
            rightIcon={
              <Image
                touchProps={{
                  onPress: toggleShowPassword,
                }}
                image={"opened-eye"}
              />
            }
          />
        </FormProvider>
        <Caption2 alignSelf="flex-end" color={"$neutral4"}>
          {texts.forgotYourPassword}
        </Caption2>
      </YStack>
      <YStack>
        <Button disabled={!isValid} onPress={methods.handleSubmit(onSubmit)}>
          {texts.login}
        </Button>
        <Square height={"$padding.large"} />
        <Label1 color={"$neutral1"} textAlign="center">
          {`${texts.dontHaveAnAccount} `}
          <Caption1 onPress={() => navigate("Register")} color={"$primary1"}>
            {texts.signUp}
          </Caption1>
        </Label1>
      </YStack>
    </YStack>
  );
};

export { LoginForm };
