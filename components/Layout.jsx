import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({navObj ,children, home}) => {
    return (
        <section>
            <div id="top"></div>
            <Navbar navObj={navObj}/>
            <main>{children}</main>
            <Footer homePage={home}/>
        </section>
    );
};

export default Layout;
