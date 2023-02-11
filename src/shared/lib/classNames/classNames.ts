type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
    return [
        cls,
        ...Object.entries(mods).filter(([__, value]) => Boolean(value)).map(([className, __]) => className),
        ...additional.filter(Boolean),
    ].join(' ');
}
