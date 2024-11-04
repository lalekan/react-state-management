import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/App.jsx

const App = () => {

  const [team, setTeam] = useState([])

  const [money, setMoney] = useState(100)

  const [totalStrength, setTotalStrength] = useState(0)

  const [totalAgility, setTotalAgility] = useState(0)

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]
  )

  const handleAddFighter = (zombieFighter) => {
    const newTeamArray = money >= zombieFighter.price ? [...team, zombieFighter] : team
    setTeam(newTeamArray)

    const currentBalance = money >= zombieFighter.price ? money - zombieFighter.price : money

    setMoney(currentBalance)

    const strengthBalance = money >= zombieFighter.price ? totalStrength + zombieFighter.strength : totalStrength

    setTotalStrength(strengthBalance)

    const AgilityBalance = money >= zombieFighter.price ? totalAgility + zombieFighter.agility : totalAgility

    setTotalAgility(AgilityBalance)

    if (currentBalance > zombieFighter.price) {
      
    } else {
      console.log("Not enough money");
    }

  }

  const handleRemoveFighter = (member) => {
    const removeFighter = team.find(amember => amember.name == member.name);
    
    if (removeFighter !== -1) {
      const newTeamArray = team.filter((member) => member.name !== removeFighter.name);
      setTeam(newTeamArray);

      const currentBalance = money + removeFighter.price;
      setMoney(currentBalance);

      const strengthBalance = totalStrength - removeFighter.strength;
      setTotalStrength(strengthBalance);

      const agilityBalance = totalAgility - removeFighter.agility;
      setTotalAgility(agilityBalance);
    } else {
      console.log("Fighter not found in the team");
    }
  };

  const displayMessage = team.length < 1 ? "Pick some team members!" : " "

  return (
    <>
      <h1>Current Money: {money}  </h1>
      <div>
        <ul>
          {zombieFighters.map((zombieFighter, idx) => (
            <div key={idx} className="zombie-card">
              <button onClick={() => handleAddFighter(zombieFighter)}> Add Fighter</button>
              <li>Name: {zombieFighter.name}</li>
              <li>Price: {zombieFighter.price}</li>
              <li>Strength: {zombieFighter.strength}</li>
              <li>Agility: {zombieFighter.agility}</li>
              <img src={zombieFighter.img} alt={zombieFighter.name} />
              
            </div>
          ))}
        </ul>
      </div>
      <h1>This is your team.  </h1>
      <h2>Total Strength: {totalStrength};  Total Agility: {totalAgility}</h2>
      <h2>{displayMessage}</h2>
      <div>
        <ul>
          {team.map((member, idx) => (
            <div key={idx} className="team-member">
              <button onClick={() => handleRemoveFighter(member)}>Remove from Team</button>
              <li>Name: {member.name}</li>
              <li>Price: {member.price}</li>
              <li>Strength: {member.strength}</li>
              <li>Agility: {member.agility}</li>
              <img src={member.img} alt={member.name} />
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}


export default App



