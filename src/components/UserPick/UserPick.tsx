import style from './UserPick.module.scss'

export function UserPick() {
    return (
        <div className={style.topBar}>
            <div className={style.profile}>
                <div className={style.avatar}>MZ</div>
                <span className={style.username}>Mariya Zakharenko</span>
            </div>
        </div>
    )
}
