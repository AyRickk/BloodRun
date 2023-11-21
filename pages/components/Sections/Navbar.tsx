import React, {useState} from 'react';
import Link from 'next/link'
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
                    <Link href="/" className="logo">
                        <img src="logo-ddn-1.png" alt="The Blood Run Association donneurs de sang la vallée du gapeau"/>
                        <div className="logo-text">
                            Donneurs de sang<br/>Vallée du gapeau
                        </div>
                    </Link>

                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <i className={`ri-menu-line nav__burger ${showIcon ? 'show-icon' : 'hide-icon'}`}></i>
                        <i className={`ri-close-line nav__close ${showIcon ? 'hide-icon' : 'show-icon'}`}></i>
                    </div>
                </div>

                <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__link"><Link href="/"><span>Accueil</span></Link></li>
                        <li className="nav__link"><Link href="/event"><span>L'évènement</span></Link></li>
                        <li className="nav__link"><Link href="/sponsors"><span>Partenaires</span></Link></li>
                        <li className="nav__link"><Link href="/contact"><span>Contact</span></Link></li>

                        {/* ... the rest of your links and dropdowns ... */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;