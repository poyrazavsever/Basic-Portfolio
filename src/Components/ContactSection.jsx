import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

export default function ContactSection() {
    const [res, setRes] = useState()
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2jyhvsr', 'template_7lbl6im', formRef.current, 'zxOfi-RRc6UPCfhTF')
        .then((result) => {
            setRes({status: true ,msg: "Mail başarıyla gönderildi."})
        }, (error) => {
            setRes({status: false, msg: "Mail gönderilirken bir sorunla karşılaşıldı."})
        });
    }

    return (
        <div>
            <div>
                <div className='w-3/4 mx-auto lg:w-2/5'>
                    <h2 className='font-normal text-lg text-center pb-4 text-black rounded-sm'>
                        Contact <span className='text-red-400 font-medium'> with me.</span>
                    </h2>
                    <form ref={formRef} onSubmit={handleSubmit} >
                        <div>

                            <div className="inputBox">
                                <input required type="text" className='contactInput'placeholder='e.g: Poyraz Avsever' name="user_name"/>
                            </div>


                            <div className="inputBox">
                                <input required type="text" className='contactInput' placeholder='pavsever@example.com' name="email"/>
                            </div>

                            <div className="inputBox">
                                <textarea required name="message" className='contactInput h-24' placeholder='Your Message...'></textarea>
                            </div>

                            <button type='submit' className='text-white bg-red-400 transition-all duration-300 px-6 py-1 rounded hover:bg-red-500'>
                                Send
                            </button>

                        </div>
                       
                        {
                            res && (
                                res.status ? 
                                <div className='succsesMsg'>
                                    {res.msg}
                                </div>  
                                :
                                <div className='dangerMsg'>
                                    {res.msg}
                                </div>
                            )
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}