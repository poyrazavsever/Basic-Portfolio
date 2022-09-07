import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import {AiOutlineMessage} from "react-icons/ai"

export default function ContactSection() {
    const [res, setRes] = useState()
    const [messageStatus, setMessageStatus] = useState(false)
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2jyhvsr', 'template_7lbl6im', formRef.current, 'zxOfi-RRc6UPCfhTF')
            .then((result) => {
                setRes({ status: true, msg: "Mail başarıyla gönderildi." })
            }, (error) => {
                setRes({ status: false, msg: "Mail gönderilirken bir sorunla karşılaşıldı." })
            });
    }


    const loadingContact = () => {
        setMessageStatus(true)
        setTimeout(() => {
            setMessageStatus(false)
        },3000)
        
    }

    return (
        <div className='w-full h-screen dark:bg-gray-800'>
            <div>
                <div className='w-3/4 lg:w-1/2 mx-auto'>
                    <h2 className='font-normal text-2xl text-center pb-4 text-black dark:text-white rounded-sm'>
                        Contact <span className='text-red-400  font-medium'> with me.</span>
                    </h2>
                    <br />

                    {   
                        res && (
                            res.status ?
                                messageStatus === true ?
                                 <div className='flex items-center justify-start gap-2 text-black dark:text-white'><AiOutlineMessage  className='animate-spin h-6 w-6'/> <span>Sending Message...</span></div> : <div className='bg-green-500  text-white px-6 py-2 w-full rounded'>
                                 {res.msg}
                             </div>
                                :
                                messageStatus === true ?
                                <div className='flex items-center justify-start gap-2 text-black dark:text-white'><AiOutlineMessage  className='animate-spin h-6 w-6'/> <span>Sending Message...</span></div> :
                                <div className='bg-red-600  text-white px-6 py-2 w-full rounded'>
                                    {res.msg}
                                </div>
                        )
                    }

                    <form ref={formRef} onSubmit={handleSubmit} >
                        <div>

                            <div className="inputBox">
                                <input required type="text" className='contactInput' placeholder='e.g: Poyraz Avsever' name="user_name" />
                            </div>


                            <div className="inputBox">
                                <input required type="text" className='contactInput' placeholder='pavsever@example.com' name="email" />
                            </div>

                            <div className="inputBox">
                                <textarea required name="message" className='contactInput h-24' placeholder='Your Message...'></textarea>
                            </div>

                            <button type='submit' className='text-white bg-red-400 dark:bg-gray-500 transition-all duration-300 px-6 py-1 rounded-sm hover:dark:bg-gray-300 hover:dark:text-black' onClick={loadingContact}>
                                Send
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}