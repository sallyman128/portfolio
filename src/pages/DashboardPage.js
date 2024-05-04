import React, {useState, useEffect} from "react";
import Dashboard from "./Dashboard";
import { getCodewarsData } from "../api/fetchCodewarsData";

const DashboardPage = () => {
    const [userData, setUserData] = useState({});

    useEffect ( () => {
        console.info("Fetching codewars data")
        getCodewarsData().then(data => setUserData(data))
    }, [])

    if (Object.keys(userData).length === 0) {
        return (<p>Loading Data</p>)
    } else {
        return (<Dashboard userData={userData} />)
    }
}

export default DashboardPage