import { loginTestIDs } from "@constants/testIds";
import { act, fireEvent } from "@testing-library/react-native";
import { LoginScreen } from "./LoginScreen";
import { textValidations } from "@organisms/forms/LoginForm/";
import { texts } from "@screens/LoginScreen/texts";
import { customRender } from "jest/customRender";
import { waitForAsyncAction } from "jest/utils";

describe("LandingScreen", () => {
  it("Should have correct title and subtitle", () => {
    const { getByText } = customRender(<LoginScreen />);

    const title = getByText(texts.welcomeBack);
    const subTitle = getByText(texts.logInToContinue);

    expect(title).toBeDefined();
    expect(subTitle).toBeDefined();
  });

  it("Should have email field", () => {
    const { getByTestId } = customRender(<LoginScreen />);

    const emailInput = getByTestId(loginTestIDs.emailField);

    expect(emailInput).toBeDefined();
  });

  it("Should have password field", () => {
    const { getByTestId } = customRender(<LoginScreen />);

    const emailInput = getByTestId(loginTestIDs.passwordField);

    expect(emailInput).toBeDefined();
  });

  it("Should show error message for empty email", async () => {
    const { getByTestId, getByText } = customRender(<LoginScreen />);

    const loginButton = getByTestId(loginTestIDs.loginButton);

    await act(() => fireEvent.press(loginButton));

    const errorMessage = getByText(textValidations.errors.email);

    expect(errorMessage).toBeTruthy();
  });

  it("Should not show error message for valid email", async () => {
    const { getByTestId, queryByText } = customRender(<LoginScreen />);

    const emailInput = getByTestId(loginTestIDs.emailField);

    await act(() => fireEvent.changeText(emailInput, "will@mail.com"));

    await waitForAsyncAction(1500);

    const errorMessage = queryByText(textValidations.errors.email);

    expect(errorMessage).toBeNull();
  });

  it("Should show error message for empty password", async () => {
    const { getByTestId, getByText } = customRender(<LoginScreen />);

    const loginButton = getByTestId(loginTestIDs.loginButton);

    await act(() => fireEvent.press(loginButton));

    const errorMessage = getByText(textValidations.errors.password);

    expect(errorMessage).toBeTruthy();
  });

  it("Should show not error message for valid password", async () => {
    const { getByTestId, queryByText } = customRender(<LoginScreen />);

    const passwordField = getByTestId(loginTestIDs.passwordField);

    await act(() => fireEvent.changeText(passwordField, "password"));

    await waitForAsyncAction(1500);

    const errorMessage = queryByText(textValidations.errors.password);

    expect(errorMessage).toBeNull();
  });
});
