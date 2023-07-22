import Image from 'next/image'
import Chat from '@/components/Chat';


export default function Home() {

  return (
    <div className='flex columns-3 gap-4 p-4 h-screen bg-slate-900'>
      <div className='w-full h-full'>
        <div className="card bg-slate-800 shadow-xl items-end h-full rounded-3xl">
          <div className="card-body w-full p-4">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  )
}
