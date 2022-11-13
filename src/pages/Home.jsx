import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import PostList from "../components/features/PostList";
// import Content from "../components/features/Content";
const Home = () => {

  return (
    <HomePage>
      <Layout>
        <PostList />
        {/* <Content /> */}
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
`;