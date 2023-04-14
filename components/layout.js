import Footer from "./footer";
import Header from "./header";

export default function Layout({children, isLogIn}) {
    return(
        <>
            <Header isLogIn={isLogIn}/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}