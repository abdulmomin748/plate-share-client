import React, { useEffect, useRef, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosIns from "../hooks/useAxiosIns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ManageMyFoods = () => {
  const [startDate, setStartDate] = useState(new Date());
  const formatedDate = startDate.toISOString().split("T")[0];

  const [modalInfo, setModalInfo] = useState(null);

  const modalRef = useRef();

  const { user, loading } = useAuth();
  const axiosInstance = useAxiosIns();
  const [myFoods, setMyFoods] = useState([]);
  const [fLoading, setFloading] = useState(true);

  useEffect(() => {
    axiosInstance(`/myFoods?email=${user?.email}`).then(
      (data) => setMyFoods(data.data),
      setFloading(false)
    );
  }, [user]);

  useEffect(() => {
    if (modalInfo) {
      // open modal only after data is ready
      modalRef.current.showModal();
    }
  }, [modalInfo]); // runs whenever modalInfo changes  // eita bade kora jaina vai

  const handleModal = (fItem) => {
    setModalInfo(fItem); // just set the data
  };


  console.log(modalInfo);
  
  const handleFoodItemUpdate = (e) => {
    e.preventDefault();
    const foodName = e.target.fName.value;
    const foodImage = e.target.fImage.value;
    const foodQuantity = e.target.fQuantity.value;
    const pickupLocation = e.target.pickLocation.value;
    const additionalNotes = e.target.fAddtionalN.value;

    const updateFood = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expireDate: formatedDate,
      additionalNotes,
      food_status: "Available",
    };

    axiosInstance.put(`/myFoods/${modalInfo._id}`, updateFood).then((data) => {
      console.log(data.data);
      if (data.data.modifiedCount > 0) {
        toast.success(`Food item updated successfully!`);

        // const filteredFoods = myFoods.find((fItem) => fItem._id == modalInfo._id);
        // setMyFoods([...myFoods, filteredFoods]);

        setMyFoods((previousFood) =>
          previousFood.map(prevFItm => prevFItm._id === modalInfo._id ? 
            { ...prevFItm, ...updateFood }
              : prevFItm
          )
        );
        modalRef.current.close();

      }

    });
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/myFoods/${id}`).then((data) => {
          const deletedFoodItem = myFoods.filter((fItem) => fItem._id !== id);
          setMyFoods(deletedFoodItem);
          console.log(data.data, deletedFoodItem);
        });

        Swal.fire({
          title: "Deleted!",
          text: "Your food item has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      <h1 className="text-5xl max-w-6xl mx-auto mt-10">
        My Products: {myFoods.length}
      </h1>

      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow overflow-hidden">
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
                {myFoods?.map((fItem, index) => (
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
                        <button
                          onClick={() => handleModal(fItem)}
                          className="px-4 mr-2 py-2 text-sm font-medium text-green-600 border border-green-300 rounded hover:bg-red-50 transition-colors"
                        >
                          Update
                        </button>
                        <button
                          onClick={(e) => handleDelete(e, fItem._id)}
                          className="px-4 py-2 text-sm font-medium text-red-600 border border-red-300 rounded hover:bg-red-50 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>

            {/* modal */}
            <dialog ref={modalRef} className="modal">
              <div className="modal-box max-w-7/12">
                <div className="flex justify-center items-center min-h-screen bg-gray-100">
                  <div className="bg-white w-[970px] rounded-2xl shadow-md p-8">
                    <h2 className="text-3xl font-semibold text-center mb-6">
                      Update your food information
                    </h2>

                    <form onSubmit={(e) => handleFoodItemUpdate(e)}>
                      {/* Title and Category Row */}
                      <div className=" mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Food Name
                          </label>
                          <input
                            value={modalInfo?.foodName || ""}
                            onChange={(e) => setModalInfo({ ...modalInfo, foodName: e.target.value })}
                            type="text"
                            name="fName"
                            placeholder="Food Name..........."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                            required
                          />
                        </div>
                      </div>

                      {/* Price Range Row */}
                      <div className=" mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Food Image
                        </label>
                        <input
                          value={modalInfo?.foodImage || ""}
                            onChange={(e) => setModalInfo({ ...modalInfo, foodImage: e.target.value })}
                          type="url"
                          name="fImage"
                          placeholder="Food Image Url..........."
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                          required
                        />
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Food Quantity
                        </label>
                        <input
                          value={modalInfo?.foodQuantity || ""}
                            onChange={(e) => setModalInfo({ ...modalInfo, foodQuantity: e.target.value })}
                          type="number"
                          name="fQuantity"
                          placeholder="Serves example people........."
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                        />
                      </div>

                      {/* Location */}
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pickup Location
                        </label>
                        <input
                          value={modalInfo?.pickupLocation || ""}
                            onChange={(e) => setModalInfo({ ...modalInfo, pickupLocation: e.target.value })}
                          type="text"
                          name="pickLocation"
                          placeholder="City, Country......"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                        />
                      </div>

                      <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expire Date
                        </label>
                        <DatePicker
                          selectedDates={modalInfo?.expireDate}
                          className="focus:ring-purple-500 w-full p-2"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>
                      {/* Description */}
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Notes for this food item
                        </label>
                        <textarea
                          value={modalInfo?.additionalNotes || ""}
                            onChange={(e) => setModalInfo({ ...modalInfo, additionalNotes: e.target.value })}
                          name="fAddtionalN"
                          placeholder="Additional Notes for this food item..........."
                          rows="4"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
                          required
                        />
                      </div>

                      {/* Submit Button */}

                      <div className="flex items-center gap-3 pt-2">
                        <form method="dialog" className="w-6/12">
                          <button className="px-4 py-2 w-full rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">
                            Cancel
                          </button>
                        </form>
                        <button
                          type="submit"
                          className="w-6/12 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition duration-200 ease-in-out transform hover:scale-[1.02]"
                        >
                          Update Food Item
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </dialog>

            <div className="text-center py-12 text-gray-500">No Foods</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMyFoods;
