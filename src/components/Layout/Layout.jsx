import React from 'react';
import styled from "styled-components";

const Layout = (props) => {
  return <Layouts className="layout">{props.children}</Layouts>;
};

export default Layout;

const Layouts = styled.div`
  width: 95%;
  max-width: 414px;
  height: 785px;
  margin: auto;
<<<<<<< HEAD

=======
>>>>>>> 746fcc812859ad71aafeea7cb190e86b704d0dcb
  background-color: lightpink;
`;