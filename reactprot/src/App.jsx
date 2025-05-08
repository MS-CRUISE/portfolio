export default App;
import{Login,LaPassion,CodingProjects} from './Pages/export'
import{Header,Footer,Gym,Running,Travelling} from './Components/export'
import{Routes,Route} from 'react-router-dom'
import './index.css'
function App() {
    return (
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/portfolio" element={<Login/>}></Route>
          <Route path="/passion" element={<LaPassion/>}></Route>
          <Route path="/passion/gym" element={<Gym/>} />
<Route path="/passion/exploring" element={<Travelling/>} />
<Route path="/passion/running" element={<Running/>} />
        </Routes>
        </div>
    );
  }
  
