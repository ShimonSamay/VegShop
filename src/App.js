
import './App.css';
import Logo from "./Components/Logo/logo"
import AddVeg from "./Components/Add Veg/addveg"
import AddFruit from "./Components/Add Fruit/addfruit"
import AddSpice from "./Components/Add Spice/addfile" 
import AddCanned from "./Components/Add Canned/addCaned"

function App() {
  return (
    <div className="App">
     <Logo/>
     <AddVeg/>
     <AddFruit/>
     <AddSpice/>
     <AddCanned/>
    </div>
  );
}

export default App;
