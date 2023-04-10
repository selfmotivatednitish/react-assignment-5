import './App.css';
import Focus from './components/Focus';
import FormParent from './components/FormParent';
import Q1 from './components/Q1';
import Q4 from './components/Q4';
import Q5_Q9 from './components/Q5_Q9';

function App() {
    return (
        <div className="App">
            <Q1 />
            <Focus />
            <FormParent />
            <Q4 />
            <Q5_Q9 />
        </div>
    );
}

export default App;
