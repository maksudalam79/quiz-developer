import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { api } from './Component/Api/Api';
import Home from './Component/Home/Home';
import Main from './layout/Main';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:api,
        },
        {
          path:'/home',
          loader:api,
          element:<Home></Home>
        },
        {
          
        }
       
      ]
    }
   
    
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
