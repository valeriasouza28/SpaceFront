import { User, PlusCircle } from 'lucide-react'
import Image from 'next/image'
import nlwLogo from 'src/assets/NlwSpacetimeLogo.svg'

export default function Home() {
  return (
    // **grid-cols-2** define um gride de 2 colunas,  **min-h-screen** para ocupar 100% da altura
    <main className="grid min-h-screen grid-cols-2">
      {/* LEFT */}
      {/* **flex-start** para alinhar todos os itens para a esquerda, **justify-between** espaçamento entre os elementos, **px-28** padding na esquerda e na direita de 112 pixels, **py-16** padding em cima e em baixo de 64 pixels, **relative** para que tudo que eu posicione dentro da div fique relativo centralizado */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)]  bg-cover px-28 py-16">
        {/* Blur */}
        {/* **absolute** posição relativa ao eleemnto pai, **right-0** elemento alihandoo a direita do elemento pai com uma distãncia de 0 pixels  **top-1/2** alinhado ao topo do elemento pai com uma distãncia vertical de 50% do elemento pai ficando verticalmente centralizado, **h-[288px]** altura, **w-[526px]** largura, **-translate-y-1/2 desloca elemento verticalmente para cima em  50% da sua altura. Isso também, **translate-x-1/2** **rounded-full** arredondamento de bordas deixando  circular, **opacity-50** defineaopacidae do elemento como 50% parcialmente transparente, **blur-3xl** alica desfoque  no elemento com uma alta intensidade  */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-3xl" />
        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/* SIGN IN */}
        <a
          // url de login que recebe o client id do github que está dentro do arquivo .env.local
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PULIC_GITHUB_CLIENT_ID}`}
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="a-5 w-5 text-purple-200 hover:text-purple-400" />
          </div>

          <p className="max-w-[140px] text-sm leading-snug text-purple-100">
            <span className="text-purple-300 underline hover:text-gray-50">
              Crie sua conta
            </span>{' '}
            e salve suas memórias!
          </p>
        </a>

        {/* HERO */}
        {/* **space-y-5** coloca uma espaço entre acda elemento que eu tenho dentro dessa div de 20px */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW Spacetime" />

          <div className="max-w-[420px] space-y-4 ">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <a
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
            href=""
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '}
          <a
            target="_blank"
            rel="noreferrer"
            className="undeline hover:text-gray-100"
            href="https://rocketseat.com.br"
          >
            Rocketseat
          </a>
        </div>
      </div>
      {/* RIGHT */}
      {/* *flex* é o display flex, **flex** é o flex colum que faz com que um item fique abaixo do outro, **p-16** é um padding de 16 */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        {/* **flex-1** para a altura toda, **items-center** é o align items center **justify-center** para alinhar os elementos totalmente no centro */}
        <div className=" flex flex-1 items-center justify-center">
          {/* **leading-relaxed**  */}
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              <span className="flex items-center text-purple-400 hover:text-purple-500">
                <PlusCircle className="a-5  mr-2 w-5 text-purple-400 hover:text-purple-500" />
                <span> criar agora!</span>
              </span>
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
