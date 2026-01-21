import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import More from './components/More';
import WhyNPC from './components/WhyNPC';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      
      <More />
      <WhyNPC />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
