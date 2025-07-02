"use client";

import z from "zod";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormularioContext } from "@/contexts/formulario.context";
import { useEffect, useRef } from "react";

const pagamentoSchema = z.object({
  valorTotal: z.string().min(0, "Valor total deve ser maior ou igual a zero"),
  valorEntrada: z
    .string()
    .min(0, "Valor de entrada deve ser maior ou igual a zero"),
  parcelas: z.string().min(1, "Parcelas é obrigatório"),
  balao: z.string().min(1, "Balão é obrigatório"),
  chaves: z.string().min(1, "Chaves é obrigatório"),
  financiamento: z.string().min(1, "Financiamento é obrigatório"),
});

type PagamentoForm = z.infer<typeof pagamentoSchema>;

export default function Pagamento() {
  const { data, updateSection } = useFormularioContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PagamentoForm>({
    resolver: zodResolver(pagamentoSchema),
  });

  const onSubmit = (data: PagamentoForm) => {
    updateSection("pagamento", {
      valorTotal: +data.valorTotal,
      valorEntrada: +data.valorEntrada,
      parcelas: data.parcelas,
      balao: data.balao,
      chaves: data.chaves,
      financiamento: data.financiamento,
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
      className="grid grid-cols-1 gap-4 p-4 rounded-lg bg-white shadow-xl m-3"
    >
      <span className="font-semibold text-zinc-500 text-xl">
        Condições de Pagamento
      </span>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Valor Total: </label>
          <Input {...register("valorTotal")}/>
          {errors.valorTotal && (
            <span className="text-red-500 text-sm">
              {errors.valorTotal.message}
            </span>
          )}
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Valor de Entrada:</label>
          <Input {...register("valorEntrada")} />
          {errors.valorEntrada && (
            <span className="text-red-500 text-sm">
              {errors.valorEntrada.message}
            </span>
          )}
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Parcelas:</label>
          <Input {...register("parcelas")} />
          {errors.parcelas && (
            <span className="text-red-500 text-sm">
              {errors.parcelas.message}
            </span>
          )}
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Balão:</label>
          <Input {...register("balao")} />
          {errors.balao && (
            <span className="text-red-500 text-sm">{errors.balao.message}</span>
          )}
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Chaves:</label>
          <Input {...register("chaves")} />
          {errors.chaves && (
            <span className="text-red-500 text-sm">
              {errors.chaves.message}
            </span>
          )}
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Financiamento:</label>
          <Input {...register("financiamento")} />
          {errors.financiamento && (
            <span className="text-red-500 text-sm">
              {errors.financiamento.message}
            </span>
          )}
        </div>
      </div>
    </form>
  );
}
