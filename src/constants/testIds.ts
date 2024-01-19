const withPrefix = (featureToTest: string, label: string) =>
  `${featureToTest}-${label}`;

const loginFeatureToTest = "login";

const loginTestIDs = {
  emailField: withPrefix(loginFeatureToTest, "emailField"),
  passwordField: withPrefix(loginFeatureToTest, "passwordField"),
  loginButton: withPrefix(loginFeatureToTest, "loginButton"),
};

const registerFeatureToTest = "register";

const registerTestIDs = {
  firstNameField: withPrefix(registerFeatureToTest, "firstNameField"),
  lastNameField: withPrefix(registerFeatureToTest, "lastNameField"),
  emailField: withPrefix(registerFeatureToTest, "emailField"),
  passwordField: withPrefix(registerFeatureToTest, "passwordField"),
  agreeTermsField: withPrefix(registerFeatureToTest, "agreeTermsField"),
  registerButton: withPrefix(registerFeatureToTest, "registerButton"),
};

export { loginTestIDs, registerTestIDs };
