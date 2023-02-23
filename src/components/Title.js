import {useContext, useState} from 'react'
import ReactSwitch from 'react-switch';
import { ThemeConText } from '../App';

function Title() {
    const {theme,setTheme} = useContext(ThemeConText)

    const toggleSwitch = () => {
        console.log(theme)
        setTheme(
            theme === 'light' ? 'dark' : 'light'
        )


    }

  return (
    <header className={theme === 'dark' ? 'dark' : 'light'}>
        <span>Mode[{theme}]</span>
        <ReactSwitch 
        onChange={toggleSwitch}
        checked= {theme==='dark'}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor={'ffa500'}
         />
    </header>
  )
}

export default Title