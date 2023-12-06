import useRouteElement from './useRouteElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const routElements = useRouteElement()
  return (
    <div>
      {routElements}
      <ToastContainer />
    </div>
  )
}

export default App
