// src/components/Previsao.jsx
import { useState } from "react";

const Previsao = () => {
  const opcoes = ["0%", "30%", "45%", "55%", "65%", "78%", "85%", "92%", "100%"];
  const [previsao, setPrevisao] = useState("");
  const [risco, setRisco] = useState("");

  const gerarPrevisao = () => {
    const aleatoria = opcoes[Math.floor(Math.random() * opcoes.length)];
    setPrevisao(aleatoria);

    const percentual = parseInt(aleatoria.replace("%", ""));
    if (percentual >= 80) {
      setRisco("alto");
    } else if (percentual >= 50) {
      setRisco("medio");
    } else {
      setRisco("baixo");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-blue-600">🌦️ Previsão de Chuva</h2>
      
      <button
        onClick={gerarPrevisao}
        className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
      >
        Ver Previsão
      </button>

      {previsao && (
        <div className="text-center">
          <p className="text-lg">Previsão: <strong>{previsao}</strong></p>
          <p className={`text-xl font-semibold mt-2 
            ${risco === "alto" ? "text-red-600" : ""}
            ${risco === "medio" ? "text-yellow-500" : ""}
            ${risco === "baixo" ? "text-green-600" : ""}`}>
            {risco === "alto" && "🔴 RISCO ALTO"}
            {risco === "medio" && "🟠 RISCO MÉDIO"}
            {risco === "baixo" && "🟢 RISCO BAIXO"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Previsao;
