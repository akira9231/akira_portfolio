import React from 'react';

// React Icons
import { SiHey } from "react-icons/si";
import { RiProfileLine, RiContactsBookLine } from "react-icons/ri";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import myphoto from '../Image/385655a5-399c-4e1d-8abd-c71e14a9251e.png'
const Hero = () => {
  console.log(myphoto);
  return (
    <div className="py-12 px-2 max-w-4xl m-auto sm:pt-24">
        <h2 className="flex justify-start items-center gap-2 text-xl font-bold text-teal-500 mb-4 sm:text-2xl">
          <span>Hello there</span><SiHey /><span>I am</span>
        </h2>
        <h1 className="text-6xl font-bold text-white sm:text-7xl">
          Akria Yamada
        </h1>
        <div className='flex '>
          <div className='w-2/6 p-8'>
            <img className='rounded-lg' src={myphoto.src} alt="" />
          </div>
          <div className='w-4/6'>
          <p className="text-md text-gray-400 leading-7 my-4 sm:text-lg sm:leading-8">
          I’m a super ambitious professional with a vast array of knowledge in different programming languages, responsive frameworks; databases, and best code practices. Courteous and enthusiastic with an interest in everything in the orbit and fascinated by web programming such as developing apps. My focus is on clean, elegant, and efficient codes and I am able to work on new and existing micro-sites, landing pages, templates, and provide guidance and troubleshooting support to clients. I have established a profound knowledge in MongoDB, Express.js, Nest.js, React.js, Node.js, JavaScript, Next.js, MySQL, HTML5, CSS3. My experience includes blockchain smart contract(solidity) and connecting wallet to frontend, NFT market place. I am passionate about front-end development as technology innovation, and I have the drive and energy needed to consistently exceed expectations. I look forward to being a part of a growing company as a front-end developer where I can utilize exceptional programming and interpersonal skills acquired to contribute to your company's success.
          </p>
          </div>
          
          
        </div>
        
        {/* <div className="my-7 flex justify-start items-center gap-4 flex-wrap">
          <button className="bg-teal-500 py-2 px-4 font-bold text-white border-2 border-teal-500 rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white" title="View Resume">
            <a href="" className="flex justify-start items-center gap-1">
              <span>View Resume</span>
              <RiProfileLine />
              </a>
          </button>
          <button className="bg-white py-2 px-4 font-bold text-teal-500 border-2 border-white rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white" title="Get in touch">
            <a href="#contact" className="flex justify-start items-center gap-1">
              <span>Get in touch</span>
              <RiContactsBookLine />
            </a>
          </button>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h4 className="text-xl text-white font-bold">Find me on :</h4>
          <ul className="flex justify-start items-center flex-wrap gap-4">
            <li title="Twitter">
              <a href="" className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
                <FiTwitter />
              </a>
            </li>
            <li title="GitHub">
              <a href="" className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
                <FiGithub />
              </a>
            </li>
            <li title="LinkedIn">
              <a href="" className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
                <FiLinkedin />
              </a>
            </li>
          </ul>
        </div> */}
    </div>
  )
}

export default Hero;