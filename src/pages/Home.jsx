import styled from "styled-components"
import Layout from '../components/Layout/Layout';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import PostList from "../components/features/PostList";

const Home = () => {

  return (
    <HomePage>
      <Layout>
        <Header/>
        <PostList /> 
        <Footer/>
      </Layout>
    </HomePage>
  )
}

export default Home ;

const HomePage = styled.div`
  /* width: 90%; */
  max-width: 1440px;
  margin: auto;
  background-color: #b5cefd;
`