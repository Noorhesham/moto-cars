import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Product from "@/app/models/Product";
import connect from "@/app/utils/clientPromise";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "@/app/components/DataTable";
import { userColumns } from "./columns";
import User from "@/app/models/User";
import ModelCustom from "@/app/components/ModelCustom";
import { UserForm } from "./UserForm";
import { getTranslations } from "next-intl/server";

const Page = async ({ searchParams }: { searchParams: { page?: string } }) => {
  await connect();
  const t = await getTranslations("dashboard.users");
  const currentPage = parseInt(searchParams.page || "1", 10);
  const limit = 10;

  const data = await User.find({})
    .limit(limit)
    .skip((currentPage - 1) * limit)
    .lean();
  const dataObj = JSON.parse(JSON.stringify(data));
  const totalCount = (await Product.countDocuments({}).lean()) as number;
  const totalPages = Math.ceil(totalCount / limit);
  console.log(data);
  return (
    <MaxWidthWrapper className="flex px-4 flex-col mt-5">
      <div className="flex items-center gap-2">
        <ModelCustom
          content={<UserForm />}
          btn={<Button className="self-end">{t("addusers")}</Button>}
          title={t("addusers")}
        />
      </div>
      <DataTable columns={userColumns} data={dataObj} entity="User" page={currentPage} totalPages={totalPages} />
    </MaxWidthWrapper>
  );
};

export default Page;
