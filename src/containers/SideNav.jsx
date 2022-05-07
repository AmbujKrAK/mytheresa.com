import "../containers/SideNav.css"
const SideNav = () => {
    return (
    <div className="SideNavItems">
        <div>
            <h3>BRANDS</h3>
            <ul className="brands">
                <li><input type="checkbox" /> Alexander McQueen</li>
                <li><input type="checkbox" /> Etro</li>
                <li><input type="checkbox" /> Khaitig</li>
                <li><input type="checkbox" /> Gucci</li>
                <li><input type="checkbox" /> Ganni</li>
                <li><input type="checkbox" /> Nike</li>
                <li><input type="checkbox" /> Isabe</li>
                <li><input type="checkbox" /> Adidas</li>
            </ul>
        </div>
        <div>
            <h3>CATEGORY</h3>
            <ul className="category">
                <li><input type="checkbox" /> Western</li>
                <li><input type="checkbox" /> Skirt</li>
                <li><input type="checkbox" /> Jeans</li>
                <li><input type="checkbox" /> Shirts</li>
                <li><input type="checkbox" /> T-Shirts</li>
                <li><input type="checkbox" /> Mini Dress</li>
                <li><input type="checkbox" /> Bottom Wear</li>
                <li><input type="checkbox" /> Top Wear</li>
                <li><input type="checkbox" /> Sports</li>
                <li><input type="checkbox" /> Sandals</li>
                <li><input type="checkbox" /> Flat</li>
                <li><input type="checkbox" /> Foot Wear</li>
            </ul>
        </div>
        <div>
            <h3>COLORS</h3>
            <ul className="colors">
                <li><input type="checkbox" /> Black</li>
                <li><input type="checkbox" /> Blue</li>
                <li><input type="checkbox" /> Orange</li>
                <li><input type="checkbox" /> White</li>
                <li><input type="checkbox" /> Yellow</li>
                <li><input type="checkbox" /> Brown</li>
                <li><input type="checkbox" /> Pink</li>
            </ul>
        </div>
    </div>
    );
}

export default SideNav;