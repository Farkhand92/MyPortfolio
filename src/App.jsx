import { Routes, Route } from "react-router-dom";
import { Home, Skills, Services, Projects, AboutMe } from "./pages";
import Layout from "./Layout";
import ContactUs from "./pages/ContactUs";
import Loader from "./pages/Loader";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Loader isLoading={isLoading}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="contactUs" element={<ContactUs />} />
        </Route>
      </Routes>
   </Loader>
  );
};

export default App;
