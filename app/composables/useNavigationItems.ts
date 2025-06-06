export const useNavigationItems = () =>
	useAsyncData('navigation-items', () => queryCollection('navigation').all());
