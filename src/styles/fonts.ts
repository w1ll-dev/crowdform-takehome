import { createFont } from "tamagui";

const fonts = {
  "Poppins-Medium": "Poppins-Medium",
  "Poppins-Regular": "Poppins-Regular",
  "Poppins-SemiBold": "Poppins-SemiBold",
};

/**
 * Poppins-Medium: 500
 *
 */
const poppinsMedium = createFont({
  family: `${fonts["Poppins-Medium"]}`,
  size: {
    1: 12,
    2: 14,
    "button.primary": 16,
  },
});

/**
 * Poppins-Regular: 400
 *
 */
const poppinsRegular = createFont({
  family: `${fonts["Poppins-Regular"]}`,
  size: {
    1: 12,
  },
});

/**
 * Poppins-SemiBold: 600
 *
 */
const poppinsSemiBold = createFont({
  family: `${fonts["Poppins-SemiBold"]}`,
  size: {
    1: 12,
    2: 14,
    3: 24,
  },
});

export { fonts, poppinsMedium, poppinsRegular, poppinsSemiBold };
