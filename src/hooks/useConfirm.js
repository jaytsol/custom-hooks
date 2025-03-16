export const useConfirm = (message, callback) => {
    const confirmAction = () => {
        if (window.confirm(message)) {
            callback();
        }
    }

    return typeof callback === "function" ? confirmAction : undefined;
}