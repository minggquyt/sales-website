import { useState, useRef } from 'react';
import './Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const myRef = useRef<HTMLUListElement>(null);

    function handleClickMenu(){
        toggleMenu();
        setTimeout(() => {
            if(myRef.current != null)
                myRef.current.classList.add("menu-move")
            else
                console.log("DOM không tồn tại !");
        },100);
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="d-flex align-items-center justify-content-between p-3 position-relative">
            <h3 className='logo lexend-600 mb-0'>MQSL</h3>

            <span  onClick={handleClickMenu} className="d-sm-none material-symbols-outlined">
                menu
            </span>

            <ul ref={myRef} className={`header-menu lexend-400 d-sm-flex gap-4 list-unstyled mb-0 menu ${isMenuOpen ? 'menu-active' : 'menu-inactive'}`}>
                <li className="py-2 py-sm-0">VIETNAM</li>
                <li className="py-2 py-sm-0">INTERNATIONAL</li>
            </ul>

            <img src="/img/vnflag.webp" alt="VN Flag" height="20" className="d-none d-sm-block" />
        </header>
    );
}