import { DataTable } from "@/app/components/DataTable";
import { Button } from "@/components/ui/button";
import ModelCustom from "@/app/components/ModelCustom";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Business from "@/app/models/Business";
import { BusinessCaseForm } from "./create/BusinessForm";
import { businessCaseColumns } from "./columns";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";

export default async function BusinessPage({ searchParams }) {
  const t = await getTranslations("dashboard.business");
  const currentPage = parseInt(searchParams.page || "1", 10);
  const limit = 10;

  const data = await Business.find({})
    .limit(limit)
    .skip((currentPage - 1) * limit)
    .lean();
  const dataObj = JSON.parse(JSON.stringify(data));
  const totalCount = (await Business.countDocuments({}).lean()) as number;
  const totalPages = Math.ceil(totalCount / limit);
  console.log(data);
  return (
    <MaxWidthWrapper className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <ModelCustom btn={<Button>Add Business</Button>} title="Add Business" content={<BusinessCaseForm />} />
      </div>
      <DataTable columns={businessCaseColumns} data={dataObj} page={currentPage} totalPages={totalPages} />
    </MaxWidthWrapper>
  );
}
