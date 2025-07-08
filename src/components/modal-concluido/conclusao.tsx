import { PropsWithChildren } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

interface ConclusaoProps extends PropsWithChildren {
    
}

export default function Conclusao(props: ConclusaoProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{props.children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-left">
                        Cliente Cadastrado!
                    </DialogTitle>
                </DialogHeader>
                <p className="text-zinc-600 text-md">
                    O cliente foi cadastrado com sucesso. Você pode visualizar os clientes cadastrados na página de clientes.
                </p>
                <DialogDescription className="flex w-full gap-3 justify-end">
                    <DialogClose asChild>
                        <Button className="bg-green-500 text-white cursor-pointer hover:bg-green-600 transition-all duration-150">
                            <CheckCircle size={20}/>
                        </Button>
                    </DialogClose>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}