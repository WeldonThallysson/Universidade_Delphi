import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import {  HelmetProvider } from 'react-helmet-async';
import {QueryClient,QueryClientProvider,useQuery} from '@tanstack/react-query'
import {Bounce, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()
function App() {

  return (
  <>
  <ToastContainer
    position='top-right'
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme='colored'
    transition={Bounce}
  />
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
       <RouterProvider router={routes}/>
    </QueryClientProvider>
  </HelmetProvider>
  </>
  )
}

export default App
