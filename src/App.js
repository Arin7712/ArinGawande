import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="bg-black ">
      <div className="flex flex-col ml-0 mr-0 md:ml-20 md:mr-20 md:mt-10 space-y-10">
        {/* Background Image Section */}
        <div className="relative w-full h-screen md:h-[560px]   bg-cover bg-center rounded-[20px]">
          <div className="absolute ml-4 mr-4 md:ml-0 md:mr-10 inset-0 flex items-center justify-center">
            <div className="text-center leading-tight">
              <h1 className="text-[50px] md:text-[64px] font-bold bg-custom-gradient bg-clip-text text-transparent leading-tight">
                Arin Gawande
              </h1>
              <p className="text-[16px] bg-custom-gradient bg-clip-text text-transparent">
                The stories you'd wish never came true.
              </p>
            </div>
          </div>
        </div>

        {/* Content Below the Image */}
        <div className="hidden md:flex flex-col mb-10 ml-10 mr-10 md:ml-0 md:mr-0 md:flex-row justify-between text-custom-text-color items-center gap-4 md:gap-0">
          {/* Left Section */}
          <div className="flex flex-row flex-wrap space-x-5 bg-custom-back p-3 rounded-[10px] items-center">
            <h1 className="font-bold">ARIN</h1>
            <p className="text-[14px]">ABOUT</p>
            <p className="text-[14px]">NEWSLETTER</p>
            <p className="text-[14px]">PORTFOLIO</p>
            <p className="text-[14px]">CONTACT</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-row space-x-5 ">
            <div className="border p-2 rounded-[15px]">IG</div>
            <div className="border p-2 rounded-[15px]">TW</div>
          </div>
        </div>

        <div className="flex ml-10 mr-10 md:mr-0 md:ml-0 justify-start md:justify-end text-custom-text-color">
          <div className="w-10/12 md:w-3/12">
            I'm committed to creating visual appealing and functional websites
            for business and start-ups to cinvey their vibe and idea to the
            online world.
          </div>
        </div>
      </div>
      <Testimonials />
      <About />
      {/* <Contact/> */}
      <div className="text-custom-text-color ml-10 mr-10 md:ml-20 md:mr-20 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="md:text-[34px] text-[26px] font-medium">
            Arin Gawande
          </div>
          <div className="flex flex-row gap-4">
            <div><a href='https://youtu.be/HIfXzdsv4Vc?si=O_Sfy1JBh50Jcp-i'>Youtube</a></div>
            <div><a href="https://www.linkedin.com/in/arin-gawande-134182316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></div>
            <div><a href="https://www.instagram.com/arin.gawande?igsh=bnhsOGo0cXNqNjNq">Instagram</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
