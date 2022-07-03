import { gql, useMutation } from '@apollo/client'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import exampleImage from '../assets/images/example-image.png'
import logoImage from '../assets/images/logo.png'

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`
export function Subscription() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [CreateSubscriber, { data, loading, error }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  )

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    await CreateSubscriber({
      variables: {
        name: name,
        email: email
      }
    })

    navigate('/event')
  }

  return (
    <div className="flex flex-col items-center min-w-screen bg-blur-background bg-cover">
      <div className="w-full max-w-[1300px] flex justify-between  mt-24 px-5">
        <div className="max-w-[640px] px-2">
          <img src={logoImage} alt="" />
          <div className="flex flex-col">
            <span className="mt-6 text-4xl leading-tight mb-0">
              Construa uma
              <strong className="text-blue-500"> aplicação completa,</strong>
              <br />
              do zero, com <strong className="text-blue-500">React JS</strong>
            </span>
            <p className="mt-6 leading-relaxed text-gray-200">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>
        </div>

        <div className="flex flex-col p-8 bg-gray-500 gap-4 rounded min-w-[400px]">
          <span className="font-bold text-2xl block">
            Inscreva-se gratuitamente
          </span>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <input
              type="text"
              name="name"
              onChange={event => {
                setName(event.target.value)
              }}
              className="bg-gray-900 rounded h-8 p-6"
              placeholder="Seu nome completo"
            />
            <input
              type="email"
              name="email"
              onChange={event => {
                setEmail(event.target.value)
              }}
              className="bg-gray-900 rounded h-8 p-6"
              placeholder="Digite seu email"
            />
            <button
              type="submit"
              disabled={loading}
              className="flex w-full bg-green-500 rounded h-8 p-6 items-center justify-center hover:bg-green-300 transition-colors disabled:bg-green-300 opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <div>
        <img src={exampleImage} alt="" />
      </div>
    </div>
  )
}
