import { PropsWithChildren, useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { CheckCircle, X } from "lucide-react";
import { Input } from "../ui/input";

interface EditarProps extends PropsWithChildren {
    id: string;
}

interface Cliente {
    _id: string;
    proponente: {
        nome: string;
        email: string;
        telefone: string;
        estadoCivil: string;
        profissao: string;
        cpf: string;
        rg: string;
    };
    imovel: {
        enderecoImovel: string;
        quadraImovel: string;
        loteImovel: string;
    };
    pagamento: {
        valorTotal: number;
        valorEntrada: number;
        parcelas: string;
        balao: string;
        chaves: string;
        financiamento: string;
    };
}

export default function Editar(props: EditarProps) {
    const [cliente, setCliente] = useState<Cliente | null>(null);
    const [form, setForm] = useState({
        // Proponente
        nome: "",
        email: "",
        telefone: "",
        estadoCivil: "",
        profissao: "",
        cpf: "",
        rg: "",
        // Imóvel
        enderecoImovel: "",
        quadraImovel: "",
        loteImovel: "",
        // Pagamento
        valorTotal: "",
        valorEntrada: "",
        parcelas: "",
        balao: "",
        chaves: "",
        financiamento: "",
    });
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpenChange = async (isOpen: boolean) => {
        setOpen(isOpen);
        if (isOpen && props.id) {
            setLoading(true);
            try {
                const res = await fetch(`http://localhost:4000/formulario/id/${props.id}`);
                const data = await res.json();
                setCliente(data);
                setForm({
                    // Proponente
                    nome: data.proponente?.nome || "",
                    email: data.proponente?.email || "",
                    telefone: data.proponente?.telefone || "",
                    estadoCivil: data.proponente?.estadoCivil || "",
                    profissao: data.proponente?.profissao || "",
                    cpf: data.proponente?.cpf || "",
                    rg: data.proponente?.rg || "",
                    // Imóvel
                    enderecoImovel: data.imovel?.enderecoImovel || "",
                    quadraImovel: data.imovel?.quadraImovel || "",
                    loteImovel: data.imovel?.loteImovel || "",
                    // Pagamento
                    valorTotal: data.pagamento?.valorTotal?.toString() || "",
                    valorEntrada: data.pagamento?.valorEntrada?.toString() || "",
                    parcelas: data.pagamento?.parcelas || "",
                    balao: data.pagamento?.balao || "",
                    chaves: data.pagamento?.chaves || "",
                    financiamento: data.pagamento?.financiamento || "",
                });
            } catch {
                // erro ao buscar
            }
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        setSaving(true);
        await fetch(`http://localhost:4000/formulario/${props.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                proponente: {
                    nome: form.nome,
                    email: form.email,
                    telefone: form.telefone,
                    estadoCivil: form.estadoCivil,
                    profissao: form.profissao,
                    cpf: form.cpf,
                    rg: form.rg,
                },
                imovel: {
                    enderecoImovel: form.enderecoImovel,
                    quadraImovel: form.quadraImovel,
                    loteImovel: form.loteImovel,
                },
                pagamento: {
                    valorTotal: Number(form.valorTotal),
                    valorEntrada: Number(form.valorEntrada),
                    parcelas: form.parcelas,
                    balao: form.balao,
                    chaves: form.chaves,
                    financiamento: form.financiamento,
                },
            }),
        });
        setSaving(false);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>{props.children}</DialogTrigger>
            <DialogContent className="max-h-[90vh] w-full max-w-3xl overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-left">
                        Edição de Cliente
                    </DialogTitle>
                </DialogHeader>
                {loading ? (
                    <div className="text-center text-zinc-400 py-8">Carregando...</div>
                ) : (
                    <form className="grid grid-cols-2 gap-4 py-4">
                        {/* Proponente */}
                        <div className="col-span-2 text-blue-700 font-semibold text-lg mb-2">Dados do Proponente</div>
                        <div className="col-span-2">
                            <label className="block text-zinc-600 font-medium mb-1">Nome</label>
                            <Input name="nome" value={form.nome} onChange={handleChange} className="w-full" />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-zinc-600 font-medium mb-1">Email</label>
                            <Input name="email" value={form.email} onChange={handleChange} className="w-full" />
                        </div>
                        <div>
                            <label className="block text-zinc-600 font-medium mb-1">Telefone</label>
                            <Input name="telefone" value={form.telefone} onChange={handleChange} className="w-full" />
                        </div>
                        <div>
                            <label className="block text-zinc-600 font-medium mb-1">CPF</label>
                            <Input name="cpf" value={form.cpf} onChange={handleChange} className="w-full" />
                        </div>
                        <div>
                            <label className="block text-zinc-600 font-medium mb-1">RG</label>
                            <Input name="rg" value={form.rg} onChange={handleChange} className="w-full" />
                        </div>
                        <div>
                            <label className="block text-zinc-600 font-medium mb-1">Profissão</label>
                            <Input name="profissao" value={form.profissao} onChange={handleChange} className="w-full" />
                        </div>
                        <div>
                            <label className="block text-zinc-600 font-medium mb-1">Estado Civil</label>
                            <select name="estadoCivil" value={form.estadoCivil} onChange={handleChange} className="w-full rounded border border-zinc-300 px-2 py-2 focus:ring-2 focus:ring-blue-400">
                                <option value="">Selecione</option>
                                <option value="solteiro">Solteiro</option>
                                <option value="casado">Casado</option>
                                <option value="uniaoEstavel">União Estável</option>
                                <option value="divorciado">Divorciado</option>
                            </select>
                        </div>
                        {/* Imóvel */}
                        <div className="col-span-2 text-blue-700 font-semibold text-lg mt-6 mb-2">Dados do Imóvel</div>
                        <div className="col-span-2">
                            <label className="block text-zinc-600 font-medium mb-1">Endereço</label>
                            <Input name="enderecoImovel" value={form.enderecoImovel} onChange={handleChange} className="w-full" />
                        </div>
                        <div>
                            <label className="block text-zinc-600 font-medium mb-1">Quadra</label>
                            <Input name="quadraImovel" value={form.quadraImovel} onChange={handleChange} className="w-full" />
                        </div>
                        <div>
                            <label className="block text-zinc-600 font-medium mb-1">Lote(s)</label>
                            <Input name="loteImovel" value={form.loteImovel} onChange={handleChange} className="w-full" />
                        </div>
                        {/* Pagamento */}
                        <div className="col-span-2 text-blue-700 font-semibold text-lg mt-6 mb-2">Condições de Pagamento</div>
                        <div>
                            <label className="block text-zinc-600 font-medium mb-1">Valor Total</label>
                            <Input name="valorTotal" value={form.valorTotal} onChange={handleChange} className="w-full" />
                        </div>
                        <div>
                            <label className="block text-zinc-600 font-medium mb-1">Valor de Entrada</label>
                            <Input name="valorEntrada" value={form.valorEntrada} onChange={handleChange} className="w-full" />
                        </div>
                        <div>
                            <label className="block text-zinc-600 font-medium mb-1">Parcelas</label>
                            <Input name="parcelas" value={form.parcelas} onChange={handleChange} className="w-full" />
                        </div>
                        <div>
                            <label className="block text-zinc-600 font-medium mb-1">Balão</label>
                            <Input name="balao" value={form.balao} onChange={handleChange} className="w-full" />
                        </div>
                        <div>
                            <label className="block text-zinc-600 font-medium mb-1">Chaves</label>
                            <Input name="chaves" value={form.chaves} onChange={handleChange} className="w-full" />
                        </div>
                        <div>
                            <label className="block text-zinc-600 font-medium mb-1">Financiamento</label>
                            <Input name="financiamento" value={form.financiamento} onChange={handleChange} className="w-full" />
                        </div>
                    </form>
                )}
                <DialogDescription className="flex w-full gap-3 justify-end mt-4">
                    <DialogClose asChild>
                        <Button className="bg-red-500 text-white cursor-pointer hover:bg-red-600 transition-all duration-150">
                            <X size={20}/>
                        </Button>
                    </DialogClose>
                    <Button
                        className="bg-green-500 text-white cursor-pointer hover:bg-green-600 transition-all duration-150 flex items-center gap-2 disabled:opacity-60"
                        onClick={handleUpdate}
                        disabled={saving || loading}
                        type="button"
                    >
                        <CheckCircle size={20}/>
                        {saving ? "Salvando..." : "Salvar"}
                    </Button>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    );
}