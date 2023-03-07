
import Header from 'components/Header';
import FeedProdutcs from 'containers/FeedProducts';
import 'styles/Header.scss';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Header/>
     <FeedProdutcs/>
    </>
  )
}
