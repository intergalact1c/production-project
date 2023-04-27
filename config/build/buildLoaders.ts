import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const cssLoader = buildCssLoader(options.isDev);

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
        exclude: /node_modules/,
    };

    // Если не используем TS, то ставим babel-loader
    /* const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        /!* use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ], *!/
        exclude: /node_modules/,
    }; */

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });

    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoader];
}
