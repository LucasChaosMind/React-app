import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Container =styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px 8px;
    background: linear-gradient(75deg, rgba(235,23,184,0.1357878151260504) 56%, rgba(10,173,207,0.11021358543417366) 100%);
    position: relative;
`
const Circle = styled.div`
    widht: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
const Info = styled.div`
    opacity: 0;
    widht: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.1));
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px 8px;
    transition: 0.7s ease;
    &:hover{
        opacity: 1;
    }
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border: 1px solid transparent;
    transition: 1s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
        color: #ff00ee;
        border: 1px solid #ff00ee;
    }
`
const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product