import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { ShoppingBag, FileText, Users, TrendingUp, Clock, Palette, Star } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import StatsCard from "./stats-card";
import { getStats } from "../actions/actions";
import RecentActivity from "./recent-activity";
import TopProducts from "./top-products";
import { getTranslations } from "next-intl/server";

// Client components for translations
function DashboardTitle() {
  const t = useTranslations("dashboard");
  return <>{t("title")}</>;
}

function DashboardDescription() {
  const t = useTranslations("dashboard");
  return <>{t("overview")}</>;
}

function RecentActivityTitle() {
  const t = useTranslations("dashboard");
  return <>{t("recentActivity")}</>;
}

function RecentActivityDescription() {
  const t = useTranslations("dashboard");
  return <>{t("recentActivityDescription")}</>;
}

function TopProductsTitle() {
  const t = useTranslations("dashboard");
  return <>{t("topProducts")}</>;
}

function TopProductsDescription() {
  const t = useTranslations("dashboard");
  return <>{t("topProductsDescription")}</>;
}

function ColorDistributionTitle() {
  const t = useTranslations("dashboard");
  return <>{t("colorDistribution")}</>;
}

function ContentDistributionTitle() {
  const t = useTranslations("dashboard");
  return <>{t("contentDistribution")}</>;
}

function ContentDistributionDescription() {
  const t = useTranslations("dashboard");
  return <>{t("contentDistributionDescription")}</>;
}

function ActivityTimelineTitle() {
  const t = useTranslations("dashboard");
  return <>{t("activityTimeline")}</>;
}

function NewProductAdded() {
  const t = useTranslations("dashboard");
  return <>{t("newProductAdded")}</>;
}

function NewBlogPublished() {
  const t = useTranslations("dashboard");
  return <>{t("newBlogPublished")}</>;
}

function NewUserRegistered() {
  const t = useTranslations("dashboard");
  return <>{t("newUserRegistered")}</>;
}
