import type React from "react";

import { ArrowDown, ArrowUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTranslations } from "next-intl/server";

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  description: string;
  trend?: number;
}

export default async function StatsCard({ title, value, icon, description, trend = 0 }: StatsCardProps) {
  const t = await getTranslations();
  const trendIsPositive = trend >= 0;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{t(title)}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground">{t(description)}</p>
        {trend !== 0 && (
          <div className={`flex items-center mt-2 text-xs ${trendIsPositive ? "text-green-500" : "text-red-500"}`}>
            {trendIsPositive ? <ArrowUp className="mr-1 h-3 w-3" /> : <ArrowDown className="mr-1 h-3 w-3" />}
            <span>
              {Math.abs(trend)}% {t(trendIsPositive ? "dashboard.increase" : "dashboard.decrease")}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
