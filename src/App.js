import logo from './logo.svg';
import './App.css';

const number = 5555;

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}
const singers = [
  { name: 'Dr Mahfuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Singer2' },
  { name: 'Agun', job: 'sopno' },
  { name: 'Shuvro', job: 'pathor' },
];

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Razzak'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name:{nayok}</li>)
      }
      {/*  {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name} job={singer.job}></Person>)
      }
      {/* <Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name={nayoks[1]} nayika="Cheka"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person> */}
      <h5>New Component .YAY</h5>
      <p id="totocompany">rock mama React mama</p>
      <Friend name="Faysal" nayika="Sumaya" phone="01666"></Friend>
      <Friend name="Faysal" nayika="Sumaya" phone="01666"></Friend>
    </div>
  );
}
function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  // console.log(props);
  return (
    <div className="container">
      <h3>{props.name}</h3>
      <p>Nayika:{props.nayika}</p>
      <p>phone:{props.phone}</p>
    </div>
  )
}

export default App;
