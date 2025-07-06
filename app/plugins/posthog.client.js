import { defineNuxtPlugin, useRuntimeConfig } from '#imports';

import posthog from 'posthog-js';
export default defineNuxtPlugin((nuxtApp) => {
	const runtimeConfig = useRuntimeConfig();
	if(!nuxtApp.$posthog){	
	const posthogClient = posthog.init(runtimeConfig.public.posthogPublicKey, {
		api_host: runtimeConfig.public.posthogHost,
		capture_pageview:false	
	});

	const router = useRouter();
	router.afterEach((to)=>{
		nextTick(()=>{
			posthog.capture('$pageview', {
				current_url: to.fullPath,
			});
		})
	})

	return {
		provide: {
			posthog: () => posthogClient,
		},
	};
}
});