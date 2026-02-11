import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import SunglassesR from "../../assets/HomePageImgs/Sunglassess/SunglassessR.png";
import SunglassesL from "../../assets/HomePageImgs/Sunglassess/SunglassessL.png";
import { productslist } from "../../Data/productslist";
import FiltersUI from "./FiltersUI";
import { FaLongArrowAltUp } from "react-icons/fa";

// Filter options
const genders = ["Men", "Women", "Kids", "Unisex"];
const categories = ["Eyeglasses", "Sunglasses", "Lenses"];
const frameShapes = ["Oval", "Round", "Square", "Hexagonal", "Aviator"];
const priceRanges = [
  { label: "below 300₹", min: 0, max: 299 },
  { label: "300₹ - 500₹", min: 300, max: 500 },
  { label: "500₹ - 1000₹", min: 501, max: 1000 },
  { label: "Above 1000₹", min: 1001, max: Infinity },
];
const brands = [
  "Tommy Hilfiger",
  "Ray-Ban",
  "Scott",
  "Para ",
  "French Connection",
  "Fuel",
  "Scavin",
  "Spaco",
  "Wolf Eye",
  "Xite",
  "Specsmith",
  "Page 4",
  "U eyewear",
  "Rotino",
  "Sprint ",
  "Super Fuo",
  "SCORPLUS",
  "Infinity Pro Kids",
  "fueel KIDS",
  "Wonder",
  "ANTIPAAT",
  "Hybrid Junior",
  "Arham Kids",
  "ANTEAT",
  "TVE NERGO",
  "Ted Jerry",
  "escott",
  "Sorrento",
  "Wonder Line",
  "CARRERA",
  "Tom Hardy",
  "HEAVY",
  "Tom Hardy",
  "Dolkar Lady",
  "Roberto Gabriel",
  "Believer",
];

const PRODUCTS_PER_PAGE = 20;

const OurProducts = () => {
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("none");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedSections, setExpandedSections] = useState({
    gender: true,
    category: false,
    frameShape: false,
    priceRange: false,
    brands: false,
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const toggleSelection = (value, setSelected) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const clearAllFilters = () => {
    setSelectedShapes([]);
    setSelectedPrices([]);
    setSelectedBrands([]);
    setSelectedGender([]);
    setSelectedCategories([]);
    setSortBy("none");
    setCurrentPage(1);
  };

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedShapes, selectedPrices, selectedBrands, selectedGender, selectedCategories, sortBy]);

  // Pre-apply filters from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const genderParam = params.get("gender");
    const categoryParam = params.get("category");
    const shapeParam = params.get("shape");

    if (genderParam) {
      const normalized = genderParam.toLowerCase();
      const map = {
        men: "Men",
        women: "Women",
        kids: "Kids",
        unisex: "Unisex",
      };
      const value = map[normalized] || genderParam;
      if (genders.includes(value)) {
        setSelectedGender([value]);
        setExpandedSections((prev) => ({ ...prev, gender: true }));
      }
    }

    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategories([categoryParam]);
      setExpandedSections((prev) => ({ ...prev, category: true }));
    }

    if (shapeParam && frameShapes.includes(shapeParam)) {
      setSelectedShapes([shapeParam]);
      setExpandedSections((prev) => ({ ...prev, frameShape: true }));
    }

    if (location.hash === "#our-products") {
      setTimeout(() => {
        const element = document.getElementById("our-products");
        if (element)
          element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location.search, location.hash]);

  // Scroll detection for "Scroll to Top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filtering logic
  const filteredProducts = productslist.filter((product) => {
    const shapeMatch =
      selectedShapes.length === 0 || selectedShapes.includes(product.shape);
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const genderMatch =
      selectedGender.length === 0 || selectedGender.includes(product.gender);
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const priceMatch =
      selectedPrices.length === 0 ||
      selectedPrices.some((rangeLabel) => {
        const range = priceRanges.find((r) => r.label === rangeLabel);
        return product.price >= range.min && product.price <= range.max;
      });

    return (
      shapeMatch && brandMatch && genderMatch && categoryMatch && priceMatch
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "priceLow") return a.price - b.price;
    if (sortBy === "priceHigh") return b.price - a.price;
    return 0;
  });

  // Pagination calculations
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to products section
      const element = document.getElementById("our-products");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section
      id="our-products"
      className="py-10 md:py-20 space-y-4 md:space-y-8 relative"
    >
      <img
        data-aos="fade-left"
        data-aos-duration="2000"
        src={SunglassesR}
        alt=""
        className="absolute top-10 md:top-16 h-14 md:h-20 xl:h-auto right-0 xl:-right-28"
      />
      <img
        data-aos="fade-right"
        data-aos-duration="2000"
        src={SunglassesL}
        alt=""
        className="absolute top-0 h-10 md:h-14 xl:h-auto xl:-left-16"
      />
      <PrimaryHeading>Our Products</PrimaryHeading>

      {/* Mobile/Tablet Filters Button */}
      <button
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-[#E5E5E5] text-[#06213C] px-4 py-3 rounded-full shadow-lg flex items-center gap-2 font-kaisei_Decol"
        onClick={() => setDrawerOpen(true)}
      >
        <CiFilter className="text-2xl" />
        Filters
      </button>

      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6 gap-y-4 container mx-auto">
        {/* Sidebar (Desktop) */}
        <div className="hidden lg:block col-span-1 space-y-6 bg-[#E5E5E5] text-[#06213C] p-4 rounded-lg h-fit w-full font-kaisei_Decol">
          <FiltersUI
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            toggleSelection={toggleSelection}
            selected={{
              selectedShapes,
              selectedPrices,
              selectedBrands,
              selectedGender,
              selectedCategories,
            }}
            setters={{
              setSelectedShapes,
              setSelectedPrices,
              setSelectedBrands,
              setSelectedGender,
              setSelectedCategories,
            }}
            clearAllFilters={clearAllFilters}
            genders={genders}
            categories={categories}
            frameShapes={frameShapes}
            priceRanges={priceRanges}
            brands={brands}
          />
        </div>

        {/* Products */}
        <div className="col-span-4 lg:col-span-3">
          {/* Active Filters */}
          {(selectedCategories.length > 0 ||
            selectedShapes.length > 0 ||
            selectedGender.length > 0 ||
            selectedBrands.length > 0 ||
            selectedPrices.length > 0) && (
            <div className="mb-4 p-3 bg-[#BBCED4]/10 border border-[#BBCED4] rounded-lg">
              <h4 className="text-sm font-medium text-black mb-2">
                Active Filters:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map((cat) => (
                  <span
                    key={cat}
                    className="flex items-center gap-1 px-2 py-1 bg-[#BBCED4]/40 text-black text-xs rounded-full"
                  >
                    Category: {cat}
                    <button
                      onClick={() =>
                        setSelectedCategories(
                          selectedCategories.filter((c) => c !== cat)
                        )
                      }
                      className="ml-1 text-black/50 hover:text-black"
                    >
                      ✕
                    </button>
                  </span>
                ))}
                {selectedShapes.map((shape) => (
                  <span
                    key={shape}
                    className="flex items-center gap-1 px-2 py-1 bg-[#BBCED4]/40 text-black text-xs rounded-full"
                  >
                    Shape: {shape}
                    <button
                      onClick={() =>
                        setSelectedShapes(
                          selectedShapes.filter((s) => s !== shape)
                        )
                      }
                      className="ml-1 text-black/50 hover:text-black"
                    >
                      ✕
                    </button>
                  </span>
                ))}
                {selectedGender.map((gender) => (
                  <span
                    key={gender}
                    className="flex items-center gap-1 px-2 py-1 bg-[#BBCED4]/40 text-black text-xs rounded-full"
                  >
                    Gender: {gender}
                    <button
                      onClick={() =>
                        setSelectedGender(
                          selectedGender.filter((g) => g !== gender)
                        )
                      }
                      className="ml-1 text-black/50 hover:text-black"
                    >
                      ✕
                    </button>
                  </span>
                ))}
                {selectedBrands.map((brand) => (
                  <span
                    key={brand}
                    className="flex items-center gap-1 px-2 py-1 bg-[#BBCED4]/40 text-black text-xs rounded-full"
                  >
                    Brand: {brand}
                    <button
                      onClick={() =>
                        setSelectedBrands(
                          selectedBrands.filter((b) => b !== brand)
                        )
                      }
                      className="ml-1 text-black/50 hover:text-black"
                    >
                      ✕
                    </button>
                  </span>
                ))}
                {selectedPrices.map((price) => (
                  <span
                    key={price}
                    className="flex items-center gap-1 px-2 py-1 bg-[#BBCED4]/40 text-black text-xs rounded-full"
                  >
                    Price: {price}
                    <button
                      onClick={() =>
                        setSelectedPrices(
                          selectedPrices.filter((p) => p !== price)
                        )
                      }
                      className="ml-1 text-black/50 hover:text-black"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Results Counter & Sorting */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, sortedProducts.length)} of {sortedProducts.length} products
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full md:w-auto"
            >
              <option value="none">Sort By</option>
              <option value="priceLow">Price: Low → High</option>
              <option value="priceHigh">Price: High → Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="w-full grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-2 sm:gap-4">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="relative w-full sm:h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    onClick={() => console.log("Clicked Product ID:", product)}
                    className="w-full sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm md:text-base text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-900">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {product.brand}
                    </span>
                  </div>
                  <div className="hidden md:flex flex-wrap items-center gap-2 text-sm text-gray-600">
                    <span className="bg-gray-100 px-2 py-1 rounded-full">
                      {product.shape}
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full">
                      {product.gender}
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{product.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Products */}
          {sortedProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-10 text-2xl">
              No products found matching your filters.
            </p>
          )}

          {/* Pagination */}
          {sortedProducts.length > 0 && totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-[#BBCED4] hover:border-[#BBCED4]"
                }`}
              >
                Previous
              </button>

              {/* Page Numbers */}
              {getPageNumbers().map((page, index) => (
                page === '...' ? (
                  <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      currentPage === page
                        ? "bg-[#BBCED4] text-black border-[#BBCED4] font-semibold"
                        : "bg-white text-gray-700 hover:bg-[#BBCED4]/30 hover:border-[#BBCED4]"
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-[#BBCED4] hover:border-[#BBCED4]"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Drawer for Mobile/Tablet */}
      <div
        className={`fixed inset-0 z-[9999] flex mt-6 ${
          drawerOpen ? "" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${
            drawerOpen ? "opacity-40" : "opacity-0"
          }`}
          onClick={() => setDrawerOpen(false)}
        ></div>

        {/* Drawer Panel */}
        <div
          className={`relative bg-white w-72 max-w-xs h-full shadow-lg p-4 overflow-y-auto transform transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-6 right-6 text-2xl text-gray-600"
            onClick={() => setDrawerOpen(false)}
          >
            <IoClose />
          </button>
          <FiltersUI
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            toggleSelection={toggleSelection}
            selected={{
              selectedShapes,
              selectedPrices,
              selectedBrands,
              selectedGender,
              selectedCategories,
            }}
            setters={{
              setSelectedShapes,
              setSelectedPrices,
              setSelectedBrands,
              setSelectedGender,
              setSelectedCategories,
            }}
            clearAllFilters={clearAllFilters}
            genders={genders}
            categories={categories}
            frameShapes={frameShapes}
            priceRanges={priceRanges}
            brands={brands}
          />
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          data-aos="fade"
          onClick={() => window.scrollTo({ top: 1300, behavior: "smooth" })}
          className="fixed bottom-20 right-6 z-50 text-black text-3xl transition-all"
        >
          <FaLongArrowAltUp />
        </button>
      )}
    </section>
  );
};

export default OurProducts;