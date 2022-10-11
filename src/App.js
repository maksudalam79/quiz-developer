import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { api } from './Component/Api/Api';
import Home from './Component/Home/Home';
import Qsn from './Component/Qsn/Qsn';
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
           path:'/topic/:topicId',
           loader:async ({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
           },
           element:<Qsn></Qsn>
        },
        {
          path:'*',element:<div>Not Found</div>
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
