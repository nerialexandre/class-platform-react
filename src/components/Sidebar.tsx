import { gql, useQuery } from '@apollo/client'
import { Lesson } from './Lesson'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string
  title: string
}

export function Sidebar() {
  const lessons = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY).data
    ?.lessons

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl border-b border-gray-500 pb-6 block mb-6">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        <Lesson />
      </div>
    </aside>
  )
}
