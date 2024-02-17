/* eslint-disable react/prop-types */
const NotesList = ({ groupData, setGroupData, setNotesText }) => {
  const { notes } = groupData;

  if (notes.length === 0) {
    return (
      <p className="text-center text-xl text-zinc-600 py-2">
        Notes not created yet
      </p>
    );
  }

  const handleUpdateNoteClick = (noteIndex) => {
    const notesText = groupData.notes[noteIndex].notesText;

    handleDeleteNoteClick(noteIndex);
    console.log(notesText);
    setNotesText(notesText);
  };

  const handleDeleteNoteClick = (noteIndex) => {
    const filteredNotesList = notes.filter(
      (notes, index) => index !== noteIndex
    );

    const groups = JSON.parse(localStorage.getItem("groups"));
    const group = groups.find(
      (group) => group.groupName === groupData.groupName
    );

    group.notes = filteredNotesList;
    localStorage.setItem("groups", JSON.stringify(groups));

    setGroupData({ ...groupData, notes: filteredNotesList });
  };

  return (
    <>
      <ul className="p-4 flex flex-col gap-4">
        {notes.map((note, index) => {
          console.log(note);
          return (
            <li key={index}>
              <article className="px-4 py-6 bg-white rounded-md shadow-notesItem">
                <p className="text-sm md:text-lg">{note.notesText}</p>
                <div className="mt-4 flex justify-between">
                  <div className=" flex gap-4">
                    <i
                      onClick={() => handleUpdateNoteClick(index)}
                      className="fa-regular fa-pen-to-square hover:text-blue-400 cursor-pointer"
                    ></i>
                    <i
                      onClick={() => handleDeleteNoteClick(index)}
                      className="fa-solid fa-trash-can hover:text-red-500 cursor-pointer"
                    ></i>
                  </div>
                  <p className="text-sm text-notesTextColor font-medium md:text-base">
                    {note.createdAt}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NotesList;
