import { useSpaApp } from "../hooks/useSpaApp";
import { Content } from "./Content";
import { ContentError } from "./ContentError";
import { Header } from "./Header";

export const SpaApp = () => {
  const { setPath, html, err } = useSpaApp();
  return (
    <>
      <Header setPath={setPath} />
      {err && <ContentError err={err} />}
      {html && <Content html={html} />}
    </>
  );
};
