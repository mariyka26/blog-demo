import { Burger } from '../Burger/Burger';
import { useState } from 'react'
import { Search } from '../Search/Search';
import { useNavigate, useParams } from 'react-router'
import { UserPick } from '../UserPick/UserPick';
import { setLanguage } from '../../redux/language-toggle-slice';
import { type RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import type { LangType } from '../../types';


export function Header() {
  const dispatch = useAppDispatch();
  const lang: LangType = useAppSelector((state: RootState) => state.language.language);
  const { query } = useParams<{ query: string }>()
  const navigate = useNavigate()
  const [value, setValue] = useState(query)

  const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as LangType;;
    dispatch(setLanguage(value));
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!value) {
      navigate('/posts/all/1')

      return
    }

    navigate(`/posts/search/${value}/1`)
  }
  return (
    <header className="mb-4">
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div className="container-fluid bg-primary d-flex justify-content-between align-items-center">
          <Burger />
          <div className="d-flex align-items-center flex-grow-1 justify-content-end">
            <form onSubmit={handleSubmit}>
              <Search
                type="search"
                id="search-input"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                placeholder="Search" />
            </form>
            <select
              className="form-select mx-3"
              style={{ width: '70px' }}
              onChange={handleChangeLang}
              value={lang}
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
            <UserPick />
          </div>
        </div>
      </nav>
    </header>
  );
}