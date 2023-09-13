import { Balance } from "../components/Balance";
import { Income } from "../components/Income";
import { ExpenseList } from "../components/ExpenseList";
import { AddExpense } from "../components/AddExpense";
import { Header } from "../components/Header";

export const HomePage = ({ mode, lightmode }) => {
  return (
    <>
      <Header mode={mode} lightmode={lightmode} />
      <Balance lightmode={lightmode} />
      <Income lightmode={lightmode} />
      <ExpenseList lightmode={lightmode} />
      <AddExpense lightmode={lightmode} />
    </>
  );
};
