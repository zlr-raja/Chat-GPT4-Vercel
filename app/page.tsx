import Image from 'next/image'
import ChatComponent from '@/components/ChatComponent';
 

export default function Home() {

  return (
    <div className='flex columns-3 gap-4 p-4 h-screen bg-slate-900'>
      {/* <div className='w-1/4 h-full'>
        <div className="card bg-slate-800 shadow-xl items-end h-full rounded-3xl">
          <div className="card-body w-full p-4">
            <h2 className="card-title">Resume GPT</h2>

            <div className='absolute bottom-0 left-0 right-0'>

            </div>
          </div>
        </div>
      </div> */}
      <div className='w-full h-full'>
        <div className="card bg-slate-800 shadow-xl items-end h-full rounded-3xl">
          <div className="card-body w-full p-4">
            <ChatComponent /> 
          </div>
        </div>
      </div>
    </div>
  )
}
