import "./App.css";
import SearchResult from "./Components/Common/SearchByWord/SearchResult";
import Homepage from "./Components/Home/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as homeNewsLoader } from "./Components/Home/Homepage";
import { loader as newsLoader } from "./Components/Common/NewsByCategory/NewsByCategory";
import NewsByCategory from "./Components/Common/NewsByCategory/NewsByCategory";
import Error from "./Components/Ui/Error/Error";
import AppLayout from "./Components/Ui/AppLayout/AppLayout";

console.log(import.meta.env.VITE_API_KEY);
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: homeNewsLoader,
      },
      {
        path: "/Business",
        element: <NewsByCategory />,
        loader: () => newsLoader("Business"),
        errorElement: <Error />,
      },
      {
        path: "/Entertainment",
        element: <NewsByCategory />,
        loader: () => newsLoader("Entertainment"),
        errorElement: <Error />,
      },
      {
        path: "/Health",
        element: <NewsByCategory />,
        loader: () => newsLoader("Health"),
        errorElement: <Error />,
      },
      {
        path: "/Science",
        element: <NewsByCategory />,
        loader: () => newsLoader("Science"),
        errorElement: <Error />,
      },
      {
        path: "/Sports",
        element: <NewsByCategory />,
        loader: () => newsLoader("Sports"),
        errorElement: <Error />,
      },
      {
        path: "/Technology",
        element: <NewsByCategory />,
        loader: () => newsLoader("Technology"),
        errorElement: <Error />,
      },
      {
        path: "/Search",
        element: <SearchResult />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
