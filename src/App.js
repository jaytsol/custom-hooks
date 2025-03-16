import { useTitle } from "./hooks/useFadeIn/useTitle";

function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"));
  return (
    <div>
      <div>Hi</div>
    </div>
  );
}

export default App;
