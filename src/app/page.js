import Image from 'next/image'
import HeroSection from './components/HeroSection'
import NavigationBar from './components/NavigationBar'
import AboutMe from './components/AboutMe'
import MyProjects from './components/MyProjects'
import ExperienceTimeline from './components/ExperienceTimeline'
import EmailMe from './components/EmailMe'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1C1C1C]">

      <NavigationBar />
    
      <div class="container mt-24 mx-auto px-12 py-4">

        <HeroSection />
        <AboutMe />
        
        <MyProjects />
        <ExperienceTimeline />

        <EmailMe />

      </div>
    </main>
  )
}
