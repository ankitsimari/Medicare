import "./App.css";
import BasicAccordion from "./component/Accordion/Accord";
import AllRoutes from "./component/AllRoutes/AllRoutes";
import HorizontalNonLinearStepper from "./component/Appointment/Stepper";
import Stepper from "./component/Appointment/Stepper";
import Footer from "./component/Footer/Footer";
import NewFooter from "./component/Footer/NewFooter";
import Navbar from "./component/Navbar/Navbar";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <BasicAccordion />
      <Footer />
    </div>
  );
}

export default App;
