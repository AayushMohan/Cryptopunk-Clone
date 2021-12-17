import "./App.css";
import CollectionCard from "./Components/CollectionCard";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x44359B0D8eB3eeF4AeFab7a452b8c9aBD276a531&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };

    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image="https://ipfs.thirdweb.com/ipfs/QmQAcLywRXMBs1YMumL29z9LEyPK3rJGcKKUAZjpYyKi6d"
      />
    </div>
  );
}

export default App;
