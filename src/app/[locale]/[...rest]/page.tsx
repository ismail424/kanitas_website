import { notFound } from "next/navigation";

/** Any path no page claims: the 404 inside the site's layout and language. */
export default function CatchAll() {
  notFound();
}
