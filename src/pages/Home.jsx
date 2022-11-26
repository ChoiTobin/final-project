import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Content from "../components/features/Posts/Content";

const Home = () => {
  return (
    <HomePage>
      <Layout>
        <Content />
      </Layout>
    </HomePage>
  );
};

export default Home;

const HomePage = styled.div`
  max-width: 100vw;
  margin: auto;
`;