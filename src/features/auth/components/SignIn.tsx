import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SignInFlowType } from "@/features/auth/types";

type SignInPropsType = {
  setState: (value: SignInFlowType) => void;
};

const SignIn = ({ setState }: SignInPropsType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Вход в систему</CardTitle>
        <CardDescription>Введите свой Email и Password</CardDescription>
      </CardHeader>
      <CardContent className="px-0 pb-0 space-y-5">
        <form className="space-y-2.5">
          <Input
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            type="email"
            required
            disabled={false}
            placeholder="Ведите Email"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            type="password"
            required
            disabled={false}
            placeholder="Введите Password"
          />
          <Button className="w-full" type="submit" disabled={false}>
            Войти
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2">
          <Button
            className="w-full relative"
            variant="outline"
            disabled={false}
          >
            Войти через Google
            <FcGoogle className="absolute top-3 left-2.5" />
          </Button>
          <Button
            className="w-full relative"
            variant="outline"
            disabled={false}
          >
            Войти через GitHun
            <FaGithub className="absolute top-3 left-2.5" />
          </Button>
        </div>

        <p className="text-xs">
          Еще не зарегистрированы ?{" "}
          <span
            className="text-sky-700 hover:underline cursor-pointer"
            onClick={() => setState("SignUp")}
          >
            Зарегистрироваться
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignIn;
