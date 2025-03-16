export const useConfirm = (message, callback, rejection) => {
    const confirmAction = () => {
        if (window.confirm(message)) {
            callback();
        } else {
            rejection();
        }
    }

    return typeof callback === "function" ? confirmAction : undefined;
}