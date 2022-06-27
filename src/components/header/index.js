import React, { useState } from 'react';
import * as S from './styled';
import useGithub from "../../hooks/githubHooks";

function Header() {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState()
  const submitGetUser = () => {
    if ( !usernameForSearch ) return;
    return getUser(usernameForSearch);
  }

  return (
    <header>
      <S.Wrapper>
        <input type="text" placeholder='Digite o username para a pesquisa' onChange={(e) => setUsernameForSearch(e.target.value)}/>
        <button type='submit' onClick={submitGetUser}>Buscar</button>
      </S.Wrapper>
    </header>
  )
}

export default Header