import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color:var(--black);
    color: var(--white);
    flex:1;
    padding-top: 50px;
    padding-right: 5%;
    padding-left: 5%;
`;

//"children" recebe por paramtro o html de onde o template foi referenciado
function PageTemplate( {children}){
    return (
        <>
            <Menu/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </>
    )
}

export default PageTemplate;