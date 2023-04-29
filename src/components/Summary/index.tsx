import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./style";
import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContent";

export function Summary() {

  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, currentTransaction) => {
    if(currentTransaction.type === 'income') {
      acc.income += currentTransaction.price;
      acc.total += currentTransaction.price
    } else if(currentTransaction.type === 'outcome') {
      acc.outcome += currentTransaction.price;
      acc.total -= currentTransaction.price
    }
    return acc;
  }, { income: 0, outcome: 0, total: 0 })

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>{summary.income}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{summary.outcome}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFFFFF" />
        </header>
        <strong>{summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}