import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import PostList from "../components/features/PostList";
const Home = () => {

  return (
    <HomePage>
      <Layout>
        <PostList />
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