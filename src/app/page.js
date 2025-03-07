import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex justify-center h-screen">
      <div className=" flex flex-col px-3 max-w-[880px]">
        <div className="flex flex-col items-center mt-36 gap-3">
          <h1 className="text-5xl font-medium lg:text-8xl">ConvertDocx</h1>
          <p className="italic lg:text-xl">Converta seu pdf em .docx</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-center mt-8">
          <label htmlFor="file" className="p-1 px-3 rounded-lg bg-amber-400 cursor-pointer font-medium">Faça upload do seu arquivo aqui...</label>
          <Input id="file" className="hidden cursor-pointer lg:w-2/4" type="file"/>
          <Button className="cursor-pointer">Converter</Button>
        </div>
      </div>
      <footer className="absolute bottom-0 text-xs flex flex-col items-center w-full font-[400] text-gray-500 mb-4 lg:text-base  ">
          <p>&copy; ConvertDocx</p>
          <p>Criado por <Link href="https://x.com/Kel_Abr" target="black" className="text-blue-600">Kel_abr</Link></p>
        </footer>
     
    </main>
  );
}
