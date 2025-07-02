"use client";

import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useRef } from "react";
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
    register,
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
      className="grid grid-cols-1 gap-4 p-4 rounded-lg bg-white shadow-xl m-3"
    >
      <span className="font-semibold text-zinc-500 text-xl">Imóvel</span>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Endereço:</label>
          <Input {...register("endereco")} />
          {errors.endereco && (
            <span className="text-red-500 text-xs">
              {errors.endereco.message}
            </span>
          )}
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">Quadra:</label>
          <Input {...register("quadra")} />
          {errors.quadra && (
            <span className="text-red-500 text-xs">
              {errors.quadra.message}
            </span>
          )}
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">Lote(s):</label>
          <Input {...register("lotes")} />
          {errors.lotes && (
            <span className="text-red-500 text-xs">{errors.lotes.message}</span>
          )}
        </div>
      </div>
    </form>
  );
}
