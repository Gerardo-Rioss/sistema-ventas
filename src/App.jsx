import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, MyRoutes, Sidebar } from "./index.js";
import { Device } from "./styles/breakpoints";
import { useThemeStore } from "./store/ThemeStore";
import { useState } from "react";
function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const { themeStyle } = useThemeStore();
  return (
    <ThemeProvider theme={themeStyle}>
      <Container className={sideBarOpen ? "active" : ""}>
        <GlobalStyles />
        <section className="contentSideBar">
          <Sidebar state={sideBarOpen} setState={()=>setSideBarOpen(!sideBarOpen)}  />
        </section>
        <section className="contentMenuAmbur">menu hamburguesa</section>
        <section className="contentRouters">
          <MyRoutes />
        </section>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  transition: 0.1s ease-in-out;
  
  .contentSideBar {
    display: none;
  }

  .contentMenuAmbur {
    position: absolute;
  }

  .contentRouters {
    grid-column: 1;
    width: 100%;
  }
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    &.active {
      grid-template-columns: 260px 1fr;
    }
    .contentSideBar {
      display: initial;
    }
    .contentMenuAmbur {
      display: none;
    }
    .contentRouters {
      grid-column: 2;
    }
`;

export default App;
