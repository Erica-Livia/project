import React  from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoLogInOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import { FaCircleUser } from "react-icons/fa6";
import './nav.css';


const Nav = ( { handleInputChange, query}) => {
    const {loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <>
        <div className="main_header">
            <div className="container">
                <div className="logo">
                <Link to='/home' className="link">Wanderlust</Link>
                </div>
                <div className='search_box'>
                    <input 
                    className="search-input"
                    type="text"
                    onChange={handleInputChange}
                    value={query}
                    placeholder="Search your Destination"
                    />
                    {/* <input type='text' value='' placeholder='Search your Destination' autoComplete="off"></input>
                    <a className='button'><CiSearch /></a> */}
                     <a className='button'><CiSearch /></a>
                </div>
                <div className="nav">
                            <ul>
                                <li>
                                    <Link to='/destinations' className="link">Destinations</Link>
                                </li>
                                {
                                    isAuthenticated &&
                                    (
                                        <li>
                                            <Link to='/favorites' className="link">Favorites</Link>
                                        </li>
                                    )
                                }
                                {
                                    isAuthenticated &&
                                    (
                                        <li>
                                            <Link to='/profile' className='link'>Profile</Link>
                                        </li>
                                    )
                                }                                
                                {/* <li>
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}></button>
                                </li>
                                                        */}
                            </ul>
                             <div className='auth'>
                                {
                                    isAuthenticated ?
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} alt='logout'>Logout</button>
                                    :
                                    <button onClick={() => loginWithRedirect()} alt='login'>Login</button>
                                }
                            </div>

                        </div>
                        
                    </div>
                </div>
        </>
    )
}
export default Nav;