import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Search() {


  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <div id="searchbar">
        <FaSearch></FaSearch>
        <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input} />
      </div>
    </FormStyle>
  );
}


const FormStyle = styled.form`
  margin: 0rem 45rem;

  div {
    position: relative;
    width: 100%;
  }

  input{
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    width: 25vw;
    color: white;
    padding: 0.75rem 0.5rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    text-align: center;
    margin-top: 1rem;
  }

  svg{
    position: absolute;
    top: 42%;
    left: 0%;

    color: white;
  }

  #searchbar {
    display: flex;
    justify-content: flex-end;
  }
`;
export default Search;
