import { Typography, TypographyProps } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Title (props: TypographyProps) {
  return <Typography variant="subtitle1" component='p' color={grey[700]} {...props} />
}
