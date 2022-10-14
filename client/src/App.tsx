import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./context/AppProvider";

// Pages
import Home from "./pages/Home";
import CreateReview from "./pages/CreateReview";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create-review" element={<CreateReview />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
