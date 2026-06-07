import { redirect } from "next/navigation";
import { PRIMARY_SERVICE_HREF } from "@/lib/services-page-data";

/** Legacy /services URL — individual service pages only. */
export default function ServicesIndexPage() {
  redirect(PRIMARY_SERVICE_HREF);
}
