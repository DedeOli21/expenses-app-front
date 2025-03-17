'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { api } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    try {
      await api.post('/auth/register', { name, email, password });
      alert('Cadastro realizado com sucesso!');
      router.push('/auth/login');
    } catch {
      alert('Erro ao cadastrar usuário.');
    }
  }

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Cadastro</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister}>
          <Input
            placeholder="Nome"
            className="mb-2"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            className="mb-2"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            className="mb-4"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
