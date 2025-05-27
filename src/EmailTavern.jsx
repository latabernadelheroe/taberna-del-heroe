import { useState } from 'react';
import emailjs from 'emailjs-com';
import './css/styles.css';

import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';
import tiktok from './assets/tiktok.png';

function NotificarFormulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_s19katv',
      'template_8difd8g',
      {
        nombre: formData.nombre,
        correo: formData.correo,
      },
      'wdn2bhYbzu5eCHp11'
    ).then(
      () => {
        alert('Correo enviado correctamente');
      },
      (error) => {
        alert('Error al enviar correo');
        console.error(error);
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-[#2e1c13] p-4 rounded-xl shadow-inner flex flex-col sm:flex-row gap-2 items-center justify-center"
    >
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        className="p-2 rounded-md border border-gray-400 w-full sm:w-auto !bg-white !text-black"
        style={{ WebkitTextFillColor: '#000000', caretColor: '#000000' }}
      />

      <input
        type="email"
        name="correo"
        placeholder="Correo electrónico"
        value={formData.correo}
        onChange={handleChange}
        className="p-2 rounded-md border border-gray-400 w-full sm:w-auto !bg-white !text-black"
        style={{ WebkitTextFillColor: '#000000', caretColor: '#000000' }}
      />
      <button
        type="submit"
        className="bg-[#b55223] text-white px-4 py-2 rounded-md hover:bg-[#94411c] transition btn_lanzar"
      >
        Notifícame al lanzar
      </button>
      <div className='redes_mobile'>
        <p className='text-[#ffff] mt-4'>Y si no quieres perderte ninguna novedad, ¡síguenos en nuestras redes!</p>
        <div className="flex justify-center mx-8 mt-4">
          <a href='https://x.com/tabernadelheroe' target="_blank" rel="noopener noreferrer">
            <img
              src={twitter}
              className="object-cover mt-1"
            />
          </a>
          <a href='https://www.tiktok.com/@tabernadelheroe' target="_blank" rel="noopener noreferrer">
          <img
              src={tiktok}
              className="object-cover"
          />
          </a>
          <a href='https://www.instagram.com/tabernadelheroe' target="_blank" rel="noopener noreferrer">
          <img
              src={instagram}
              className="object-cover mt-1"
          />
          </a>
        </div>
      </div>
    </form>
  );
}

export default NotificarFormulario;
