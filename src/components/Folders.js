import React, { useState } from "react";
import ParentFolder from "./ParentFolder";

const Folders = ({ initialData }) => {
  const [data, setUpdatedData] = useState(initialData);

  const handleClick = (id) => {
    console.log("I am getting clicked");
    const activeFolders = Array.from(data.activeFoldersIds);
    let isActive = data.activeFoldersIds.indexOf(id);
    if (isActive === -1) {
      activeFolders.push(id);
      const newstate = { ...data, activeFoldersIds: activeFolders };
      setUpdatedData(newstate);
      return;
    } else {
      activeFolders.splice(isActive, 1);
      const newstate = { ...data, activeFoldersIds: activeFolders };
      setUpdatedData(newstate);
      return;
    }
  };
  return (
    <div>
      {data.folders.map((folder, index) => {
        let isActive = data.activeFoldersIds.indexOf(folder.id);
        let activeFoldersIds = data.activeFoldersIds;
        return (
          <div>
            <ParentFolder
              key={index}
              folder={folder}
              id={folder.id}
              isActive={isActive}
              handleClick={handleClick}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Folders;
