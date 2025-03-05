import logo from './logo.svg';
import './App.css';
import Counterone from './Component/Counterone';
import Countertwo from './Component/Countertwo';
import Counterthree from './Component/Counterthree';
import Datafetching from './Component/Datafetching';
import Todo from './Component/Todo';
import Inputfocus from './Component/Inputfocus';
import Hooktimer from './Component/HookTimer';
import DocTitle from './Component/DocTitle';
import DocTitle2 from './Component/DocTitle2';
import Component1 from './Component/Component1';
import './Styles/Mystyle.css'
function App() {
  return (
    <div className="App">
      <div className="div1">
          <h3>Counter using useReducer Hook Simple State and simple action</h3>
            <Counterone></Counterone>
            <hr></hr>
      </div>
     
      <div className="div2">
          <h3>Counter using useReducer Hook complex State and  action</h3>
            <Countertwo></Countertwo>
            <hr></hr>
      </div>
      <div className="div1">
          <h3>Todo app using useReducer Hook</h3>
            <Todo></Todo>
            <hr></hr>
      </div>

      <div className="div2">
          <h3>BUtton click counter using useEffect Hook updates document title each time the button is clicked</h3>
            <Counterthree></Counterthree>
            <hr></hr>
      </div>

      <div className="div1">
          <h3>Timer using useEffect Hook</h3>
            <Hooktimer></Hooktimer>
            <hr></hr>
      </div>
      

      <div className="div2">
          <h3>useRef() hook to focus on input as soon as page renders</h3>
            <Inputfocus></Inputfocus>
            <hr></hr>
      </div>

      <div className="div1">
          <h3>Using Custom Hook </h3>
           <DocTitle></DocTitle>
           <DocTitle2></DocTitle2>
            <hr></hr>
      </div>
      

      

      <div className="div1">
          <h3>API data fetching with useEffect hook</h3>
            <Datafetching></Datafetching>
            <hr></hr>
      </div>
      {/* <div className="div2">
          <h3>useContext() hook to pass props to child components avoiding prop drilling</h3>
            <Component1></Component1>
            <hr></hr>
      </div> */}

     


    </div>
  );
}

export default App;
