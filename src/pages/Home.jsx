import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import PostList from "../components/features/PostList";
import Search from "../pages/Search";
const Home = () => {

  return (
    <HomePage>
      <Layout>
        <Search />
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