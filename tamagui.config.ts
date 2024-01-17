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
