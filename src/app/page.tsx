import Card from "@/components/card";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import { getMovies } from "./actions/getMovies";

export default async function Home() {
  const filmes: Array<Filme> = await getMovies()
 
  return (
    <main className="flex flex-wrap min-h-screen flex-col">
      <Navbar/>
      <Title>Filmes em Alta</Title>
      <section className="flex flex-wrap gap-6 m-4">
      { filmes.map(filme => <Card key={filme.id} filme={filme}/>)}
      </section>      
    </main>
  );
}
