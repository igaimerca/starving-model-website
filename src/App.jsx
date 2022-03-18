import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import "./App.css"
import About from './components/About/About';
import Team from './components/Team/Team';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <header>
                <NavBar />
                <div className="banner-text">
                    <h2>Starving Models</h2>
                    <h2 className="sub-title">NFTs</h2>
                    <p>100+ NFTs Artistic Starving Models</p>
                </div>
            </header>
            <About />
            <Team />
        </div>
    )
}

export default App
