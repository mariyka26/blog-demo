import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/store';
import { locales } from '../../../config/locales';
import { fetchSignIn } from '../../../redux/auth-slice'

export function SignInForm() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const lang = useAppSelector((state) => state.language.language);
    const dispatch = useAppDispatch();

    const reset = (): void => {
        setEmail('')
        setPassword('')
    }

    const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()

        const body = { email, password }
        dispatch(fetchSignIn(body))

        reset()
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmitForm}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">{locales[lang].login.email}</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">{locales[lang].login.password}</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <a href="#" className="text-muted">{locales[lang].login.forgotPassword}</a>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">{locales[lang].login.signIn}</button>
                        </div>
                        <div className="mt-3 text-center">
                            {locales[lang].login.noAccount} <a href="#">{locales[lang].login.signUp}</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}