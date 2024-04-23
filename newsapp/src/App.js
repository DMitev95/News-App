import "./App.css";
import SearchResult from "./Components/Common/SearchByWord/SearchResult";
import Homepage from "./Components/Home/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as homeNewsLoader } from "./Components/Home/Homepage";
import NewsByCategory from "./Components/Common/NewsByCategory/NewsByCategory";
import Error from "./Components/Ui/Error/Error";
import AppLayout from "./Components/Ui/AppLayout/AppLayout";

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
        element: <NewsByCategory category={"Business"} />,
      },
      {
        path: "/Entertainment",
        element: <NewsByCategory category={"Entertainment"} />,
      },
      {
        path: "/Health",
        element: <NewsByCategory category={"Health"} />,
      },
      {
        path: "/Science",
        element: <NewsByCategory category={"Science"} />,
      },
      {
        path: "/Sports",
        element: <NewsByCategory category={"Sports"} />,
      },
      {
        path: "/Technology",
        element: <NewsByCategory category={"Technology"} />,
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
