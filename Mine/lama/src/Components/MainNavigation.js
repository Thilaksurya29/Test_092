import "./MainNavigation.css"
import {Link} from 'react-router-dom';
const MainNavigation = () => {
    return (

      <header class="header">
        <h1 class="logo">Flexbox</h1>
        <nav class="navbar">
            <ul class="main-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

       
    );
};

export default MainNavigation;