import Link from 'next/link';
import Logo from '../components/Logo/Logo';



const BarraSuperior = () => {
    return (
        <>
            <div className="py-6 container mx-auto flex justify-between items-center">

                <Logo />

                <div className='flex gap-4'>
                    <Link className="font-semibold" href="/">Acomodações</Link> {/* Para usar o "link" é necessário importar o Link do Next.js */}
                    <Link href="/">Experiências</Link> {/* Para usar o "link" é necessário importar o Link do Next.js */}
                </div>

                <button className='rounded-md border-2'>Entrar</button>

            </div>
        </>

    )

}
export default BarraSuperior