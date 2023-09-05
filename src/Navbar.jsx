import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';
import { useRef, useState } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linkRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyle = {
    height: showLinks
      ? `${linkRef.current.getBoundingClientRect().height}px`
      : '0px',
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyle}
        >
          <ul className="links" ref={linkRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icon">
          {social.map((socialIcon) => {
            return (
              <li key={socialIcon.id}>
                <a href={socialIcon.href}>{socialIcon.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
