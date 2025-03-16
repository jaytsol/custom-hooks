import { useClick } from "./hooks/useClick";
import { useConfirm } from "./hooks/useConfirm";
import { useFadeIn } from "./hooks/useFadeIn";
import { useInput } from "./hooks/useInput";
import { useNetwork } from "./hooks/useNetwork";
import { useBeforeLeave } from "./hooks/usePageLeave";
import { usePreventLeave } from "./hooks/usePreventLeave";
import { useScroll } from "./hooks/useScroll";
import { useTabs } from "./hooks/useTabs";
import { useTitle } from "./hooks/useTitle";

function App() {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  const content = [
    {
      tab: "Section 1",
      content: "I'm the content of the Section 1"
    },
    {
      tab: "Section 2",
      content: "I'm the content of the Section 2"
    },
  ]
  const { currentItem, changeItem } = useTabs(0, content);
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 500);
  const clickedElement = useClick(() => console.log('Clicked'));
  const deleteWorld = () => console.log('Deleting the world');
  const abort = () => console.log('Aborted')
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const begForLifr = () => console.log('Pls dont leave');
  useBeforeLeave(begForLifr);
  const fadeInHi = useFadeIn({duration: 2, delay: 3});
  const fadeInBye = useFadeIn({duration: 3, delay: 5});
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline");
  }
  const onLine = useNetwork(handleNetworkChange);
  
  // useScroll
  const {y} = useScroll();
  
  return (
    <>
      <div>
        <input placeholder="Name" {...name} />
      </div>
      <div>
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
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
      <div {...fadeInHi}>
        hi
      </div>
      <div {...fadeInBye}>
        bye
      </div>
      <div>
        {onLine ? "Online" : "Offline"}
      </div>
      <div style={{ height: "1000vh"}}>
        <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue"}}>Hi</h1>
      </div>
    </>
  );
}

export default App;
