import { ReactNode } from "react";

export interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant: "primary" | "secondary";
}

export interface TransformationStepProps {
  number: string;
  title: string;
  description: string;
  bgColor: string;
}
