import { act } from "@testing-library/react-native";

const waitForAsyncAction = async (time = 10) => {
  await act(async () => new Promise(resolve => setTimeout(resolve, time)));
};

export { waitForAsyncAction };
