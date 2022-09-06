import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import {Badge} from '@material-ui/core'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    height: 100%;
    padding: 10px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
` 
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  margin: 25px;
  pading: 5px;
`
const Input = styled.input`
  border: none;
  padding: 4px;
`
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`
const Navebar = () => {
  return (
    <Container>
      <Wrapper>
          <Left>
              <Language>
                EN
              </Language>
              <SearchContainer>
                <Input/>
                <Search style={{color: "#444", fontSize: 16}}/>
              </SearchContainer>
          </Left>
          <Center>
              <Logo>Waycircle.</Logo>
          </Center>
          <Right>
              <MenuItem>Register</MenuItem>
              <MenuItem>Sing In</MenuItem>
              <MenuItem>
                <Badge badgeContent={4} color='primary'>
                  <ShoppingCartOutlined/>
                </Badge>
              </MenuItem>
              
          </Right>
      </Wrapper>
    </Container>
  )
}

export default Navebar
