import { useForm } from "react-hook-form";
import {TextField} from "@mui/material";
import {styled} from "@mui/material/styles";

const CssTextField = styled(TextField)({
  width: '332px',
  backgroundColor: 'white',
  height: '56px',
  border: '1px solid #ECECEC',
  '& input': {
    color: '#363636',
  },
  '& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:after': {
    border: 'none',
  },
  '& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:before': {
    borderBottom: '1px solid #ECECEC',
  },
  '& .Mui-focused': {
    border: '1px solid #363636',
  },
  '& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
    color: '#646464',
    border: 'initial'
  },

  '& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root': {
    backgroundColor: 'white'
  }
});

const Input = ({disabled}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    reset();
  };

  return (
    <>
      <CssTextField
        id="filled-basic"
        {...register("firstName",)}
        disabled={disabled}
        label="Имя" variant="filled"
        onChange={handleSubmit(onSubmit)}
      />

      {errors?.firstName && (
        <p style={{}}>{errors?.firstName && "Error message"}</p>
      )}

    </>
  );
};

export default Input;
