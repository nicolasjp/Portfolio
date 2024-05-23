import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
    <NavLink to="/" className={({isActive}) => isActive ? 'neo-brutalism-blue font-bold' : 'neo-brutalism-blue2'}>
        <h2 className="sm:text-sm sm:leading-snug text-center py-3 px-5 text-white mx-5">NJP</h2>
    </NavLink>
    <nav className="flex text-lg gap-7 font-medium">
        <NavLink to='/about' className={({isActive}) => isActive ? 'neo-brutalism-blue font-bold' : 'neo-brutalism-blue2'}>
            <h2 className="sm:text-sm sm:leading-snug text-center py-3 px-5 text-white mx-5">About</h2>
        </NavLink>
        <NavLink to='/projects' className={({isActive}) => isActive ? 'neo-brutalism-blue font-bold' : 'neo-brutalism-blue2'}>
            <h2 className="sm:text-sm sm:leading-snug text-center py-3 px-5 text-white mx-5">Projects</h2>
        </NavLink>
    </nav>
</header>
  )
}

export default Navbar

