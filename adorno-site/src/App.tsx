import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/site/Navbar'
import { Footer } from './components/site/Footer'
import { WhatsAppFab } from './components/site/WhatsAppFab'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Gallery from './pages/Gallery'
import Projects from './pages/Projects'
import Brochure from './pages/Brochure'
import Contact from './pages/Contact'
import Inquiry from './pages/Inquiry'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
