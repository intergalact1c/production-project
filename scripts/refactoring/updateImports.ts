import { Project } from 'ts-morph';

// Создаем инстанс (объект из класса Project)
const project = new Project({});

// Файлы с кодом, который будем рефакторить
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// Получаем все файлы
const files = project.getSourceFiles();

function isAbsolute(value: string) {
    const layers = [
        'app',
        'shared',
        'entities',
        'features',
        'widgets',
        'pages',
    ];
    return layers.some((layer) => value.startsWith(layer));
}

// Итерируемся по файлам
files.forEach((sourceFile) => {
    // Импорты
    const importDeclarations = sourceFile.getImportDeclarations();

    // Итерируемся по нодам
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue(); // ../../, ./

        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`); // Переопределяем импорт
        }
    });
});

// Применяем изменения
project.save();
