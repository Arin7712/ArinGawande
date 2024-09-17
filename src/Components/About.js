import React from "react";
import image2 from '../testimonial4.webp'; // Importing relevant images only

const About = () => {
  return (
    <div className="mt-20 ml-10 mr-10 md:ml-20 md:mr-20">
      {/* About Title Section */}
      <div className="flex flex-col w-full md:w-6/12 gap-4">
        <div className="text-[#4c2f2f] font-semibold">ABOUT</div>
        <div className="text-[34px] bg-clip-text text-transparent bg-custom-gradient font-semibold">
          Sculpting my journey, growing daily
        </div>
      </div>

      {/* Image and Text Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-8 mt-10 md:mt-14 rounded-[10px]">
        {/* Image Container */}
        <div className="flex-shrink-0">
          <img src={image2} alt="testimonial" width={500} className="rounded-[10px]" />
        </div>

        {/* Text Container */}
        <div className="text-custom-text-color flex-grow">
          <p className="">
            Hi, I'm Arin. Besides sleeping and playing with cats 😅, I started web development at 15. 
            Growing connections brought freelancing opportunities into my hands. I've also been growing 
            my LinkedIn account through my "content writing" skills and by engaging with people.
          </p>
          <p className="mt-4">
            I love to connect with people and grow❄️, having a strong believe in growing as a community which drives me to network and be curious about stuff. I'm getting into AI and ML as it's going to be the future of humans, would love to connect with poeple who can provide me some guidance and roadmap for the same😊.
          </p>

          <p className="mt-4">
            Drop me a connect at LinkedIn and also support my content there, see y,all👊.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
