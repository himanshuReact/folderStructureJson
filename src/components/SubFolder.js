import React, { useState, useEffect } from "react";
import Data from "../FolderData";

const SubFolder = ({ subFolder }) => {
  console.log("subfolder", subFolder);
  // console.log("active folder ids", activeFoldersIds);
  if (!subFolder) {
    return null;
  }
  return (
    <div>
      {subFolder.map((folder) => {
        return (
          <ul>
            <li>{folder.name}</li>
            <SubFolder subFolder={folder.children} />
          </ul>
        );
      })}
    </div>
  );
};

export default SubFolder;
