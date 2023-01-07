import { Image } from 'react-bootstrap'
import { ShopWindow, GearWide, Coin, Person } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'
import style from './Sidebar.module.scss'

function Sidebar() {
    return (
        <div
            className='position-fixed left-0 vh-100 bg-secondary'
            style={{ width: '90px' }}
        >
            <div>
                <Image src='/logo/logo.png' width={80} height={80} />
            </div>
            <div className='text-center d-flex justify-content-evenly flex-column h-75'>
                <NavLink className='text-light' to={'/'}>
                    <ShopWindow
                        aria-label='home'
                        width={70}
                        height={70}
                        className={`rounded p-4 ${style['nav-item']}`}
                        title='Home'
                    />
                </NavLink>
                <NavLink className='rounded text-light' to={'promo'}>
                    <Coin
                        aria-label='promotion'
                        width={70}
                        height={70}
                        className={`rounded p-4 ${style['nav-item']}`}
                        title='Promotion'
                    />
                </NavLink>
                <NavLink className='text-light' to={'profile'}>
                    <Person
                        aria-label='profile'
                        width={70}
                        height={70}
                        className={`rounded p-4 ${style['nav-item']}`}
                        title='Profile'
                    />
                </NavLink>
                <NavLink className='text-light' to={'order'}>
                    <GearWide
                        aria-label='setting'
                        width={70}
                        height={70}
                        className={`rounded p-4 ${style['nav-item']}`}
                        title='Setting'
                    />
                </NavLink>
            </div>
            <div></div>
        </div>
    )
}

export default Sidebar
