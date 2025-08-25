import styled from "styled-components";
import { GlobalStyles, MyRoutes, Sidebar } from "./index.js";
import { Device } from "./styles/breakpoints";
function App() {
  return (
    <Container>
      <GlobalStyles />
      <section className="contentSideBar"><Sidebar /></section>
      <section className="contentMenuAmbur">menu hamburguesa</section>
      <section className="contentRouters"><MyRoutes /></section>
    </Container>
  );
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  .contentSideBar {
    display: none;
    background-color: rgba(78,45,78,0.5);
  }
  .contentMenuAmbur {
    position: absolute;
    background-color: rgba(13,241,215,0.5);
  }
  .contentRouters {
    background-color: rgba(231,13,136,0.5);
    grid-column: 1;
    width: 100%;

  }
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
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
