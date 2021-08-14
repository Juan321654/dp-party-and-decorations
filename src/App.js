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

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = data?.records.slice(offset, offset + PER_PAGE);

  const pageCount = Math.ceil(data?.records.length / PER_PAGE);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <MidHeader />
      <WhoWeAre data={whoData} />
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
