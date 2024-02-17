/* eslint-disable react/prop-types */
// import { useState } from "react";
import saveDisabled from "../../assets/save_disabled.png";
import saveEnabled from "../../assets/save_enabled.png";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const CreateNotes = ({ groupData, setGroupData, notesText, setNotesText }) => {
  function getCurrentDateTime() {
    const now = new Date();
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format

    const dateTimeString = `${day} ${month} ${year} - ${formattedHours}:${minutes
      .toString()
      .padStart(2, "0")}${ampm}`;

    return dateTimeString;
  }

  const handleSaveNotesClick = (e) => {
    e.preventDefault();
    const groups = JSON.parse(localStorage.getItem("groups"));
    const currentDateTime = getCurrentDateTime();

    const note = {
      createdAt: currentDateTime,
      notesText,
    };

    const updatedGroupData = {
      ...groupData,
      notes: [note, ...groupData.notes],
    };

    for (let i = 0; i < groups.length; i++) {
      if (groups[i].groupName === groupData.groupName) {
        groups[i] = updatedGroupData;
        break;
      }
    }

    localStorage.setItem("groups", JSON.stringify(groups));

    setNotesText("");
    setGroupData(updatedGroupData);
  };
  return (
    <section className="p-4 bg-lightBlue">
      <div className="flex flex-col gap-2 p-2 bg-white rounded-md ">
        <textarea
          name="notes"
          id=""
          rows="4"
          value={notesText}
          onChange={(e) => setNotesText(e.target.value)}
          placeholder="Write here ..."
          className="w-full resize-none outline-none"
        ></textarea>
        <button
          disabled={notesText.trim() ? false : true}
          className="self-end w-6"
          onClick={handleSaveNotesClick}
        >
          <img
            src={notesText.trim() ? saveEnabled : saveDisabled}
            alt="save-notes"
          />
        </button>
      </div>
    </section>
  );
};

export default CreateNotes;
