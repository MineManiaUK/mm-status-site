import { useEffect, useState } from 'react'
import './App.css'
import { StatusResponse } from './StatusResponse'
import ServerInfo from './ServerInfo'
import PlayerList from './PlayerList'

function App() {
  const [data, setData] = useState<StatusResponse | null>(null)

  async function Refresh() {
    var url = import.meta.env.VITE_MMS_API_URL + import.meta.env.VITE_MMS_API_JSON_PATH
    var response = await fetch(url)
    setData(await response.json())
  }

  useEffect(() => {
    Refresh()
    var int = setInterval(Refresh, 5000)
    return () => clearInterval(int)
  }, [])

  return (
    <>
      {data === null ? 
        <h1>Loading...</h1> 
      :
        <>
          <div className='server-instance-list'>
            <ServerInfo res={data} />

            {data.servers.sort((a, b) => b.players.length - a.players.length).map((server, i) => 
              <PlayerList key={i} server={server} />
            )}
          </div>
        </>  
      }

      <div className='my-footer'>
        <p>Made with &hearts; for MineMania</p>
      </div>
    </>
  )
}

export default App
