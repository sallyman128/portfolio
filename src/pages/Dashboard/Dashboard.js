import React, {useState, useEffect} from "react";
import { getCodewarsData } from "../../api/fetchCodewarsData";

const Dashboard = () => {
  const [userData, setUserData] = useState({});

  useEffect ( () => {
    getCodewarsData().then(data => setUserData(data))
  }, [])

  if (Object.keys(userData).length === 0) {
    return (
      <div>Loading Data</div>
    )
  } else {
    return (
      <div>
        <div>
          <h2>Welcome, {userData.name}!</h2>
          <p>Username: {userData.username}</p>
          <p>Honor: {userData.honor}</p>
          <p>Leaderboard Position: {userData.leaderboardPosition}</p>
  
          <h3>Ranks:</h3>
          <p>Overall Rank: {userData.ranks.overall.name} ({userData.ranks.overall.score} points)</p>
  
          <h3>Languages:</h3>
          <ul>
            {Object.keys(userData.ranks.languages).map(language => (
              <li key={language}>
                {language}: {userData.ranks.languages[language].name} ({userData.ranks.languages[language].score} points)
              </li>
            ))}
          </ul>
  
          <h3>Code Challenges:</h3>
          <p>Total Authored: {userData.codeChallenges.totalAuthored}</p>
          <p>Total Completed: {userData.codeChallenges.totalCompleted}</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;