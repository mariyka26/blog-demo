import { useState } from 'react'
import type { ChangeEvent } from 'react'
import search from '../../assets/search.svg'
import close from '../../assets/close.svg'
import style from './Search.module.scss'

interface SearchProps {
    type: string;
    label?: string;
    id: string;
    className?: string;
    checked?: boolean;
    value?: string;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Search(props: SearchProps) {
    const { type, label, id, className, checked, placeholder, onChange } = props
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')

    const renderLabel = (): React.ReactElement | null => {
        if (!label) return null

        return (
            <label className="form-check-label" htmlFor={id}>{label}</label>
        )
    }

    const toggleSearch = (): void => {
        setIsOpen((prev) => !prev)
        setInputValue('')
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value)
        if (onChange) {
            onChange(event);
        }
    }

    if (type === 'checkbox') {
        return (
            <>
                <input
                    type={type}
                    className={className || 'form-check-input'}
                    id={id}
                    checked={checked}
                    onChange={onChange} />
                {renderLabel()}
            </>
        )
    }

    return (
        <div className={style.searchBox} style={{ width: isOpen ? '100%' : '60px' }}>
            {isOpen && (
                <>
                    {renderLabel()}
                    <input
                        type={type}
                        className={style.input}
                        placeholder={placeholder || "Search..."}
                        value={inputValue}
                        id={id}
                        checked={checked}
                        onChange={handleInputChange}
                    />
                </>
            )}
            <button type="button" className={style.button} onClick={toggleSearch}>
                <img
                    src={isOpen ? close : search}
                    className={style.icon}
                    alt="search toggle"
                />
            </button>
        </div>
    )
}