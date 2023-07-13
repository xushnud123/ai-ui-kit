// import { type } from 'os';

// export default function (plop) {
//   // create your generators here
//   plop.setGenerator('basics', {
//     description: 'this is a skeleton plopfile',
//     prompts: [
//       {
//         type: 'input',
//         name: 'name',
//         message: 'Component nomini kiriting ✍️: '
//       }
//     ], // array of inquirer prompts
//     actions: [
//       {
//         type: 'add',
//         path: 'src/stories/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
//         templateFile: 'template/model.tsx.hbs'
//       },
//       {
//         type: 'add',
//         path: 'src/stories/components/{{kebabCase name}}/{{kebabCase name}}.module.scss',
//         templateFile: 'template/model.module.scss.hbs'
//       },
//       {
//         type: 'add',
//         path: 'src/stories/components/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
//         templateFile: 'template/model.stories.tsx.hbs'
//       },
//       {
//         type: 'add',
//         path: 'src/stories/components/index.ts',
//         pattern: `/* PLOP_INJECT_EXPORT */`,
//         template: `export { default as {{pascalCase name}} } from './{{kebabCase name}}/{{kebabCase name}}';`
//       }
//     ] // array of actions
//   });
// }

import fs from 'fs';
import path from 'path';

export default function plopFile(plop) {
  plop.setGenerator('component', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the component name (in PascalCase):'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/stories/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'template/model.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/stories/components/{{kebabCase name}}/{{kebabCase name}}.module.scss',
        templateFile: 'template/model.module.scss.hbs'
      },
      {
        type: 'add',
        path: 'src/stories/components/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: 'template/model.stories.tsx.hbs'
      },
      {
        type: 'modify',
        path: 'src/stories/components/index.ts',
        pattern: /\/\* PLOP_INJECT_EXPORT \*\//g,
        template:
          "{{#if indexExists}}{{1}}\nexport { default as {{pascalCase name}} } from './{{kebabCase name}}';{{/if}}",
        data: {
          indexExists: fs.existsSync('src/stories/components/index.ts')
        },
        force: true
      }
    ]
  });
}
