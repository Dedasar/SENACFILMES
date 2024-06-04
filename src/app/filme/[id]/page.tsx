import { NavBar } from "@/app/components/navbar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Sobre({params}:Params){
    return (
        <main className="flex min-h-screen flex-col">
            <NavBar/>    
                <h2>Detalhes do Filme com id {params.id}</h2>           
        </main>
    );
}