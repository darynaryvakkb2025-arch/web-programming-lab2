import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SoftSkills from './components/SoftSkills';
import Languages from './components/Languages';

function App() {
  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Header />
      <hr />
      <About />
      <hr />
      <Education />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <SoftSkills />
      <hr />
      <Languages />
    </main>
  );
}

export default App;