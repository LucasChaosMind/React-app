import styled  from 'styled-components'
import React from 'react'


const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  border-radius: 0 5px;
  position: relative;
  transition: 1s ease;
  &:hover{
    box-shadow: 2px 2px 8px #${props=> props.color};
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 5px;
  
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6));
  border-radius: 0 5px;
`
const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  font-weight: 500;
`

const Button = styled.button`
  padding: 10px 15px;
  font-size: 15px;
  font-weight: 500;
  color: #${props=> props.color};
  border: 2px solid #${props=> props.color};
  background-color: rgba(0,0,0,0.35);
  transition: 0.7s ease;
  cursor: pointer;
  &:hover{
    background-color: rgba(0,0,0,0.7);
  }
` 

const CategoryItem = ({item}) => {
  return (
    <Container color={item.color}>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button color={item.color}>Show Now</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem