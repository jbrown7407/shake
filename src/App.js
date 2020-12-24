import logo from './logo.svg';
import './App.css';
import axios from "axios";

const fetchPerson = (props) => {
  return axios.get('https://randomuser.me/api')
    .then(res => {
    //handle success
      console.log(res);
      // console.log(res.data)
      let data = res
      console.log(data.data.results[0].name);
      console.log(data.data.results[0].gender);
      console.log(data.data.results[0].location);
      console.log(data.data.results[0].phone);
      console.log(data.data.results[0].picture);
   

    })
    .catch(err => {
      //handle error
      console.error(err);
  })
}
fetchPerson()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
         {/* <h1> {this.props.data.data.results[0].name} </h1><br />
      {this.props.data.data.results[0].gender} <br /> */}
          {/* {this.state.data} */}
        </p>
     
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
       
        >
          {/* {data} */}
          Learn React
        </a>
    
      </header>
    </div>
  );
}

// const Card = (props) => {
//   const { person } = props.Person
//   return (<div>
//     <span> Name - {person.Name} </span>
// </div>)
    
//     }

export default App;
