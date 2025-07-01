import { ImovelData } from "@/interfaces/ImovelData";
import { PagamentoData } from "@/interfaces/PagamentoData";
import { ProponenteData } from "@/interfaces/ProponenteData";
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";

export interface FormularioData {
    proponente: ProponenteData;
    imovel: ImovelData;
    pagamento: PagamentoData;
}

interface FormularioContextType {
    data: FormularioData;
    setData: Dispatch<SetStateAction<FormularioData>>;
    updateSection: <K extends keyof FormularioData>(section: K, value: FormularioData[K]) => void;
}

const FormularioContext = createContext({} as FormularioContextType);

function FormularioProvider({ children }: PropsWithChildren) {
    const [data, setData] = useState<FormularioData>({
        proponente: {
            nome: "",
            dataNascimento: "",
            rg: "",
            orgaoExpedidor: "",
            estadoCivil: "",
            profissao: "",
            cpf: "",
            cep: "",
            bairro: "",
            cidade: "",
            estado: "",
            email: "",
            telefone: ""
        },
        imovel: {
            enderecoImovel: "",
            quadraImovel: "",
            loteImovel: ""
        },
        pagamento: {
            valorTotal: 0,
            valorEntrada: 0,
            parcelas: "",
            balao: "",
            chaves: "",
            financiamento: ""
        }
    });

    const updateSection = <K extends keyof FormularioData>(section: K, value: FormularioData[K]) => {
        setData((prev: any) => ({ ...prev, [section]: value }));
    };

    return (
        <FormularioContext.Provider value={{ data, setData, updateSection }}>
            {children}
        </FormularioContext.Provider>
    );
}