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

      <div className='p-4 bg-zinc-700 mt-10 w-fit'>
      <form action="" className='text-custom-text-color  mt-10'>
        <div className='flex flex-col gap-4'>
          <div>
          <label htmlFor='name'>Your name:</label>
          </div>
          <div>
          <input type="text"  name='name' className='p-4 bg-white rounded-[10px] w-[300px]'/>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div>
          <label htmlFor='email'>Your email:</label>
          </div>
          <div>
          <input type="text"  name='email' className='p-4 bg-white rounded-[10px] w-[300px]'/>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div>
          <label htmlFor='message'>Your message:</label>
          </div>
          <div>
          <textarea type="text"  name='message' className='p-4 bg-white rounded-[10px] outline-none resize-none w-[300px]'/>
          </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Contact
