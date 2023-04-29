import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form';

const schemaRegisterNewTransaction = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome'])
})

type DataRegisterNewTrasaction = zod.infer<typeof schemaRegisterNewTransaction>

export function NewTransactionModal() {
  const { control, register, handleSubmit, formState: { isSubmitting } } = useForm<DataRegisterNewTrasaction>({
    resolver: zodResolver(schemaRegisterNewTransaction)
  })
  async function handleCreateNewTrasaction(data: DataRegisterNewTrasaction) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTrasaction)}>
          <input type="text" placeholder='Descrição' required {...register('description')} />
          <input type="number" placeholder='Preço' required   {...register('price', { valueAsNumber: true })} />
          <input type="text" placeholder='Categoria' required  {...register('category')} />
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <TransactionType value={field.value} onValueChange={field.onChange}>
                <TransactionTypeButton value="income" variant='income' type='button'>
                  <ArrowCircleUp />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton value="outcome" variant='outcome' type='button'>
                  <ArrowCircleDown />
                  Saída
                </TransactionTypeButton>
              </TransactionType>

            )}
          />

          <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>

      </Content>
    </Dialog.Portal>
  )
}