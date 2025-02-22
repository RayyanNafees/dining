import type { PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>dining</title>
        <link rel="stylesheet" href="https://unpkg.com/@glidejs/glide/dist/css/glide.core.min.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/rippleui@1.12.1/dist/css/styles.css"
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
