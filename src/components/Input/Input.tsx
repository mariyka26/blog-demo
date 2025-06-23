import React, { forwardRef } from 'react'

type InputType = 'text' | 'email' | 'password' | 'textarea' | 'checkbox' | 'number'

interface InputProps {
    type: InputType
    label?: string
    id?: string
    name?: string
    className?: string
    checked?: boolean
    value?: string
    placeholder?: string
    rows?: number
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const InputBase = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>((props, ref) => {
    const { type, label, id, name, className, checked, value, placeholder, rows, onChange } = props

    const renderLabel = (): React.ReactElement | null => {
        if (!label) return null

        return (
            <label className="form-check-label" htmlFor={id}>{label}</label>
        )
    }

    if (type === 'textarea') {
        return (
            <>
                {renderLabel()}
                <textarea
                    ref={ref as React.Ref<HTMLTextAreaElement>}
                    className={className || 'form-control'}
                    value={value}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    rows={rows || 3}
                    onChange={onChange} />
            </>
        )
    }

    if (type === 'checkbox') {
        return (
            <>
                <input
                    ref={ref as React.Ref<HTMLInputElement>}
                    type={type}
                    className={className || 'form-check-input'}
                    id={id}
                    name={name}
                    checked={checked}
                    onChange={onChange} />
                {renderLabel()}
            </>
        )
    }

    return (
        <>
            {renderLabel()}
            <input
                ref={ref as React.Ref<HTMLInputElement>}
                type={type}
                value={value}
                className={className || 'form-control'}
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange} />
        </>
    )
})

/**
  @description Input component
 */
export const Input = InputBase