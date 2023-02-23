import Content from "./components/Content";
import Title from "./components/Title"
import { createContext, useState } from "react";


import "./App.css"

export const ThemeConText = createContext()

function App() {

  const [theme,setTheme] = useState('light')

  return (
    <ThemeConText.Provider value={{theme,setTheme}}>
      <div className="App">
        <Title />
        <Content />
      </div>
    </ThemeConText.Provider>
  );
}

export default App;
