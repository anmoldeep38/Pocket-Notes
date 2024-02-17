import notesImg from "../../assets/notes_img.png";
import { FaLock } from "react-icons/fa";

const DefaultPage = () => {
  return (
    <>
      <div className="h-[100vh] grid place-content-center gap-5 text-center relative">
        <div className="max-w-[600px]">
          <div className="w-96 mx-auto">
            <img src={notesImg} alt="notes-image" />
          </div>

          <h1 className="text-4xl font-bold py-3">Pocket Notes</h1>
          <p className="text-defaultPageTextColor text-xl font-medium py-3">
            Send and receive messages without keeping your phone online. Users
            Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>

        <div className="absolute bottom-3 right-1/2 transform translate-x-1/2 flex items-center">
          <FaLock className="text-defaultPageTextColor text-sm" />
          <p className="text-defaultPageTextColor text-sm font-medium ml-1">
            end-to-end encrypted
          </p>
        </div>
      </div>
    </>
  );
};

export default DefaultPage;