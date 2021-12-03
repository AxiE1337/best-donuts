import NavBar from './components/NavBar'
import Products from './components/Products'
import CheckOut from './components/CheckOut'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom'

function App() {
  const cart = useSelector((state) => state.product.value)
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Products />}></Route>
          <Route path='/:pageName' element={<Error />}></Route>
          {cart.length > 1 && (
            <Route path='/checkout' element={<CheckOut />}></Route>
          )}
        </Routes>
      </Router>
    </div>
  )
}

function Error() {
  const params = useParams()
  return (
    <h1
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      Page {params.pageName} not found
    </h1>
  )
}

export default App
