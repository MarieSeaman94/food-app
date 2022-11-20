import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


function Category() {
  return (
    <List>
      <StyledLink to={ '/cuisine/Italian' }>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledLink>
      <StyledLink to={ '/cuisine/American' }>
        <FaHamburger />
        <h4>American</h4>
      </StyledLink>
      <StyledLink to={ '/cuisine/Japanese' }>
        <GiNoodles />
        <h4>Japanese</h4>
      </StyledLink>
      <StyledLink to={ '/cuisine/Chinese' }>
        <GiChopsticks />
        <h4>Chinese</h4>
      </StyledLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4{
    color: white;
    font-size:0.8rem;
  }
`;


export default Category;
