import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {styled} from "@mui/material/styles";

const CssCheckBox = styled(FormGroup)({

  '& .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label': {
    color: '#363636',
  },
  '& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate': {
    color: '#84A500',
    borderRadius: 'none'
  },
});


export default function CheckboxLabels({ error = false }) {
  console.log(error)
  return (
    <CssCheckBox>
      <FormControlLabel
        control={<Checkbox />}
        label="Запомнить меня"/>
    </CssCheckBox>
  );
}
