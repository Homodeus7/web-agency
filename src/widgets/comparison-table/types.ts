import type { ReactNode } from "react";

export type MetricStatus = "danger" | "warning" | "success";
export type MetricType = "bar" | "status" | "text";

export interface MetricValue {
  value: number | string;
  type: MetricType;
  status?: MetricStatus;
  text?: string;
}

export interface Metric {
  id: string;
  label: string;
  icon: ReactNode;
  webflow: MetricValue;
  wordpress: MetricValue;
  nextjs: MetricValue;
}

export type Platform = "webflow" | "wordpress" | "nextjs";
