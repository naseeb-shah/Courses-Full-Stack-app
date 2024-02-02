export const requestData = () => ({ type: "pending" });
export const requestSuccess = (data) => ({ type: "success", payload: data });
export const requestError = (data) => ({ type: "error", payload: null });
