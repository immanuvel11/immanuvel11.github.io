import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StoryScroll } from '@/components/layout/StoryScroll';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { RoboticsDeepDive } from '@/components/sections/RoboticsDeepDive';
import { EngineeringStack } from '@/components/sections/EngineeringStack';
import { Timeline } from '@/components/sections/Timeline';
import { Achievements } from '@/components/sections/Achievements';
import { Resume } from '@/components/sections/Resume';
import { Contact } from '@/components/sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <StoryScroll>
          <Hero />
          <About />
          <Projects />
          <RoboticsDeepDive />
        </StoryScroll>
        <EngineeringStack />
        <Timeline />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
