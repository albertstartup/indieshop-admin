import styled from "styled-components";
import { AppBar, Toolbar, Drawer } from "@material-ui/core";

export default function Index() {
  return (
    <div>
      <AppBar elevation={0}>
        <Toolbar>Test</Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open>
          <div style={{width: "240px"}}></div>
        </Drawer>
      <Title>Hello Next.js</Title>
    </div>
  );
}

const Title = styled.h1`
  color: red;
`;
