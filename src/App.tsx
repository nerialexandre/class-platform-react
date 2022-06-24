import { gql, useQuery } from '@apollo/client'

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

function App() {
  const lessons = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY).data
    ?.lessons

  return (
    <ul>
      {lessons?.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
