import React from 'react';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
// Import logos for the animation
import pythonLogo from '../../assets/tech_logo/python.png';
import javaLogo from '../../assets/tech_logo/java.png';
import springbootLogo from '../../assets/tech_logo/springboot.png';
import mysqlLogo from '../../assets/tech_logo/mysql.png';
import djangoLogo from '../../assets/tech_logo/django.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-4xl font-bold text-white mb-2">
            Hi, I'm <span className="text-[#8245ec]">Pratik Walunj</span>
          </h1>
          {/* Skills Heading with Typing Effect */}
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight text-white flex flex-wrap items-center">
            <span>I am a&nbsp;</span>
            <Typewriter
              options={{
                strings: [
                  'Java FSD',
                  'Python FSD',
                  'React Developer',
                  'Backend Developer',
                  'Coder',
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
                wrapperClassName: "text-[#8245ec]",
                cursorClassName: "text-[#8245ec]",
              }}
            />
          </div>

          {/* Structured Content */}
          <div className="mt-8 space-y-3 text-left">
            <p className="text-lg text-gray-300 flex items-start">
              <span className="text-xl mr-3">🚀</span>
              <span>Passionate Full-Stack Developer.</span>
            </p>
            <p className="text-lg text-gray-300 flex items-start">
              <span className="text-xl mr-3">💻</span>
              <span>Expertise in Java, Spring Boot, and Python.</span>
            </p>
            <p className="text-lg text-gray-300 flex items-start">
              <span className="text-xl mr-3">💡</span>
              <span>Specializing in scalable, user-friendly applications.</span>
            </p>
            <p className="text-lg text-gray-300 flex items-start">
              <span className="text-xl mr-3">🧠</span>
              <span>Strong interest in Data Science & Machine Learning.</span>
            </p>
          </div>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1qaqWUKzgtlBDbNmrEiK3e-CjeTa-F-fF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] flex items-center justify-center"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Central glowing core */}
              <div className="absolute w-1/4 h-1/4 bg-purple-600 rounded-full blur-2xl animate-blob opacity-70"></div>
              <div className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_20px_5px_rgba(130,69,236,0.5)]">
                <span className="text-purple-400 font-bold text-2xl sm:text-3xl">PW</span>
              </div>

              {/* Orbiting Icons */}
              {/* Each icon is in its own rotating container which defines the orbit path and speed */}
              {/* The inner div places the 'planet' on the orbit */}
              {/* The planet itself has a counter-rotation to stay upright */}

              {/* Planet 1: Python */}
              <div className="absolute w-full h-full rounded-full animate-orbit-1">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center animate-reverse-orbit-1">
                    <img src={pythonLogo} alt="Python" className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>
              </div>

              {/* Planet 2: Java */}
              <div className="absolute w-2/3 h-2/3 rounded-full animate-orbit-2">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center animate-reverse-orbit-2">
                    <img src={javaLogo} alt="Java" className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>
              </div>

              {/* Planet 3: Spring Boot */}
              <div className="absolute w-1/2 h-1/2 rounded-full animate-orbit-3">
                <div className="absolute top-1/2 -left-5 -translate-y-1/2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center animate-reverse-orbit-3">
                    <img src={springbootLogo} alt="Spring Boot" className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                </div>
              </div>

              {/* Planet 4: MySQL */}
              <div className="absolute w-[85%] h-[85%] rounded-full animate-orbit-4">
                <div className="absolute top-1/2 -right-5 -translate-y-1/2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center animate-reverse-orbit-4">
                    <img src={mysqlLogo} alt="MySQL" className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>
              </div>

              {/* Planet 5: Django */}
              <div className="absolute w-[40%] h-[40%] rounded-full animate-orbit-5">
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center animate-reverse-orbit-5">
                    <img src={djangoLogo} alt="Django" className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
