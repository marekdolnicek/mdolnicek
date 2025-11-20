export default {
  async fetch(request: Request, env: Env) {
    const assetResponse = await env.ASSETS.fetch(request);

    if (assetResponse.status !== 404) {
      return assetResponse;
    }

    if (request.method === "GET") {
      const acceptsHTML = request.headers.get("accept")?.includes("text/html");

      if (acceptsHTML) {
        const url = new URL(request.url);
        url.pathname = "/index.html";
        const fallbackRequest = new Request(url.toString(), request);
        const fallbackResponse = await env.ASSETS.fetch(fallbackRequest);

        if (fallbackResponse.status !== 404) {
          return fallbackResponse;
        }
      }
    }

    return new Response("Not Found", { status: 404 });
  },
};

interface Env {
  ASSETS: AssetFetcher;
}

interface AssetFetcher {
  fetch(request: Request): Promise<Response>;
}
