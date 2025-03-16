import { useClick } from "./hooks/useClick";
import { useConfirm } from "./hooks/useConfirm";
import { useFadeIn } from "./hooks/useFadeIn";
import { useFullScreen } from "./hooks/useFullScreen";
import { useInput } from "./hooks/useInput";
import { useNetwork } from "./hooks/useNetwork";
import { useNotification } from "./hooks/useNotification";
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

  // useFullScreen
  const { element, triggerFull, exitFull } = useFullScreen();

  // useNotification
  const triggerNotif = useNotification("Hello, this is an alert title", {
    body: "This is alert content"
  });

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
      <div ref={element}>
        <img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fwww.thesun.co.uk%2Fwp-content%2Fuploads%2F2022%2F06%2Fsp-jonsnow-op.jpg%3Fstrip%3Dall%26quality%3D100%26w%3D1920%26h%3D1080%26crop%3D1&type=sc960_832" alt="psyduck" />
        <button onClick={triggerFull}>Make fullscreen</button>
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <div>
        <button onClick={triggerNotif}>Notification</button>
      </div>
    </>
  );
}

export default App;
