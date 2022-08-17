import {ThemeProvider} from "@mui/material/styles";
import {createTheme} from "@mui/material";
import {Theme} from "./theme";


import BlackButton from "./components/Button/Button";
import ButtonWhite from "./components/Button/WhiteButton";
import CheckboxLabels from "./components/CheckBox/CheckBox";
import Input from "./components/Input/Input";
import BasicSelect from "./components/Select/Select";

import './App.css';
function App() {

  const theme = createTheme(Theme);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <BlackButton text='Call to action' size='large' disabled={false} />
          <ButtonWhite text='Call to action' size='medium' disabled={false} color='error'/>
          <BasicSelect/>
          <CheckboxLabels />
          <Input disabled={false}/>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
