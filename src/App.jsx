import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Test from './components/Test'
import Services from './components/Services'

function App() {

  return (
    <div className='text-red-400 font-grotsek w-[100vw] h-screen scroll'>
      <Navbar/>
      <Hero/>
      <Services/>
    </div>
  )
}

export default App
