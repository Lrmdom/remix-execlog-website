import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
ok done
     <img
  src="https://storage.googleapis.com/strapi_images_execlog_aluminium/logos_azul_7354a0aae1/logos_azul_7354a0aae1.webp"
width="500" height="300"  alt="Execlog - Digital Transformation Services, Lda"/>
    </div>
  );
}
