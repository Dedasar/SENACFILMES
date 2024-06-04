import { Film } from "lucide-react";
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className=" flex justify-between bg-slate-800 w-full p-4">
      <div className=" flex gap-2 items-center">
        <Film className=" text-amber-400" />
        <Link href="/">
          <h1 className=" text-amber-400 text-2xl font-bold uppercase">SenacFilmes</h1>
        </Link>
      </div>
        <Link href="/sobre">Sobre</Link>   
    </nav>
  );
}

