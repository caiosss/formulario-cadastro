"use client";

import { useFormularioContext } from "@/contexts/formulario.context";
import { Button } from "../ui/button";

export default function BotaoSalvar() {
  const { handleForm } = useFormularioContext();

  const handleClick = () => {
    window.dispatchEvent(new Event("submitAllForms"));
    
    setTimeout(() => {
      handleForm();
    }, 200); 
  };

  return (
    <div className="flex justify-center">
      <Button
        type="button"
        onClick={handleClick}
        className="w-1/2 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white text-lg font-semibold py-2 px-4 rounded mb-4"
      >
        Salvar
      </Button>
    </div>
  );
}
