import React, { useState } from 'react';
import {
  getPlayerDetailsByName,
  getPlayersByMmrRange,
  getTableById,
  getTableList,
  getPenaltyByName,
} from './api';

function App() {
  const [playerName, setPlayerName] = useState('');
  const [playerDetails, setPlayerDetails] = useState(null);
  const [minMmr, setMinMmr] = useState('');
  const [maxMmr, setMaxMmr] = useState('');
  const [players, setPlayers] = useState([]);
  const [tableId, setTableId] = useState('');
  const [tableData, setTableData] = useState(null);
  const [tableList, setTableList] = useState([]);
  const [penaltyData, setPenaltyData] = useState(null);

  const handleSearchPlayer = async () => {
    const data = await getPlayerDetailsByName(playerName);
    setPlayerDetails(data);
  };

  const handleSearchPlayersByMmr = async () => {
    const data = await getPlayersByMmrRange(minMmr, maxMmr);
    setPlayers(data);
  };

  const handleSearchTableById = async () => {
    const data = await getTableById(tableId);
    setTableData(data);
  };

  const handleSearchTableList = async () => {
    const data = await getTableList();
    setTableList(data);
  };

  const handleSearchPenaltyByName = async () => {
    const data = await getPenaltyByName(playerName);
    setPenaltyData(data);
  };

  return (
    <div style={{ display: 'flex', padding: '20px', color: '#fff', fontFamily: 'Arial', backgroundColor: '#1e1e1e', minHeight: '100vh' }}>
      {/* Left Column for Forms */}
      <div style={{ width: '50%', paddingRight: '20px' }}>
        <h1>MK8DX Lounge API</h1>

        <section>
          <h2>Search Player by Name (Details)</h2>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter player name"
            style={{ padding: '8px', marginRight: '8px', width: '70%' }}
          />
          <button onClick={handleSearchPlayer} style={{ padding: '8px' }}>Search</button>
        </section>

        <section style={{ marginTop: '32px' }}>
          <h2>Search Players by MMR Range</h2>
          <input
            type="number"
            value={minMmr}
            onChange={(e) => setMinMmr(e.target.value)}
            placeholder="Min MMR"
            style={{ padding: '8px', marginRight: '8px', width: '30%' }}
          />
          <input
            type="number"
            value={maxMmr}
            onChange={(e) => setMaxMmr(e.target.value)}
            placeholder="Max MMR"
            style={{ padding: '8px', marginRight: '8px', width: '30%' }}
          />
          <button onClick={handleSearchPlayersByMmr} style={{ padding: '8px' }}>Search</button>
        </section>

        <section style={{ marginTop: '32px' }}>
          <h2>Search Table by ID</h2>
          <input
            type="text"
            value={tableId}
            onChange={(e) => setTableId(e.target.value)}
            placeholder="Enter Table ID"
            style={{ padding: '8px', marginRight: '8px', width: '70%' }}
          />
          <button onClick={handleSearchTableById} style={{ padding: '8px' }}>Search</button>
        </section>

        <section style={{ marginTop: '32px' }}>
          <h2>Search All Tables</h2>
          <button onClick={handleSearchTableList} style={{ padding: '8px' }}>Search</button>
        </section>

        <section style={{ marginTop: '32px' }}>
          <h2>Search Player Penalty</h2>
          <button onClick={handleSearchPenaltyByName} style={{ padding: '8px' }}>Search Penalty</button>
        </section>
      </div>

      {/* Right Column for Displaying Results */}
      <div style={{ width: '50%', paddingLeft: '20px', borderLeft: '1px solid #555' }}>
        {playerDetails && (
          <div>
            <h3>Player Details</h3>
            <p><strong>Player ID:</strong> {playerDetails.playerId}</p>
            <p><strong>Name:</strong> {playerDetails.name}</p>
            <p><strong>MKCID:</strong> {playerDetails.mkcId}</p>
            <p><strong>MMR:</strong> {playerDetails.mmr}</p>
            <p><strong>Country:</strong> {playerDetails.countryName} ({playerDetails.countryCode})</p>
            <p><strong>Overall Rank:</strong> {playerDetails.overallRank}</p>
            <p><strong>Events Played:</strong> {playerDetails.eventsPlayed}</p>
            <p><strong>MMR Changes:</strong></p>
            <ul>
              {playerDetails.mmrChanges.map((change, index) => (
                <li key={index}>
                  MMR: {change.newMmr}, Delta: {change.mmrDelta}, Reason: {change.reason}, Time: {change.time}
                </li>
              ))}
            </ul>
            <p><strong>Name History:</strong></p>
            <ul>
              {playerDetails.nameHistory.map((history, index) => (
                <li key={index}>
                  Name: {history.name}, Changed On: {history.changedOn}
                </li>
              ))}
            </ul>
            <p><strong>Rank:</strong> {playerDetails.rank}</p>
            <p><strong>Forum Link:</strong> <a href={playerDetails.forumLink} target="_blank" rel="noopener noreferrer">{playerDetails.forumLink}</a></p>
            <p><strong>Registry Link:</strong> <a href={playerDetails.registryLink} target="_blank" rel="noopener noreferrer">{playerDetails.registryLink}</a></p>
          </div>
        )}

        {players.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h3>Players in MMR Range</h3>
            <ul>
              {players.map((player, index) => (
                <li key={index}>{player.name} - MMR: {player.mmr}</li>
              ))}
            </ul>
          </div>
        )}

        {tableData && (
          <div style={{ marginTop: '20px' }}>
            <h3>Table Data</h3>
            <pre>{JSON.stringify(tableData, null, 2)}</pre>
          </div>
        )}

        {tableList.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h3>Table List</h3>
            <ul>
              {tableList.map((table, index) => (
                <li key={index}>{table.tableId}</li>
              ))}
            </ul>
          </div>
        )}

        {penaltyData && (
          <div style={{ marginTop: '20px' }}>
            <h3>Penalty Data</h3>
            <pre>{JSON.stringify(penaltyData, null, 2)}</pre>
          </div>
        )}
        <p>developer contect: pondforbusiness@gmail.com</p>
        <p>github: pondsan1412</p>
      </div>
    </div>
  );
}

export default App;
