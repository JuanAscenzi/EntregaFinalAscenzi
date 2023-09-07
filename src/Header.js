import { NavBar } from './components/NavBar'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header id="header" className="header flex justify-between py-4 px-2 text-blue bg-slate-300">
        <Link to="/">
         <h1>  BeerLoad </h1> 
        </Link>
        <NavBar/>
    </header>

  )
}

