"use client";
import React, { useState } from 'react';
import Filters from './components/Filters';
import DashboardHeader from './components/DashboardHeader';
import ExpensesChart from './components/ExpensesChart';
import ExpensesCategoryChart from './components/ExpensesCategoryChart';
import UserValuesTable from './components/UserValuesTable';
import { useDashboardData } from './hooks/useDashboardData';

export default function Dashboard() {
  const [filters, setFilters] = useState({
    name: '',
    tripId: '',
    startDate: undefined,
    endDate: undefined,
  });

  const { data, isLoading } = useDashboardData(filters);

  return (
    <div className="container p-6">
      <DashboardHeader totalSpent={data?.totalSpent} />
      <Filters filters={filters} setFilters={setFilters} />

      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
            <ExpensesChart userExpenses={data?.userExpenses} />
            <ExpensesCategoryChart categoryExpenses={data?.categoryExpenses} />
          </div>
          <div className="mt-6">
            <UserValuesTable expensesDetails={data?.expensesDetails} />
          </div>
        </>
      )}
    </div>
  );
}
