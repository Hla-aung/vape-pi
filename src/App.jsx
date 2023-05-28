import './App.css'
import BestDeals from './components/BestDeals'
import Devices from './components/Devices'
import Disposable from './components/Disposable'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Member from './components/Member'
import NewFlavor from './components/NewFlavor'
import NewReleased from './components/NewReleased'
import Pods from './components/Pods'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <BestDeals />
      <Member />
      <NewReleased />
      <NewFlavor />
      <Devices />
      <Pods />
      <Disposable />
      <Footer />
    </>
  )
}

export default App
