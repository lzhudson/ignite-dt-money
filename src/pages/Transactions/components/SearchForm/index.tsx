import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod';

const searchFormTransactionsSchema = zod.object({
  query: zod.string().min(1, { message: 'É obrigatório' })
})


type DataSearchTransactionsForm = zod.infer<typeof searchFormTransactionsSchema>

export function SearchForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<DataSearchTransactionsForm>({
    resolver: zodResolver(searchFormTransactionsSchema)
  })
  

  async function handleSearchTransactions(data: DataSearchTransactionsForm) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data);
  }

  return (
    <SearchFormContainer onSubmit={(handleSubmit(handleSearchTransactions))}>
      <input type="text" placeholder="Busque por transações" {...register('query')} />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}