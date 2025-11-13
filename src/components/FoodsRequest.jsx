const FoodsRequest = ({ foodReqItm, i, handleAccept, handleReject }) => {
  const index = i + 1;
  
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 text-sm text-gray-900">{index}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded flex-shrink-0">
            <img
              className="w-full h-full"
              src={foodReqItm?.foodImage}
              alt={foodReqItm?.foodName}
              srcset=""
            />
          </div>
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div>
            <div className="text-sm font-medium text-gray-900">
              {foodReqItm?.foodName}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-900">
        {foodReqItm?.food_status}
      </td>
      <td className="px-6 py-4">
        <button
          onClick={() => handleAccept(foodReqItm._id)}
          className="px-4 mr-2 py-2 text-sm font-medium text-green-600 border border-green-300 rounded hover:bg-red-50 transition-colors"
        >
          Accept
        </button>
        <button
          onClick={() => handleReject(foodReqItm._id)}
          className="px-4 py-2 text-sm font-medium text-red-600 border border-red-300 rounded hover:bg-red-50 transition-colors"
        >
          Reject
        </button>
      </td>
    </tr>
  );
};

export default FoodsRequest;
