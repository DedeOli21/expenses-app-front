// ExpensesChart.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { formatCurrencyBR } from '../utils/formatters';

interface ExpensesChartProps {
  userExpenses: { user: string; total: number }[];
}

export default function ExpensesChart({ userExpenses }: ExpensesChartProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Gastos por Usuário</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={userExpenses}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="user" />
          <YAxis />
          <Tooltip formatter={(value) => formatCurrencyBR(Number(value))} />
          <Bar dataKey="total" fill="#8884d8" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
