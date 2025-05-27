import "../styles/Content.css";

interface ContentProps {
  html: string;
}

export const Content = ({ html }: ContentProps) => {
  return (
    <div
      className="content"
      id="content"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
};
