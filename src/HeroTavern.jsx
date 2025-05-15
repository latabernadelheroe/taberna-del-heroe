// src/components/HeroTavern.jsx
import React from 'react';
import EmailTavern from './EmailTavern';
import heroImg from './assets/hero.jpg'; 
import d20Img from './assets/d20.png';
import drinkImg from './assets/drink.png';
import hatImg from './assets/hat.png';
import eventImg from './assets/event.png';// Asegúrate de colocar tu imagen aquí

const HeroTavern = () => {
  return (
    <div className="min-h-screen bg-[#2e1c13] text-[#f8f3e7] font-serif flex flex-col items-center h-screen w-screen flex items-center justify-center">
      <img
        src={heroImg}
        alt="La taberna"
        className="w-full max-w-3xl rounded-b-2xl shadow-lg"
      />

      <div className="text-center px-6 py-8 w-full">
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
        <div>
            <div className="flex flex-col items-center">
                <img
                    src={d20Img}
                    alt="Juegos de mesa"
                    className="w-[100px] h-[100px] object-cover"
                />
                <p className="mt-2 text-center text-lg font-medium">Juegos de mesa</p>
            </div>
        </div>
        <div>
          <div className="flex flex-col items-center">
                <img
                    src={drinkImg}
                    alt="Bebidas"
                    className="w-[100px] h-[100px] object-cover"
                />
                <p className="mt-2 text-center text-lg font-medium">Bebidas temáticas</p>
            </div>
        </div>
        <div>
           <div className="flex flex-col items-center">
                <img
                    src={hatImg}
                    alt="ambiente"
                    className="w-[100px] h-[100px] object-cover"
                />
                <p className="mt-2 text-center text-lg font-medium">Ambientación fantástica</p>
            </div>
        </div>
        <div>
          <div className="flex flex-col items-center">
                <img
                    src={eventImg}
                    alt="eventos"
                    className="w-[100px] h-[100px] object-cover"
                />
                <p className="mt-2 text-center text-lg font-medium">Eventos</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTavern;
