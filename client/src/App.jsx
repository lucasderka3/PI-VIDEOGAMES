
/* components to render */
import Landing from './views/landing/Landing';
import Home from './views/home/Home';
import Detail from './components/Detail/Detail';
// import Create from './views/create/Create';

/* hooks */
import { Route, Routes} from 'react-router-dom';

import './App.css';

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Landing /> }/>
        <Route exact path='/home' element={ <Home /> }/>
        <Route exact path='/detail/:id' element={ <Detail />}/>
        {/* <Route path='/create' element={ <Create /> }/> */}
      </Routes>
    </div>
  )
}

export default App
