import { notFound } from "next/navigation";
import Image from "next/image";
import connect from "@/app/utils/clientPromise";
import HeroBanner from "@/app/components/HeroCover";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import styles from "../../../../blog.module.css"; // Import as a module
import Business from "@/app/models/Business";

interface BlogPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

async function getBlog(slug: string) {
  await connect();
  const blog = await Business.findOne({ slug }).lean();
  if (!blog) {
    return null;
  }

  // Convert Mongoose document to plain object and handle _id
  return JSON.parse(JSON.stringify(blog));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlog(params.id);
  if (!blog) {
    notFound();
  }

  const locale = params.locale || "en";
  console.log(blog.sections);
  return (
    <main className={`${styles.blogPage} blogPage`}>
      {/* Hero Banner */}
      <HeroBanner title={blog.title[locale]} src={blog.backgroundImage} />

      {/* Blog Content Sections */}
      <MaxWidthWrapper className="py-12">
        <div className="space-y-16">
          {blog.sections.map((section: any, index: number) => (
            <div key={index} className="blog-section">
              {renderSection(section, locale, index)}
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </main>
  );
}

function renderSection(section: any, locale: string, index: number) {
  switch (section.contentType) {
    case "text":
      return renderTextSection(section, locale);
    case "photo":
      return renderPhotoSection(section);

    default:
      return <div>Unknown section type</div>;
  }
}

function renderTextSection(section: any, locale: string) {
  // Handle both bilingual and single content formats
  const content =
    typeof section.content === "object" && section.content[locale] ? section.content[locale] : section.content;

  return (
    <div className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

function renderPhotoSection(section: any) {
  // Handle both single image and image with caption
  const imageUrl = section.content;

  const caption = typeof section.content === "object" && section.content.caption;

  return (
    <div className=" flex items-center lg:flex-nowrap lg:gap-20 flex-wrap relative">
      {section.content.map((item: any, index: number) => (
        <div key={index} className="relative h-[400px] aspect-video w-full overflow-hidden rounded-lg">
          <Image src={item || "/placeholder.svg"} alt={item || "Blog image"} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
