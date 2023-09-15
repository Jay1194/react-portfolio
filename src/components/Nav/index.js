import React from 'react';

const Nav = () => {
    return(
        <header className="">
            <nav>
                <ul className=''>
                        <li>
                            <a href="#About">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a>
                            Portfolio
                            </a>
                        </li>
                        <li >
                            <a>
                             Contact
                            </a>
                        </li>
                        <li>
                            <a>
                            Resume
                            </a>
                        </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;