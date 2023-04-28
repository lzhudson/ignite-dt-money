import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import logo from '../../assets/img/logo.svg';
export function Header() {
  return <HeaderContainer>
    <HeaderContent>
      <img src={logo} alt="DT Money" />
      <NewTransactionButton>Nova transação</NewTransactionButton>
    </HeaderContent>
  </HeaderContainer>
}