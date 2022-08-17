import * as React from 'react';
import {useState} from "react";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import {FormControl, OutlinedInput, Select} from "@mui/material";
import {styled} from "@mui/material/styles";
import rus from "../../assets/rus.svg";
import united from "../../assets/united.svg";
import china from "../../assets/china.svg";
import eur from "../../assets/euro.svg";
import turkney from "../../assets/turkney.svg";
import "./Select.css";



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CssTextField = styled(Select)({
  border: '1px solid #ECECEC',
  borderRadius: 'initial',
  '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
    display: 'flex',
    gap: '8px',
    alignItem: 'center',
  },
  '& .Mui-focused': {
    border: '1px solid #363636',
  },
  '& .css-cmbgmt-MuiInputBase-root-MuiOutlinedInput-root': {
    borderRadius: 'initial',
  },
  '& fieldset':{
    display: 'none',
  },
});

const currencies = [
  {
    value: "rus",
    src: rus,
    label: "RUB",
  },
  {
    value: "united",
    src: united,
    label: "USD",
  },
  {
    value: "china",
    src: china,
    label: "CNY",
  },
  {
    value: "eur",
    src: eur,
    label: "EUR",
  },
  {
    value: "turkney",
    src: turkney,
    label: "TRY",
  },
];

const SelectTextFields = () => {
  const [currency, setCurrency] = useState([]);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        '& .Mui-focused': {
          border: '1px solid #363636',
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
          <CssTextField
            displayEmpty
            value={currency}
            onChange={handleChange}
            input={<OutlinedInput />}
            placeholder='Выберите кошелек'
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em className='placeholder-select'>Выберите кошелек</em>;
              }
              const item = currencies.filter((item) => item.value === selected)

              return <> <img src={item[0].src} alt='img'/> {item[0].label} </>

            }}
          >
            {currencies.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                <img className='select-img' src={option.src} alt='img'/> {option.label}
              </MenuItem>
            ))}

          </CssTextField>
        </FormControl>
      </div>
    </Box>
  );
}

export default SelectTextFields;
