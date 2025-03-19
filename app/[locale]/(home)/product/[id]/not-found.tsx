import { SkewedButton } from "@/app/components/ButtonCustom";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Link from "next/link";

export default function ProductNotFound() {
  return (
    <MaxWidthWrapper className="py-32 text-center">
      <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
      <p className="text-lg mb-8">The product you're looking for doesn't exist or has been removed.</p>
      <Link href="/products">
        <SkewedButton>VIEW ALL PRODUCTS</SkewedButton>
      </Link>
    </MaxWidthWrapper>
  );
}
