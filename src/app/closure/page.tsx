import Image from 'next/image'
import logo from "../../images/Ardilla-logo-white.png";
export default function Home() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
  <div className="absolute left-6 top-0 p-6">
  <Image
          src={logo}
          alt="logo"
          width={80}
          height={20}
          className="mr-2 mt-3 "
        />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-[#3D0072] text-center font-magiona-display">Closure Form</h1>
      
    <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-[#3D0072] shadow-md">
      <div className="px-6 py-4">
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-bold text-[#3D0072] mb-1">
            Date:
          </label>
          <input
            id="date"
            type="date"
            className="border-b border-gray-300 px-3 py-2  w-full focus:outline-none focus:ring-[#3D0072] focus:border-[#3D0072]"
          />
        </div>
        </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg overflow-hidden shadow-[#3D0072] shadow-md">
      <div className="px-6 py-4">
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-bold text-[#3D0072] mb-1">
            Staff Full Name:
          </label>
          <input
            id="fname"
            type="text"
            step="0.01"
            placeholder='Enter full name'
            className="border-b border-gray-300 px-3 py-2 w-full focus:outline-none focus:ring-[#3D0072] focus:border-[#3D0072]"
          />
        </div>
        </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg overflow-hidden shadow-[#3D0072] shadow-md">
      <div className="px-6 py-4">
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-bold text-[#3D0072] mb-1">
            Staff ID:
          </label>
          <input
            id="staffid"
            type="text"
            step="0.01"
            placeholder='Enter ID (E.g ARD-06-AD-1006)'
            className="border-b border-gray-300 px-3 py-2 w-full focus:outline-none focus:ring-[#3D0072] focus:border-[#3D0072]"
          />
        </div>
        </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg overflow-hidden shadow-[#3D0072] shadow-md">
        <div className="px-6 py-4">
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-bold text-[#3D0072] mb-1"
            >
              Team Number:
            </label>
            <input
              id="teamnumber"
              type="text"
              step="0.01"
              placeholder="Enter Team Number (E.g 100)"
              className="border-b border-gray-300 px-3 py-2 w-full focus:outline-none focus:ring-[#3D0072] focus:border-[#3D0072]"
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg overflow-hidden shadow-[#3D0072] shadow-md">
        <div className="px-6 py-4">
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-bold text-[#3D0072] mb-1"
            >
              Customer Name:
            </label>
            <input
              id="customername"
              type="text"
              step="0.01"
              placeholder="Enter Customer Number"
              className="border-b border-gray-300 px-3 py-2 w-full focus:outline-none focus:ring-[#3D0072] focus:border-[#3D0072]"
            />
          </div>
        </div>
      </div>


        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg overflow-hidden shadow-[#3D0072] shadow-md">
      <div className="px-6 py-4">
        <div className="mb-4">
          <label htmlFor="attendance" className="block text-sm font-bold text-[#3D0072] mb-1">
            Product:
          </label>
          <select
        id="dropdow"
        className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled>
          Choose an option
        </option>
        <option value="option1">Loans</option>
        <option value="option2">Saving</option>
        <option value="option3">POF</option>
        <option value="option4">Assets Finacing</option>
        <option value="option5">Investment</option>
      </select>
        </div>
        </div>
        </div>


        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg overflow-hidden shadow-[#3D0072] shadow-md">
      <div className="px-6 py-4">
        <div className="mb-4">
          <label htmlFor="attendance" className="block text-sm font-bold text-[#3D0072] mb-1">
            Payment:
          </label>
          <select
        id="dropdown"
        className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled>
          Choose an option
        </option>
        <option value="option1">First Time- Savings</option>
        <option value="option2">Roll Over- Savings</option>
        <option value="option3">Repayment - Loan</option>
        <option value="option4">Initial Interest Deposit -POF</option>
        <option value="option5">Extension -POF </option>
        <option value="option6">Contribution - Assest Financing</option>
      </select>
        </div>
        </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg overflow-hidden shadow-[#3D0072] shadow-md">
      <div className="px-6 py-4">
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-bold text-[#3D0072] mb-1">
            Amount Paid:
          </label>
          <input
            id="time"
            type="text"
            step="0.01"
            placeholder='Enter amount paid'
            className="border-b border-gray-300 px-3 py-2 w-full focus:outline-none focus:ring-[#3D0072] focus:border-[#3D0072]"
          />
        </div>
        </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg overflow-hidden shadow-[#3D0072] shadow-md">
      <div className="px-6 py-4">
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-bold text-[#3D0072] mb-1">
          Upload Proof of Payment (Receipt):
          </label>
          <div className="flex items-center">
        <label
          htmlFor="fileInput"
          className="border-gray cursor-pointer bg-white text-[#3D0072] w-full text-center py-2 px-40 rounded-md transition duration-300 hover:bg-[#3D0072] hover:text-white border border-[#3D0072]]"
        >
          + Upload Document
        </label>

        <input
          type="file"
          id="fileInput"
          accept=".pdf, .doc, .docx"
          className="hidden"
        />
</div>
        </div>
        </div>
        </div>

        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg overflow-hidden">
      <div className="px-0 py-4">
<button className='bg-[#3D0072] text-white rounded-lg  mx-auto self-center w-[765px] h-[50px] px-[254px] py-[18px] rounded-lg shadow-inner border justify-center items-center gap-2.5 inline-flex'>
  Submit
</button>
</div>
</div>
        </div>
  )
}
