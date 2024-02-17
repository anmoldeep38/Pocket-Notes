/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import CreateNotes from "./CreateNotes";
import NotesList from "./NotesList";
import DefaultPage from "../DefaultPage";
import { useEffect, useState } from "react";
const Notes = ({ setTransformValue }) => {
  const [searchParams] = useSearchParams();

  const [notesText, setNotesText] = useState("");
  const [groupData, setGroupData] = useState(null);

  useEffect(() => {
    const groupName = searchParams.get("groupName");
    const groupData = JSON.parse(localStorage.getItem("groups"))?.find(
      (group) => group.groupName === groupName
    );
    if (groupData) setGroupData({ ...groupData });
  }, [searchParams]);

  return (
    <>
      <section className="h-[100vh] bg-notesBackgroundColor grid grid-rows-customRows min-w-[100vw] md:min-w-min">
        {groupData ? (
          <>
            <header className="bg-lightBlue flex items-center">
              <div className="flex px-4 py-2 items-center text-white gap-4 font-medium text-lg">
                <div
                  className="text-xl cursor-pointer md:hidden"
                  onClick={() => setTransformValue(0)}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </div>
                <p className="w-14 h-14  text-xl flex items-center justify-center rounded-full  bg-[#6499E9]">
                  <span>{groupData.shortGroupName}</span>
                </p>
                <p className="text-base">{groupData.groupName}</p>
              </div>
            </header>

            <main className="relative w-full overflow-y-auto">
              <NotesList
                groupData={groupData}
                setGroupData={setGroupData}
                setNotesText={setNotesText}
              />
            </main>

            <footer>
              <CreateNotes
                groupData={groupData}
                setGroupData={setGroupData}
                notesText={notesText}
                setNotesText={setNotesText}
              />
            </footer>
          </>
        ) : (
          <DefaultPage />
        )}
      </section>
    </>
  );
};

export default Notes;
