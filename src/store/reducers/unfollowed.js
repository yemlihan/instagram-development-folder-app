const initialState = {
  unfollows: [],
};

const unfollowReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UNFOLLOW":
      const unfollowPayload = action.payload;
      const unfollowDatas = unfollowPayload.map((unf) => {
        return unf;
      });
      if (unfollowDatas.length === 0) {
        console.log("reducers unfollow error");
      }
      return { ...state, unfollows: unfollowDatas };
    default:
      return state;
  }
};

export default unfollowReducer;
