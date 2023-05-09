import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience } from './components/experience'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* HEADER */}
      <Banner />

      {/* MY SKILLS */}
      <Skills />

      {/* MY EXPERIENCE */}
      <Experience />

      {/* MY PROJECTS */}
      <Projects />

      {/* MY CONTACT */}
      <Contacts />

      {/* MY CONTACT */}
      <Footer />
    </>
  )
}

export default App
