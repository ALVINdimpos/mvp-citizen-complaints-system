// CivicLink Signup Page – Styled Like Login
import Button from "@/components/inputs/Button";
import Input from "@/components/inputs/Input";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignup } from "@/usecases/auth/auth.hooks";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup, signupIsLoading } = useSignup();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = handleSubmit((data) => {
    signup({
      username: data.username,
      password: data.password,
      phoneNumber: data.phoneNumber || "",
    });
  });

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#e0e0e0] to-[#c9d6ff] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block">
          <img
            src="../../../public/login.jpg"
            alt="Signup Illustration"
            className="object-cover w-full h-full"
          />
        </div>
        <form
          onSubmit={onSubmit}
          className="p-8 flex flex-col justify-center gap-6"
        >
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-blue-800">
              Create Account
            </h1>
            <p className="text-sm text-gray-500">
              Sign up to access the Citizen Engagement System
            </p>
          </div>

          <fieldset className="flex flex-col gap-4">
            <Controller
              control={control}
              name="username"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Enter a valid email address",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Email"
                  placeholder="you@example.com"
                  errorMessage={errors.username?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="phoneNumber"
              rules={{
                pattern: {
                  value: /^\+?[1-9]\d{1,14}$/,
                  message: "Invalid phone number",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Phone Number (optional)"
                  placeholder="+250781234567"
                  errorMessage={errors.phoneNumber?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{
                required: "Password is required",
                minLength: { value: 8, message: "Min 8 characters" },
              }}
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

            <Controller
              control={control}
              name="confirmPassword"
              rules={{
                required: "Confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Confirm Password"
                  placeholder="••••••••"
                  type={showConfirmPassword ? "text" : "password"}
                  suffixIcon={showConfirmPassword ? faEyeSlash : faEye}
                  suffixIconHandler={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  errorMessage={errors.confirmPassword?.message}
                />
              )}
            />
          </fieldset>

          <Button
            type="submit"
            isLoading={signupIsLoading}
            className="bg-blue-800 text-white hover:bg-blue-900 w-full"
          >
            Create Account
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
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-blue-700 font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Signup;
