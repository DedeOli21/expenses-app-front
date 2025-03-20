"use client";
import React from 'react';
import { formatCurrencyBR } from '@/app/dashboard/utils/formatters';

export default function DashboardHeader({ totalSpent }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold">Dashboard de Gastos</h1>
      <p className="text-gray-600">Total gasto: {formatCurrencyBR(totalSpent || 0)}</p>
    </div>
  );
}
