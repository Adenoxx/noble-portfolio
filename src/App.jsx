import racont from '/racont.png'
import profileImage from '/my-faceCard.jpg'
import githubImage from '/githubFinder.jpg'
import ascone from '/ascone.jpg'
import hBerry from '/hBerry.jpg'
import scissor from '/scissor.jpg'
import portfolioCard from '/portfolio-img.jpg'
import { Github, Linkedin } from 'lucide-react'

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className='fixed top-0 w-full bg-gray-900 text-white shadow-md z-50'>
      <ul className='flex justify-center space-x-6 py-4 text-lg font-semibold'>
        <li
          className='cursor-pointer hover:text-cyan-400'
          onClick={() => scrollToSection('header')}
        >
          Home
        </li>
        <li
          className='cursor-pointer hover:text-cyan-400'
          onClick={() => scrollToSection('about')}
        >
          About
        </li>
        <li
          className='cursor-pointer hover:text-cyan-400'
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </li>
        <li
          className='cursor-pointer hover:text-cyan-400'
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </li>
      </ul>
    </nav>
  )
}

function Header() {
  return (
    <header
      className='min-h-screen flex items-center lg:gap-[5rem] justify-center text-center'
      id='header'
    >
      <div className='mt-10'>
        <h1 className='text-5xl font-bold mb-3'>
          Noble <span className='text-cyan-500'>Udoesit</span>
        </h1>
        <p className='text-xl mb-8'>Frontend Engineer</p>
      </div>
      <img
        src={profileImage}
        alt="Noble's face card"
        className='w-[117px] h-[200px] rounded-[50%] mr-[45px] lg:mr-0'
      />
    </header>
  )
}

function About() {
  return (
    <section className='max-w-4xl min-h-screen mx-auto my-16' id='about'>
      <div className='mb-[1rem] p-[1rem]'>
        <h2 className='text-3xl text-center font-bold mb-4'>About Me</h2>
        <p className='text-lg text-left'>
          I am a frontend developer passionate about enhancing everyday life
          through user-friendly, accessible applications. With a strong
          foundation in HTML, CSS, JavaScript and React, I create intuitive,
          effective solutions that bring ease and efficiency to people daily
          routines.
        </p>
        <p className='text-lg text-left'>
          I am constantly seeking new opportunities to collaborate, learn and
          contribute on projects that align with my vision of making technology
          a seamless, empowering part of everyday experiences.
        </p>
        <p className='text-lg'>
          When I am not coding I like to interact with nature, bond with family
          and friends.
        </p>
      </div>
      <div className='flex justify-end ml-[1rem] p-[1rem]'>
        <button className='py-[6px] px-[12px] bg-[#00ffff] rounded-md text-[#000] font-semibold border-none outline-none cursor-pointer'>
          <a
            href='https://drive.google.com/file/d/1lP3Dq3Bso73yMONqdOKuiU401cTdRzUm/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'
            download="Noble's CV.pdf"
          >
            My Resume
          </a>
        </button>
      </div>
    </section>
  )
}

function Projects() {
  const projectData = [
    {
      title: 'Racont',
      description:
        'A streaming platform to showcase African contents.',
      image: racont,
      githubLink: 'https://github.com/racon-t/racont-site',
      liveSiteLink: 'https://racont-site.vercel.app/',
    },
    {
      title: 'Github Portfolio',
      description:
        'A responsive website that fetches the repositories of users.',
      image: githubImage,
      githubLink: 'https://github.com/Adenoxx/AltSchool-Semester-Project',
      liveSiteLink: 'https://alt-school-semester-git-project.vercel.app/',
    },
    // {
    //   title: "CareFinder App",
    //   description:
    //     "A website that enables users find hospitals near them using React and TypeScript",
    //   image: githubImage,
    //   githubLink: "",
    //   liveSiteLink: "",
    // },
    {
      title: 'Ascone Website',
      description:
        'A responsive fintech landing page built with Next.js. This was done to test Next.js framework. ',
      image: ascone,
      githubLink: 'https://github.com/Adenoxx/Valtoria',
      liveSiteLink: '',
    },
    {
      title: 'My Portfolio',
      description:
        'This is a website that showcases projects I have worked on. Developed with React and tailwindcss',
      image: portfolioCard,
      githubLink: 'https://github.com/Adenoxx/noble-portfolio',
      liveSiteLink: 'https://noble-portfolio.vercel.app/',
    },
    {
      title: 'Huckleberry Design',
      description:
        'My first assignment at AltSchool Of Africa to practice responsive designs',
      image: hBerry,
      githubLink: 'https://github.com/Adenoxx/Huckleberry',
      liveSiteLink: 'https://huckleberry-six.vercel.app/',
    },
    {
      title: 'Scissor Project',
      description: 'A desktop view landing page built with HTML and CSS',
      image: scissor,
      githubLink: 'https://github.com/Adenoxx/AltSchool_FirstSemesterProject',
      liveSiteLink: 'https://alt-school-first-semester-project-two.vercel.app/',
    },
  ]

  return (
    <section className='max-w-6xl mx-auto my-16 px-6' id='projects'>
      <h2 className='text-3xl font-bold mb-6 text-center'>Projects</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projectData.map((project, index) => (
          <div
            key={index}
            className='bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300'
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h3 className='text-xl font-semibold text-[#fff] mb-2'>
                {project.title}
              </h3>
              <p className='text-[#fff] text-sm'>{project.description}</p>
            </div>
            <div className='flex space-x-4 ml-8 mb-4'>
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
              >
                GitHub
              </a>
              <a
                href={project.liveSiteLink}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
              >
                Live Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className='max-w-4xl mx-auto my-16 px-6' id='contact'>
      <div className='bg-white rounded-lg shadow-md p-6'>
        <h2 className='text-3xl font-bold text-blue-600 mb-4'>Contact</h2>
        <p className='text-gray-700 text-lg'>
          Feel free to reach out:{' '}
          <a
            href='mailto:youremail@example.com'
            className='text-blue-500 hover:underline'
          >
            nobleudoesit@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <div className='container mx-auto px-6 flex justify-between items-center'>
      <p>&copy; 2024 Noble Udoesit.</p>
      <div className='flex space-x-4'>
        <a
          href='https://github.com/Adenoxx'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-400 transition-colors'
        >
          <Github />
        </a>
        <a
          href='http://www.linkedin.com/in/noble-udoesit'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-400 transition-colors'
        >
          <Linkedin />
        </a>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className='min-h-screen w-full h-[100%] bg-gradient-to-b from-gray-900 to-gray-800 text-white'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
