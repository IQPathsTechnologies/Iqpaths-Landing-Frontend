import './App.css'
import Header from './Components/Header/Header'
import CourseSection from './Components/CourseSection/CourseSection'
import CourseDetails from './Components/CourseSection/CourseDetails'
import Certificate from './Components/Certificate/Certificate'
import Instructor from './Components/Instructor/Instructor'
import HeroSection from './Components/AllCourses/HeroSection'
import SearchTab from './Components/AllCourses/SearchTab'
import CourseFilter from './Components/AllCourses/CourseFilter'
import CourseCard from './Components/AllCourses/CourseCard'

function App() {

  return (
    <>
      <Header />
      {/* <HeroSection /> */}
      {/* <SearchTab /> */}
      {/* <CourseFilter /> */}
      {/* <CourseCard /> */}
      <CourseSection />
      <CourseDetails />
      <Certificate />
      <Instructor />
    </>
  )
}

export default App
