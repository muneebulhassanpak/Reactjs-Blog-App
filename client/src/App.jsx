import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import { storeFetcher } from "./store/store";
import { allPostsFetcherAndSetter } from "./store/allRecipies";
import Home from "./pages/Home";
import CreateRecipie from "./pages/CreateRecipie";
import SavedRecipies from "./pages/SavedRecipies";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
const App = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const id = localStorage.getItem("userID");
  useEffect(() => {
    dispatch(storeFetcher(id));
  }, []);
  useEffect(() => {
    dispatch(allPostsFetcherAndSetter());
  }, [store]);
  return (
    <CookiesProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-recipie" element={<CreateRecipie />}></Route>
        <Route path="/saved-recipies" element={<SavedRecipies />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </CookiesProvider>
  );
};

export default App;
