import { useEffect } from "react"

const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
        return;
    }
    const handle = () => {
        console.log('leaving');
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
}

export { useBeforeLeave };
