import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import More from './components/More';
import WhyInvestAfrica from './components/WhyInvestAfrica';
import Services from './components/Services';
import LogoCarousel from './components/LogoCarousel';
import PortfolioShowcase from './components/PortfolioShowcase';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
            <LogoCarousel />

      <About />
      <More />
      <WhyInvestAfrica />
      <Services />
      {/* <LogoCarousel /> */}
      <PortfolioShowcase />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;