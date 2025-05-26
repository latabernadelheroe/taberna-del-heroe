import Slider from 'react-slick';
import EmailTavern from './EmailTavern';
import d20Img from './assets/d20.png';
import beer from './assets/beer.png';
import hatImg from './assets/hat.png';
import eventImg from './assets/event.png';
import taberna1 from './assets/taberna1.jpg';
import taberna2 from './assets/taberna2.jpg';
import taberna3 from './assets/taberna3.png';
import taberna4 from './assets/taberna4.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';
import tiktok from './assets/tiktok.png';

import './css/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      img: beer,
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

    const settings = {
      dots: false,
      infinite: true,
      speed: 3500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      arrows: false,
      fade: true,
      pauseOnHover: false,
      cssEase: "linear"
    };

  return (
    <div className="main_screen min-h-screen bg-[#2e1c13] text-[#f8f3e7] font-serif flex flex-col items-center w-screen flex items-center">
      <div className="slider-container carrousel">
        <div className='text_email_pc'>
          <h1 className="text-5xl font-bold m-4 py-8">La Taberna del Héroe</h1>
          <p className="text-xl mb-6">
            Una taberna de fantasía medieval para vivir tus propias aventuras en la vida real.
          </p>
          <EmailTavern />

          <div className="redes_pc hidden md:block mt-4 text-white text-center">
            <p className="mb-4">
              Y si no quieres perderte ninguna novedad, ¡síguenos en nuestras redes!
            </p>
            <div className="flex justify-center items-center gap-6">
              <a href="https://x.com/tabernadelheroe" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter"/>
              </a>
              <a href="https://www.tiktok.com/@tabernadelheroe" target="_blank" rel="noopener noreferrer">
                <img src={tiktok} alt="TikTok"/>
              </a>
              <a href="https://www.instagram.com/tabernadelheroe" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram"/>
              </a>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div>
            <img src={taberna4} />
          </div>
          <div>
            <img src={taberna3} />
          </div>
          <div>
            <img src={taberna1} />
          </div>
          <div>
            <img src={taberna2} />
          </div>
        </Slider>
      </div>
      <div className="text-center px-6 py-8 header_img">
        <h1 className="text-5xl font-bold m-4 py-8">La Taberna del Héroe</h1>
        <p className="text-xl mb-6">
          Una taberna de fantasía medieval para vivir tus propias aventuras en la vida real.
        </p>
        <EmailTavern/>
      </div>

      <div className="bg-[#f8f3e7] text-[#2e1c13] w-full py-7 text-center font-medium text-xl mt-3">
        Ven y vive tu propia aventura junto a tus compañeros de gremio.
      </div>
      <div className="grid grid-cols-2 gap-y-6 py-5 px-4 text-center text-sm bg-[#2e1c13] w-full
                sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-6">
        {icons.map((data, index) => (
          <Icon key={index} image={data.img} text={data.text} />
        ))}
      </div>


      <div className="recompensa_mobile bg-[#f8f3e7] text-[#2e1c13] w-full text-center font-medium text-xl px-4 py-4">
        <p>¡Apúntate y disfruta de recompensas únicas y épicas!</p>

        <button
          onClick={() => setAbierto(!abierto)}
          className="bg-[#b55223] text-white px-4 py-2 rounded-md hover:bg-[#94411c] transition btn_lanzar"
        >
          {abierto ? 'Ocultar recompensas' : 'Mostrar recompensas'}
        </button>

        {abierto && (
          <div className="mt-2 text-base text-[#2e1c13] transition-all duration-300">
            <Recompensas/>
          </div>
        )}
      </div>
      <div className="recompensa_pc bg-[#f8f3e7] text-[#2e1c13] w-full text-center font-medium text-xl px-4 py-4">
        <p>¡Apúntate y disfruta de recompensas únicas y épicas!</p>

        <div className="mt-2 text-base text-[#2e1c13] transition-all duration-300">
          <Recompensas/>
        </div>
      </div>
    </div>
  );
};

export default HeroTavern;
