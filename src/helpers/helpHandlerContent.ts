interface Error {
  error: boolean;
  message: string;
}

export const helpHandlerContent = async (
  path: string | null
): Promise<string | Error> => {
  if (!path)
    return {
      error: true,
      message: "URL Invalida",
    };

  try {
    const res: Response = await fetch(`/pages${path}.html`);
    if (!res.ok) throw new Error("URL Invalida");

    const html: string = await res.text();
    if (html.includes('<div id="root"></div>')) throw new Error("URL Invalida");

    return html;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        error: true,
        message: err.message,
      };
    }
    return {
      error: true,
      message: "Error Desconocido",
    };
  }
};
