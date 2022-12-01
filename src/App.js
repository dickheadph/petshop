import {
  Home,
  Profile,
  Category,
  SingleListing,
  ProdListing,
  About,
  Contact,
  NotFound,
  SignUp,
  ForgotPassword,
  AdminDashboard,
  PetDataForm,
  ProductForm,
} from "./Pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PetProvider } from "./Context/petContext/PetContext";
import { FavouritesProvider } from "./Context/favContext/FavouritesContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <PetProvider>
        <FavouritesProvider>
          <BrowserRouter>
            <ToastContainer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/category" element={<Category />} />
              <Route path="/single/:petId" element={<SingleListing />} />
              <Route path="/prod/:prodId" element={<ProdListing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/reset" element={<ForgotPassword />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/:listing" element={<PetDataForm />} />
              <Route path="/admin/products" element={<ProductForm />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </FavouritesProvider>
      </PetProvider>
    </div>
  );
}

export default App;
