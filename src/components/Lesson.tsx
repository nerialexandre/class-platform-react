import { gql, useQuery } from '@apollo/client'
import classNames from 'classnames'
import { format, isPast } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link, useParams } from 'react-router-dom'
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
  const { slug } = useParams<{ slug: string }>()

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
          <Link
            to={
              isAvailableLesson(lesson.availableAt)
                ? `/event/lesson/${lesson.slug}`
                : ''
            }
            key={lesson.id}
          >
            <span className="text-gray-300 text-base">
              {formatDateAvailable(lesson.availableAt)}
            </span>
            <div
              className={classNames(
                'border-2 border-gray-500 p-4 rounded-[4px] mt-2',
                {
                  'bg-green-500': lesson.slug === slug
                }
              )}
            >
              <header className="flex justify-between items-center mb-4">
                {isAvailableLesson(lesson.availableAt) ? (
                  <span
                    className={classNames('flex', {
                      'text-white': lesson.slug === slug,
                      'text-blue-500': lesson.slug !== slug
                    })}
                  >
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
                <span
                  className={classNames(
                    'border-2 border-green-300 px-2 rounded-[4px] text-xs',
                    {
                      'border-white': lesson.slug === slug,
                      'border-green-300': lesson.slug !== slug
                    }
                  )}
                >
                  {lesson.lessonType === 'live' ? 'AO VIVO' : 'AULA PRATICA'}
                </span>
              </header>

              <strong>{lesson.title}</strong>
            </div>
          </Link>
        )
      })}
    </>
  )
}
