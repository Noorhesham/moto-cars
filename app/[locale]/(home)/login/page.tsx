import React from "react";
import connect from "@/app/utils/clientPromise";
import LoginPage from "@/app/components/forms/LoginForm";
import User from "@/app/models/User";

const page = async () => {
  await connect();
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default page;
