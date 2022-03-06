import Header from "./components/Header";
import Punklist from "./components/Punklist"
import "./App.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import Main from "./components/Main";


function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get("https://testnets-api.opensea.io/assets?asset_contract_address=0x12e83d0008A0D4D59f1FA15a64Fa48e23cA517F9&order_direction=asc");
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])

  return (
    <div className="App">
      <Header />
      {
        punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk} />
            <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>
        )
      }
    </div>
  )
}

export default App;
