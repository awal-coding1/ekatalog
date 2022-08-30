import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";
import Produk from "./Produk";
const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    setData(res.data);
  };
  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h1 className="text-center mt-5 title">Katalog Produk</h1>
          <div>
            <input
              type="text"
              className="form-control mb-5 p-3"
              placeholder="search Produk"
            />
          </div>
          <div className="row justify-content-center">
            <Produk data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
