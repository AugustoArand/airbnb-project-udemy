import Link from "next/link";

const Rodape = () => {
  return (
    <div className="container mx-auto py-5">
      <span className="text-lg font-semibold pb-4">&copy; Airbnb Inc</span>
      <ul className="flex flex-row gap-2">
        <li>
          <Link href="/" className="hover:text-red-500">
            Privacidade |
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-red-500">
            Termos |
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-red-500">
            Mapa do Site |
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-red-500">
            Informações da Empresa |
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Rodape;
