import { gql, useQuery } from '@apollo/client'
import { format, isPast } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import checkCircleIcon from '../assets/images/check-circle.svg'
import lockIcon from '../assets/images/lock.svg'

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      availableAt
      lessonType
    }
  }
`

interface Lesson {
  id: string
  title: string
  slug: string
  availableAt: Date
  lessonType: string
}

export function Lesson() {
  const lessons = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY).data
    ?.lessons

  const isAvailableLesson = (lessonDate: Date) => {
    return isPast(new Date(lessonDate))
  }

  const formatDateAvailable = (lessonDate: Date) => {

    return format(new Date(lessonDate), "EEE' • 'd' de 'LLLL' • 'k'h'mm", {
      locale: ptBR
    })


  }

  return (
    <>
      {lessons?.map(lesson => {
        return (
          <a href="" key={lesson.id}>
            <span className="text-gray-300 text-base">
              {
              formatDateAvailable(lesson.availableAt)
              }
            </span>
            <div className="border-2 border-gray-500 p-4 rounded-[4px] mt-2">
              <header className="flex justify-between items-center mb-4">
                {isAvailableLesson(lesson.availableAt) ? (
                  <span className="flex text-blue-500">
                    <img
                      src={checkCircleIcon}
                      className="mr-1"
                      alt="icone-status-aula"
                    />
                    Conteúdo liberado
                  </span>
                ) : (
                  <span className="flex text-orange-500">
                    <img
                      src={lockIcon}
                      className="mr-1"
                      alt="icone-status-aula"
                    />
                    Em Breve
                  </span>
                )}
                <span className="border-2 border-green-300  px-2 rounded-[4px] text-xs">
                  {lesson.lessonType === 'live' ? 'AO VIVO' : 'AULA PRATICA'}
                </span>
              </header>

              <strong>{lesson.title}</strong>
            </div>
          </a>
        )
      })}
    </>
  )
}
