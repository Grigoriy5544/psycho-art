import './App.scss'
import Header from "./components/header/Header.tsx";
import Home from "./components/home/Home.tsx";
import Sponsored from "./components/sponsored/Sponsored.tsx";
import About from "./components/about/About.tsx";
import Colleaction from "./components/colleaction/Colleaction.tsx";
import FeaturedArtworks from "./components/featured-artworks/FeaturedArtworks.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {

    return (
        <>
            <Header/>
            <Home/>
            <Sponsored/>
            <About/>
            <Colleaction/>
            <FeaturedArtworks/>
            <Footer/>
        </>
    )
}

export default App
