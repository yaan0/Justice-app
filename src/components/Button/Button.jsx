import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";


const BlackButton = styled(Button)({
  backgroundColor: "#363636",
  padding: '6px 12px',
  color: 'white',
  borderRadius: 'initial',
  '&:hover': {
    backgroundColor: '#363636',
    borderColor: '#363636',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#363636',
    borderColor: '#363636',
  },
  '&:focus': {
    boxShadow: '#363636',
  },

})

const BasicButtons = ({disabled, text,color, size }) => {

  return (
    <BlackButton
      color={color === 'error' ? 'error' : 'primary'}
      size={size}
      disabled={disabled}
    >
      {text}
    </BlackButton>
  )
}

export default BasicButtons;
