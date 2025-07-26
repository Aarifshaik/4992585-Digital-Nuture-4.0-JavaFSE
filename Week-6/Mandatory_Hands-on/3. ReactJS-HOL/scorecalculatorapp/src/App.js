import './App.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore Name="Aarif Shaik"
        School="Subhodaya High School"
        total={1419}
        goal={1500}
      />
    </div>
  );
}

export default App;
