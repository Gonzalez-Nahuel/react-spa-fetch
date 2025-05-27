import "../styles/ContentError.css";

interface ContentErrorProps {
  err: string;
}

export const ContentError = ({ err }: ContentErrorProps) => {
  return (
    <div className="content-error">
      <p>{err}</p>
    </div>
  );
};
