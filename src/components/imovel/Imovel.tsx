"use client";

import { Input } from "../ui/input";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { useFormularioContext } from "@/contexts/formulario.context";

const imovelSchema = z.object({
  endereco: z.string().min(1, "Endereço é obrigatório"),
  quadra: z.string().min(1, "Quadra é obrigatória"),
  lotes: z.string().min(1, "Lote(s) é obrigatório"),
});

type ImovelForm = z.infer<typeof imovelSchema>;

export default function Imovel() {
  const { data, updateSection } = useFormularioContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ImovelForm>({
    resolver: zodResolver(imovelSchema),
  });

  const onSubmit = (data: ImovelForm) => {
    updateSection("imovel", {
      enderecoImovel: data.endereco,
      quadraImovel: data.quadra,
      loteImovel: data.lotes,
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
        Informações do Imóvel
      </span>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">Endereço</label>
          <Controller
            name="endereco"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Digite o endereço completo"
                autoFocus
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.endereco && (
            <span className="text-red-500 text-xs mt-1">
              {errors.endereco.message}
            </span>
          )}
        </div>
        <div className="col-span-6 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">Quadra</label>
          <Controller
            name="quadra"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Ex: 12A"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.quadra && (
            <span className="text-red-500 text-xs mt-1">
              {errors.quadra.message}
            </span>
          )}
        </div>
        <div className="col-span-6 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">Lote(s)</label>
          <Controller
            name="lotes"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Ex: 5, 6, 7"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.lotes && (
            <span className="text-red-500 text-xs mt-1">
              {errors.lotes.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all duration-150"
        >
          Salvar Imóvel
        </button>
      </div>
    </form>
  );
}
