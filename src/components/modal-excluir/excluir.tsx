import { PropsWithChildren } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { CheckCircle, X } from "lucide-react";

interface ExcluirProps extends PropsWithChildren {
    id: string;
}

export default function Excluir(props: ExcluirProps) {

    function deletarCliente(id: string) {
        fetch(`http://localhost:4000/formulario/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                setTimeout(() => {
                    window.location.reload();
                }, 1000)
            } 
        })
        .catch(error => console.error("Erro de rede:", error));

    }

    return (
        <Dialog>
            <DialogTrigger asChild>{props.children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-left">
                        Excluir Cliente
                    </DialogTitle>
                </DialogHeader>
                <p className="text-zinc-600 text-md">
                    Deseja realmente excluir o cliente? Esta ação não poderá ser desfeita.
                </p>
                <DialogDescription className="flex w-full gap-3 justify-end">
                    <DialogClose asChild>
                        <Button className="bg-red-500 text-white cursor-pointer hover:bg-red-600 transition-all duration-150">
                            <X size={20}/>
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button onClick={() => deletarCliente(props.id)} className="bg-green-500 text-white cursor-pointer hover:bg-green-600 transition-all duration-150">
                            <CheckCircle size={20}/>
                        </Button>
                    </DialogClose>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}