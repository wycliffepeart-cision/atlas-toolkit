import svg from 'rollup-plugin-svg';
import copy from 'rollup-plugin-copy';
import cleaner from 'rollup-plugin-cleaner';
import typescript from '@rollup/plugin-typescript';
import multiInput from 'rollup-plugin-multi-input';
import posthtml from 'rollup-plugin-posthtml-template';

export default {
	input: ['src/**/**/*.js', 'src/**/**/*.ts', 'src/**/**/*.html'],
	plugins: [
		cleaner({
			targets: ['./dist/'],
		}),
		svg(),
		typescript({ tsconfig: './tsconfig.json' }),
		multiInput.default({ relative: 'src/' }),
		posthtml(),
		copy({
			targets: [
				{
					src: 'package.json',
					dest: 'dist',
				},
				{
					src: 'package-lock.json',
					dest: 'dist',
				},
				{
					src: 'styles',
					dest: 'dist',
				},
			],
		}),
	],
	output: {
		dir: 'dist/',
		format: 'es',
	},
};
