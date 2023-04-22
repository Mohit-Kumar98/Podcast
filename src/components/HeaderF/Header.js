import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import { GlobalContext } from '../../context/GlobalState';
import Listened from '../Listened';
const Header = () => {

    const { watchlist, watched } = useContext(GlobalContext);

    // console.log(watchlist ? true : false)
    return (
        <>
            <header>
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Home</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to="/" activeClassName='active'>WatchList {watchlist.length > 0 ? <i class="fa-solid fa-tv" style={{ color: "gold" }}></i> : <i class="fa-solid fa-tv"></i>}</Link>
                        </li>
                        <li>
                            <Link to="/watched" activeClassName='active'>Listened {watched.length > 0 ? <i class="fas fa-eye-slash" style={{ color: "red" }}></i> : <i class="fas fa-eye"></i>}</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
