import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { defaultTheme } from "./styles/themes/default";
import { Transactions } from "./pages/Transactions";
import { TransactionsProvider } from "./context/TransactionsContent";

export function App() {
  return (
    <TransactionsProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Transactions />
      </ThemeProvider>
    </TransactionsProvider>
  )
}
