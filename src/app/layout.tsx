import { ReactNode } from 'react'
import './globals.css'
// faz a importação das fontes usando o next
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

// armazena a fonte em uma variável, nesse caso com uso **Flex** é uma font adaptavél, **variable** damos um nome que essa font vai criar dentro do CSS
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
// armazena font em uma variável, por não ser uma fonte adaptavél é necessario passar o weight que indica qual parte da fonte vai ser utilizado
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construida com React, Next.js, TailwindCSS e Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* altera a font do **className** para **roboto.variable** que é a variable definida acima e passa também a baiJamjuree como  e define a cor de fonte padrão text-gray-100 */}
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
