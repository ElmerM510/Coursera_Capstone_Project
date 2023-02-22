import '../App.css';

export default function Nav(){
    return(
        <nav className="Nav">
                <ul className='List'>
                    <div className='Logo-container'> <li><img src="logo.png" alt="Little Lemon Logo" className='Logo'></img></li></div>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Menu">Menu</a></li>
                    <li><a href="#OrderOnline">Order Online</a></li>
                    <li><a href="#Login">Login</a></li>
                </ul>
        </nav>
    )
}

