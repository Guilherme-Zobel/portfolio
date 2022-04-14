import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main>
        <HomeHero />
      </main>
    </HomeContainer>
  );
}
