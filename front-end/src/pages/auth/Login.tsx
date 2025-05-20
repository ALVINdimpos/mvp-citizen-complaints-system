// CivicLink Auth Page – Styled Like Woodcraft Reference
import Button from "@/components/inputs/Button";
import Input from "@/components/inputs/Input";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "@/usecases/auth/auth.hooks";
import { useAppSelector } from "@/states/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user, token } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const { login, loginIsLoading } = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    login({ username: data.username, password: data.password });
  });

  useEffect(() => {
    if (user && token) navigate("/dashboard");
  }, [user, token, navigate]);

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#e0e0e0] to-[#c9d6ff] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block">
          <img
            src="../../../public/login.jpg"
            alt="Citizen Engagement"
            className="object-cover w-full h-full"
          />
        </div>
        <form
          onSubmit={onSubmit}
          className="p-8 flex flex-col justify-center gap-6"
        >
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-blue-800">CivicLink</h1>
            <p className="text-sm text-gray-500">
              Welcome to the Citizen Engagement System
            </p>
          </div>

          <fieldset className="flex flex-col gap-4">
            <Controller
              control={control}
              name="username"
              rules={{ required: "Username is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Email or Phone"
                  placeholder="Enter your email or phone number"
                  errorMessage={errors.username?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Password"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  suffixIcon={showPassword ? faEyeSlash : faEye}
                  suffixIconHandler={() => setShowPassword(!showPassword)}
                  errorMessage={errors.password?.message}
                />
              )}
            />
          </fieldset>

          <div className="flex justify-between items-center text-sm">
            <Link
              to="/auth/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            isLoading={loginIsLoading}
            className="bg-blue-800 text-white hover:bg-blue-900 w-full"
          >
            Sign In
          </Button>

          <div className="relative py-2 text-center text-sm text-gray-500">
            <span className="absolute inset-x-0 top-1/2 border-t border-gray-300" />
            <span className="relative bg-white px-2">or</span>
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-3 w-full border px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            <FontAwesomeIcon icon={faGoogle} />
            <span>Continue with Google</span>
          </button>

          <p className="text-sm text-center text-gray-600">
            New to CivicLink?{" "}
            <Link
              to="/auth/signup"
              className="text-blue-700 font-semibold hover:underline"
            >
              Create an Account
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
