import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import logo from '../../assets/img/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
export function Header() {
  return <HeaderContainer>
    <HeaderContent>
      <img src={logo} alt="DT Money" />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>Nova Transação</Dialog.Title>
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </HeaderContent>
  </HeaderContainer>
}