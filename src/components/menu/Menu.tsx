import { List, User2Icon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
    <header className="bg-gradient-to-r from-green-600 to-emerald-400 py-6 mb-8 shadow-lg rounded-b-xl">
      <div className="container mx-auto flex items-center justify-center px-8">
        <nav>
          <span>
            <Link
              href="/clientes"
              className="inline-flex items-center gap-2 px-5 py-2 bg-white text-green-700 font-semibold rounded-full shadow-md hover:bg-green-50 transition-colors duration-200"
            >
              <List />
              Visualizar Clientes
            </Link>
          </span>
          <span>
            <Link
              href="/"
              className="ml-4 inline-flex items-center gap-2 px-5 py-2 bg-white text-green-700 font-semibold rounded-full shadow-md hover:bg-green-50 transition-colors duration-200"
            >
              <User2Icon />
              Novo Cliente
            </Link>
          </span>
        </nav>
      </div>
    </header>
  );
}
