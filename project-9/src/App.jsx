import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import AddMovie from "./Components/AddMovie";
import EditMovie from "./Components/EditMovie";
import MovieDetails from "./Components/MovieDetails";
import BookingPage from "./Components/BookingPage";
import MyBookings from "./Components/MyBookings";
import Footer from './Components/Footer';
import SignIn from "./Components/SignIn"; 
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/edit-movie/:id" element={<EditMovie />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/book/:id" element={<BookingPage />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
        <Footer />
    </>
  );
}

export default App;
