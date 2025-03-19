import { notFound } from "next/navigation";
import Image from "next/image";
import connect from "@/app/utils/clientPromise";
import Blog from "@/app/models/Blog";
import HeroBanner from "@/app/components/HeroCover";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { VideoThumbnailModal } from "@/app/components/VideoModel";
import { BrandAmbassadors } from "@/app/components/Brand";
import styles from "../../../../blog.module.css"; // Import as a module

interface BlogPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

async function getBlog(slug: string) {
  await connect();
  const blog = await Blog.findOne({ slug }).lean();
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
    case "video":
      return renderVideoSection(section);
    case "slider":
      return renderSliderSection(section);
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
  const imageUrl = typeof section.content === "object" && section.content.url ? section.content.url : section.content;

  const caption = typeof section.content === "object" && section.content.caption;

  return (
    <div className="relative">
      <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
        <Image src={imageUrl || "/placeholder.svg"} alt={caption || "Blog image"} fill className="object-cover" />
      </div>
      {caption && <p className="mt-2 text-sm text-gray-500 italic">{caption}</p>}
    </div>
  );
}

function renderVideoSection(section: any) {
  // Handle both simple URL and object with thumbnail
  const videoUrl = typeof section.content === "object" && section.content.url ? section.content.url : section.content;

  const thumbnail =
    typeof section.content === "object" && section.content.thumbnail
      ? section.content.thumbnail
      : "/video-placeholder.webp";

  return <VideoThumbnailModal thumbnail={thumbnail} videoUrl={videoUrl} />;
}

function renderSliderSection(section: any) {
  // Handle array of images for slider
  const images = Array.isArray(section.content) ? section.content : [section.content];

  const ambassadors = images.map((image: string | { image: string }) => {
    if (typeof image === "string") {
      return { image };
    }
    return image;
  });

  return <BrandAmbassadors imgonly ambassadors={ambassadors} />;
}
