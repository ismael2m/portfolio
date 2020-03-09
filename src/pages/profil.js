import React from 'react';

import AOS from 'aos';

import { FaRegFile, FaRegEnvelope } from 'react-icons/fa';

// == Composants
import Head from '../components/Head';
import AbFooter from '../components/AbFooter';

import 'aos/dist/aos.css';

// == Données au format JSON
import data from '../data/data.json';


// == SCSS
import './profil.scss';

// == DOM purify: nettoyer le html pour éviter les soucis de failles XSS
import dangerHtml from '../functions/dangerHtml';


const Profil = ({ location }) => {
  const { title, content } = data.profil;
  
  const titleSplit = title.split('|');
  const split = content.split('|');
  const locaSplit = location.pathname.split('/');
  console.log(locaSplit);

  const [hello, name] = titleSplit;

  return (
    <>
      <Head title={location.pathname} />
      <div className="profil">
        <div className="profil-group">
          <div className="profil-group-infos">
            <h1 className="profil-group-infos-title">
              {hello}
              {' '}
              <span className="profil-group-infos-title-span">{name}</span>
            </h1>
            {
              split.map((item) => (
                <p dangerouslySetInnerHTML={dangerHtml(item)} className="profil-group-infos-content" />
              ))
            }
          </div>
        </div>
        <div className="profil-buttons">
          <a href="https://drive.google.com/open?id=1EDa7ecJB5yNvlqc2vcyO_znLGPIvywVC" target="_blank" rel="noopener noreferrer">
            <button type="button" className="profil-buttons-btn">
              <FaRegFile className="profil-buttons-btn-file" />
              Télécharger mon CV
            </button>
          </a>

          <a href="mailto:ismael2m.pro@gmail.com">
            <button type="button" className="profil-buttons-btn">
              <FaRegEnvelope className="profil-buttons-btn-file" />
              Contactez-moi
            </button>
          </a>
        </div>
        <AbFooter />

      </div>
    </>
  );
};

export default Profil;
