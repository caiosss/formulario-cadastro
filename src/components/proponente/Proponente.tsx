"use client";

import z from "zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useFormularioContext } from "@/contexts/formulario.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useRef } from "react";

const proponenteSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  dataNascimento: z.string().min(1, "Data de Nascimento é obrigatória"),
  rg: z.string().min(1, "RG é obrigatório"),
  orgaoExpedidor: z.string().min(1, "Órgão Expedidor é obrigatório"),
  estadoCivil: z.string().min(1, "Estado Civil é obrigatório"),
  profissao: z.string().min(1, "Profissão é obrigatória"),
  cpf: z.string().min(1, "CPF é obrigatório"),
  cep: z.string().min(1, "CEP é obrigatório"),
  bairro: z.string().min(1, "Bairro é obrigatório"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  estado: z.string().min(1, "Estado é obrigatório"),
  email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
  telefone: z.string().min(1, "Telefone é obrigatório"),
});

type ProponenteForm = z.infer<typeof proponenteSchema>;

export default function Proponente() {
  const { data, updateSection } = useFormularioContext();

  const defaultValues: ProponenteForm = {
    nome: data.proponente?.nome || "",
    dataNascimento: data.proponente?.dataNascimento || "",
    rg: data.proponente?.rg || "",
    orgaoExpedidor: data.proponente?.orgaoExpedidor || "",
    estadoCivil: data.proponente?.estadoCivil || "",
    profissao: data.proponente?.profissao || "",
    cpf: data.proponente?.cpf || "",
    cep: data.proponente?.cep || "",
    bairro: data.proponente?.bairro || "",
    cidade: data.proponente?.cidade || "",
    estado: data.proponente?.estado || "",
    email: data.proponente?.email || "",
    telefone: data.proponente?.telefone || "",
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<ProponenteForm>({
    resolver: zodResolver(proponenteSchema),
    defaultValues,
  });

  const cepValue = watch("cep");
  useEffect(() => {
    const fetchViaCep = async (cep: string) => {
      if (cep && cep.replace(/\D/g, "").length === 8) {
        const res = await fetch(
          `https://viacep.com.br/ws/${cep.replace(/\D/g, "")}/json/`
        );
        if (res.ok) {
          const data = await res.json();
          if (!data.erro) {
            setValue("bairro", data.bairro || "");
            setValue("cidade", data.localidade || "");
            setValue("estado", data.uf || "");
          }
        }
      }
    };
    fetchViaCep(cepValue);
  }, [cepValue, setValue]);

  const onSubmit = (formData: ProponenteForm) => {
    updateSection("proponente", formData);
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
      <span className="font-semibold text-zinc-500 text-xl">Proponente</span>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Nome:</label>
          <Input {...register("nome")} />
          {errors.nome && (
            <span className="text-red-500 text-sm">{errors.nome.message}</span>
          )}
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">Data de Nascimento:</label>
          <Input {...register("dataNascimento")} mask="00/00/0000" />
          {errors.dataNascimento && (
            <span className="text-red-500 text-sm">
              {errors.dataNascimento.message}
            </span>
          )}
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">RG:</label>
          <Input {...register("rg")} mask="00000000-0" />
          {errors.rg && (
            <span className="text-red-500 text-sm">{errors.rg.message}</span>
          )}
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label {...register("orgaoExpedidor")} className="font-medium">
            Órgão Expedidor:
          </label>
          <Input />
          {errors.orgaoExpedidor && (
            <span className="text-red-500 text-sm">
              {errors.orgaoExpedidor.message}
            </span>
          )}
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Estado Civil:</label>
          <Controller
            name="estadoCivil"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <RadioGroup
                className="flex flex-col flex-wrap gap-4"
                value={field.value}
                onValueChange={field.onChange}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="solteiro" id="solteiro" />
                  <Label htmlFor="solteiro" className="text-md">
                    Solteiro
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="casado" id="casado" />
                  <Label htmlFor="casado" className="text-md">
                    Casado
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="uniaoEstavel" id="uniaoEstavel" />
                  <Label htmlFor="uniaoEstavel" className="text-md">
                    União Estável
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="divorciado" id="divorciado" />
                  <Label htmlFor="divorciado" className="text-md">
                    Divorciado
                  </Label>
                </div>
              </RadioGroup>
            )}
          />
          {errors.estadoCivil && (
            <span className="text-red-500 text-sm">
              {errors.estadoCivil.message}
            </span>
          )}
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Profissão:</label>
          <Input {...register("profissao")} />
          {errors.profissao && (
            <span className="text-red-500 text-sm">
              {errors.profissao.message}
            </span>
          )}
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">CPF:</label>
          <Input {...register("cpf")} mask="000.000.000-00" />
          {errors.cpf && (
            <span className="text-red-500 text-sm">{errors.cpf.message}</span>
          )}
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">CEP:</label>
          <Input {...register("cep")} />
          {errors.cep && (
            <span className="text-red-500 text-sm">{errors.cep.message}</span>
          )}
        </div>

        <div className="col-span-12 flex flex-col gap-2">
          <label className="font-medium">Bairro:</label>
          <Input {...register("bairro")} />
          {errors.bairro && (
            <span className="text-red-500 text-sm">
              {errors.bairro.message}
            </span>
          )}
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">Cidade:</label>
          <Input {...register("cidade")} />
          {errors.cidade && (
            <span className="text-red-500 text-sm">
              {errors.cidade.message}
            </span>
          )}
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">Estado:</label>
          <Input {...register("estado")} />
          {errors.estado && (
            <span className="text-red-500 text-sm">
              {errors.estado.message}
            </span>
          )}
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">Email:</label>
          <Input {...register("email")} type="email" />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <label className="font-medium">Whatsapp:</label>
          <Input
            {...register("telefone")}
            mask="+55 (00) 00000-0000"
            type="tel"
          />
          {errors.telefone && (
            <span className="text-red-500 text-sm">
              {errors.telefone.message}
            </span>
          )}
        </div>
      </div>
    </form>
  );
}
