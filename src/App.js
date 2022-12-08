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
      <Span>
        <GiKnifeFork />
        <Logo to={"/"}>Yum!</Logo>
      </Span>
      <Nav>
        <Search />
        <Category />
      </Nav>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Span = styled.div`
  margin-top: 1rem;
  background-color: #f16c28;
  border: none;
  border-radius: 50%;
  width: fit-content;
  padding: 2rem 1rem;

  svg{
    font-size: 2rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster', cursive;
  color: black;
`;

const Nav = styled.div`
  padding: 0rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  position: relative;
  bottom: 7rem;
`;

export default App;
