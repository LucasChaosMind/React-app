import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Navbar, Announcement, Newsletter, Footer} from '../components'

const Wrapper = styled.div`
  padding: 20px;

`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  color: #ff00ee;
  border: 1px solid #ff00ee;
  background: transparent;
  transition: all 0.7s ease;
  &:hover {
    color: #fff;
    background-color: #ff00ee;
  }
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const TopTexts = styled.div`
 
`
const TopText = styled.span`
  cursor: pointer;
  padding-bottom: 4px;
  border-bottom: 1px solid #ff00ee;
  margin: 0 10px;
  transition: all 0.7s ease;
  &:hover{
    color: #ff00ee;
  }
`
const Info = styled.div`
   flex: 3;
`
const Summary = styled.div`
  flex: 1;
  border: 1px solid #ff00ee;
`
const ProductSee = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span``
const ProductID = styled.span``
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`
const ProductSize = styled.span``
const ProductAmountContainer = styled.div`

`
const ProductAmount = styled.span``
const ProductPrice = styled.span``
const Cart = () => {
  return (
    <>
        <header>
            <Navbar/>
            <Announcement/> 
        </header>
        <main>
            <Wrapper>
                <Title>Your Shopping Cart</Title>
                <Top>
                  <TopButton>Continue Shoping</TopButton>
                  <TopTexts>
                      <TopText>Shopping Bag: 2</TopText>
                      <TopText>Your Wishlist: 0</TopText>
                  </TopTexts>
                  <TopButton>Checkout Now</TopButton>
                </Top>
                <Bottom>
                  <Info>
                     <ProductSee>
                        <ProductDetail>
                            <Image src="https://i.pinimg.com/564x/a6/51/02/a651026986996bb1b607d4487c5a5336.jpg"/>
                            <Details>
                              <ProductName><b>Product:</b>Thunder Shock Button</ProductName>
                              <ProductID><b>ID:</b>00000001</ProductID>
                              <ProductColor color="#ff00ee"/>
                              <ProductSize><b>Size:</b>XXL</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                              <Add/>
                              <ProductAmount>2</ProductAmount>
                              <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$900</ProductPrice>
                        </PriceDetail>
                     </ProductSee>
                  </Info>
                  <Summary>

                  </Summary>
                </Bottom>
            </Wrapper>      
        </main>
        <footer>
            <Footer/>
        </footer> 
    </>
  )
}

export default Cart
