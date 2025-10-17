import { NavBar } from '@/components/ui/NavBar'
import { Footer } from '@/components/ui/Footer'
import { Hero } from '@/sections/Hero'
import { Works } from '@/sections/Works'
import { Services } from '@/sections/Services'
import { Clients } from '@/sections/Clients'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { SectionProvider } from '@/lib/sections'

export default function App() {

  return (
    <SectionProvider>
      <NavBar />
      <main>
        <Hero />
        <Works />
        <Services />
        <Clients />
        <About />
        <Contact />
      </main>
      <Footer />
    </SectionProvider>
  )
}