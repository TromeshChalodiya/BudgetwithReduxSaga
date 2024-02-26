import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import './App.css';
import { getAllEntries } from './actions/entries.action';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState({});
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entries);
  const { isOpen, id } = useSelector((state) => state.modals);

  useEffect(() => {
    const index = entries.findIndex((el) => el.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

  useEffect(() => {
    let totalExpense = 0;
    let totalIncome = 0;

    entries.map((entry) => {
      const getAmountFloat = parseFloat(entry.value);
      if (entry.isExpense) {
        totalExpense += getAmountFloat;
      }
      totalIncome += getAmountFloat;
      return entry;
    });
    const totalSaving = totalIncome - totalExpense;

    setTotal(totalSaving.toFixed(2));
    setIncomeTotal(totalIncome.toFixed(2));
    setExpenseTotal(totalExpense.toFixed(2));
  }, [entries]);

  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <MainHeader title="Monthly Budget" />

        <DisplayBalance title="Your Balance" value={total} size="small" />
        <DisplayBalances totalIncome={incomeTotal} totalExpense={expenseTotal} />

        <MainHeader title="History" type="h3" />
        <EntryLines entries={entries} />
        <MainHeader title="Add new transaction" type="h3" />
        <NewEntryForm />
        <ModalEdit isOpen={isOpen} {...entry} />
      </Container>
    </div>
  );
}

export default App;
