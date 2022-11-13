import styled from "styled-components"
import PostList from "../components/features/PostList";
// import Content from "../components/features/Content";
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import Layout from '../components/Layout/Layout';
import MyPage from "./MyPage";

const Home = () => {

  return (
    <HomePage>
      <Layout>
        <Header />
        <PostList />
        {/* <Content /> */}
        <MyPage />   
        <Footer />
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