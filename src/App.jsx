import './App.css'
import Header from './Components/Header/Header'
import CourseSection from './Components/CourseSection/CourseSection'
import CourseDetails from './Components/CourseSection/CourseDetails'
import Certificate from './Components/Certificate/Certificate'
import Instructor from './Components/Instructor/Instructor'
import SimilarCourses from './Components/SimilarCourses/SimilarCourses'
import HeroSection from './Components/AllCourses/HeroSection'
import SearchTab from './Components/AllCourses/SearchTab'
import CourseFilter from './Components/AllCourses/CourseFilter'
import CourseCard from './Components/AllCourses/CourseCard'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
