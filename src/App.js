import { Route, Routes } from "react-router";
import HeaderComponent from "./components/header";
import { COUNTRY_ROUTE, HOME_ROUTE } from "./constant/routes";
import CountryDetails from "./pages/countryDetails";
import HomeComponent from "./pages/home";


function App() {
  return (
    <div>
      <HeaderComponent />
      
      <div>
        <Routes>
          <Route path={HOME_ROUTE} element={<HomeComponent />} />
          <Route path={COUNTRY_ROUTE} element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;










