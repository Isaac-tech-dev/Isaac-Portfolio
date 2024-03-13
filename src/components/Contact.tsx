//import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className={`bg-[#0a192f] w-full h-screen text-gray-300 flex justify-center items-center p-4`}>
        <form action="https://getform.io/f/zazokymb" method="POST"  className={`flex flex-col max-w-[600px] w-full`}>
            <div className={`pb-8`}>
                <p className={`text-4xl font-bold inline border-b-4 border-pink-600`}>Contact</p>
                <p className={`py-4`}>// Submit the form below or reach out to me on <a href="ayeniisaac@gmail.com">ayeniisaac1on1@gmail.com</a></p>
            </div>
            <input className={`p-2 bg-[#ccd6f6] text-black`} type="text" placeholder='Name' name='name' />
            <input className={`my-4 p-2 bg-[#ccd6f6] text-black`} type="email" placeholder='Email' name='email' />
            <textarea name="message" rows={10} className={`bg-[#ccd6f6] p-2 text-black`} placeholder='Message'></textarea>
            <button className={`text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center`}>Let's Connect</button>
        </form>
    </div>
  )
}

export default Contact