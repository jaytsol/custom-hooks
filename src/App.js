import { useTitle } from "@/hooks/useFadeIn/useTitle";

function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 500);
  return (
    <div>
      <div>Hi</div>
    </div>
  );
}

export default App;
