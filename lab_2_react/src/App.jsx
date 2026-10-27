import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import SoftSkills from './components/SoftSkills'
import Languages from './components/Languages'
import Projects from './components/Projects'
import Footer from './components/Footer'

const cv = {
  name: 'Ривак Дарина Орестівна',
  age: 19,
  contacts: [
    { label: 'Телефон', text: '+380670000000', href: 'tel:+380670000000' },
    { label: 'Email', text: 'daryna.ryvak.kb.2025@lpnu.ua', href: 'mailto:daryna.ryvak.kb.2025@lpnu.ua' },
    { label: 'Місто', text: 'Львів' }
  ],
  about: 'Студентка другого курсу спеціальності «Кібербезпека та захист інформації» у Національному університеті «Львівська політехніка». Займаюся розробкою програмного забезпечення, вивчаю комп’ютерні мережі та інформаційну безпеку.',
  education: [
    {
      school: 'Національний університет «Львівська політехніка»',
      degree: 'Кібербезпека та захист інформації (Бакалавр)',
      period: '2025 – 2029 (Currently studying)'
    }
  ],
  skills: [
    { category: 'Programming Languages', tools: 'C# (.NET, Windows Forms), Python (NumPy, Pandas, regex).' },
    { category: 'Web Technologies', tools: 'HTML5, React, Git/GitHub.' },
    { category: 'Networking & Security', tools: 'Cisco Packet Tracer, VLANs, DHCP, Security Auditing.' },
    { category: 'Development Tools', tools: 'Visual Studio, VS Code, PyCharm.' }
  ],
  softSkills: [
    { title: 'Працьовитість', text: 'відповідально ставлюся до виконання завдань та досягнення результатів.' },
    { title: 'Комунікабельність', text: 'легко знаходжу спільну мову з людьми та встановлюю сприятливий контакт.' },
    { title: 'Робота в команді', text: 'ефективно взаємодію з колегами для вирішення спільних завдань.' }
  ],
  languages: [
    { language: 'Українська', level: 'Рідна' },
    { language: 'Англійська', level: 'B1+' },
    { language: 'Німецька', level: 'A1' }
  ],
  projects: [
    { 
      title: 'Python Cybersecurity Log Analyzer', 
      description: 'Утиліта для аналізу логів автентифікації на основі регулярних виразів для виявлення спроб брутфорсу (SSH).' 
    },
    { 
      title: 'React CV Web Application', 
      description: 'Сучасне вебрезюме, побудоване на базі компонентного підходу React та стилізоване за допомогою Tailwind CSS v4.' 
    }
  ]
};

function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      <Header name={cv.name} age={cv.age} contacts={cv.contacts} />
      <main className="mx-auto my-8 grid max-w-4xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
        <About text={cv.about} />
        <Education items={cv.education} />
        <Skills skills={cv.skills} />
        <Languages items={cv.languages} />
        <Projects items={cv.projects} />
        <SoftSkills skills={cv.softSkills} />
      </main>
      <Footer name={cv.name} />
    </div>
  )
}

export default App