import React, { useEffect, useState } from "react";
import useAxiosIns from "../hooks/useAxiosIns";
import FeatureFItem from "../components/FeatureFItem";

const AvailableFoods = () => {
  const axiosInstance = useAxiosIns();
 const [page, setPage] = useState(1);
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("newest");
  const [pageLoading, setPageLoading] = useState(true);
const itemsPerPage = 3;
  useEffect(() => {
    axiosInstance("/availableFoods").then((res) => {
      setFoods(res.data);
      setPageLoading(false);
    });
  }, [axiosInstance]);

  if (pageLoading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <div className="loader"></div>
      </div>
    );
  }

  const filteredFoods = foods.filter((item) => {
    const matchSearch = item.foodName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category
      ? item.category.toLowerCase() === category.toLowerCase()
      : true;

    return matchSearch && matchCategory;
  });
  filteredFoods.sort((a, b) =>
    sort === "newest"
      ? new Date(b.expireDate) - new Date(a.expireDate)
      : new Date(a.expireDate) - new Date(b.expireDate)
  );
  document.title = "Available Foods";
  console.log(filteredFoods);
  const start = (page - 1) * itemsPerPage;
  const paginatedData = filteredFoods.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
  return (
    <div className="c-container mt-20">
      <div>
        <h2 className="text-center text-5xl mb-8 pt-20 mt-20">
          {" "}
          Featured Foods{" "}
        </h2>
        <p className="max-w-[700px] w-full m-auto text-center mb-5">
          Discover freshly prepared meals shared by generous donors in your
          community. Grab your favorite dishes before they’re gone!
        </p>
        <div className="my-10">
          {/* Search & Sort */}
          {/* name */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search food..."
              className="w-full md:w-2/3 border rounded-md px-4 py-2 focus:outline-none"
            />
            {/* expireDate */}
            <select
              onChange={(e) => setSort(e.target.value)}
              className="w-full md:w-1/3 border rounded-md px-4 py-2"
            >
              <option value="">Sort By</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Category */}
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full md:w-1/2 border rounded-md px-4 py-2"
            >
              <option value="">All Categories</option>
              <option value="cooked food">Cooked Food</option>
              <option value="dry food">Dry Food</option>
              <option value="fruits">Fruits</option>
            </select>
           
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mb-20 md:grid-cols-2 gap-5">
          {paginatedData.map((fFoodItem) => (
            <FeatureFItem fFoodItem={fFoodItem} />
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-6">
          <button
            className="border px-3 py-1"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>

          <span className="px-3 py-1">
            {page} / {totalPages}
          </span>

          <button
            className="border px-3 py-1"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
