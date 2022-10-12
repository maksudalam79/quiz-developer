import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Answer from './Component/Answer/Answer';
import { api } from './Component/Api/Api';
import Home from './Component/Home/Home';
import Qsn from './Component/Qsn/Qsn';
import Statistics from './Component/Statistics/Statistics';
import Found from './Found/Found';
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
          path:'/question',
          element:<Answer></Answer>
        },
        {
          path:'/statistics',
          loader:api,
          element:<Statistics></Statistics>
        },
        {
          path:'*',element:<Found></Found>
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
