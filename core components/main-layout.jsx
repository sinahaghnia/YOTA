import Footer from "../fixed-components/footer"
import Header from "../fixed-components/header"
import LayoutPortal from '../core components/layout-portal';

function MainLayout({children}){

    return(
        <>
        
            <LayoutPortal> <header> <Header/> </header>  </LayoutPortal> 

            <main> {children} </main>

            <footer> <Footer/> </footer>

        </>
    )
}

export default MainLayout