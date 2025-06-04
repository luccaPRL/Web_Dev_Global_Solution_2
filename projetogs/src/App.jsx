import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./routes/Home"
import Solucao from "./routes/Solucao"
import Sobre from "./routes/Sobre"
import Cadastrar from "./routes/Cadastrar"
import Login from "./routes/Login"
import Error from "./routes/Error"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucao" element={<Solucao />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

