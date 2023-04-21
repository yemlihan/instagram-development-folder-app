import axios from "axios";
import Events from "./Events";
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecent } from "../store/actions/recent";
import { fetchGts } from "../store/actions/gtfollowers";
import { fetchUnfollow } from "../store/actions/unfollowed";

export default function UploadFiles() {
  const dispatch = useDispatch();

  function handleFileUpload(e) {
    const files = e.target.files;
    let formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    axios
      .post("http://localhost:3001/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (!res.data.items) {
          console.log(res.data.message);
        }
        dispatch(fetchRecent());
        dispatch(fetchGts());
        dispatch(fetchUnfollow());
      })
      .catch((err) => {
        console.error(err);
      });
  }
  

  return (
    <>
      <div className="col-span-full">
        <label
          htmlFor="file-upload"
          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
        >
          <div className="mt-3 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-20 py-20 cursor-pointer">
            <div className="text-center">
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <span>Dosyayı yükle</span>
                <form encType="multipart/form-data">
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    webkitdirectory="true"
                    directory="true"
                    multiple
                    onChange={handleFileUpload}
                  />
                </form>
              </div>
            </div>
          </div>
        </label>
      </div>
    </>
  );
}
