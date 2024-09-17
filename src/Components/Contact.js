import React from 'react'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3d23dc08-f2aa-4289-8f0d-c2f9882982dc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert('sent successfully!')
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='mt-20 md:ml-20 md:mr-20 ml-10 mr-10'>
      <div className='justify-center flex flex-col items-center'>
        <div className='bg-custom-gradient bg-clip-text text-transparent text-[56px] font-semibold'>Get in touch</div>
        <div className='flex flex-row gap-6 mt-4'>
            <i className="fa-brands fa-linkedin text-custom-text-color fa-xl hover:cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-custom-text-color fa-xl hover:cursor-pointer"></i>
            <i className="fa-brands fa-youtube text-custom-text-color fa-xl hover:cursor-pointer"></i>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 flex-col ml-0 mr-0 md:ml-20 md:mr-20 md:mt-20 space-y-10">
        {/* Background Image Section */}
        <div className="relative w-full md:w-[80%] h-screen md:h-[560px] bg-[url(../public/chair.png)]  bg-cover bg-center rounded-[20px]">
          <div className="absolute mt-10 flex flex-col items-start justify-start p-4">
            <form onSubmit={onSubmit} className="text-custom-text-color">
                <div className='flex flex-col gap-3 mt-4'>
              <label htmlFor="name">Your name:</label>
              <input name='name' type='text'placeholder='John Doe' className='w-[300px] rounded-[10px] p-4 bg-black'/>
              </div>
              <div className='flex flex-col gap-3 mt-4'>
              <label htmlFor="email">Your email:</label>
              <input name='email' type='text' placeholder='johndoe@example.com' className='w-[300px] rounded-[10px] p-4 bg-black'/>
              </div>

              <div className='flex flex-col gap-3 mt-4'>
              <label htmlFor="email">Your mesage:</label>
              <textarea name='email' type='text' placeholder='your message...' className='outline-none resize-none w-[300px] rounded-[10px] p-4 bg-black'/>
              </div>
              <button type='submit' className='text-custom-text-color mt-4'>Submit</button>

            </form>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Contact
