import {
  Autocomplete,
    TextField,
    Box,
    InputAdornment,
    Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {styled} from "@mui/material/styles";

const StyleComponent = styled(Autocomplete)({
  width: '500px',
  '& .Mui-focused': {
    border: '1px solid #363636',
  },
  '& .css-d3suq3-MuiAutocomplete-root':{
    border: '1px solid #363636',
  },
  '& .css-79yp09-MuiAutocomplete-root': {
    border: 'none',
  },
})

const titleStyles = {
  marginBottom: "4px",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#363636",
};

const spanStyles = {
  color: "#848484",
};

const costStyles = {
  marginRight: "16px",
  fontSize: "12px",
  lineHeight: "16px",
  color: "#363636",
};

const subtitleStyles = {
  fontSize: "11px",
  lineHeight: "16px",
  color: "#363636",
};

const badgeStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px",
  backgroundColor: "#84A5001A",
  borderRadius: "3px",
  color: "#84A500",
  fontSize: "12px",
  lineHeight: "16px",
};

const Search = () => {
  return (
    <div className="App">
      <StyleComponent
        // sx={{ width: 500 }}
        freeSolo
        options={countries}
        getOptionLabel={(option) => option.title}
        renderOption={(props, option) => (
          <>
            <Box
              component="li"
              style={{ display: "flex", justifyContent: "space-between" }}
              {...props}
            >
              <div>
                <div style={titleStyles}>{option.title}</div>
                <div style={subtitleStyles}>{option.subtitle}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={costStyles}>{option.cost}</div>
                <div style={badgeStyles}>
                  <img
                    style={{
                      display: "inline-block",
                      width: "14px",
                      height: "14px",
                      marginRight: "6px",
                    }}
                    src="/images/arrowTop.svg"
                  />
                  {option.rise}
                </div>
              </div>
            </Box>
            <Divider component="li" />
          </>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            style={{
              borderRadius: "none",
            }}
            placeholder="Search"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
}

const countries = [
  {
    title: "Dollar Tree",
    subtitle: "DLTR : NASDAQ (US)",
    cost: "167,18 $",
    rise: "1,15 %",
  },
  {
    title: "Dollar Tree",
    subtitle: "DLTR : NASDAQ (US)",
    cost: "167,18 $",
    rise: "1,15 %",
  },
  {
    title: "Dollar Tree",
    subtitle: "DLTR : NASDAQ (US)",
    cost: "167,18 $",
    rise: "1,15 %",
  },
  {
    title: "Dollar Tree",
    subtitle: "DLTR : NASDAQ (US)",
    cost: "167,18 $",
    rise: "1,15 %",
  },
  {
    title: "Dollar Tree",
    subtitle: "DLTR : NASDAQ (US)",
    cost: "167,18 $",
    rise: "1,15 %",
  },
];

export default Search;
