import React from 'react';

const Solucao = () => {
  const previsao = {
    cidade: 'São Paulo',
    clima: 'Chuva moderada',
    temperatura: '22°C',
    risco: 'Alto risco de enchente',
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Solução Proposta</h1>
      <p className="mb-8 max-w-3xl">
        Através deste sistema, você poderá acessar informações atualizadas sobre riscos de enchentes, 
        rotas de segurança, instruções de emergência e contatos essenciais.
      </p>

      {previsao && (
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl shadow-md w-full max-w-md mx-auto transition hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-700 flex items-center gap-2 mb-4">
            <span>🌧️</span>
            Previsão do Tempo
          </h2>
          <div className="text-gray-800 space-y-2">
            <p><span className="font-semibold">Cidade:</span> {previsao.cidade}</p>
            <p><span className="font-semibold">Clima:</span> {previsao.clima}</p>
            <p><span className="font-semibold">Temperatura:</span> {previsao.temperatura}</p>
            <p>
              <span className="font-semibold">Risco de Enchente:</span>{' '}
              <span className="text-red-600 font-bold">{previsao.risco}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Solucao;