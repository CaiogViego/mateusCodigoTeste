import React from 'react';
import { Container, Title } from './styled';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();


  function myfunction() {
    navigate("/c");
  }

  return (
    <>

      <Title>Olá </Title>
      <button onClick={myfunction}>coisas</button>
      <Container color='red' borderColor='blue'>Container</Container>
    </>
  );
}

export default Home;
