import { useState } from 'react';
import logo from './assets/profile-pic.png';
import './App.css';
import arrow from './assets/arrow.png';
import ellipse from './assets/ellipse.png';
import skills from './assets/Skills.png';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Projects from './components/ui/Projects';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/amanraj89969@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setFormStatus('Thank you! Your message has been sent.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFormStatus(`Error: ${result.message}`);
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setFormStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white flex flex-col items-center justify-center">
      {/* Header Section */}
      <header className="text-center flex flex-col items-center py-16">
        <p className="text-xl font-bold tracking-wide">
          Hello! I&apos;m <span className="text-[#21ac12]">Aman</span>
        </p>
        <img src={arrow} alt="arrow" className="w-16 md:w-20 mt-2 mx-auto" />
        
        <div className="flex justify-center mt-4">
          <img src={logo} alt="logo" className="w-40 md:w-60 rounded-full gradient-border animate-border-pulse" />
        </div>

        <div className="mt-8 text-center relative">
          <p className="font-bold text-lg">
            <span>A Developer who</span><br />
            <span className="text-2xl">brings ideas to life through </span>
            <span className="text-2xl text-[#21ac12] relative">
              code
              <img
                src={ellipse}
                alt=""
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
              />
            </span>
          </p>
          <p className="mt-4 font-bold text-sm">
            Because if the code doesn&apos;t captivate you, what else will?
          </p>
        </div>
      </header>

      {/* Skills Section */}
      <div className="text-center w-full py-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-transparent bg-clip-text">
          Skills
        </h2>
        <div className="flex justify-center items-center mt-8">
          <img src={skills} alt="My skills" className="w-full max-w-4xl" />
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full py-16">
        <Projects />
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="font-bold text-4xl text-center bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-transparent bg-clip-text">
          Contact
        </h2>
        <div className="max-w-2xl mx-auto text-center mt-8">
          <p className="text-lg">I&apos;m currently looking to join a cross-functional team that values improving people&apos;s lives through accessible design.</p>
          <p className="text-4xl mt-4 font-bold p-2 rounded bg-blue-800">Have a project in mind? Let&apos;s connect!</p>
          
          <div className="flex justify-center space-x-6 my-6">
            <a href="https://github.com/Stranger1298" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#21ac12] transition transform hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aman-83169b204/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#21ac12] transition transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://x.com/Nobita20658735" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#21ac12] transition transform hover:scale-110">
              <FaTwitter />
            </a>
            <a href="mailto:amanraj89969@gmail.com" className="text-3xl hover:text-[#21ac12] transition transform hover:scale-110">
              <FaEnvelope />
            </a>
          </div>
          
          
          <form 
            action="https://formsubmit.co/amanraj89969@gmail.com" 
            method="POST" 
            className="bg-white p-6 rounded-lg shadow-lg mt-8 max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded text-black mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded text-black mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded text-black mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
