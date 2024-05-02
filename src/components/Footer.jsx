import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

import cv2 from "../assets/images/cv2.png";

const Footer = () => {
  const handlePdfClick = () => {
    // Ouvre le fichier PDF dans une nouvelle fenêtre
    // window.open('../Portfolio/assets/EN_CV_Nicolas_JacobPeres.pdf', '_blank');
    window.open('https://raw.githubusercontent.com/nicolasjp/Portfolio/master/src/assets/EN_CV_Nicolas_JacobPeres.pdf', '_blank');
  };

  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2024 <strong>Nicolas JACOB PERES</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}

           {/* Bouton pour ouvrir le PDF */}
           <button onClick={handlePdfClick}>
            <img
              src={cv2} // Chemin vers une icône pour le bouton PDF
              alt="PDF"
              className='w-6 h-6 object-contain'
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;