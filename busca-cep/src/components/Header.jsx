import CampDeBusca from "./CampDeBusca";

export default function Header() {
  return (
    <div className="flex justify-center space-x-14 font-serif">
      <h1 className="flex items-center font-bold text-3xl text-white">
        Busque por um CEP:
      </h1>
      <CampDeBusca />
    </div>
  );
}
