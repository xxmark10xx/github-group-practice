import logo from './logo.svg';
import './App.css';
import Teammate from './components/Teammate';

const teamates = [
  {
      name: "Roman",
      about: "asdasdasdkkjkalsjdlkjasld",
      skills: 'software'
  },
  {
    name: "Mark Aguilar",
    about: "sadkjfhsad fsdkfksdjl",
    skills: "react"
  },
  {
    name: "Andy",
    about: "ajdivopzjxiocv iofud saiovpu cxziop",
    skills: "cold hard chillin"
  }
]

function App() {
  const displayTeam = teamates.map((teamate, index) => {
    return (
      <>
      <Teammate 
        teamate={teamate}
      />
      </>
    )
  })
  return (
    <div className="App">
      <h1>about us</h1>
      {displayTeam}
    </div>
  );
}

export default App;
