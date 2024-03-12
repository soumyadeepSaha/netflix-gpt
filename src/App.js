import { Provider } from "react-redux";
import Body from "./components/Body.js";
import appstore from "./utils/appstore.js";


function App() {
  return (
    <Provider store={appstore}>
    
<Body/>
</Provider>
  );
}

export default App;
