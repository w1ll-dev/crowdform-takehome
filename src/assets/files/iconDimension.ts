import { IconName } from "./iconName";

type MediaDimensions = { width: number; height: number };

const IconDimensions: Record<IconName, MediaDimensions> = {
  lock: {
    width: 50,
    height: 73,
  },
};

export { IconDimensions };
export type { MediaDimensions };
