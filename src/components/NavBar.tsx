import * as React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.scss'

function NavBar() {
    return (
        <div className='navBar'>
            <div className='menu_top'>
                <Link to='/'><div className='menu_btn'>TO GARAGE</div></Link>
                <Link to='/winners'><div className='menu_btn'>TO WINNERS</div></Link>
            </div>
        </div>
    );
}

export default NavBar;