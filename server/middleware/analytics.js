import { PostHog } from "posthog-node";
import {  useRuntimeConfig, defineEventHandler } from '#imports';

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const cookieString = event.node.req.headers.cookie || "";
  const cookieName = `ph_${runtimeConfig.public.posthogPublicKey}_posthog`;
  const cookieMatch = cookieString.match(new RegExp(cookieName + "=([^;]+)"));

  let distinctId;
  if (cookieMatch) {
    const parsedValue = JSON.parse(decodeURIComponent(cookieMatch[1]));
    distinctId = parsedValue.distinct_id;

    const posthog = new PostHog(
      runtimeConfig.public.posthogPublicKey,
      {
        host: runtimeConfig.public.posthog.host,
      },
    );
    posthog.capture({
      distinctId: distinctId,
      event: "in_the_middleware",
    });
    await posthog.shutdown();
  }
});

