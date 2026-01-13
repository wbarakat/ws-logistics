import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Industries from '@/components/Industries'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Industries />
        <Services />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
