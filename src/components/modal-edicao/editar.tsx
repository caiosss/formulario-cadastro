import { PropsWithChildren, useEffect } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { CheckCircle, X } from "lucide-react";
import { Input } from "../ui/input";

interface EditarProps extends PropsWithChildren {
    id: string;
}

export default function Editar(props: EditarProps) {
    useEffect(() => {}, [])

    return (
        <Dialog>
            <DialogTrigger asChild>{props.children}</DialogTrigger>
            <DialogContent className="overflow-y-scroll">
                <DialogHeader>
                    <DialogTitle className="text-left">
                        Edição de Cliente
                    </DialogTitle>
                </DialogHeader>
                
                <Input/>
                
                <DialogDescription className="flex w-full gap-3 justify-end">
                    <DialogClose asChild>
                        <Button className="bg-red-500 text-white cursor-pointer hover:bg-red-600 transition-all duration-150">
                            <X size={20}/>
                        </Button>
                    </DialogClose>
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