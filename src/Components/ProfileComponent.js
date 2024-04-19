import profile from "../assets/profile.png";

const ProfileComponent = () => {
  return (
    <div className="flex flex-col w-full items-center my-3">
      <div className="flex flex-col w-[90%] bg-[#fff] rounded-3xl py-4 px-4 justify-center items-center">
        <h2 className="text-center w-[90%] font-extrabold text-2xl mt-1">
          Halo, Selamat Datang!
        </h2>
        <p className="text-center w-[90%] mt-4 text-lg">
          "Saya Annisa Maghfirah, saya senang Anda berkunjung ke profile saya.
          Di website ini Anda akan mendapatkan informasi mengenai saya."
        </p>
        <div className="flex flex-col sm:flex-row w-[90%] mt-4 justify-between">
          <div className="flex justify-center items-center sm:w-[60%] bg-[#008DDA] rounded-3xl">
            <div className="flex w-full text-white text-sm sm:text-lg justify-center items-center p-4">
              <table>
                <tr>
                  <td>Nama</td>
                  <td>: Annisa Maghfirah</td>
                </tr>
                <tr>
                  <td>Program Studi &nbsp; &nbsp;</td>
                  <td>: Teknologi Informasi</td>
                </tr>
                <tr>
                  <td>Kampus</td>
                  <td>: Universitas Lambung Mangkurat</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td>: Kalimantan Selatan</td>
                </tr>
                <tr>
                  <td>Hobi</td>
                  <td>: Travelling</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="flex sm:w-[37%] mt-3 sm:mt-0">
            <img
              className="w-[100%] h-[100%] rounded-3xl"
              src={profile}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
