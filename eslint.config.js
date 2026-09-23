import { eslintConfig } from '@planning-inspectorate/coding-standards';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
	eslintConfig,
	{
		files: ['apps/manage/src/public/javascripts/**/*.{js,mjs}'],
		languageOptions: {
			globals: {
				...globals.browser
			}
		}
	}
]);
