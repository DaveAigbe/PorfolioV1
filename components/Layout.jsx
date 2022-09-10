import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({logoUrl, navObj ,children, home}) => {
    return (
        <section>
            <div id="top"></div>
            <Navbar navObj={navObj} logoUrl={logoUrl}/>
            <main>{children}</main>
            <Footer logoUrl={logoUrl} homePage={home}/>
        </section>
    );
};

export default Layout;
