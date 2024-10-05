import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpaceSignUpComponent } from "./components/Sign-up";
import { SpaceLoginComponent } from "./components/space-login";
import { Layout } from "./components/Layout"; // The Layout component with Navbar and Footer

function App() {
  return (
    <Router>
      <Routes>
        {/* All routes inside Layout will show the navbar and footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<SpaceLoginComponent />} />
          <Route path="signup" element={<SpaceSignUpComponent />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1>Welcome to the Space App!</h1>
      <p>Explore the universe of opportunities!</p>
    </div>
  );
}

export default App;
