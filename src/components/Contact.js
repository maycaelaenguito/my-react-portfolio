import React from 'react';

const Contact = () => {
  return <div name='contact' className="section w-full h-screen flex justify-center items-center p-4" id='contact'>
    <form method='POST' action='https://getform.io/f/497e23a9-753d-4706-84e1-0182df043003' className='flex flex-col max-w-[600px] w-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-[#b936ee]'>Contact</p>
        <p className='py-4 email'>Anything I can help? Submit a form below or send an email at maycaelaenguito@gmail.com</p>
      </div>
      <input className='bg-[#f5ddff] p-2' type='text'placeholder='e.g. John Doe' name='name'/>
      <input className='my-4 p-2 bg-[#f5ddff]' type='email' placeholder='e.g. johndoe@gmail.com' name='email'/>
      <textarea className='bg-[#f5ddff] p-2' name='message' rows="10" cols="30" placeholder='Message...'></textarea>

      <button className='border-2 hover:bg-[#3bace2] hover:border-[#3bace2] py-2 px-5 my-8 mx-auto flex items-center submit'>Submit</button>
    </form>

  </div>;
};

export default Contact;
  