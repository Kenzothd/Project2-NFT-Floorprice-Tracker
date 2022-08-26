import { useEffect, useState } from "react";

const options = { method: "GET", headers: { Accept: "application/json" } };

function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(
      "https://api.modulenft.xyz/api/v1/opensea/collection/rankings?sort_by=SEVEN_DAY_VOLUME&count=100&offset=0",
      options
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(data);

  return (
    <>
      <h1 className="font-bold">Top Collection</h1>
      <ul>
        {data?.rankings?.map((ele) => (
          <li>{ele?.collection_name}</li>
        ))}
      </ul>
    </>
  );
}

export default Home;
