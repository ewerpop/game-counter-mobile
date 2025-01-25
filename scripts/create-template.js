const fs = require('fs');
const path = require('path');

// Получаем аргументы: [компонент, целевая_директория]
const [componentName, targetDir = 'components/ui'] = process.argv.slice(2);

if (!componentName) {
  console.error('❌ Укажите имя компонента и опционально путь:');
  console.error('npm run create:component -- Button components/ui');
  process.exit(1);
}

const fullTargetPath = path.join(process.cwd(), targetDir);

// Создаём целевую директорию если её нет
if (!fs.existsSync(fullTargetPath)) {
  fs.mkdirSync(fullTargetPath, { recursive: true });
}

const structure = {
  [componentName.toLowerCase()]: {
    [`${componentName}.tsx`]: `import { FunctionComponent } from 'react';\n\nimport { ${componentName}Layout } from './layout';\n\ninterface ${componentName}Props {}\n\nexport const ${componentName}: FunctionComponent<${componentName}Props> = () => {\n  return <${componentName}Layout />;\n};\n`,
    'index.ts': `export { ${componentName} } from './${componentName}';\n`,
    'layout.tsx': `import { FunctionComponent } from 'react';\nimport { View } from 'react-native';\n\ninterface ${componentName}Props {}\n\nexport const ${componentName}Layout: FunctionComponent<${componentName}Props> = () => {\n  return <View>${componentName}Layout</View>;\n};\n`,
    'ui/': {},
  },
};
function createStructure(basePath, structure) {
  for (const [name, content] of Object.entries(structure)) {
    const currentPath = path.join(basePath, name);
    if (typeof content === 'object') {
      fs.mkdirSync(currentPath, { recursive: true });
      createStructure(currentPath, content);
    } else {
      fs.writeFileSync(currentPath, content, 'utf8');
    }
  }
}

// Запуск
try {
  createStructure(fullTargetPath, structure);
  console.log(`✅ Компонент ${componentName} создан в: ${fullTargetPath}`);
} catch (error) {
  console.error(`❌ Ошибка: ${error.message}`);
  process.exit(1);
}
