import { formatDistanceToNow } from "date-fns";
import { ar, enUS } from "date-fns/locale";
import { useLocale } from "next-intl";
import { ShoppingBag, FileText, User } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getRecentActivity } from "../actions/actions";

export default async function RecentActivity() {
  const activities = await getRecentActivity();

  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <ActivityItem key={index} activity={activity} />
      ))}
    </div>
  );
}

async function ActivityItem({ activity }: { activity: any }) {
  const t = await getTranslations("dashboard");
  const locale = useLocale();

  const getIcon = () => {
    switch (activity.type) {
      case "product":
        return <ShoppingBag className="h-5 w-5" />;
      case "blog":
        return <FileText className="h-5 w-5" />;
      case "user":
        return <User className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getTitle = () => {
    const title = typeof activity.title === "object" ? activity.title[locale] : activity.title;

    switch (activity.type) {
      case "product":
        return t("productAdded", { name: title });
      case "blog":
        return t("blogPublished", { title: title });
      case "user":
        return t("userRegistered", { name: title });
      default:
        return "";
    }
  };

  const getTimeAgo = () => {
    return formatDistanceToNow(new Date(activity.createdAt), {
      addSuffix: true,
      locale: locale === "ar" ? ar : enUS,
    });
  };

  return (
    <div className="flex items-center">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full ${
          activity.type === "product" ? "bg-blue-100" : activity.type === "blog" ? "bg-green-100" : "bg-purple-100"
        }`}
      >
        {getIcon()}
      </div>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{getTitle()}</p>
        <p className="text-sm text-muted-foreground">{getTimeAgo()}</p>
      </div>
      <div className="ml-auto font-medium">
        {activity.type === "product" && (
          <a href={`/${locale}/dashboard/products/${activity.slug}`} className="text-blue-600 hover:underline text-sm">
            {t("view")}
          </a>
        )}
        {activity.type === "blog" && (
          <a href={`/${locale}/dashboard/blogs/${activity.slug}`} className="text-green-600 hover:underline text-sm">
            {t("view")}
          </a>
        )}
        {activity.type === "user" && (
          <a href={`/${locale}/dashboard/users`} className="text-purple-600 hover:underline text-sm">
            {t("view")}
          </a>
        )}
      </div>
    </div>
  );
}
