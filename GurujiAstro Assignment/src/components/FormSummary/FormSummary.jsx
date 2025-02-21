import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { trackerNext } from "../../redux/reducer/reducer";
import { toast } from "react-toastify";

const FormSummary = () => {
  // Extract form data from Redux store
  const {
    name,
    email,
    addressLine1,
    addressLine2,
    city,
    phone,
    state,
    zipCode,
  } = useSelector((state) => state.data.data);

  const dispatch = useDispatch();

  // Function to navigate to the previous step
  const handlePrev = () => {
    dispatch(trackerNext(2));
  };

  // Function to handle form submission
  const handleSubmit = () => {
    toast.success("Your Form is submitted.✌️");
  };

  return (
    <div className="h-[100vh] bg-gray-50 flex flex-col items-center justify-center">
      <div className="w-[90%] lg:w-[60%] ">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* Header Section */}
          <h2 className="text-[#2C6E7A] text-3xl font-bold ">Confirmation</h2>

          {/* User Details Section */}
          <div className="flex flex-col gap-1 mt-8 border-table ">
            <div className="w-[100%] flex border-bottom">
              <div className="px-2 py-2 w-[100%] flex">
                <p className="text-[#4e7a92] font-semibold">Name:</p>
                <p className="text-gray-800 ml-[1rem]">{name}</p>
              </div>
            </div>

            <div className="w-[100%] flex border-bottom ">
              <div className="px-2 py-1 w-[100%] flex">
                <p className="text-[#4e7a92] font-semibold">Email:</p>
                <p className="text-gray-800 ml-[1rem]">{email}</p>
              </div>
            </div>

            <div className="w-[100%]  flex  ">
              <div className="px-2 py-1 w-[100%]  flex">
                <p className="text-[#4e7a92] font-semibold">Phone:</p>
                <p className="text-gray-800 ml-[1rem]">{phone}</p>
              </div>
            </div>
          </div>
          <hr />

          {/* Address Details Section */}
          <div className="flex flex-col gap-1 mt-8 border-table ">
            <div className="w-[100%] flex border-bottom  ">
              <div className="px-2 py-2 w-[100%] flex">
                <p className="text-[#4e7a92] font-semibold">Address Line 1:</p>
                <p className="text-gray-800 ml-[1rem]">{addressLine1}</p>
              </div>
            </div>

            <div className="w-[100%]  flex border-bottom ">
              <div className="px-2 py-2 w-[100%]  flex">
                <p className="text-[#4e7a92] font-semibold">Address Line 2:</p>
                <p className="text-gray-800 ml-[1rem]">{addressLine2}</p>
              </div>
            </div>

            <div className="w-[100%]  flex border-bottom ">
              <div className="px-2 py-2  w-[100%] flex">
                <p className="text-[#4e7a92]  font-semibold">City:</p>
                <p className="text-gray-800 ml-[1rem]">{city}</p>
              </div>
            </div>

            <div className="w-[100%]  flex border-bottom  ">
              <div className="px-2 py-1 w-[100%]  flex">
                <p className="text-[#4e7a92] font-semibold">State:</p>
                <p className="text-gray-800 ml-[1rem]">{state}</p>
              </div>
            </div>

            <div className="w-[100%]  flex  ">
              <div className="px-2 py-1 w-[100%]  flex">
                <p className="text-[#4e7a92] font-semibold">Zip:</p>
                <p className="text-gray-800 ml-[1rem]">{zipCode}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10 ">
            <button
              type="button"
              className="group relative lg:w-[35%] w-[45%] h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              onClick={handlePrev}
            >
              Back
            </button>

            <button
              type="submit"
              className="group relative lg:w-[35%] w-[45%] h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSummary;