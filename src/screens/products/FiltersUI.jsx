import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiFilter } from "react-icons/ci";

const FiltersUI = ({
  expandedSections,
  toggleSection,
  toggleSelection,
  selected,
  setters,
  clearAllFilters,
  genders,
  categories,
  frameShapes,
  priceRanges,
  brands,
}) => {
  const {
    selectedShapes,
    selectedPrices,
    selectedBrands,
    selectedGender,
    selectedCategories,
  } = selected;

  return (
    <div className="space-y-2 h-full">
      <h2 className="font-medium text-2xl flex items-center justify-between gap-2 bg-white px-4 py-1 rounded-md">
        Filter <CiFilter className="hidden lg:block font-bold text-2xl" />
      </h2>

      {/* Gender */}
      <div className="bg-white p-2 px-4 rounded-md">
        <h3
          className="font-medium text-xl flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection("gender")}
        >
          Gender
          <IoIosArrowDown
            className={`transition-transform duration-300 ${expandedSections.gender ? "rotate-180" : ""}`}
          />
        </h3>
        {expandedSections.gender && (
          <div className="mt-2">
            {genders.map((gender) => (
              <label key={gender} className="flex items-center text-lg gap-2">
                <input
                  type="checkbox"
                  checked={selectedGender.includes(gender)}
                  onChange={() =>
                    toggleSelection(gender, setters.setSelectedGender)
                  }
                  className="w-5 h-5 accent-[#06213C]"
                />
                {gender}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Category */}
      <div className="bg-white p-2 px-4 rounded-md">
        <h3
          className="font-medium text-xl flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection("category")}
        >
          Category
          <IoIosArrowDown
            className={`transition-transform duration-300 ${expandedSections.category ? "rotate-180" : ""}`}
          />
        </h3>
        {expandedSections.category && (
          <div className="mt-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center text-lg gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() =>
                    toggleSelection(category, setters.setSelectedCategories)
                  }
                  className="w-5 h-5 accent-[#06213C]"
                />
                {category}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Frame Shape */}
      <div className="bg-white p-2 px-4 rounded-md">
        <h3
          className="font-medium text-xl flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection("frameShape")}
        >
          Frame shape
          <IoIosArrowDown
            className={`transition-transform duration-300 ${expandedSections.frameShape ? "rotate-180" : ""}`}
          />
        </h3>
        {expandedSections.frameShape && (
          <div className="mt-2">
            {frameShapes.map((shape) => (
              <label key={shape} className="flex items-center text-lg gap-2">
                <input
                  type="checkbox"
                  checked={selectedShapes.includes(shape)}
                  onChange={() =>
                    toggleSelection(shape, setters.setSelectedShapes)
                  }
                  className="w-5 h-5 accent-[#06213C]"
                />
                {shape}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="bg-white p-2 px-4 rounded-md">
        <h3
          className="font-medium text-xl flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection("priceRange")}
        >
          Price range
          <IoIosArrowDown
            className={`transition-transform duration-300 ${expandedSections.priceRange ? "rotate-180" : ""}`}
          />
        </h3>
        {expandedSections.priceRange && (
          <div className="mt-2">
            {priceRanges.map((range) => (
              <label key={range.label} className="flex items-center text-lg gap-2">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(range.label)}
                  onChange={() =>
                    toggleSelection(range.label, setters.setSelectedPrices)
                  }
                  className="w-5 h-5 accent-[#06213C]"
                />
                {range.label}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="bg-white p-2 px-4 rounded-md">
        <h3
          className="font-medium text-xl flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection("brands")}
        >
          Brand Select
          <IoIosArrowDown
            className={`transition-transform duration-300 ${expandedSections.brands ? "rotate-180" : ""}`}
          />
        </h3>
        {expandedSections.brands && (
          <div className="mt-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center text-lg gap-2">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() =>
                    toggleSelection(brand, setters.setSelectedBrands)
                  }
                  className="w-5 h-5 accent-[#06213C]"
                />
                {brand}
              </label>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={clearAllFilters}
        className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FiltersUI;
