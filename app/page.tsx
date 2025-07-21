// app/page.tsx
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Waitlist from '@/components/Waitlist'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Waitlist />
    </main>
  )
}