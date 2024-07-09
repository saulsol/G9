import {Suspense, lazy} from "react"
import {createBrowserRouter} from "react-router-dom"

const Loading = <div>Loading...</div>
const Search = lazy(()=> import("../pages/SearchPage"));
const ImageUpload = lazy(() => import("../pages/ImageUploadPage"));

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Search/></Suspense>
    },
    {
        path: "upload",
        element: <Suspense fallback={Loading}><ImageUpload/></Suspense>
    }
])

export default root;