import type { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(withFetch()),
		provideAnimationsAsync(),
		provideAnimationsAsync(),
	],
};
