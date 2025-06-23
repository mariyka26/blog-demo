import { useState, useEffect, useRef } from 'react'
import open from '../../assets/menu.svg'
import close from '../../assets/close.svg'
import light from '../../assets/light.svg'
import dark from '../../assets/dark.svg'
import style from './Burger.module.scss'
import { NavLink } from 'react-router'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { locales } from '../../config/locales'
import type { LangType } from '../../types.ts'
import { authExit } from '../../redux/auth-slice.ts'


interface NavLinkClassNameProps {
    isActive: boolean
}

export function Burger() {
    const dispatch = useAppDispatch()
    const lang: LangType = useAppSelector((state) => state.language.language)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = (): void => {
        setIsOpen((prev) => !prev)
    }

    const closeMenu = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false)
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', closeMenu)
        return () => {
            document.removeEventListener('mousedown', closeMenu)
        }
    }, [])

    const icon: string = isOpen ? close : open

    const buildClassName = ({ isActive }: NavLinkClassNameProps): string => {
        return isActive ? 'nav-link active' : 'nav-link'
    }

    function handleClickExit(e) {
        e.preventDefault()
        dispatch(authExit())

        location.reload()
    }

    return (
        <>
            <div className={style.menuToggle} onClick={toggleMenu}>
                <img src={icon} alt="Toggle menu" />
            </div>
            <div ref={menuRef} className={`${style.sidebar} ${isOpen ? style.open : ''}`}>
                <div className={style.topBar}>
                    <div className={style.profile}>
                        <div className={style.avatar}>MZ</div>
                        <span className={style.username}>{locales[lang].header.user}</span>
                    </div>
                </div>

                <div className={style.navBlock}>
                    <NavLink to="/" className={buildClassName}>
                        {locales[lang].header.main}
                    </NavLink>
                    <NavLink to="/auth/sign-up" className={buildClassName}>
                        Sign up
                    </NavLink>
                    <NavLink to="/auth/sign-in" className={buildClassName}>
                        Sign in
                    </NavLink>
                    <NavLink to="/posts/my" className={buildClassName}>
                        My posts
                    </NavLink>
                    <NavLink className={buildClassName} to="/posts/new">{locales[lang].header.posts}</NavLink>
                    <a href="#">{locales[lang].header.account}</a>
                </div>

                <div className={style.bottom}>
                    <div className={style.themeSwitch}>
                        <button className={style.themeBtn}>
                            <img src={light} alt="Light theme" />
                        </button>
                        <button className={style.themeBtn}>
                            <img src={dark} alt="Dark theme" />
                        </button>
                    </div>
                    <button role="button" className="nav-link {style.logout}" onClick={handleClickExit}>{locales[lang].header.closeSession}</button>
                </div>
            </div >
        </>
    )
}