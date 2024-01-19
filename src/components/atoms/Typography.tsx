import { H1, H3, Paragraph, styled } from "tamagui";

const Label1 = styled(H3, {
  fontFamily: "$poppins400",
  fontSize: "$1",
});

const LandingHeading = styled(H3, {
  fontFamily: "$poppins600",
  fontSize: "$1",
});

const Title = styled(H1, {
  fontFamily: "$poppins600",
  fontSize: "$3",
});

const Caption2 = styled(Paragraph, {
  fontFamily: "$poppins500",
  fontSize: "$1",
});

const Caption1 = styled(Paragraph, {
  fontFamily: "$poppins600",
  fontSize: "$1",
});

export { LandingHeading, Title, Label1, Caption1, Caption2 };
