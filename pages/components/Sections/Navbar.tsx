import React, {useState} from 'react';
import '../../../styles/navbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showIcon, setShowIcon] = useState(true);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setShowIcon(!showIcon);
        if (!showMenu) {
            document.body.classList.add('noScroll');
        } else {
            document.body.classList.remove('noScroll');
        }
    };

    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__data">
                    <a href="/" className="logo">
                        <img src="logo-ddn-1.png"/>
                        <div className="logo-text">
                            Donneurs de sang<br/>Vallée du gapeau
                        </div>
                    </a>

                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <i className={`ri-menu-line nav__burger ${showIcon ? 'show-icon' : 'hide-icon'}`}></i>
                        <i className={`ri-close-line nav__close ${showIcon ? 'hide-icon' : 'show-icon'}`}></i>
                    </div>
                </div>

                <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__link"><a href="/"><span>Accueil</span></a></li>
                        <li className="nav__link"><a href="/event"><span>L'évènement</span></a></li>
                        {/*<li className="nav__link"><a href="/results"><span>Résultats</span></a></li>*/}
                        <li className="nav__link"><a href="/contact"><span>Contact</span></a></li>

                        {/* ... the rest of your links and dropdowns ... */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;