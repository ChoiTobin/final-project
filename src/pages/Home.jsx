import React from "react"
import styled from "styled-components"
import Layout from '../components/Layout/Layout';
import Header from  "../components/Layout/Header"
import Footer from  "../components/Layout/Footer"
import Content from "../components/features/Posts/Content"
const Home = () => {
  
  return (
    <HomePage>
      <Layout>
        {/* <Header/> */}
          <Content />
        {/* <Footer/>  */}
      </Layout>
    </HomePage>
  )
}

export default Home ;

const HomePage = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  margin: auto;
`