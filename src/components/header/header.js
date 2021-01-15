import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
const Wrapper = styled.div`
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        color: white;
    `;
const Logo = styled.div`
        font-weight: bold;
    `;
const NavA = styled.div`
        margin-right: 15px;
        text-decoration: none;
        color: white;
        cursor: pointer;
    `;
const NavWrapper = styled.div`
        display: flex;
    `
 

const Header = () => {
    return(
        <Wrapper>
            <div className="logo">
                <Logo>
                    <Link to='/'>
                        Game of Thrones DB
                    </Link>
                </Logo>
            </div>
            <NavWrapper>
                <NavA className="nav-link">
                    <Link to='/characters'>Characters</Link>
                    
                </NavA>
                <NavA  className="nav-link">
                    <Link to='/houses'>Houses</Link>
                </NavA>
                <NavA className="nav-link">
                    <Link to='/books'>Books</Link>
                </NavA>
            </NavWrapper>
        </Wrapper>
    )
    


}

export default Header