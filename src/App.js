import './App.scss';
import Layouts from "./layout"
import { useSelector } from 'react-redux';

function App() {
const theme = useSelector(state => state.flagReducer.flag.theme)

  return (
    <div className={`App ${theme==="dark"?"dark":""}`}>
      <Layouts></Layouts>
    </div>
  );
}

export default App;
