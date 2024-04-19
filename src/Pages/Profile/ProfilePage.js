import ProfileComponent from "../../Components/ProfileComponent";

const ProfilePage = () => {
  return (
    <>
      <div
        className="flex justify-center h-full w-full bg-[#008DDA]"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="flex flex-col w-[90%] mx-3 my-3">
          <h1 className="text-3xl font-extrabold ms-2 mt-2">
            Profile<span className="font-extrabold text-white">Page</span>
          </h1>
          {/* Profile Component */}
          <ProfileComponent />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
