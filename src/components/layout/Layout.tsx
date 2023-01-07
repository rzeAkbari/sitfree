import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function Layout() {
    return (
        <Container fluid className='bg-secondary w-100 vh-100 g-0'>
            <Sidebar />
            <main
                className='rounded-5 rounded-end bg-light vh-100 p-3'
                style={{ width: 'calc(100% - 90px)', marginLeft: '90px' }}
            >
                <Outlet />
            </main>
        </Container>
    )
}

export default Layout
