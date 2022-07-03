import { gql, useQuery } from '@apollo/client'
import { DefaultUi, Player, Youtube /* @vite-ignore */ } from '@vime/react'

import('@vime/core/themes/default.css')

import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning
} from 'phosphor-react'

const GET_LESSONS_SLUG_QUERY = gql`
  query getLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      description
      id
      title
      videoId
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`
interface LessonResponse {
  lesson: {
    id: string
    title: string
    description: string
    videoId: string
    slug: string
    lessonType: string
    teacher: {
      bio: string
      avatarURL: string
      name: string
    }
  }
}

interface VideoProps {
  lessonSlug: string
}

export function VideoPlayer(props: VideoProps) {
  const { data, error } = useQuery<LessonResponse>(GET_LESSONS_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug
    }
  })

  if (!data) {
    console.log(error)
    return (
      <div className="flex-1">
        <h1>carregando</h1>
      </div>
    )
  } else {
    return (
      <div className="flex-1">
        <div className="bg-black flex justify-center">
          <div className="w-full max-w-[1100px] aspect-video max-h-[70vh]">
            <Player>
              <Youtube
                videoId={data.lesson.videoId}
                key={data.lesson.videoId}
              />
              <DefaultUi />
            </Player>
          </div>
        </div>
        <div className="p-8 max-w-[1100px] mx-auto">
          <div className="flex items-start gap-16">
            <div className="flex-1">
              <h1 className="font-bold text-2xl mb-4">{data.lesson?.title}</h1>
              <p className="text-gray-200 leading-relaxed">
                {data.lesson?.description}
              </p>

              <div className="flex items-center gap-4 mt-6">
                <img
                  className="w-16 h-16 rounded-full border-blue-500 border-2 "
                  src="https://github.com/nerialexandre.png"
                  alt="picture"
                />
                <div className="flex flex-col leading-relaxed">
                  <strong className="font-bold text-2xl">
                    {data.lesson?.teacher.name}
                  </strong>
                  <span className="text-sm text-gray-300">
                    {data.lesson?.teacher.bio}
                  </span>
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
                <Image
                  size={38}
                  weight={'bold'}
                  className="mx-auto font-bold"
                />
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
}
