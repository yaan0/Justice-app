import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import {grey} from "@mui/material/colors";

const WhiteButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[100]),
  backgroundColor: grey[100],
  border: '1px solid #363636',
  borderRadius: 'initial',
  '&:hover': {
    backgroundColor: grey[100],
  },
}));

const ButtonWhite = ({disabled, text, color, size}) => {
  return (
    <WhiteButton
      color={color === 'error' ? 'error' : 'primary'}
      disabled={disabled}
      size={size}>
      {text}
    </WhiteButton>
  )
};

export default ButtonWhite;
