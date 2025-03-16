import useAxios from "./useAxios";
import useClick from "./useClick";
import useConfirm from "./useConfirm";
import useFadeIn from "./useFadeIn";
import useFullScreen from "./useFullScreen";
import useInput from "./useInput";
import useNetwork from "./useNetwork";
import useNotification from "./useNotification";
import usePageLeave from "./usePageLeave";
import usePreventLeave from "./usePreventLeave";
import useScroll from "./useScroll";
import useTabs from "./useTabs";
import useTitle from "./useTitle";

function App() {
  // useInput
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);

  // useTab
  const content = [
    {
      tab: "Section 1",
      content: "I'm the content of the Section 1",
    },
    {
      tab: "Section 2",
      content: "I'm the content of the Section 2",
    },
  ];
  const { currentItem, changeItem } = useTabs(0, content);

  // useTitle
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 500);

  // useClick
  const clickedElement = useClick(() => console.log("Clicked"));
  const deleteWorld = () => console.log("Deleting the world");
  const abort = () => console.log("Aborted");

  // useConfirm
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

  // usePreventLeave
  const { enablePrevent, disablePrevent } = usePreventLeave();

  // usePageLeave
  const begForLifr = () => console.log("Pls dont leave");
  usePageLeave(begForLifr);

  // useFadeIn
  const fadeInHi = useFadeIn({ duration: 2, delay: 3 });
  const fadeInBye = useFadeIn({ duration: 3, delay: 5 });

  // useNetwork
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);

  // useScroll
  const { y } = useScroll();

  // useFullScreen
  const { element, triggerFull, exitFull } = useFullScreen();

  // useNotification
  const triggerNotif = useNotification("Hello, this is an alert title", {
    body: "This is alert content",
  });

  // useAxios
  const { loading, data, error, refetch } = useAxios(
    { url: "https://yts.mx/api/v2/list_movies.json" }
  );
  console.log(`Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`)

  return (
    <>
      {/* useInput */}
      <div>
        <input placeholder="Name" {...name} />
      </div>
      {/* useTab */}
      <div>
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
      {/* useClick */}
      <div ref={clickedElement}>Click</div>
      {/* useConfirm */}
      <div>
        <button onClick={confirmDelete}>Delete the world</button>
      </div>
      {/* usePreventLeave */}
      <div>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>Unprotect</button>
      </div>
      {/* useFadeIn */}
      <div {...fadeInHi}>hi</div>
      <div {...fadeInBye}>bye</div>
      {/* useNetwork */}
      <div>{onLine ? "Online" : "Offline"}</div>
      {/* useScroll */}
      <div style={{ height: "1000vh" }}>
        <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
          Hi
        </h1>
      </div>
      {/* useFullScreen */}
      <div ref={element}>
        <img
          src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fwww.thesun.co.uk%2Fwp-content%2Fuploads%2F2022%2F06%2Fsp-jonsnow-op.jpg%3Fstrip%3Dall%26quality%3D100%26w%3D1920%26h%3D1080%26crop%3D1&type=sc960_832"
          alt="John Snow"
        />
        <button onClick={triggerFull}>Make fullscreen</button>
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      {/* useNotification */}
      <div>
        <button onClick={triggerNotif}>Notification</button>
      </div>
      {/* useAxios */}
      <div>
        <h1>{data && data.status}</h1>
        <h2>{loading && "Loading"}</h2>
        <button onClick={refetch}>Refetch</button>
      </div>
    </>
  );
}

export default App;
