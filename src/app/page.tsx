import { Greetings } from '@/components/Greetings'
import { Projects } from '@/components/Projects'
import { TechStack } from '@/components/TechStack'

export default function Home() {
  return (
    <main>
      <Greetings />
      <Projects />
      <TechStack />
    </main>
  )
}
