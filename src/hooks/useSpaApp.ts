import { useEffect, useState } from "react";
import { helpHandlerContent } from "../helpers/helpHandlerContent";

interface Error {
  error: boolean;
  message: string;
}

const initialtPath: string =
  window.location.pathname === "/" ? "/home" : window.location.pathname;

export const useSpaApp = (): {
  setPath: React.Dispatch<React.SetStateAction<string | null>>;
  html: string;
  err: string;
} => {
  const [path, setPath] = useState<string | null>(initialtPath);
  const [html, setHtml] = useState<string>("");
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    helpHandlerContent(path).then((res: string | Error) => {
      if (typeof res != "string" && res.error) {
        setErr(res.message);
        setHtml("");
      } else if (typeof res === "string") {
        setHtml(res);
        setErr("");
      }
    });
  }, [path]);

  useEffect(() => {
    const onPopState = (): void => {
      const newPath: string =
        window.location.pathname === "/" ? "/home" : window.location.pathname;

      setPath(newPath);
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  return { setPath, html, err };
};
