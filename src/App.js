import { useClick } from "./hooks/useClick";
import { useConfirm } from "./hooks/useConfirm";
import { useBeforeLeave } from "./hooks/usePageLeave";
import { usePreventLeave } from "./hooks/usePreventLeave";
import { useTitle } from "./hooks/useTitle";

function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 500);
  const clickedElement = useClick(() => console.log('Clicked'));
  const deleteWorld = () => console.log('Deleting the world');
  const abort = () => console.log('Aborted')
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const begForLifr = () => console.log('Pls dont leave');
  useBeforeLeave(begForLifr);
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
      <div>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>Unprotect</button>
      </div>
    </>
  );
}

export default App;
