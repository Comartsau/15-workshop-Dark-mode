import light from '../image/light.svg'
import dark from '../image/dark.svg'
import { ThemeConText } from '../App'
import { useContext } from 'react'

function Content() {
    const {theme} = useContext(ThemeConText)
    console.log(theme)


  return (
    <main className={theme === 'dark' ? 'dark' : 'light'}>
        <div>
            <h1>Comartsau Official</h1>
            <p>Darkmode Workshop</p>
        </div>
        <img src={theme === 'light' ? light : dark} alt="logo"/>
    </main>
  )
}

export default Content