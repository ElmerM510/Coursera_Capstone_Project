export default function Highlights(){
    return(
        <main className="highlights">
                <div className="title">
                    <h2>Specials</h2>
                    <button type="submit">Online Menu</button>
                </div>
                <div className="cards">
                    <div className="Greek-Salad">
                        <img src="greeksalad.jpg" alt="greek salad" className="food"></img>
                        <h3 className="dish">Greek Salad</h3>
                        <aside>Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus
                            blandit vitae.</aside>
                        <button type="submit" className="delivery">Order Delivery</button>
                    </div>
                    <div className="Bruchetta">
                         <img src="bruchetta.svg" alt="bruchetta" className="food"></img>
                         <h3 className="dish">Bruchetta</h3>
                         <aside> Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus
                            blandit vitae. </aside>
                        <button type="submit" className="delivery">Order Delivery</button>
                    </div>
                    <div className="Lemon-Dessert">
                        <img src="lemondessert.jpg" alt="Lemon Dessert" className="food"></img>
                        <h3 className="dish">Lemon Dessert</h3>
                        <aside>Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus
                            blandit vitae.</aside>
                        <button type="submit" className="delivery">Order Delivery</button>
                    </div>
                </div>
        </main>
    )
}