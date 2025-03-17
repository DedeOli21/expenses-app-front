"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    try {
      await api.post('/auth/register', { name, email, password });
      alert("Cadastro realizado com sucesso!");
      router.push("/login");
    } catch (error) {
      alert("Erro ao cadastrar usuário");
    }
  }

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Cadastro</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister}>
          <Input placeholder="Nome" className="mb-2" onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Email" type="email" className="mb-2" onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Senha" type="password" className="mb-4" onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" className="w-full">Cadastrar</Button>
        </form>
      </CardContent>
    </Card>
  );
}
