"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

export function useDashboardData(filters: {
  name?: string;
  tripId?: string | number;
  startDate?: string;
  endDate?: string;
}) {
  const [data, setData] = useState<any>({
    totalSpent: 0,
    userExpenses: [],
    categoryExpenses: [],
    expensesDetails: [],
  });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDashboardData() {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/dashboard/summary', {
          params: filters,
        });
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do dashboard:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, [filters]);

  return { data, isLoading };
}
