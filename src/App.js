
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Calculators from './pages/Calculators';
import Services from './pages/Services';
import BasicCalculator from './pages/BasicCalculator';
import ScientificCalculator from './pages/ScientificCalculator';
import BMICalculator from './pages/BMICalculator';
import PercentageCalculator from './pages/PercentageCalculator';
import LoanCalculator from './pages/LoanCalculator';
import AgeCalculator from './pages/AgeCalculator';
import LotteryResults from './pages/LotteryResults';
import Weather from './pages/Weather';
import LotteryHome from './pages/LotteryHome';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Contact from './pages/Contact';




import AdBanner from './components/AdBanner';

function App() {
  return (
    <div className="app">
      <Header />
      <AdBanner position="top" />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LotteryHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calculadoras" element={<Calculators />} />

          <Route path="/calculadoras/basica" element={<BasicCalculator />} />
          <Route path="/calculadoras/cientifica" element={<ScientificCalculator />} />
          <Route path="/calculadoras/imc" element={<BMICalculator />} />
          <Route path="/calculadoras/porcentagem" element={<PercentageCalculator />} />
          <Route path="/calculadoras/financeira" element={<LoanCalculator />} />
          <Route path="/calculadoras/idade" element={<AgeCalculator />} />
          <Route path="/loteria" element={<LotteryHome />} />
          <Route path="/loteria/:id" element={<LotteryResults />} />
          <Route path="/clima" element={<Weather />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/termos" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/contato" element={<Contact />} />




        </Routes>
      </main>
      <AdBanner position="bottom" />
      <Footer />
    </div>
  );
}

export default App;