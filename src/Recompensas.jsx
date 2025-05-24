import './css/styles.css';

const Recompensas = () => {
  const recompensas = [
    { nivel: 1, titulo: "Campesino del Reino", donacion: "1 €", recompensa: "Agradecimiento en web y redes" },
    { nivel: 2, titulo: "Explorador Curioso", donacion: "10 €", recompensa: "Acceso a contenido exclusivo + nombre en mural" },
    { nivel: 3, titulo: "Aventurero Novato", donacion: "25 €", recompensa: "1 consumición + pin exclusivo + certificado" },
    { nivel: 4, titulo: "Guerrero de la Mesa Redonda", donacion: "50 €", recompensa: "Camiseta + entrada a evento + dado personalizado" },
    { nivel: 5, titulo: "Hechicero del Consejo", donacion: "100 €", recompensa: "Set de dados + mapa ilustrado + mención especial" },
    { nivel: 6, titulo: "Señor del Calabozo", donacion: "250 €", recompensa: "Pase VIP x5 + miniatura + fiesta privada" },
    { nivel: 7, titulo: "Patriarca de la Casa Fundadora", donacion: "500 €", recompensa: "Retrato en la taberna + bebida propia + pack completo" },
    { nivel: 8, titulo: "Arquimago Inmortal", donacion: "1000 €", recompensa: "Personaje en el lore + partida exclusiva" },
    { nivel: 9, titulo: "Señor de la Taberna", donacion: "2500 €", recompensa: "Sala con tu nombre + busto personalizado" },
    { nivel: 10, titulo: "Conquistador de Reinos", donacion: "5000 €", recompensa: "Campaña escrita + mesa con tu nombre + VIP vitalicio" },
  ];

  return (
   <>
      <h2 className="text-3xl font-bold mb-4 text-center mt-5">Recompensas Kickstarter</h2>
      <p className="text-m font-bold mb-4 text-center mt-5">Cada título tiene sus recompensas más las anteriores.</p>
      <div className="table_pc overflow-x-auto p-6 bg-[#f8f3e7] text-[#2e1c13] font-serif">
         <table className="min-w-full table-auto border-collapse border border-[#2e1c13]">
            <thead>
               <tr className="bg-[#2e1c13] text-[#f8f3e7]">
                  <th className="px-4 py-2 border text-center">Nivel</th>
                  <th className="px-4 py-2 border text-center">Título Fantástico</th>
                  <th className="px-4 py-2 border text-center">Donación</th>
                  <th className="px-4 py-2 border text-center">Recompensa</th>
               </tr>
            </thead>
            <tbody>
               {recompensas.map((r, idx) => (
                  <tr key={idx} className="even:bg-[#ede6dc]">
                  <td className="border px-4 py-2">{r.nivel}</td>
                  <td className="border px-4 py-2">{r.titulo}</td>
                  <td className="border px-4 py-2">{r.donacion}</td>
                  <td className="border px-4 py-2">{r.recompensa}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
      <div className="table_mobile overflow-x-auto p-6 bg-[#f8f3e7] text-[#2e1c13] font-serif">
         <table className="min-w-full table-auto border-collapse border border-[#2e1c13]">
            <thead>
               <tr className="bg-[#2e1c13] text-[#f8f3e7]">
                  <th className="px-4 py-2 border text-center">Donación</th>
                  <th className="px-4 py-2 border text-center">Descripción</th>
               </tr>
            </thead>
            <tbody>
               {recompensas.map((r, idx) => (
                  <tr key={idx} className="even:bg-[#ede6dc]">
                  <td className="border px-4 py-2">{r.donacion}</td>
                  <td className="border px-4 py-2">{r.recompensa}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </>
  );
};

export default Recompensas;
