import { useTitle } from "./hooks/useTitle";
import { useClick } from "./hooks/useClick";

function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 500);
  const clickedElement = useClick(() => console.log('Clicked'));
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
    </>
  );
}

export default App;
