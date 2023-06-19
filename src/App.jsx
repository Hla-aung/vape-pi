import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import './App.css'
import BestDeals from './components/BestDeals'
import DevicesNew from "./components/DevicesNew";
import DisposableNew from "./components/DisposableNew";
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Member from './components/Member'
import NewFlavor from './components/NewFlavor'
import NewReleased from './components/NewReleased'
import PodsNew from "./components/PodsNew";

const App = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Header />
      <Home />
      <BestDeals />
      <Member />
      <NewReleased />
      <NewFlavor />
      <DevicesNew />
      <PodsNew />
      <DisposableNew />
      <Footer />
    </QueryClientProvider>
  )
}

export default App
