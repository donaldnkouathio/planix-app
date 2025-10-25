import Header from "/src/components/layouts/header";
import Hero from "/src/components/layouts/hero";
import Features from '../components/layouts/features';
import Footer from "/src/components/layouts/footer";
import FAQPage from "/src/components/layouts/faq-page";

function Home() {
  return (
      <div>
        <Hero />
        <Features />
        <FAQPage />
      </div>
  )
}

export default Home
