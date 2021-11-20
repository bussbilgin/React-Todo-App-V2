import "./Header.scss";
import locale from "../../locale/app";

export default function Header() {
  return (
    <div>
      <h1>{locale.pageTitle}</h1>
    </div>
  );
}
