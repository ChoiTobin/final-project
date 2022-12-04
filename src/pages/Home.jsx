import React from "react"
import Layout from '../components/Layout/Layout';
import Header from  "../components/Layout/Header"
import Footer from  "../components/Layout/Footer"
import Content from "../components/features/Posts/Content"
const Home = () => {
  
  return (
    <div className="home">
      <Layout>
        <Header/>
          <Content />
        <Footer/> 
      </Layout>
    </div>
  )
}

export default Home;

