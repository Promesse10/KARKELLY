import React, { useState } from "react";
import search from "./assets/Search.png";
import pens from "./assets/pens.png";
import Amahoro from "./assets/Nkundamahoro.png";
import pns from "./assets/pns.jpg";
import badge from "./assets/badge.jpg";
import calculator from "./assets/calculator.jpg";
import epson from "./assets/epson.jpg";
import files from "./assets/files.jpg";
import lame from "./assets/lame.jpg";
import markers from "./assets/markers-pen.jpg";
import mathematical from "./assets/mathematical.jpg";
import panel from "./assets/panel.jpg";
import paper from "./assets/paper-color.jpg";
import ruler from "./assets/ruler.jpg";
import scotch from "./assets/scotch.jpg";
import toner from "./assets/toner.jpg";
import pencils from "./assets/pencils-color.jpg";

const products = [
  { id: 1, name: "Books", price: "4500rwf", image: Amahoro },
  { id: 2, name: "Pens", price: "4500rwf", image: pns },
  { id: 3, name: "Mathematical Set", price: "4500rwf", image: mathematical },
  { id: 4, name: "Ruler", price: "4500rwf", image: ruler },
  { id: 5, name: "Calculator", price: "4500rwf", image: calculator },
  { id: 6, name: "TONER Printer", price: "2000rwf", image: toner },
  { id: 7, name: "Epson Printer", price: "4500rwf", image: epson },
  { id: 8, name: "Paper", price: "4500rwf", image: paper },
  { id: 9, name: "Lame", price: "4500rwf", image: lame },
  { id: 10, name: "Files", price: "4500rwf", image: files },
  { id: 11, name: "Scotch", price: "4500rwf", image: scotch },
  { id: 12, name: "Badge", price: "4500rwf", image: badge },
  { id: 13, name: "Color Pencils", price: "4500rwf", image: pencils },
  { id: 14, name: "Markers", price: "4500rwf", image: markers },
  { id: 15, name: "Panel", price: "4500rwf", image: panel },
];

const productsPerPage = 5;

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <div>
        <img src={pens} className="w-full" alt="Banner" />
      </div>
      <div className="w-full h-full bg-slate-200">
        <div className="flex flex-row justify-center items-center">
          <div>
            <h1 className="text-blue-600 text-4xl font-semibold mt-9">Products</h1>
            <hr className="w-20 h-1 my-8 bg-blue-500 border-0 rounded dark:bg-blue-500" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex-row justify-end items-end">
            <form className="w-[440px] relative">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search here"
                  className="w-full p-4 rounded-full bg-slate-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={search} className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-blue-500 rounded-full w-14" alt="Search icon" />
              </div>
            </form>
          </div>

          <div className="flex flex-wrap justify-center items-center mt-6 gap-4">
            {displayedProducts.map(product => (
              <div key={product.id} className="bg-white p-3 flex flex-col justify-center items-center w-40 h-48 md:w-48 md:h-56">
                <img src={product.image} className="w-28" alt={product.name} />
                <p>{product.name}</p>
                <p>1pcs/{product.price}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-row mt-4 space-x-2 mb-8">
            {[...Array(totalPages).keys()].map(page => (
              <div
                key={page}
                className={`w-8 h-8 flex justify-center items-center rounded-2xl cursor-pointer ${currentPage === page + 1 ? 'bg-slate-300' : 'bg-blue-500'}`}
                onClick={() => handlePageChange(page + 1)}
              >
                <h1>{page + 1}</h1>
              </div>
            ))}
            <div
              className={`w-8 h-8 flex justify-center items-center rounded-2xl cursor-pointer ${currentPage === totalPages ? 'bg-slate-300' : 'bg-blue-500'}`}
              onClick={() => handlePageChange(totalPages)}
            >
              <h1>All</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
