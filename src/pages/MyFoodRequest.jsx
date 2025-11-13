import React, { useEffect, useState } from "react";
import useAxiosIns from "../hooks/useAxiosIns";
import useAuth from "../hooks/useAuth";

const MyFoodRequest = () => {
  const axiosInstance = useAxiosIns();
  const { user } = useAuth();
  const [myReqProd, setMyReqProd] = useState([]);

  useEffect(() => {
    axiosInstance(`/myReqFood?email=${user?.email}`)
    .then((data) =>
      setMyReqProd(data.data)
    );
  }, []);

  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 700);
  }, []);

  if (pageLoading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <div class="loader"></div>
      </div>
    );
  }
  document.title = "My Food Request Page";
  return (
    <div>
       {
       myReqProd.length > 0 ? <div className=" bg-gray-50 p-8 mb-20">
        <h1 className="text-5xl max-w-6xl mx-auto mt-10 mb-10">
          Total Food Request: {myReqProd.length}
        </h1>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow overflow-hidden overflow-x-scroll">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Sl. No
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Food Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {myReqProd?.map((fItem, index) => (
                  <>
                    <tr key={fItem._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded flex-shrink-0">
                            <img
                              className="w-full h-full"
                              src={fItem.foodImage}
                              alt={fItem.foodName}
                              srcset=""
                            />
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {fItem.foodName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {fItem.food_status}
                      </td>
                      <td className="px-6 py-4">
                        <button className="px-4 py-2 text-sm font-medium text-red-600 border border-red-300 rounded hover:bg-red-50 transition-colors">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      :
        <h1 className="text-5xl max-w-6xl mx-auto mt-10  px-10 py-50">
          No Data Found {user.displayName}
        </h1>
      }

    </div>
  );
};

export default MyFoodRequest;
