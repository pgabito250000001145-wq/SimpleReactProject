import React from 'react';

function Header() {
    return (
        <header style={{padding: '20px', textAlign: 'center', backgroundColor: '#282c34', color: 'white'}}>
            <h1>Junsoy Love Jun</h1>
            <p>Soyans sa Jerome Agdao</p>
            <nav>
                <a href="#about" style={{margin: '0 10px', color: 'white'}}>About</a>
                <a href="#projects" style={{margin: '0 10px', color: 'white',}}>Project</a>
                <a href='#contact' style={{margin: '0 10px', color: 'white'}}>Contact</a>
            </nav>
        </header>
    )
}


export default Header;