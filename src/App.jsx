import { useLanguage } from './hooks/useLanguage.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Section from './components/Section.jsx';
import FeaturedProject from './components/FeaturedProject.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const { lang, t, toggleLang } = useLanguage();

  return (
    <>
      <Header t={t} lang={lang} onToggleLang={toggleLang} />
      <main>
        <Hero t={t} />
        <Stats stats={t.stats} />
        <Section id="work">
          <FeaturedProject t={t} />
          <Projects t={t} lang={lang} />
        </Section>
        <Skills t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
