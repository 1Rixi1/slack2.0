import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { SignInFlowType } from "@/features/auth/types";

type SignUpPropsType = {
  setState: (value: SignInFlowType) => void;
};

const SignUp = ({ setState }: SignUpPropsType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Регистрация</CardTitle>

        <CardDescription>Введите свой Email и Password</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            type="email"
            required
            placeholder="Введите Email"
            disabled={false}
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            type="password"
            required
            placeholder="Введите Password"
            disabled={false}
          />{" "}
          <Input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
            type="password"
            required
            placeholder="Подтвердите Password"
            disabled={false}
          />
          <Button className="w-full" type="submit" disabled={false}>
            Зарегистрироваться
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button className="w-full relative" variant="outline">
            Войти через Google
            <FcGoogle className="absolute top-3 left-2.5" />
          </Button>
          <Button className="w-full relative" variant="outline">
            Войти через GitHub
            <FaGithub className="absolute top-3 left-2.5" />
          </Button>
        </div>
        <p className="text-xs">
          Уже зарегистрированы ?{" "}
          <span
            className="text-sky-700 hover:underline cursor-pointer"
            onClick={() => setState("SignIn")}
          >
            Войти
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUp;
