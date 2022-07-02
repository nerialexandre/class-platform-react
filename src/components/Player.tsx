import '@vime/core/themes/default.css'
import { DefaultUi, Player as VimePlayer, Youtube } from '@vime/react'
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning
} from 'phosphor-react'

export function Player() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        {/* <div className="bg-red-600 h-full max-w-5xl max-h-[60vh] aspect-video"></div> */}

        <div className="w-full max-w-[1100px] aspect-video max-h-[70vh]">
          <VimePlayer>
            <Youtube videoId="Djlcz_X5I5o" />
            <DefaultUi />
          </VimePlayer>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="font-bold text-2xl mb-4">
              Aula 01 - Criando o projeto e realizando o setup inicial
            </h1>
            <p className="text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da
              aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
              realizar o setup do nosso projeto no GraphCMS criando as entidades
              da aplicação e integrando a API GraphQL gerada pela plataforma no
              nosso front-end utilizando Apollo Client.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="w-16 h-16 rounded-full border-blue-500 border-2 "
                src="https://github.com/nerialexandre.png"
                alt="picture"
              />
              <div className="flex flex-col leading-relaxed">
                <strong className="font-bold text-2xl">Alexandre Neri</strong>
                <span className="text-sm text-gray-300">Desenvolvedor Web</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-[25%]">
            <a
              href="#"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center"
            >
              <DiscordLogo size={24} />
              Comunidade do discord
            </a>

            <a
              href="#"
              className="p-4 text-sm border-blue-500 text-blue-500 border-2 flex items-center rounded font-bold uppercase gap-2 justify-center"
            >
              <Lightning size={24} />
              Acesse o Desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href="#"
            className="flex h-36 rounded-md overflow-hidden bg-gray-600 hover:bg-gray-500 transition-colors"
          >
            <div className="h-full p-6 flex items-center bg-green-500">
              <FileArrowDown
                size={38}
                weight={'bold'}
                className="mx-auto font-bold"
              />
            </div>
            <div className="p-6">
              <strong className="font-bold text-2xl block">
                Material complementar
              </strong>
              <span className="text-sm text-gray-300">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </span>
            </div>
            <div className="p-6 flex items-center">
              <CaretRight
                size={28}
                weight={'bold'}
                className="mx-auto font-bold text-blue-500"
              />
            </div>
          </a>

          <a
            href="#"
            className="flex h-36 rounded-md overflow-hidden bg-gray-600 hover:bg-gray-500 transition-colors"
          >
            <div className="h-full p-6 flex items-center bg-green-500">
              <Image size={38} weight={'bold'} className="mx-auto font-bold" />
            </div>
            <div className="p-6">
              <strong className="font-bold text-2xl block">
                Wallpapers exclusivos
              </strong>
              <span className="text-sm text-gray-300">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </span>
            </div>
            <div className="p-6 flex items-center  ">
              <CaretRight
                size={28}
                weight={'bold'}
                className="mx-auto font-bold text-blue-500"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
