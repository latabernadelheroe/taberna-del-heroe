// src/components/HeroTavern.jsx
import EmailTavern from './EmailTavern';
// import heroImg from './assets/hero.jpg'; 
import d20Img from './assets/d20.png';
import drinkImg from './assets/drink.png';
import hatImg from './assets/hat.png';
import eventImg from './assets/event.png';// Asegúrate de colocar tu imagen aquí
import './css/styles.css';
import Icon from './components/Icon';
import { useState } from 'react';
import Recompensas from './Recompensas';

const HeroTavern = () => {
  const [abierto, setAbierto] = useState(false);

  const icons = [
    {
      img: d20Img,
      text: 'Juegos de mesa'
    },
    {
      img: drinkImg,
      text: 'Bebidas temáticas'
    },
    {
      img: hatImg,
      text: 'Ambientación fantástica'
    }, 
    {
      img: eventImg,
      text: 'Eventos'
    }
  ]

  return (
    <div className="min-h-screen bg-[#2e1c13] text-[#f8f3e7] font-serif flex flex-col items-center h-screen w-screen flex items-center justify-center">
      {/* <img
        src={heroImg}
        alt="La taberna"
        className="w-full max-w-3xl rounded-b-2xl shadow-lg"
      /> */}

      <div className="text-center px-6 py-8 w-full header_img">
        <h1 className="text-5xl font-bold m-4 py-8">La Taberna del Héroe</h1>
        <p className="text-xl mb-6">
          Una taberna de fantasía medieval para vivir tus propias aventuras en la vida real.
        </p>

        <EmailTavern/>
      </div>

      <div className="bg-[#f8f3e7] text-[#2e1c13] w-full py-4 text-center font-medium text-xl">
        Ven y vive tu propia aventura junto a tus compañeros de gremio.
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 px-4 text-center text-sm  bg-[#2e1c13] w-full">
        {icons.map((data, index) => (
          <Icon key={index} image={data.img} text={data.text} />
        ))}
      </div>

      <div className="bg-[#f8f3e7] text-[#2e1c13] w-full text-center font-medium text-xl px-4 py-4">
        <p>¡Apúntate y disfruta de recompensas únicas y épicas!</p>

        <button
          onClick={() => setAbierto(!abierto)}
          className="bg-[#b55223] text-white px-4 py-2 rounded-md hover:bg-[#94411c] transition btn_lanzar"
        >
          {abierto ? 'Ocultar recompensas' : 'Mostrar recompensas'}
        </button>

        {abierto && (
          <div className="mt-2 text-base text-[#2e1c13] transition-all duration-300">
            {/* <p>Descuentos, ítems exclusivos y misiones especiales solo para miembros.</p> */}
            <Recompensas/>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroTavern;
