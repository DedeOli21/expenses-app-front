"use client";
import React from 'react';
import { formatCurrencyBR, formatDateBR } from '../utils/formatters';

interface ExpensesDetailsProps {
  expensesDetails: {
    id: number;
    user: string;
    trip: string;
    category: string;
    date: string;
    value: number;
  }[];
}

export default function UserValuesTable({ expensesDetails }: ExpensesDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuário</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Viagem</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {expensesDetails && expensesDetails.map((expense) => (
            <tr key={expense.id}>
              <td className="px-4 py-2 whitespace-nowrap">{expense.user}</td>
              <td className="px-4 py-2 whitespace-nowrap">{expense.trip}</td>
              <td className="px-4 py-2 whitespace-nowrap">{expense.category}</td>
              <td className="px-4 py-2 whitespace-nowrap">{formatDateBR(expense.date)}</td>
              <td className="px-4 py-2 whitespace-nowrap">{formatCurrencyBR(expense.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
