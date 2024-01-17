import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: "crowdform-takehome",
  name: "Crowdform Takehome",
  userInterfaceStyle: "automatic",
});
