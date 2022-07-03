import exampleImage from '../assets/images/example-image.png'
import logoImage from '../assets/images/logo.png'
export function Subscription() {
  return (
    <div className="flex flex-col items-center min-w-screen bg-blur-background bg-cover">
      <div className="w-full max-w-[1300px] flex justify-between  mt-24 px-5">
        <div className="max-w-[640px] px-2">
          <img src={logoImage} alt="" />
          <div className="flex flex-col">
            <span className="mt-6 text-4xl leading-tight mb-0">
              Construa uma <strong className="text-blue-500" >aplicação completa,</strong>
              <br />
              do zero, com <strong className="text-blue-500" >React JS</strong>
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

          <form action="" className='flex flex-col gap-4 w-full'>
          <input
            type="text"
            className="bg-gray-900 rounded h-8 p-6"
            placeholder="Seu nome completo"
          />
          <input
            type="text"
            className="bg-gray-900 rounded h-8 p-6"
            placeholder="Digite seu email"
          />
          </form>
         

          <button className="flex w-full bg-green-500 rounded h-8 p-6 items-center justify-center hover:bg-green-300 transition-colors">
            Garantir minha vaga
          </button>
        </div>
      </div>
      <div>
        <img src={exampleImage} alt="" />
      </div>
    </div>
  )
}
