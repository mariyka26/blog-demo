import { useAppSelector } from '../../../redux/store';
import { locales } from '../../../config/locales';
import { useNavigate } from 'react-router'

export const SuccessSignIn = () => {
    const lang = useAppSelector((state) => state.language.language);
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate('/posts/all/1')
    }

    return (
        <div className="container">
            <div className="card mt-4">
                <div className="card-body">
                    <p className="card-text">{locales[lang].success.title}</p>
                    <p className="card-text">{locales[lang].success.message}</p>
                    <button
                        className="btn btn-primary w-100"
                        onClick={handleNavigation}>
                        {locales[lang].success.button}
                    </button>
                </div>
            </div>
        </div>
    );
};

