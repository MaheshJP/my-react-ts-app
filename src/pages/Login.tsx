import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  type LoginFormData = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    formState:{errors,isValid,isSubmitting}
  } = useForm<LoginFormData>(
    {
      mode: "onSubmit",
      defaultValues: {
        email: "",
        password: "",
      }
    }
  );

const submitLoginForm = (data: LoginFormData) => {
  console.log("Form Submitted:", data);
  // Add your login API call here
  navigate('/dashboard');
  reset();
};


  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle>Login Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(submitLoginForm)} className="login-form">
              <div className="m-2">
                <label className="inline-block w-25">Email</label>
                <input type="email" className="border-2" {...register("email",{required:"Email is required"})} />
                {errors.email && <p className="text-red-600 ml-2 text-sm text-right">{errors.email.message}</p>}
              </div>
              <div className="m-2">
                <label className="inline-block w-25">Password</label>
                <input type="password" className="border-2" {...register("password",{required:"Password is required"})} />
                {errors.password && <p className="text-red-600 ml-2 text-sm text-right">{errors.password.message}</p>}
              </div>
              <div className="flex justify-end">
                <Button type="submit">Login</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;
