import * as path from 'path';
import svg from 'rollup-plugin-svg';
import copy from 'rollup-plugin-copy';
import watch from "rollup-plugin-watch";
import styles from "rollup-plugin-styles";
import cleaner from 'rollup-plugin-cleaner';
import typescript from '@rollup/plugin-typescript';
import multiInput from 'rollup-plugin-multi-input';
import posthtml from 'rollup-plugin-posthtml-template';

export default {
	input: ['src/**/**/*.ts', 'src/**/**/*.html'],
	plugins: [
		cleaner({
			targets: ['./dist/'],
		}),
		svg(),
		typescript({ tsconfig: './tsconfig.json', exclude: 'cypress' }),
		multiInput.default({ relative: 'src/' }),
		posthtml(),
		styles(),
		watch({ dir: "themes" }),
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
					src: 'themes',
					dest: 'dist',
				},
				{
					src: 'types',
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
