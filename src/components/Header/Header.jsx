import './Header.css';
import Photo from './Photo/Photo';
import About from './About/About'

export default function Header() {
  return (
    <>
      <div id="about">&nbsp;</div>
      <div className="header">
        <div className="header-info">
          <About />
          <Photo />
        </div>
      </div>
    </>
  );
}