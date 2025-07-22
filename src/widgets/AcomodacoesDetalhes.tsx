import { Accommodation } from "@/types/Airbnb";
import { IconAlarmSmoke, IconBrandCarbon, IconDesk, IconDog, IconParking, IconPool, IconSailboat, IconToolsKitchen2, IconWifi } from "@tabler/icons-react";
import IconPhoto from "@tabler/icons-react/dist/esm/icons/IconPhoto";
import Link from "next/link";

interface AcomodacaoDetalhesProps {
    accommodation: Accommodation
}

const AcomodacaoDetalhes = (props: AcomodacaoDetalhesProps) => {

    const acomodacao = props.accommodation

    return (
        <div className="w-full py-4">
            <h2 className="text-xl font-semibold"> {acomodacao.location.description} </h2>
            <ul className="flex flex-row gap-2">
                <li>10 Hospedes |</li>
                <li>5 Suites |</li>
                <li>5 Camas |</li>
                <li>4 Banheiros |</li>
            </ul>

            <h2 className="text-xl font-semibold py-4">O que esse lugar oferece?</h2>
            <ul className="pt-4 grid grid-cols-2 items-center gap-y-6">
                <li className="flex gap-1.5">
                    <IconPhoto />
                    <span>Vista para as montanhas</span>
                </li>

                <li className="flex gap-1.5">
                    <IconToolsKitchen2 />
                    <span>Cozinha</span>
                </li>

                <li className="flex gap-1.5">
                    <IconDesk />
                    <span>Espaço de Trabalho Exclusivo</span>
                </li>

                <li className="flex gap-1.5">
                    <IconPool />
                    <span>Piscina Privativa</span>
                </li>

                <li className="flex gap-1.5">
                    <IconBrandCarbon />
                    <span>Alarme de Segurança para Gás</span>
                </li>

                <li className="flex gap-1.5">
                    <IconSailboat />
                    <span>Vista para as águas</span>
                </li>

                <li className="flex gap-1.5">
                    <IconWifi />
                    <span>Wifi Rápido</span>
                </li>

                <li className="flex gap-1.5">
                    <IconParking />
                    <span>Estacionamento</span>
                </li>

                <li className="flex gap-1.5">
                    <IconDog />
                    <span>Permitido Animais</span>
                </li>

                <li className="flex gap-1.5">
                    <IconAlarmSmoke />
                    <span>Detector de Fumaça</span>
                </li>

            </ul>
        </div>
    )
};
export default AcomodacaoDetalhes;
