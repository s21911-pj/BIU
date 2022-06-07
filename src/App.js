import React, {useEffect, useState} from 'react';
import DisplayedData from "./displayedData";
import './displayedData.scss'



function App() {
  const [fetchedData, setFetchedData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch("https://randomuser.me/api")
        .then(data => data.json())
        .then(setFetchedData)
        .then(() => setLoading(false))
        .catch(setError)
  }
  if (loading) {
    return (
        <p>loading...</p>);
  }
  if (fetchData === undefined) {
    return (<pre>{JSON.stringify(error, null, 2)}</pre>);
  }
  return (<div>
        <DisplayedData data={fetchedData}/>
        <button id="btn" onClick={() => fetchData()}>Generate new human!</button>
      </div>
  );
}

export default App;
