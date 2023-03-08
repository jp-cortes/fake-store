
import FeedProdutcs from '@containers/FeedProducts';


import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <FeedProdutcs/>
    </>
  )
}
