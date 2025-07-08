"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Printer } from "lucide-react";
import Menu from "@/components/menu/Menu";

interface Cliente {
  _id: string;
  proponente: { nome: string };
  // ...adicione outros campos se quiser exibir mais informações
}

export default function ListarClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [nomeBusca, setNomeBusca] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/formulario/all")
      .then((res) => res.json())
      .then((data) => {
        setClientes(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function buscarUsuario(nome: string) {
    fetch(`http://localhost:4000/formulario/${nome}`)
      .then((res) => res.json())
      .then((data) => {
        setClientes(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  return (
    <main>
      <Menu />
      <div className="min-h-screen flex flex-col items-center py-8 px-2">
        <section className="w-full max-w-2xl flex items-center justify-between bg-white rounded-xl shadow p-4 mb-6">
          <Input
            placeholder="Buscar por nome"
            className="w-full max-w-xs border-blue-200 focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setNomeBusca(e.target.value)}
          />
          <div>
            <Button
              className="ml-4 px-4 py-2 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white rounded-lg font-semibold shadow transition-all duration-150"
              onClick={() => buscarUsuario(nomeBusca)}
            >
              Buscar
            </Button>
            <Button
              className="ml-4 px-4 py-2 bg-red-600 cursor-pointer hover:bg-red-700 text-white rounded-lg font-semibold shadow transition-all duration-150"
              onClick={() => window.location.reload()}
            >
              Limpar
            </Button>
          </div>
        </section>

        <section className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-0 overflow-x-auto">
          <Table>
            <TableCaption className="text-zinc-500">
              Lista de Clientes
            </TableCaption>
            <TableHeader>
              <TableRow className="bg-blue-100">
                <TableHead className="py-3 px-4">Nome</TableHead>
                <TableHead className="py-3 px-4 text-center">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="text-center py-6 text-zinc-400"
                  >
                    Carregando...
                  </TableCell>
                </TableRow>
              ) : clientes.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="text-center py-6 text-zinc-400"
                  >
                    Nenhum cliente encontrado.
                  </TableCell>
                </TableRow>
              ) : (
                clientes.map((cliente) => (
                  <TableRow
                    key={cliente._id}
                    className="hover:bg-blue-50 transition-colors"
                  >
                    <TableCell className="py-3 px-4">
                      {cliente.proponente?.nome || "-"}
                    </TableCell>
                    <TableCell className="py-3 px-4 text-center">
                      <Button className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white cursor-pointer rounded-lg shadow font-medium transition-all duration-150">
                        <Download size={20} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </section>
      </div>
    </main>
  );
}
