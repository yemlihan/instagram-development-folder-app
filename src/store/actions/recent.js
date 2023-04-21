import axios from "axios";

export const fetchRecent = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/recent")
      .then((response) => {
        if (
          response.data.relationships_permanent_follow_requests &&
          response.data.relationships_permanent_follow_requests.length > 0
        ) {
          const recentsArr = [];

          response.data.relationships_permanent_follow_requests.map((item) => {
            const newArr = item.string_list_data;
            newArr.map((n) => {
              recentsArr.push(n);
            });
          });

          dispatch({ type: "RECENT", payload: recentsArr });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// export const recent = (recents) => {
//     return {
//         type: "RECENT",
//         payload: recents
//     }
// }
