"use client";

import z from "zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useFormularioContext } from "@/contexts/formulario.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";

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
      className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl p-8 mt-8 mb-8 border border-zinc-200 animate-fade-in"
    >
      <span className="block font-bold text-zinc-700 text-2xl mb-6 text-center tracking-tight">
        Proponente
      </span>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">Nome</label>
          <Controller
            name="nome"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Nome completo"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.nome && (
            <span className="text-red-500 text-xs mt-1">
              {errors.nome.message}
            </span>
          )}
        </div>
        <div className="col-span-6 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">
            Data de Nascimento
          </label>
          <Controller
            name="dataNascimento"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="DD/MM/AAAA"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.dataNascimento && (
            <span className="text-red-500 text-xs mt-1">
              {errors.dataNascimento.message}
            </span>
          )}
        </div>
        <div className="col-span-6 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">RG</label>
          <Controller
            name="rg"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="RG"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.rg && (
            <span className="text-red-500 text-xs mt-1">
              {errors.rg.message}
            </span>
          )}
        </div>
        <div className="col-span-12 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">
            Órgão Expedidor
          </label>
          <Controller
            name="orgaoExpedidor"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Órgão Expedidor"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.orgaoExpedidor && (
            <span className="text-red-500 text-xs mt-1">
              {errors.orgaoExpedidor.message}
            </span>
          )}
        </div>
        <div className="col-span-12 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">
            Estado Civil
          </label>
          <Controller
            name="estadoCivil"
            control={control}
            render={({ field }) => (
              <RadioGroup
                className="flex flex-row flex-wrap gap-4"
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
            <span className="text-red-500 text-xs mt-1">
              {errors.estadoCivil.message}
            </span>
          )}
        </div>
        <div className="col-span-12 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">Profissão</label>
          <Controller
            name="profissao"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Profissão"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.profissao && (
            <span className="text-red-500 text-xs mt-1">
              {errors.profissao.message}
            </span>
          )}
        </div>
        <div className="col-span-6 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">CPF</label>
          <Controller
            name="cpf"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="CPF"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.cpf && (
            <span className="text-red-500 text-xs mt-1">
              {errors.cpf.message}
            </span>
          )}
        </div>
        <div className="col-span-6 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">CEP</label>
          <Controller
            name="cep"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="CEP"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.cep && (
            <span className="text-red-500 text-xs mt-1">
              {errors.cep.message}
            </span>
          )}
        </div>
        <div className="col-span-12 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">Bairro</label>
          <Controller
            name="bairro"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Bairro"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.bairro && (
            <span className="text-red-500 text-xs mt-1">
              {errors.bairro.message}
            </span>
          )}
        </div>
        <div className="col-span-6 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">Cidade</label>
          <Controller
            name="cidade"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Cidade"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.cidade && (
            <span className="text-red-500 text-xs mt-1">
              {errors.cidade.message}
            </span>
          )}
        </div>
        <div className="col-span-6 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">Estado</label>
          <Controller
            name="estado"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Estado"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.estado && (
            <span className="text-red-500 text-xs mt-1">
              {errors.estado.message}
            </span>
          )}
        </div>
        <div className="col-span-6 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                {...field}
                placeholder="Email"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="col-span-6 flex flex-col gap-1">
          <label className="font-semibold text-zinc-600 mb-1">Whatsapp</label>
          <Controller
            name="telefone"
            control={control}
            render={({ field }) => (
              <Input
                type="tel"
                {...field}
                placeholder="Whatsapp"
                className="focus:ring-2 focus:ring-blue-400"
              />
            )}
          />
          {errors.telefone && (
            <span className="text-red-500 text-xs mt-1">
              {errors.telefone.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all duration-150"
        >
          Salvar Proponente
        </Button>
      </div>
    </form>
  );
}
