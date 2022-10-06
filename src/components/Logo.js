import svg from '../resources/soundcomputer-text.svg';
import './Logo.css';

function Logo() {
  return (
    <img className="logo" src={svg} alt="SCE" />
  );
}

export default Logo;
