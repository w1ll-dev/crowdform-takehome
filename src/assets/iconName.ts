const Icons = {
  "lock-circle": require("./images/files/lock-circle.png"),
  "opened-eye": require("./images/files/opened-eye.png"),
};

type IconName = keyof typeof Icons;

export { Icons };
export type { IconName };
