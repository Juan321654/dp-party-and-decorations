import { useState, useEffect } from "react";
import "./App.css";
import Header from "./screens/header/Header";
import Navbar from "./screens/navbar/Navbar";
import MidHeader from "./screens/midHeader/MidHeader";
import Examples from "./screens/examples/Examples";
import WhoWeAre from "./screens/whoWeAre/WhoWeAre";
import Contact from "./screens/contact/Contact";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";

let key = process.env.REACT_APP_key;
let base = process.env.REACT_APP_base;

const PER_PAGE = 10;

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState();
  const [whoData, setWhoData] = useState();

  useEffect(() => {
    let url = `https://api.airtable.com/v0/${base}/content?api_key=${key}`;
    const getData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    let url = `https://api.airtable.com/v0/${base}/who_we_are?api_key=${key}`;
    const getData = async () => {
      try {
        const res = await axios.get(url);
        setWhoData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  function handlePageClick(event, value) {
    setCurrentPage(value);
  }

  // console.log(currentPage)

  const offset = currentPage * PER_PAGE;
  // console.log(offset)

  const currentPageData = data?.records.slice(offset, offset + PER_PAGE);

  // console.log(currentPageData)

  const pageCount = Math.ceil(data?.records.length / PER_PAGE);
  // console.log(pageCount)

  return (
    <div className="App">
      <Header />
      <Navbar />
      <MidHeader />
      <WhoWeAre data={whoData} />
      <Examples data={currentPageData} />
      <Pagination
        count={pageCount}
        page={currentPage}
        style={{ marginTop: "1.25rem" }}
        onChange={handlePageClick}
      />
      <Contact />
    </div>
  );
}

export default App;
