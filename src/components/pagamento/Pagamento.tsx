"use client";

import z from "zod";
import { Input } from "../ui/input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormularioContext } from "@/contexts/formulario.context";
import { useEffect, useRef } from "react";

const pagamentoSchema = z.object({
  valorTotal: z.string().min(1, "Valor total é obrigatório"),
  valorEntrada: z.string().min(1, "Valor de entrada é obrigatório"),
  parcelas: z.string().min(1, "Parcelas é obrigatório"),
  balao: z.string().min(1, "Balão é obrigatório"),
  chaves: z.string().min(1, "Chaves é obrigatório"),
  financiamento: z.string().min(1, "Financiamento é obrigatório"),
});

type PagamentoForm = z.infer<typeof pagamentoSchema>;

export default function Pagamento() {
  const { data, updateSection } = useFormularioContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PagamentoForm>({
    resolver: zodResolver(pagamentoSchema),
  });

  const onSubmit = (formData: PagamentoForm) => {
    updateSection("pagamento", {
      valorTotal: +formData.valorTotal,
      valorEntrada: +formData.valorEntrada,
      parcelas: formData.parcelas,
      balao: formData.balao,
      chaves: formData.chaves,
      financiamento: formData.financiamento,
    });
  };

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handler = () => {
      if (formRef.current) {
        formRef.current.requestSubmit();
      }
    };
    window.addEventListener("submitAllForms", handler);
    return () => window.removeEventListener("submitAllForms", handler);
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      ref={formRef}
      className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl p-8 mt-8 mb-8 border border-zinc-200 animate-fade-in"
    >
      <span className="block font-bold text-zinc-700 text-2xl mb-6 text-center tracking-tight">
        Condições de Pagamento
      </span>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">
            Valor Total
          </label>
          <Controller
            name="valorTotal"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Ex: 100000"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.valorTotal && (
            <span className="text-red-500 text-xs mt-1">
              {errors.valorTotal.message}
            </span>
          )}
        </div>
        <div className="col-span-12 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">
            Valor de Entrada
          </label>
          <Controller
            name="valorEntrada"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Ex: 20000"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.valorEntrada && (
            <span className="text-red-500 text-xs mt-1">
              {errors.valorEntrada.message}
            </span>
          )}
        </div>
        <div className="col-span-12 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">Parcelas</label>
          <Controller
            name="parcelas"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Ex: 60"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.parcelas && (
            <span className="text-red-500 text-xs mt-1">
              {errors.parcelas.message}
            </span>
          )}
        </div>
        <div className="col-span-12 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">Balão</label>
          <Controller
            name="balao"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Ex: 10000"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.balao && (
            <span className="text-red-500 text-xs mt-1">
              {errors.balao.message}
            </span>
          )}
        </div>
        <div className="col-span-12 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">Chaves</label>
          <Controller
            name="chaves"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Ex: 5000"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.chaves && (
            <span className="text-red-500 text-xs mt-1">
              {errors.chaves.message}
            </span>
          )}
        </div>
        <div className="col-span-12 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">
            Financiamento
          </label>
          <Controller
            name="financiamento"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Ex: 30000"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.financiamento && (
            <span className="text-red-500 text-xs mt-1">
              {errors.financiamento.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all duration-150"
        >
          Salvar Pagamento
        </button>
      </div>
    </form>
  );
}
