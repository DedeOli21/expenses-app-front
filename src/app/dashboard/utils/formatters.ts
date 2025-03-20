export function formatCurrencyBR(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
  
  // Formata datas no padrão brasileiro (dd/MM/yyyy)
  export function formatDateBR(date: string | Date): string {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(new Date(date));
  }
  
  // Formata datas com dia, mês e ano por extenso (ex: 20 de março de 2025)
  export function formatDateFullBR(date: string | Date): string {
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));
  }
  