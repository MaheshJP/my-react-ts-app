import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import type { RegisterModuleType } from "../modules/RegisterModule";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterModuleType>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      conformPassword: "",
      phoneNumber: 0,
      userName: "",
    }
  });
  const submitRegisterForm = (data: RegisterModuleType) => {
    // Add your register API call here
    console.log("Form Submitted:", data);
    reset();
  }
  const goToLogin = () => {
    reset();
    navigate('/');
  };
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle>Register Page</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="login-form" onSubmit={handleSubmit(submitRegisterForm)}>
              <div className="m-2">
                <label className="inline-block w-50">User name</label>
                <input type="text" className="border-2" {...register("userName",{
                  required:"User name is required",
                  validate: value=> value.includes(" ") ? "User name should not contain spaces" : true
                  })} />
                {errors.userName && <p className="text-red-600 ml-2 text-sm text-right">{errors.userName?.message}</p>}
              </div>
              <div className="m-2">
                <label className="inline-block w-50">Email</label>
                <input type="email" className="border-2" {...register("email",{required:"Email is required"})} />
                {errors.email && <p className="text-red-600 ml-2 text-sm text-right">{errors.email?.message}</p>}
              </div>
              <div className="m-2">
                <label className="inline-block w-50">Phone number</label>
                <input type="text" className="border-2" {...register("phoneNumber",{
                  required:"Phone number is required",
                  validate: {
                    positive : value => !isNaN(Number(value)) || "Phone number must be a number",
                    minLength: value => value.toString().length >= 10 || "Phone number must be at least 10 digits",
                    noDecimal: value => !value.toString().includes(".") || "Phone number must not contain a decimal point",
                  }
                  
                  })} />
                {errors.phoneNumber && <p className="text-red-600 ml-2 text-sm text-right">{errors.phoneNumber?.message}</p>}
              </div>
              <div className="m-2">
                <label className="inline-block w-50">Enter Password</label>
                <input type="password" className="border-2" />
              </div>
              <div className="m-2">
                <label className="inline-block w-50">Conform Password</label>
                <input type="password" className="border-2" />
              </div>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-100">Register</Button>
                <div className="flex justify-center mt-4">
                  <a onClick={goToLogin} className="text-blue-600 hover:underline cursor-pointer">Already have an account? Login</a>
                </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Register;
