import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/Home';
import Formation from '../components/Formation';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main>
        <HomeHero />
        <Formation />
      </main>
    </HomeContainer>
  );
}
