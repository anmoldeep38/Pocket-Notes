/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
const groupAvatar = [
  "#0047FF",
  "#B38BFA",
  "#FFC0C0",
  "#43E6FC",
  "#F19576",
  "#6691FF",
  "#FF66F0",
];
const CreateGroup = ({ closeModal }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const [groupNameError, setGroupNameError] = useState(false);
  const inputRef = useRef(null);

  const handleAvatarClick = (e) => {
    const avatarId = e.target.getAttribute("data-index");
    setSelectedAvatar(parseInt(avatarId));
  };

  const getTransformedGroupName = (groupName) => {
    return groupName
      .split(" ")
      .reduce((acc, curr) => acc + curr[0].toUpperCase(), "");
  };

  const handleCreateNewGroupClick = () => {
    const groupName = inputRef.current?.value.trim();

    if (!groupName) return;

    const groups = JSON.parse(localStorage.getItem("groups")) || [];

    const isGroupNameExist = groups.some(
      (group) => group.groupName.toLowerCase() === groupName.toLowerCase()
    );

    if (isGroupNameExist) {
      setGroupNameError(true);
      return;
    }

    setGroupNameError(false);

    const newGroup = {
      groupName,
      shortGroupName: getTransformedGroupName(groupName),
      avatar: selectedAvatar,
      notes: [],
    };

    localStorage.setItem("groups", JSON.stringify([...groups, newGroup]));
    console.log(JSON.parse(localStorage.getItem("groups")));
    closeModal();
  };
  return (
    <section className="font-semibold grid gap-4 md:p-4">
      <h3 className="text-lg ">Create New group</h3>
      <div className="flex gap-3">
        <label htmlFor="group_name" className="text-sm">
          Group Name
        </label>
        <div>
          <input
            type="text"
            id="group_name"
            ref={inputRef}
            placeholder="Enter group name"
            className="font-normal  px-4 border rounded-3xl  placeholder:text-sm"
          />
          {groupNameError && (
            <p className="text-xs pt-1 pl-1 font-normal text-red-700">
              Group name already exist
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-3">
        <label htmlFor="" className="text-sm">
          Choose Avatar
        </label>
        <ul className="flex gap-2">
          {groupAvatar.map((avatar, index) => {
            return (
              <li
                key={index}
                data-index={index}
                onClick={handleAvatarClick}
                style={{ backgroundColor: avatar }}
                className={`w-6 h-6 rounded-full cursor-pointer ${
                  index === selectedAvatar && "outline"
                } outline-[#555]`}
              ></li>
            );
          })}
        </ul>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleCreateNewGroupClick}
          className="px-4 text-white font-normal rounded-xl  bg-lightBlue"
        >
          create
        </button>
      </div>
    </section>
  );
};

export default CreateGroup;
