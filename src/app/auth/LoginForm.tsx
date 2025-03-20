"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { api, setAuthToken } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/login', { email, password });
      console.log(data);
      setAuthToken(data.access_token);
      router.push("/dashboard");
    } catch (error) {
      alert("Login inválido");
    }
  }

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <Input placeholder="Email" type="email" className="mb-2" onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Senha" type="password" className="mb-4" onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" className="w-full">Entrar</Button>
        </form>
      </CardContent>
    </Card>
  );
}
