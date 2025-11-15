import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import type { RegisterModuleType } from "../modules/RegisterModule";
const Register = () => {
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
                <input type="text" className="border-2" {...register("userName",{required:"User name is required"})} />
                {errors.userName && <p className="text-red-600 ml-2 text-sm text-right">{errors.userName?.message}</p>}
              </div>
              <div className="m-2">
                <label className="inline-block w-50">Email</label>
                <input type="email" className="border-2" {...register("email",{required:"Email is required"})} />
                {errors.email && <p className="text-red-600 ml-2 text-sm text-right">{errors.email?.message}</p>}
              </div>
              <div className="m-2">
                <label className="inline-block w-50">Phone number</label>
                <input type="text" className="border-2" />
              </div>
              <div className="m-2">
                <label className="inline-block w-50">Enter Password</label>
                <input type="password" className="border-2" />
              </div>
              <div className="m-2">
                <label className="inline-block w-50">Conform Password</label>
                <input type="password" className="border-2" />
              </div>
              <div className="flex justify-end">
                <Button type="submit">Register</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Register;
