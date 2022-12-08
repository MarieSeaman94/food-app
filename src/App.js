import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <GiKnifeFork />
      <Logo to={"/"}>Yum!</Logo>
      <Nav>
        <Search />
        <Category />
      </Nav>
        <Pages />
      </BrowserRouter>
    </div>
  );
}


const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster', cursive;
  color: black;

  svg{
    font-size: 2rem;
  }
`;

const Nav = styled.div`
  padding: 0rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export default App;
