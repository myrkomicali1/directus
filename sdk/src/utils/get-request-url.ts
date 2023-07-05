const SEPARATOR = '/';

const mergePaths = (a: string, b: string) => {
	if (a.endsWith(SEPARATOR)) a = a.slice(0, -1);
	if (!b.startsWith(SEPARATOR)) b = SEPARATOR + b;
	return a + b;
};

/**
 * Build URL based on provided options
 *
 * @param baseUrl The base URL
 * @param options The request options
 *
 * @returns URL
 */
export const getRequestUrl = (baseUrl: URL, path: string, params?: Record<string, any>): URL => {
	const newPath = baseUrl.pathname === SEPARATOR ? path : mergePaths(baseUrl.pathname, path);
	const url = new globalThis.URL(newPath, baseUrl);

	if (params) {
		for (const [k, v] of Object.entries(params)) {
			url.searchParams.set(k, v);
		}
	}

	return url;
};