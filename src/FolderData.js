const Data = {
  folders: [
    {
      name: "My Folder",
      id: 1,
      children: [
        {
          name: "Second Folder",
          id: 2,
          children: [
            {
              name: "Third Folder",
              id: 3,
              children: []
            }
          ]
        }
      ]
    },
    {
      name: "My Folder1",
      id: 4,
      children: [
        {
          name: "Second Folder2",
          id: 5,
          children: [
            {
              name: "Third Folder3",
              id: 6,
              children: []
            }
          ]
        }
      ]
    }
  ],
  activeFoldersIds: [1, 4]
  // allFolders: ["My Folder", "Second Folder", "Third Folder"]
};

export default Data;
