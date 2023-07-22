import Header from "./components/Header/Header";
import { LaunchList } from "./components/LaunchList/LaunchList";
import { Launch } from "./launches/launch";

import"./style.css";
function App() {
  return (
    <div className="App">
      <Header/>
      <LaunchList/>
    </div>
  );
}

export default App;
