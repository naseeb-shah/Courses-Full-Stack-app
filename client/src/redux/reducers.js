const initialState = {
  data: [],
  loading: false,
  err: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "pending":
      return { ...state, loading: true };
    case "success":
      return { ...state, loading: false, data: action.payload };
    case "error":
      return { ...state, loading: false, err: action.payload };
    default:
      return state; // If the action type doesn't match, return the current state
  }
};
