import Header from "./components/Header/Header";
import { Launch } from "./launches/launch";

import"./style.css";
function App() {
  return (
    <div className="App">
      <Header/>
      <Launch
       banner={"https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg"}
        title={"Falcon 9"} launch_date={"2020-11-21T09:17:00-08:00"}
         description={"some launch "}
      />
      <Launch
       banner={"https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg"}
        title={"Falcon 8"} launch_date={"2021-1-21T09:17:00-08:00"}
         description={"some launch "}
      />
    </div>
  );
}

export default App;