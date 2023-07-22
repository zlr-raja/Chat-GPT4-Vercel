'use client'

import { IoMdSend } from 'react-icons/io';
import { FaCircleUser } from 'react-icons/fa6';
import { BsRobot } from 'react-icons/bs';
import { useChat, Message } from 'ai/react';
export default function ChatComponent() {

    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();
    
    return (
        <div className="h-full flex flex-col">
            <div className="chat-header w-4/5 flex justify-left">
                <h1 className='text-xl p-2 mb-2'>Chat GPT 4</h1>
            </div>
            <div className="flex flex-grow p-4">
                <div className="prompts text-base-content mt-auto w-full overflow-y-auto max-h-custom custom-scrollbar">
                    {messages.map((message: Message) => {
                        return (
                            <div key={message.id}>
                                {message.role === 'assistant' ?
                                    <div className="flex justify m-2 flex-row">
                                        <div className="justify-end  avatar">
                                            <div className="w-10 rounded-full">
                                                <BsRobot size={40} className="p-1" />
                                            </div>
                                        </div>
                                        <div className="ml-2  rounded-full bg-slate-900 p-3 bg-primary-500 text-white">
                                            {message.content.split('\n').map((line: string, index: number) => {
                                                if (line === "") {
                                                    return <p key={message.id + index}>&nbsp;</p>
                                                } else {
                                                    return <p key={message.id + index}>{line}</p>
                                                }
                                            })}
                                        </div>
                                    </div>
                                    :
                                    <div className="flex justify m-2 flex-row-reverse">
                                        <div className="justify-end  avatar">
                                            <div className="w-10 rounded-full">
                                                <FaCircleUser size={40} className="p-1" />
                                            </div>
                                        </div>
                                        <div className="mr-2 rounded-full bg-slate-900 p-3 bg-primary-500 text-white">
                                            {message.content}
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })}

                    {messages.length === 0 && (
                        <div className="pt-28 text-center h-full justify-center flex">
                            <div className='flex flex-col gap-3 items-center p-4'>
                                <BsRobot size={60} />
                                <div>
                                    <p className='text-lg'>{"I'm GPT-4 Model!"}</p>
                                    <p className='text-sm'>{"Ask anything in chat"}</p>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <form onSubmit={handleSubmit} className="fixed bottom-6 form-control w-4/5 self-center mx-auto m-4 items-center bg-base-300 rounded-full px-2"  >
                <div className="flex items-center w-full relative">
                    <textarea
                        value={input}
                        onChange={handleInputChange}
                        className="p-5 border-0 bg-slate-600 mt-3 rounded-lg w-full"
                        placeholder="Ask anything..." />

                    <button type="submit" className="rounded-md btn absolute bottom-0 right-0 p-2 m-2">
                        <IoMdSend size={20} />
                    </button>
                </div>
            </form>
        </div>
    )
}