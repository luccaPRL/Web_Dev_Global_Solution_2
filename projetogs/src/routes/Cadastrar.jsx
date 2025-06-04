import React from 'react'

export default function Cadastrar() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cadastrar Usuário</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nome completo" className="border p-2 rounded" />
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Senha" className="border p-2 rounded" />
        <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Cadastrar</button>
      </form>
    </div>
  )
}
