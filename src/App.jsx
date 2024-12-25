import './App.css'
import Header from './Components/Header/Header'
import CourseSection from './Components/CourseSection/CourseSection'
import CourseDetails from './Components/CourseSection/CourseDetails'
import HeroSection from './Components/AllCourses/HeroSection'
import SearchTab from './Components/AllCourses/SearchTab'
import CourseFilter from './Components/AllCourses/CourseFilter'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <SearchTab />
      <CourseFilter />
      {/* <CourseSection /> */}
      {/* <CourseDetails /> */}
    </>
  )
}

export default App
