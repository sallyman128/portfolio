import React, {useState, useEffect} from "react";
import { getCodewarsData } from "../../api/fetchCodewarsData";

const Dashboard = () => {
  const [codewarsData, setcodewarsData] = useState({});

  useEffect ( () => {
    getCodewarsData().then(data => setcodewarsData(data))
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Codewars Data</h2>
        <pre>
          <code>{JSON.stringify(codewarsData, null, 2)}</code>
        </pre>
      </div>
    </div>
  )
}

export default Dashboard;