import { Routes, Route } from 'react-router-dom'
import { Home, Skills, Services, Projects, AboutMe } from "./pages"
import Layout from './Layout'
import ContactUs from './pages/ContactUs'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="contactUs" element={<ContactUs />} />
      </Route>
    </Routes>
  )
}

export default App

    