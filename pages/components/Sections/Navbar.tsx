import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import '../../../styles/navbar.css';

type NavItemProps = {
    href: string;
    children: React.ReactNode;
};

const NavItem = ({href, children}: NavItemProps) => {
    const handleClick = () => {
        if (document.body.classList.contains('noScroll')) {
            document.body.classList.remove('noScroll');
        }
    };

    return (
        <li className="nav__link" onClick={handleClick}>
            <Link href={href}><span>{children}</span></Link>
        </li>
    );
};

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (showMenu) {
            document.body.classList.add('noScroll');
        } else {
            document.body.classList.remove('noScroll');
        }

        return () => {
            document.body.classList.remove('noScroll');
        };
    }, [showMenu]);

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

                    <div className="nav__toggle" id="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
                        <i className={`ri-menu-line nav__burger ${showMenu ? 'hide-icon' : 'show-icon'}`}></i>
                        <i className={`ri-close-line nav__close ${showMenu ? 'show-icon' : 'hide-icon'}`}></i>
                    </div>
                </div>

                <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <NavItem href="/">Accueil</NavItem>
                        <NavItem href="/event">L'évènement</NavItem>
                        <NavItem href="https://galerie.bloodrun.fr">Galerie</NavItem>
                        <NavItem href="/sponsors">Partenaires</NavItem>
                        <NavItem href="/contact">Contact</NavItem>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;