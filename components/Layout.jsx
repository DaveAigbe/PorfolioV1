import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children, home}) => {
    return (
        <section>
            <div id="top"></div>
            <Navbar/>
            <main>{children}</main>
            <Footer homePage={home}/>
        </section>
    );
};

export default Layout;
