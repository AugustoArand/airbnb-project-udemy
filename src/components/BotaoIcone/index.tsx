// O botão foi feito como componente e pode ser reutilizado

import React from 'react';

interface BotaoIconeProps {
    icone: React.ReactNode
    children: React.ReactNode
}

const BotaoIcone = ( props: BotaoIconeProps ) => {
    return (
        <>
            <button className='rounded-md border-2 flex items-center px-4 py-2 gap-1 hover:border-gray-300'>
                <span>{props.icone}</span>
                <span>{props.children}</span>
            </button>
        </>

    )
}

export default BotaoIcone