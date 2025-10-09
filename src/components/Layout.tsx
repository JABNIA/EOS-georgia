import Footer from './footer/Footer'
import Header from './Header'
import { Outlet } from 'react-router'


function Layout() {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
