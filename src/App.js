import root from "./router/root";
import {RouterProvider} from "react-router-dom";


const drawerWith = 240;
const navItems = ['search', 'upload']



function App() {
  return (
    <RouterProvider router={root} />
  );
}

export default App;
