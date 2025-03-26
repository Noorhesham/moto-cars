import { Suspense } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getRecentActivity, getStats, getTopProducts } from "@/app/actions/actions";
import { getTranslations } from "next-intl/server";
import { ShoppingBag, FileText, Users, TrendingUp, Clock, Palette, Star, ArrowDown, ArrowUp, User } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

// Stats Card Component
function StatsCard({ title, value, icon, description, trend = 0, t }) {
  const trendIsPositive = trend >= 0;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {trend !== 0 && (
          <div className={`flex items-center mt-2 text-xs ${trendIsPositive ? "text-green-500" : "text-red-500"}`}>
            {trendIsPositive ? <ArrowUp className="mr-1 h-3 w-3" /> : <ArrowDown className="mr-1 h-3 w-3" />}
            <span>
              {Math.abs(trend)}% {trendIsPositive ? t("increase") : t("decrease")}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Activity Item Component
function ActivityItem({ activity, t, locale }) {
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
    const timeAgo = formatDistanceToNow(new Date(activity.createdAt), {
      addSuffix: true,
    });

    // Replace "hours ago" and "days ago" with translations
    return timeAgo.replace("hours ago", t("time.hoursAgo")).replace("days ago", t("time.daysAgo"));
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

// Main Dashboard Page
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "dashboard" });

  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
  };
}

export default async function DashboardPage({ params: { locale } }) {
  // Get translations
  const t = await getTranslations({ locale, namespace: "dashboard" });

  // Fetch data
  const stats = await getStats();
  const activities = await getRecentActivity(locale);
  const topProducts = await getTopProducts();

  return (
    <div className="p-6 space-y-6" dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* Dashboard Header */}
      <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-muted-foreground">{t("overview")}</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title={t("productss")}
          value={stats.productsCount}
          icon={<ShoppingBag className="h-5 w-5" />}
          description={t("totalProducts")}
          trend={12}
          t={t}
        />

        <StatsCard
          title={t("blogs")}
          value={stats.blogsCount}
          icon={<FileText className="h-5 w-5" />}
          description={t("totalBlogs")}
          trend={8}
          t={t}
        />

        <StatsCard
          title={t("userss")}
          value={stats.usersCount}
          icon={<Users className="h-5 w-5" />}
          description={t("totalUsers")}
          trend={24}
          t={t}
        />

        <StatsCard
          title={t("features")}
          value={stats.featuresCount}
          icon={<Star className="h-5 w-5" />}
          description={t("totalFeatures")}
          trend={5}
          t={t}
        />
      </div>

      {/* Recent Activity and Top Products */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>{t("recentActivity")}</CardTitle>
            <CardDescription>{t("recentActivityDescription")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {activities.map((activity, index) => (
                <ActivityItem key={index} activity={activity} t={t} locale={locale} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("topProducts")}</CardTitle>
            <CardDescription>{t("topProductsDescription")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => {
                const name = typeof product.name === "object" ? product.name[locale] : product.name;
                const percentage = Math.round((product.totalCount / (topProducts[0]?.totalCount || 1)) * 100);

                return (
                  <div key={index} className="flex items-center">
                    <div className="w-full">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{name}</span>
                        <span className="text-sm font-medium">{percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>
                          {t("features")}: {product.featuresCount}
                        </span>
                        <span>
                          {t("colors")}: {product.colorsCount}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("colorDistribution")}</CardTitle>
            <Palette className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                </div>
                <span className="text-sm font-medium text-gray-700 ml-2">45%</span>
              </div>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-red-600 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                </div>
                <span className="text-sm font-medium text-gray-700 ml-2">30%</span>
              </div>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                </div>
                <span className="text-sm font-medium text-gray-700 ml-2">25%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("contentDistribution")}</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">{t("contentDistributionDescription")}</p>
            <div className="mt-4 h-[60px]">
              <div className="flex h-full items-end gap-2">
                <div className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-md w-full h-[20%]"></div>
                <div className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-md w-full h-[40%]"></div>
                <div className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-md w-full h-[70%]"></div>
                <div className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-md w-full h-[45%]"></div>
                <div className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-md w-full h-[30%]"></div>
                <div className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-md w-full h-[60%]"></div>
                <div className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-md w-full h-[90%]"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t("activityTimeline")}</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <ShoppingBag className="h-4 w-4 text-primary" />
                  <span className="absolute right-0 top-0 flex h-2 w-2 rounded-full bg-primary"></span>
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{t("newProductAdded")}</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{t("newBlogPublished")}</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{t("newUserRegistered")}</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
