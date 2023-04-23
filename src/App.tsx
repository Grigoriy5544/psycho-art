import './App.scss'
import Header from "./components/header/Header.tsx";
import Home from "./components/home/Home.tsx";
import Sponsored from "./components/sponsored/Sponsored.tsx";
import About from "./components/about/About.tsx";
import Colleaction from "./components/colleaction/Colleaction.tsx";

function App() {

    return (
        <>
            <Header/>
            <Home/>
            <Sponsored/>
            <About/>
            <Colleaction/>
        </>
    )
}

export default App
