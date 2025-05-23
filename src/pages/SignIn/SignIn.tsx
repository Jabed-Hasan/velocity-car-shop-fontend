import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useSignInMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import LoginBG from "@/assets/login/login.jpeg";
import VeloV from "@/assets/velocity-logo.png";
import { useState } from "react";

type SignInFormData = {
  email: string;
  password: string;
};

// Define type for backend error response
type ErrorData = {
  message?: string;
  status?: boolean;
  error?: string;
};

export default function SignIn() {
  const navigate = useNavigate();
  const [SignIn] = useSignInMutation();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignInFormData>();

  const onSubmit = async (data: SignInFormData) => {
    // Set loading state to true
    setIsLoading(true);

    // Call your API or auth logic here
    const userData = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await SignIn(userData);

      // Check if response has an error
      if ("error" in response) {
        // Handle error response
        const errorResponse = response.error;
        if (errorResponse && "data" in errorResponse && errorResponse.data) {
          // Try to extract message from error data
          const errorData = errorResponse.data as ErrorData;
          if (errorData.message) {
            toast.error(errorData.message);
          } else {
            toast.error("Login failed. Please try again.");
          }
        } else {
          toast.error("Login failed. Please try again.");
        }
        setIsLoading(false);
        return;
      }

      // Handle successful response
      if (response.data) {
        const { data: responseData } = response;
        // Check if response has status field
        if (responseData.status) {
          // Save token to localStorage if available
          if (responseData.data && responseData.data.token) {
            localStorage.setItem("token", responseData.data.token);
          }

          // Pass the entire response to setUser
          dispatch(setUser(responseData));

          // Show success message
          if (responseData.message) {
            toast.success(responseData.message, { duration: 1000 });
          } else {
            toast.success("Login successful", { duration: 1000 });
          }

          navigate("/");
        } else if (responseData.message) {
          // Show error message from response
          toast.error(responseData.message);
        } else {
          toast.error("Login failed. Please check your credentials.");
        }
      }
    } catch (error: unknown) {
      console.error("Login error:", error);

      // Generic error handling as fallback
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      // Set loading state to false regardless of outcome
      setIsLoading(false);
    }
  };

  // Test login credentials handler
  const handleTestLogin = (role: "admin" | "user") => {
    if (role === "admin") {
      setValue("email", "jabed8441@gmail.com");
      setValue("password", "admin123");
    } else {
      setValue("email", "h@gmail.com");
      setValue("password", "user123");
    }
    // Allow the form to be submitted after setting values
    setTimeout(() => {
      const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (submitButton) submitButton.click();
    }, 100);
  };

  return (
    <div className="flex items-center justify-center px-4">
      <div className="my-8 grid w-full max-w-[900px] grid-cols-1 overflow-hidden rounded-xl border-none shadow-md md:grid-cols-2">
        <div
          style={{
            backgroundImage: `url(${LoginBG})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-velo-black/50">
            <div className="relative flex h-[150px] w-full items-center px-1 sm:h-[200px] md:h-[650px]">
              <img
                className="absolute top-3 left-3 w-5 md:top-6 md:left-6 md:w-10"
                src={VeloV}
                alt=""
              />
              <h3 className="text-velo-white px-3 text-2xl font-bold md:px-6 md:pb-20 md:text-5xl md:leading-[70px] lg:text-6xl">
                Welcome
                <br />
                Back!
              </h3>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col justify-center gap-4 p-5 md:gap-8 md:p-10">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Sign In
          </h1>
          <p className="text-gray-400 md:text-[17px]">
            Welcome Back! Please Sign In to your Account
          </p>
          <div className="w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 md:space-y-7"
            >
              {" "}
              <div className="space-y-2">
                <Input
                  id="email"
                  placeholder="Enter your email address"
                  className="border-velo-black/30 h-10 rounded-none border-0 border-b shadow-none focus:outline-none focus-visible:ring-0 focus-visible:outline-none md:text-lg"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  className="border-velo-black/30 h-10 rounded-none border-0 border-b shadow-none focus:outline-none focus-visible:ring-0 focus-visible:outline-none md:text-lg"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-velo-red text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="bg-velo-red hover:bg-velo-maroon h-11 w-full md:text-lg"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </div>

          {/* Test login buttons */}
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-center text-sm font-medium">Test Login As:</p>
            <div className="flex gap-2 justify-center">
              <Button 
                onClick={() => handleTestLogin("admin")}
                className="bg-velo-black hover:bg-black text-sm h-9 px-3"
                type="button"
              >
                Admin
              </Button>
              <Button 
                onClick={() => handleTestLogin("user")}
                className="bg-velo-maroon hover:bg-red-900 text-sm h-9 px-3"
                type="button"
              >
                User
              </Button>
            </div>
          </div>

          <p className="text-muted-foreground text-center text-sm md:text-base">
            Don&apos;t have an account?{" "}
            <Link
              to={"/register"}
              className="text-velo-red hover:text-velo-maroon font-semibold underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
