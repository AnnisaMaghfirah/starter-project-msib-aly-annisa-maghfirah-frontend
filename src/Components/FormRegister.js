import { Link } from "react-router-dom";
import google from "../assets/google.png";
import swal from "sweetalert"; // mengimport modul swal (sweetAlert) untuk menampilkan pesan notifikasi

const FormRegister = () => {
  const maintenanceButton = (e) => {
    e.preventDefault();
    swal("Oops!", "Website sedang dalam pengembangan!"); // memanggil swal untuk menampilkan pesan notifikasi
  };
  return (
    <div className="flex w-[300px] justify-center items-center flex-col h-[470px] sm:w-[420px] bg-[#fff]">
      {/* Input Form */}
      <div className="flex w-[240px] flex-col justify-center items-center sm:w-[330px] h-[440px]">
        <h1 className="text-2xl font-bold mb-3">Register</h1>
        {/* Username */}
        <div className="flex flex-col mt-4 w-full">
          <div className="text-start text-sm font-bold">Username</div>
          <input
            type="text"
            name="username"
            className="mt-1 p-2 w-full rounded-lg text-black border-solid border-2 border-gray-400"
            placeholder="masukkan username anda"
          />
        </div>
        {/* Email */}
        <div className="flex flex-col mt-4 w-full">
          <div className="text-start text-sm font-bold">Email</div>
          <input
            type="email"
            name="email"
            className="mt-1 p-2 w-full rounded-lg text-black border-solid border-2 border-gray-400"
            placeholder="masukkan email anda"
          />
        </div>
        {/* Password */}
        <div className="flex flex-col mt-4 w-full">
          <div className="text-start text-sm font-bold">Password</div>
          <input
            type="password"
            name="password"
            className="mt-1 p-2 w-full rounded-lg text-black border-solid border-2 border-gray-400"
            placeholder="masukkan password anda"
          />
        </div>
        {/* Button */}
        <div className="flex flex-col sm:flex-row mt-5 w-full justify-center">
          <button
            className="bg-[#008DDA] text-white font-bold rounded-xl w-full sm:w-[130px] h-[40px] sm:mx-3 mb-3"
            type="submit"
            onClick={maintenanceButton}
          >
            Register
          </button>
          <Link to="/">
            <button
              className="bg-[#EAEAEA] text-[#676767] font-bold rounded-xl w-full sm:w-[130px] h-[40px] sm:mx-3"
              type="submit"
            >
              Login
            </button>
          </Link>
        </div>
        {/* Google */}
        <div className="flex mt-5 w-full justify-center items-center">
          <Link
            to="/"
            className="flex flex-row justify-center items-center text-sm font-bold"
            onClick={maintenanceButton}
            style={{
              textDecoration: "underline",
            }}
          >
            <p className="mr-3">Register With Google</p>
            <img className="w-[15px] h-[15px]" src={google} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
