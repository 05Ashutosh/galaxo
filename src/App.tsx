import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpaceSignUpComponent } from "./components/Sign-up";
import { SpaceLoginComponent } from "./components/space-login";
import { Layout } from "./components/Layout"; // The Layout component with Navbar and Footer
import Story from "./components/Story";
import Home from "./pages/Home";
import StoriesPage from "./pages/Stories";
import ExoPlanet from "./pages/ExoPlanet";
import IndStory from "./pages/IndStory";
import PlanetCreator from "./components/PlanetCreator";

function App() {
  return (
    <Router>
      <Routes>
        {/* All routes inside Layout will show the navbar and footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<SpaceLoginComponent />} />
          <Route path="signup" element={<SpaceSignUpComponent />} />
          <Route path="/story/:planet" element={<Story />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/exoplanet" element={<ExoPlanet />} />
          <Route path="/newstories" element={<IndStory />} />
          <Route path="/creationboard" element={<PlanetCreator />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
