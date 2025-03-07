'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function Convertion(){

    const [fileName, setFileName] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleFileChange = async (event) => {
        const file = event.target.files[0]
        setFileName(file ? file.name : "Fazer upload")


        const formData = new FormData();
        formData.append("file", file)

        try{
            setIsLoading(true)
            const response = await axios.post("http://localhost:3333/api/converter", formData, {
                headers: {"Content-Type": "multipart/form-data"},
                responseType: "blob"
            })

            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", file.name.replace(".pdf", ".docx"));
            document.body.appendChild(link)
            link.click();
            link.remove()
        }catch(error){
            console.error("Erro ao converter Arquivo", error)
            alert("Erro ao converter arquivo")
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <>
         <form className="flex flex-col lg:flex-row gap-2 justify-center mt-8">
            <label htmlFor="file" className="p-1 px-3 rounded-lg border-2 font-medium flex gap-2 cursor-pointer justify-center items-center">{fileName || <> Fazer upload <Upload strokeWidth="2.5px" size={20}/> </>}</label>
            <Input id="file" className="hidden cursor-pointer lg:w-2/4" accept=".pdf" onChange={handleFileChange} type="file"/>
            <Button className="cursor-pointer">Converter</Button>
        </form>
        {/* {isLoading ? "Convertendo..." : "Converter para DOCX"} */}
        </>

    )
}