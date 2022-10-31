import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Context';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content lg:mt-3 p-2 shadow rounded-box w-80 bg-white">
                        <li className='flex-col items-center text-primary w-full border border-white m-0 p-0'>
                            <Link className='hover:text-warning' to='/'>Home</Link>
                            <Link className='hover:text-warning' to="/room">Room</Link>
                            {
                                user?.email ?
                                    <Link className='hover:text-warning' to='/'>
                                        <button onClick={handleLogOut}>Log Out</button>
                                    </Link>
                                    : <>
                                        <Link className='hover:text-warning' to='/login'>Log In</Link>
                                        <Link className='hover:text-warning' to='/signup'>Sign Up</Link>

                                    </>
                            }
                            <Link className='hover:text-warning' to='/about'>About</Link>
                        </li>

                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl hover:text-warning">Hotel Night</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link className='hover:text-warning' to='/'>Home</Link>
                        <Link className='hover:text-warning' to='/room'>Room</Link>
                        {
                            user?.email ?
                                <Link className='hover:text-warning' to='/'><button onClick={handleLogOut}>Log Out</button></Link>
                                : <>
                                    <Link className='hover:text-warning' to='/login'>Log In</Link>
                                    <Link className='hover:text-warning' to='/signup'>Sign Up</Link>

                                </>
                        }

                        <Link className='hover:text-warning' to='/about'>About</Link>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL} alt='logo' title={user?.displayName} />
                    </div>
                </label>
            </div>
        </div >
    );
};

export default Header;