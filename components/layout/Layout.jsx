import Header from './Header';
import Footer from './Footer';


const Layout = ({context, children, home}) => {
    return (
        <section>
            <div id="top"></div>
            <Header/>
            <main>{children}</main>
            <Footer context={context} homePage={home}/>
        </section>
    );
};

export default Layout;
