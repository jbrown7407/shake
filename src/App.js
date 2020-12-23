import logo from './logo.svg';
import './App.css';
import axios from "axios";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
       
        >
          Learn React
        </a>
    
      </header>
    </div>
  );
}

const fetchPerson = (): Promise<any> => {
  return axios.get('https://randomuser.me/api')
    .then(res => {
    //handle success
      console.log(res);
      // console.log(res.data)
      let data = res
     
      console.log(data.data.results);
    })
    .catch(err => {
      //handle error
      console.error(err);
  })
}
fetchPerson()

export default App;
