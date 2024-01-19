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

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { navigate } = useNavigationForRootStack();

  const toggleShowPassword = () =>
    setShowPassword(currentState => !currentState);

  const methods = useForm<LoginFieldValues>({
    mode: "onChange",
    resolver: yupResolver(yupLoginSchema),
  });

  const { errors, isValid } = methods.formState;

  const onSubmit = async (formData: LoginFieldValues) => {
    Alert.alert(texts.invalidCredentials, texts.pleaseTryAgain);
    console.log("🚀 ~ onSubmit ~ formData:", formData);
  };

  return (
    <YStack marginTop="$margin.xl" flex={1} justifyContent="space-between">
      <YStack>
        <FormProvider {...methods}>
          <ControlledInput
            name="email"
            placeholder={textValidations.placeholders.email}
            errorMessage={errors.email?.message}
          />
          <ControlledInput
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