"use client";
import React from 'react';

export default function Filters({ filters, setFilters }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          className="input"
          placeholder="Nome do usuário"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
        <input
          className="input"
          placeholder="ID da Viagem"
          value={filters.tripId}
          onChange={(e) => setFilters({ ...filters, tripId: e.target.value })}
        />
        <input
          type="date"
          className="input"
          value={filters.startDate || ''}
          onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
        />
        <input
          type="date"
          className="input"
          value={filters.endDate || ''}
          onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
        />
      </div>
    </div>
  );
}
