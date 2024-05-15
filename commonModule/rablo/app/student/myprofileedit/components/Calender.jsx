"use client";
import React, { useState, useEffect } from "react";
import "./Calender.css";
import Modal from "./Modal";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [todoDate, setTodoDate] = useState(null);
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState({});

  if (typeof window !== 'undefined') {
  const studentId = localStorage.getItem("query1");
  const authtoken = localStorage.getItem("query2");
  }

  const renderCalendar = () => {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const startingDay = firstDayOfMonth.getDay();
    const numDays = lastDayOfMonth.getDate();

    const calendarDays = [];

    const weekDays = ["M", "T", "W", "Th", "F", "S", "S"];
    for (let i = 0; i < weekDays.length; i++) {
      calendarDays.push(
        <div key={i} className="weekday">
          {weekDays[i]}
        </div>
      );
    }

    for (let i = 0; i < startingDay; i++) {
      calendarDays.push("");
    }

    for (let i = 1; i <= numDays; i++) {
      calendarDays.push(i);
    }

    const totalDays = calendarDays.length;
    const remainingDays = 7 - (totalDays % 7);
    for (let i = 0; i < remainingDays; i++) {
      calendarDays.push("");
    }

    return (
      <div className="calendar">
        <div className="navigation">
          <button
            onClick={() =>
              setCurrentDate(new Date(currentYear, currentMonth - 1))
            }
          >
            &lt;
          </button>
          <div className="currentMonth">{`${getMonthName(
            currentMonth
          )} ${currentYear}`}</div>
          <button
            onClick={() =>
              setCurrentDate(new Date(currentYear, currentMonth + 1))
            }
          >
            &gt;
          </button>
        </div>
        {!showModal && (
          <div className="days">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`day ${day === "" ? "disabled" : ""} ${
                  isCurrentDay(day) ? "currentDay" : ""
                }`}
                onClick={() => {
                  handleDayClick(day);
                }}
              >
                {day}
              </div>
            ))}
          </div>
        )}
        {showModal && (
          <div className="Modal">
            <textarea
              type="text"
              value={todoText}
              placeholder="make a note"
              onChange={(e) => setTodoText(e.target.value)}
            />
            <div className="rowcalend">
              <button onClick={handleCancel} className="cancel">
                Cancel
              </button>
              <button onClick={handleSave} className="save">
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const handleDayClick = async (day) => {
    if (day === "") return;

    const currentYear = currentDate.getFullYear();
    const currentMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2);

    const formattedDay = day < 10 ? `0${day}` : `${day}`;

    const dateString = `${currentYear}-${currentMonth}-${formattedDay}`;
    // console.log(dateString)
    setTodoDate(dateString);

    const requestBody = {
      studentId: studentId,
      date: dateString,
    };

    try {
      const response = await fetch("http://localhost:5500/api/getNotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const responseData = await response.json();
        setTodoText(responseData.data.notes);
      } else if (response.status == 400) {
        console.log(response);
      }
    } catch (error) {
      // console.log('Error fetching notes:', error);
    }

    // console.log(dateString);
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    setTodoDate(null);
    setTodoText("");
  };

  const handleSave = async () => {
    if (!todoDate || !todoText.trim()) return;

    const requestBody = {
      studentId: studentId,
      date: todoDate,
      notes: todoText,
    };

    try {
      const response = await fetch("http://localhost:5500/api/createNotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const responseData = await response.json();
        // console.log(responseData.data.notes);
      } else if (response.status == 400) {
        // console.log(response)
      }
    } catch (error) {
      // console.log('Error fetching notes:', error);
    }

    setShowModal(false);
    setTodoDate(null);
    setTodoText("");
  };

  const getMonthName = (monthIndex) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[monthIndex];
  };

  const isCurrentDay = (day) => {
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    return (
      day === currentDay &&
      currentDate.getMonth() === currentMonth &&
      currentDate.getFullYear() === currentYear
    );
  };

  return <div>{renderCalendar()}</div>;
};

export default Calendar;
