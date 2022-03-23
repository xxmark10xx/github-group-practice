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
  }
]

function App() {
  const displayTeam = teamates.map((teamate, index) => {
    return (
      <Teammate 
        teamate={teamate}
      />
    )
  })
  return (
    <div className="App">
      {displayTeam}
    </div>
  );
}

export default App;
