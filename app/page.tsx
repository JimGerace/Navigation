import NavLeft from "@/components/NavLeft";
import NavHeader from "@/components/NavHeader";
import NavRight from "@/components/NavRight";
import GoBack from "@/components/GoBack";
import "./page.scss";
import getNavLinks from "./link";

export const revalidate = 60;

export default async function IndexPage() {
  const navResource = await getNavLinks();
  const navResult = navResource.map((item) => {
    return {
      id: item.id,
      icon: item.icon,
      title: item.title,
    };
  });
  return (
    <div className="main_page">
      <GoBack />
      <div className="main_left">
        <NavLeft navResult={navResult} />
      </div>

      <div className="main_right">
        <NavHeader />
        <NavRight navResource={navResource} />
      </div>
    </div>
  );
}
