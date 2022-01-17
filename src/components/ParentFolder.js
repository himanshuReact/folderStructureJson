import React, { useState, useEffect } from "react";
import Subfolder from "./SubFolder";

const ParentFolder = ({ folder, isActive, handleClick, children, id }) => {
  console.log("folder", folder);
  // console.log("active folder ids", activeFoldersIds);

  return (
    <div>
      <ul>
        <li onClick={() => handleClick(id)}>{folder.name}</li>
        {isActive !== -1 ? <Subfolder subFolder={folder.children} /> : null}
      </ul>
    </div>
  );
};

export default ParentFolder;
