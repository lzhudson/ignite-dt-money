import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form>
          <input type="text" placeholder='Descrição' required />
          <input type="text" placeholder='Preço' required />
          <input type="text" placeholder='Categoria' required />
          <TransactionType>
            <TransactionTypeButton value='income' variant='income' type='button'>
              <ArrowCircleUp />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton value='outcome' variant='outcome' type='button'>
              <ArrowCircleDown />
              Saída
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit">Cadastrar</button>
        </form>

      </Content>
    </Dialog.Portal>
  )
}