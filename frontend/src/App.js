import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MyQuotes from "./pages/MyQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import EditQuote from "./pages/EditQuote";



import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";



function App() {


  return (
    <div className="App">
      <Navbar />
      
      <Routes>      
        <Route path="/" element={<HomePage />} />

        <Route
          path="/my-quotes"
          element={ <IsPrivate> <MyQuotes /> </IsPrivate> } 
        />


        <Route
          path="/my-quotes/:quoteId"
          element={ <IsPrivate> <QuoteDetails /> </IsPrivate> }
        />

        <Route
          path="/my-quotes/edit/:quoteId"
          element={ <IsPrivate> <EditQuote /> </IsPrivate> } 
        />
        
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

      </Routes>
    </div>
  );
}

export default App;
