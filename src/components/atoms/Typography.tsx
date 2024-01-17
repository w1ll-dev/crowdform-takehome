import { H1, H3, Paragraph, styled } from "tamagui";

const LandingHeading = styled(H3, {
  fontFamily: "$poppins600",
  fontSize: "$1",
});

const Title = styled(H1, {
  fontFamily: "$poppins600",
  fontSize: "$3",
});

const Caption2 = styled(Paragraph, {
  fontFamily: "$poppins400",
  fontSize: "$1",
});

const Caption1 = styled(Paragraph, {
  fontFamily: "$poppins600",
  fontSize: "$1",
});

export { LandingHeading, Title, Caption1, Caption2 };
