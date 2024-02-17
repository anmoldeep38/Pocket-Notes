/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const groupAvatar = [
  "#0047FF",
  "#B38BFA",
  "#FFC0C0",
  "#43E6FC",
  "#F19576",
  "#6691FF",
  "#FF66F0",
];
const GroupList = ({ setTransformValue }) => {
  const groups = JSON.parse(localStorage.getItem("groups")) || [];

  const [selectedGroup, setSelectedGroup] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const groupName = searchParams.get("groupName");
    setSelectedGroup(groupName);
  }, []);

  const handleSelectGroupClick = (e, groupName) => {
    const id = e.target.getAttribute("data-id");
    setSelectedGroup(id);
    setSearchParams({ groupName });
    if (window.innerWidth <= 768) setTransformValue(-1);
  };

  if (groups.length === 0) {
    return (
      <p className="text-center text-xl text-gray-600 border rounded-3xl  py-2">
        No group found
      </p>
    );
  }
  return (
    <ul className="h-full w-full flex flex-col gap-2">
      {groups.map((group) => {
        return (
          <li
            key={group.groupName}
            data-id={group.groupName}
            onClick={(e) => handleSelectGroupClick(e, group.groupName)}
            className={`flex items-center gap-5 font-medium text-lg pl-8 py-3 rounded-2xl transition-colors hover:bg-groupItem cursor-pointer
                        ${selectedGroup === group.groupName && "bg-[#c9c9c9]"}`}
          >
            <p
              style={{ backgroundColor: groupAvatar[group.avatar] }}
              className="w-14 h-14 text-white text-xl flex items-center justify-center rounded-full"
            >
              <span>{group.shortGroupName}</span>
            </p>
            <p className="text-base">{group.groupName}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default GroupList;
