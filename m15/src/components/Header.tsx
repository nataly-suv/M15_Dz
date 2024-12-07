import styled from 'styled-components';

const HeaderConteiner = styled.header`
    padding: 20px 50px;
    h1 {
    font-size: 30px;
    color: blueviolet;
    text-align: center;
    }
    
`



const Header = () => {
    return (
        <HeaderConteiner>
            <h1>Домашнее задание. Модуль15</h1>
        </HeaderConteiner>
    )
}

export default Header;