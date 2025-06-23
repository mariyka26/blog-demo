import { useNavigate } from 'react-router'
import { useAppSelector } from '../../../redux/store'

export const RegistrationConfirmation = () => {
    const navigate = useNavigate()
    const email = useAppSelector((state) => state.auth.email)

    const handleNavigation = () => {
        navigate('/posts/all/1')
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card mt-4">
                        <div className="card-body">
                            <p className="card-text">
                                Please activate your account with the activation link in the email
                                <b> {' '}{email}</b>.
                            </p>
                            <p className="card-text">Please, check your email</p>
                            <button
                                className="btn btn-primary w-100"
                                onClick={handleNavigation}>
                                Go to home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}