import { useTitle } from "./hooks/useTitle";
import { useClick } from "./hooks/useClick";
import { useConfirm } from "./hooks/useConfirm";

function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 500);
  const clickedElement = useClick(() => console.log('Clicked'));
  const deleteWorld = () => console.log('Deleting the world');
  const abort = () => console.log('Aborted')
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <>
      <div>
        <div>
          Hi
        </div>
      </div>
      <div ref={clickedElement}>
        Click
      </div>
      <div>
        <button onClick={confirmDelete}>
          Delete the world
        </button>
      </div>
    </>
  );
}

export default App;
