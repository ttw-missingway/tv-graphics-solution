import { useEffect } from 'react';
import Frame from '../components/Frame'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function LoadImagesFirst() {
  useEffect(() => {
    Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
      console.log('images finished loading');
    });
  }, [])
}

export default function Home() {
  return (
    <main
      className={`flex h-screen flex-col items-center justify-between`}
    >
      <Frame/>
    </main>
  )
}
