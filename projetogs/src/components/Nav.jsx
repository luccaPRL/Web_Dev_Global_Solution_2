import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <ul className="flex justify-around">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/solucao">Solução</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/cadastrar">Cadastrar</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
