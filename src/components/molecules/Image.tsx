import { MediaDimensions } from "@assets/iconDimension";
import { IconName, Icons } from "@assets/iconName";
import {
  Image as RNImage,
  ImageProps as RNImageProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ImageProps = Omit<RNImageProps, "source"> &
  Partial<MediaDimensions> & {
    image: IconName;
    touchProps?: TouchableOpacityProps;
  };

const Image = ({ image, touchProps, ...props }: ImageProps) => {
  if (touchProps) {
    return (
      <TouchableOpacity {...touchProps}>
        <RNImage source={Icons[image]} {...props} />
      </TouchableOpacity>
    );
  }
  return <RNImage source={Icons[image]} {...props} />;
};

export { Image };
