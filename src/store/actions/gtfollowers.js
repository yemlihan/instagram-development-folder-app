import axios from "axios";

export const fetchGts = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/gts")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          const gts = response.data.map((item) => {
            return item;
          });

          dispatch({ type: "GTS", payload: gts });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
