import { useEffect } from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import Results from '../components/Results';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Comparison from '../components/Comparison';
import Faq from '../components/Faq';
import Carousel from '../components/Carousel';
import Price from '../components/Price';
import ClientsMarquee from '../components/ClientsMarquee';
import Navbar from '../components/Navbar';
import Booking from '../components/Booking';
function Home() {

    useEffect(() => {
        // Set dark mode by default for the entire app
        document.documentElement.classList.add('dark');
      }, []);
      return (
        <>  
        <Navbar />
          <main>
            <Hero />
            <Carousel/>
            <Clients />
            <Testimonials />
            <Results />
            <Services />
            <Portfolio />
            <Comparison />
            <Price/>
            <Faq />
            <ClientsMarquee/>
          </main>
          </>
      );
}

export default Home