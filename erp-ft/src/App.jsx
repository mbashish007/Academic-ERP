import Login from './pages/Login'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import DomainList from './pages/DomainList'
import DomainDetail from './pages/DomainDetail'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />
	},
  {
		path: "/login",
		element: <Login />
	},
  {
		path: "/domain",
		element: <DomainList />
	},
  {
		path: "/domain/:domain_id",
		element: <DomainDetail />
	}
]);
function App() {

  return (
    <div className="App">
			<RouterProvider router={router} />
		</div>
  )
}

export default App
