import type { Metadata } from "next";
import MbNewsAdminApp from "@/components/admin/MbNewsAdminApp";

export const metadata: Metadata = {
  title: "Admin MB News | MB Finance",
  description: "Painel administrativo para criar e organizar edicoes da MB News.",
};

export default function MbNewsAdminPage() {
  return <MbNewsAdminApp />;
}
