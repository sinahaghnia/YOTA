import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from '../chenger-components/home';
import Prices from '../chenger-components/prices';
import Wallet from '../chenger-components/wallet';
import DataProvider from '../core components/context';
import MainLayout from '../core components/main-layout';
import FullScreenLayout from '../core components/full-screen-layout';
import SearchPage from '../full-screen-components/search-page';
import CoinInformation from '../full-screen-components/coin-information';
import ErrorPage from '../error-page/error-page';
import '../css/main.css';
import './App.css';
import '../css/prices.css'
import '../css/header.css';
import '../css/footer.css';
import '../css/home.css';
import '../css/Wallet.css';
import '../css/search-page.css';
import '../css/coin-information.css';
import '../error-page/error.css';




function App() {

  return <> 

  <div className="app">

    <DataProvider>

      <Router>
        <Routes>
          <Route path='/' element={<MainLayout> <Home/> </MainLayout>} />
          <Route path='/price' element={<MainLayout> <Prices/> </MainLayout>} />
          <Route path='/wallet' element={<MainLayout> <Wallet/> </MainLayout>} />
          <Route path='/search' element={<FullScreenLayout> <SearchPage/> </FullScreenLayout>} />
          <Route path='/coin-information' element={<FullScreenLayout> <CoinInformation/> </FullScreenLayout>} />
          <Route path='*' element={<FullScreenLayout> <ErrorPage/> </FullScreenLayout>} />
        </Routes>
      </Router>
    
    </DataProvider>

  </div>

    </>
  
}

export default App