export default function Header(){
    return(
        <header>
            <div className="header">
                <div className="text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and <br></br> classic cocktails in a livel but casual environment. <br></br>The restaurant features a locall-sourced menu with daily specials.</p>
                    <button className="reserve">Reserve a Table</button>
                </div>
                <div className="head-container">
                    <img src="restauranfood.jpg" alt="Man carrying food on plate" className="head"></img>
                </div>
            </div>
        </header>
    )
}