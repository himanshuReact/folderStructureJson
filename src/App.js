import "./styles.css";
import Folders from "./components/Folders";
import Data from "./FolderData.js";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Folders initialData={Data} />
    </div>
  );
}
