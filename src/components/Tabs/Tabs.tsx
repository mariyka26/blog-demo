import React from 'react'
import { NavLink } from 'react-router'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { setActiveTab } from '../../redux/tabs-slice'

type TabsProps = {
    items?: {
        to: string
        label: string
    }[]
}

export const Tabs = ({ items = [] }: TabsProps): React.ReactElement | null => {
    const currentTab = useAppSelector(state => state.tabs.activeTabKey)
    const dispatch = useAppDispatch()

    const onTabClick = (i: number) => {
        dispatch(setActiveTab(i))
    }

    if (!items.length) return null

    return (
        <ul className="nav nav-tabs mb-3">
            {items.map((tab, i) => {
                const active = i === currentTab
                return (
                    <li className="nav-item" key={i}>
                        <NavLink
                            to={tab.to}
                            onClick={() => onTabClick(i)}
                            className={`nav-link px-3${active ? ' active text-primary' : ''}`}
                        >
                            {tab.label}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    )
}
