import { useSelector } from "react-redux";

export default function Resultados() {
  const { cep } = useSelector((state) => state.cepSlice);
  console.log(cep);
  if (!cep.cep) {
    return null;
  }
  return (
    <div className="justify-center items-center mt-32 p-1 space-x-2">
      <h1 className="font-serif font-extrabold text-center text-3xl text-white underline">
        Resultado
      </h1>
      <div
        className={`
        font-serif
         bg-slate-200
         border mt-4
          border-black 
          rounded-md p-2 
          leading-loose 
          underline`}
      >
        <p>CEP: {cep.cep}</p>
        <p>Logradouro: {cep.logradouro}</p>
        <p>Complemento: {cep.complemento}</p>
        <p>Bairro: {cep.bairro}</p>
        <p>Localidade: {cep.localidade}</p>
        <p>UF: {cep.uf}</p>
        <p>IBGE: {cep.ibge}</p>
        <p>GIA: {cep.gia}</p>
        <p>DDD: {cep.ddd}</p>
        <p>SIAFI: {cep.siafi}</p>
      </div>
    </div>
  );
}
