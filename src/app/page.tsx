"use client";
import Image from "next/image";
import logo from "../images/Ardilla-logo-white.png";
import React from "react";
import TimePicker from "react-time-picker";
import 'react-time-picker/dist/TimePicker.css';

// import 'react-clock/dist/Clock.css';
import { useState } from "react";

export default function Home() {
  const [selectedTime, setSelectedTime] = useState<Date | string | null>(
    new Date()
  );

  const [attendanceType, setAttendanceType] = useState<string | null>(null);


  

  const handleRadioChange = (value: any) => {

    setAttendanceType((prevValue) => (prevValue === value ? null : value));
  };
  
  const handleTimeChange = (time: string | Date | null) => {
    if (time !== null) {
      setSelectedTime(time as Date | string);
    }
  };
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute left-6 top-0 p-6">
        <Image
          src={logo}
          alt="logo"
          width={80}
          height={20}
          className="mr-2 mt-3"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-[#3D0072] text-center font-magiona-display">
        Attendance Form
      </h1>

      <div className="max-w-3xl mx-auto mt-20 bg-white rounded-lg overflow-hidden shadow-[#3D0072] shadow-md">
        <div className="px-6 py-4">
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-bold text-[#3D0072] mb-1"
            >
              Full Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter full name"
              className="border-b border-gray-300 px-3 py-2  w-full focus:outline-none focus:ring-[#3D0072] focus:border-[#3D0072]"
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
              Staff ID:
            </label>
            <input
              id="staffid"
              type="text"
              step="0.01"
              placeholder="Enter ID (E.g ARD-06-AD-1006)"
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
              htmlFor="attendance"
              className="block text-sm font-bold text-[#3D0072] mb-1"
            >
              Attendance:
            </label>
            <label className="block">
              <input
                className="mr-2 text-gray-400"
                type="radio"
                name="clockin" // Give the radio buttons in the same group the same name
                value="Clock In"
                checked={attendanceType === "Clock In"}
                onChange={() => handleRadioChange("Clock In")}
                color="black"
              />
              <span style={{ color: "gray" }}> Clock in</span>
            </label>
            <label>
              <input
                className="mr-2 text-gray-400"
                type="radio"
                name="clockout"
                value="Clock Out"
                checked={attendanceType === "Clock Out"}
                onChange={() => handleRadioChange("Clock Out")}
              />
              <span style={{ color: "gray" }}> Clock out </span>
            </label>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg overflow-hidden shadow-[#3D0072] shadow-md">
        <div className="px-6 py-4">
          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-sm font-bold text-[#3D0072] mb-1"
            >
              Time:
            </label>
            <label className="mt-5 pt-6">
              <TimePicker
                onChange={handleTimeChange}
                value={selectedTime as string | Date}
                disableClock
              />
            </label>
          </div>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg overflow-hidden">
        <div className="px-0 py-4">
          <button className="bg-[#3D0072] text-white rounded-lg  mx-auto self-center w-[765px] h-[50px] px-[254px] py-[18px] shadow-inner border justify-center items-center gap-2.5 inline-flex">
            Proceed to Capturing
          </button>
        </div>
      </div>
    </div>
  );
}

