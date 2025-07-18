import Link from 'next/link';
import Logo from '../components/Logo/Logo';
import BotaoIcone from '@/components/BotaoIcone';
import { IconUserCircle } from '@/assets/icones';




const BarraSuperior = () => {
    return (
        <>
            <div className="py-6 flex justify-between items-center">

                <Logo />

                <div className='flex gap-4'>
                    <Link className="font-semibold" href="/">Acomodações</Link> {/* Para usar o "link" é necessário importar o Link do Next.js */}
                    <Link href="/">Experiências</Link> {/* Para usar o "link" é necessário importar o Link do Next.js */}
                </div>

                <BotaoIcone icone={(<IconUserCircle aria-label="Icone de usuario" size={20} />)}>
                    Entrar
                </BotaoIcone>

            </div>
        </>

    )

}
export default BarraSuperior