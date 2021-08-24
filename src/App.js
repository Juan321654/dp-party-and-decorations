import { useState, useEffect } from "react";
import "./App.css";
import Header from "./screens/header/Header";
import Navbar from "./screens/navbar/Navbar";
import MidHeader from "./screens/midHeader/MidHeader";
import Examples from "./screens/examples/Examples";
import WhoWeAre from "./screens/whoWeAre/WhoWeAre";
import Contact from "./screens/contact/Contact";
import axios from "axios";
import ReactPaginate from "react-paginate";

let key = process.env.REACT_APP_key;
let base = process.env.REACT_APP_base;

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState();
  const [whoData, setWhoData] = useState();
  const [perPage, setPerPage] = useState(10);

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

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * perPage;

  const currentPageData = data?.records.slice(offset, offset + perPage);

  const pageCount = Math.ceil(data?.records.length / perPage);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <MidHeader />
      <WhoWeAre data={whoData} />
      <label style={{ color: "var(--color-light)" }}>Images per page: </label>
      <select
        value={perPage}
        onChange={(e) => setPerPage(e.target.value)}
        style={{
          padding: "0.5rem",
          borderRadius: "6px",
          marginTop: "1rem",
          borderColor: "var(--color-light)",
          color: "var(--color-light)",
          cursor: 'pointer'
        }}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>

      <Examples data={currentPageData} />
      <ReactPaginate
        previousLabel={"←"}
        nextLabel={"→"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      <Contact />
    </div>
  );
}

export default App;
