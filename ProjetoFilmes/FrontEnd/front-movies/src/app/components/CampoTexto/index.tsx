import { ChangeEvent } from "react";

interface PropsCampo {
  texto: string;
  aoAlterado: (e: ChangeEvent<HTMLInputElement>) => void;
  valor?: string;
}
export function CampoTexto({ texto, aoAlterado, valor }: PropsCampo) {
  return (
    <div className="flex flex-row items-center w-full">
      <label>{texto}</label>
      <input
        className=" bg-black rounded-md w-full ml-1 mr-1 h-8 text-white"
        placeholder="DIGITE"
        required
        onChange={aoAlterado}
        value={valor}
      ></input>
    </div>
  );
}
