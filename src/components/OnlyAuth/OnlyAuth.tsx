import { useNavigate } from 'react-router'

export function OnlyAuth(props: any) {
    const navigate = useNavigate()
    const isAuth = false

    if (!isAuth) {
        return (
            <div>
                <h1>Вы не авторизованы</h1>
                <button className="btn btn-primary" onClick={() => navigate('/')}>Перейти на главную</button>
            </div>
        )
    }

    return props.children
}