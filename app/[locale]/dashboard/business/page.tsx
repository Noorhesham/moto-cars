import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import connect from "@/app/utils/clientPromise";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "@/app/components/DataTable";
import Business from "@/app/models/Business";
import ModelCustom from "@/app/components/ModelCustom";
import { BusinessCaseForm } from "./create/BusinessForm";
import { businessCaseColumns } from "./columns";

const Page = async ({ searchParams }: { searchParams: { page?: string } }) => {
  await connect();

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
    <MaxWidthWrapper className="flex px-4 flex-col mt-5">
      <div className="flex items-center gap-2">
        <ModelCustom
          btn={<Button className="self-end">Add Bussiness case</Button>}
          title="Add Bussiness case"
          content={<BusinessCaseForm />}
        />
      </div>
      <DataTable
        entity="Business"
        columns={businessCaseColumns}
        data={dataObj}
        page={currentPage}
        totalPages={totalPages}
      />
    </MaxWidthWrapper>
  );
};

export default Page;
