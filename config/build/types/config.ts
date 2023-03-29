export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
    locales: string; // откуда
    buildLocales: string; // куда
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiURL: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiURL: string;
    project: 'storybook' | 'frontend' | 'jest';
}
