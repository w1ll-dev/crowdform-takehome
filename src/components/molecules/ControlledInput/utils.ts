import { UseFormReturn } from "react-hook-form";

const logFormError = (formContext: UseFormReturn, name: string) => {
  let errorMessage = "TextInput must be wrapped by the FormProvider";

  if (!name) errorMessage = "Name must be defined";

  console.error(errorMessage);
};

export { logFormError };
