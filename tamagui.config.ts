import { poppinsMedium, poppinsRegular, poppinsSemiBold } from "@styles/fonts";
import { light } from "@styles/themes";
import { color, radius, size, space, zIndex } from "@tamagui/themes";
import { createTamagui, createTokens } from "tamagui";

const tokens = createTokens({
  size,
  space,
  zIndex,
  color,
  radius,
  button: {
    primary: 48,
  },
  borderRadius: {
    medium: 15,
    large: 30,
  },
  padding: {
    xxs: 2,
    xs: 4,
    small: 8,
    "small-plus": 12,
    medium: 16,
    "medium-plus": 24,
    large: 32,
    xl: 48,
  },
  margin: {
    small: 8,
    xl: 40,
  },
});

const config = createTamagui({
  tokens,
  _fonts: {
    poppins400: poppinsRegular,
    poppins500: poppinsMedium,
    poppins600: poppinsSemiBold,
  },
  get fonts() {
    return this._fonts;
  },
  set fonts(value) {
    this._fonts = value;
  },
  themes: {
    light,
  },
});

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
