import LoginForm from "../../Components/FormLogin.js";

const LoginPage = () => {
  return (
    <>
      <div
        className="flex justify-center items-center h-screen w-full bg-[#008DDA]"
        style={{ fontFamily: "Poppins" }}
      >
        {/* Form Login */}
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
