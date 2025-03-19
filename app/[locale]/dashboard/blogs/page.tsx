import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Product from "@/app/models/Product";
import connect from "@/app/utils/clientPromise";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "@/app/components/DataTable";
import { blogColumns } from "./columns";
import Blog from "@/app/models/Blog";

const Page = async ({ searchParams }: { searchParams: { page?: string } }) => {
  await connect();

  const currentPage = parseInt(searchParams.page || "1", 10);
  const limit = 10;

  const data = await Blog.find({})
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
        <Button className="self-end">
          <Link href="/dashboard/products/create" as="/en/dashboard/products/create">
            Add Blog
          </Link>
        </Button>
      </div>
      <DataTable columns={blogColumns} data={dataObj} entity="Blog" page={currentPage} totalPages={totalPages} />
    </MaxWidthWrapper>
  );
};

export default Page;
