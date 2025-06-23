import { useState } from 'react'
import { Outlet } from 'react-router'
import { Header } from '../Header/Header'
import { Title } from '../Title/Title'
import { Main } from '../Main/Main'
import { Container } from '../Container/Container'
import { Footer } from '../Footer/Footer'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { Tabs } from '../Tabs/Tabs'

interface BreadcrumbItem {
    to: string
    label: string
}
export function Layout() {
    const [title, setTitle] = useState<string>('')
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([])
    const [tabs, setTabs] = useState<BreadcrumbItem[]>([])

    return (
        <div className="min-vh-100 d-flex flex-column">
            <Header />
            <Main>
                <Container>
                    {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
                    {title && <Title>{title}</Title>}
                    {tabs.length > 0 && <Tabs items={tabs} />}
                    <Outlet context={{ title, setTitle, setBreadcrumbs, setTabs }} />
                </Container>
            </Main>
            <Footer container={Container} />
        </div>
    )
}