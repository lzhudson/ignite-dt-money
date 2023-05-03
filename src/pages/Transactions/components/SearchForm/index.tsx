import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../context/TransactionsContent'

const searchFormTransactionsSchema = zod.object({
  query: zod.string(),
})

type DataSearchTransactionsForm = zod.infer<typeof searchFormTransactionsSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<DataSearchTransactionsForm>({
    resolver: zodResolver(searchFormTransactionsSchema),
  })

  async function handleSearchTransactions(data: DataSearchTransactionsForm) {
    await fetchTransactions(data.query)
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
