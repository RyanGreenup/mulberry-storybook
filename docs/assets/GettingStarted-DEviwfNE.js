import{j as n,M as d}from"./blocks-4rOGbmzq.js";import{useMDXComponents as i}from"./index-CPRIaQEM.js";import{c as o}from"./css-C_pJ_J0K.js";import"./preload-helper-D9Z9MdNV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-PFBARcnl.js";function r(s){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Getting Started"}),`
`,n.jsxs("div",{class:"sbdocs-no-override",children:[n.jsx(e.h1,{id:"panda-component-library",children:"Panda Component Library"}),n.jsx(e.h2,{id:"using-these-components",children:"Using These Components"}),n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Update the vite config so it does not optimize solid components into React:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`optimizeDeps: {
  exclude: [
      '@ryangreenup/panda-daisy-components',
  ],
},

`})}),`
`,n.jsxs(e.p,{children:["For Solid Start, which uses Vinxi, this would be the ",n.jsx(e.code,{children:"app.config.ts"}),", here's a full example:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { defineConfig } from "@solidjs/start/config";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";

const { default: mdx } = pkg;
export default defineConfig({
  extensions: ["mdx", "md"],
  vite: {
    optimizeDeps: {
      exclude: ["@ryangreenup/panda-daisy-components"],
    },
    plugins: [
      mdx.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
    ],
  },
});
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Update the ",n.jsx(e.code,{children:"panda.config.ts"})," to scan the appropriate files:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { defineConfig } from "@pandacss/dev";
import pandaPreset from "@pandacss/preset-panda";

// Most components depend on this preset
import { daisyLikePreset } from "@ryangreenup/panda-daisy-components/presets/daisy/daisy";
// Further requirement for the layout
import { layoutPreset } from "@ryangreenup/panda-daisy-components/presets/layout/layout";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  jsxFramework: "solid",

  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.mdx",
    "./pages/**/*.mdx",

    // If installed as a node module
    "./node_modules/@ryangreenup/panda-daisy-components/stories/**/*.{js,tsx,ts,tsx,mdx}",
    "./node_modules/@ryangreenup/panda-daisy-components/src/**/*.{js,tsx,ts,tsx,mdx}",

    // If using filepaths
    // "../panda-storybook/stories/**/*.{js,tsx,ts,tsx,mdx}",
    // "../panda-storybook/src/**/*.{js,tsx,ts,tsx,mdx}",
  ],

  presets: [pandaPreset, layoutPreset, daisyLikePreset],


  // ...

  // The output directory for your css system
  outdir: "styled-system",
});
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Install the dependency"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["File based -- Add this to the ",n.jsx(e.code,{children:"package.json"})," ",n.jsx(e.code,{children:"dependencies"})," field:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`"dependencies": {
  "@ryan/panda-daisy-components": "file:../panda-storybook",
  ...
  ...
]
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"From GitHub"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`module_name="@daisy-ui/storybook"
repo="RyanGreenup/panda-daisy-components"
branch="main"
# Install
bun install "\${module_name}@github:\${repo}/#\${main}"
# Pull as needed
bun update
`})}),`
`,n.jsx(e.p,{children:"This will add an entry like so to the json"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`"dependencies": {
  "@panda-ui/components": "github:RyanGreenup/panda-daisy-components/#main",
  ...
  ...
]
`})}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Import the Preset"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import { daisyLikePreset } from "@ryangreenup/panda-daisy-components/presets/daisy/daisy";


export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // Import the preset
  presets: [pandaPreset, layoutPreset, daisyLikePreset],
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Import a library, like so:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import { VirtualList } from "@panda-ui/storybook";
`})}),`
`]}),`
`]}),n.jsx(e.h2,{id:"how-these-components-were-created",children:"How These Components were Created"}),n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Create a fresh Storybook:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`npx create-solid-storybook 'panda-storybook'
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://panda-css.com/docs/installation/storybook",rel:"nofollow",children:"Configure Panda CSS for Storybook"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Develop or copy over presets such as"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"../src/presets/daisy/daisy.ts"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"/story/example-layout-compositions--styled-full-layout",children:"../src/presets/layout/layout.ts"})}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Reset the override on the ",n.jsx(e.code,{children:"prose"})," class to ensure the docs still render correctly. So the ",n.jsx(e.code,{children:"src/index.css"})," should look something like this"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@layer reset, base, tokens, recipes, utilities;

.sbdocs-no-override * {
  all: revert; /* Reverts all applied styles to browser defaults */
}
`})}),`
`,n.jsxs(e.p,{children:["Then wrap all ",n.jsx(e.code,{children:"mdx"})," files in:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="sbdocs-no-override">

CONTENT HERE

</div>

Use Panda CSS here, e.g.

<div class={css({
bg: "red.600",
animation: "spin",
w: "50",
h: "50",
})} >
foo
</div>

<div class="sbdocs-no-override">

CONTINUE CONTENT HERE

</div>
`})}),`
`,n.jsxs(e.p,{children:["This is not mentioned in the ",n.jsx(e.a,{href:"https://panda-css.com/docs/installation/storybook",rel:"nofollow",children:"Panda Docs"})," although there are tangential Github issues on storybook, see e.g. ",n.jsx(e.a,{href:"https://github.com/storybookjs/storybook/issues/10270",rel:"nofollow",children:"#10270"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Track Styled-System by removing it from ",n.jsx(e.code,{children:".gitignore"}),", ",n.jsx(e.code,{children:"git add"}),", ",n.jsx(e.code,{children:"git commit"})]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Do NOT use an alias for any imports, these are compiled by typescript and will not work properly when imported by the consumer"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["This includes ",n.jsx(e.code,{children:"/src/"})," and ",n.jsx(e.code,{children:"/styled-system"})," !"]}),`
`,n.jsxs(e.li,{children:["Note generally storbook aliases must be set up in ",n.jsx(e.code,{children:"../.storybook/main.ts"})," rather than ",n.jsx(e.code,{children:"../tsconfig.json"})," which is for the ",n.jsx(e.em,{children:"React"})," side of things."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Ensure ",n.jsx(e.code,{children:"package.json"})," has an appropriate name, e.g. ",n.jsx(e.code,{children:"@ryangreenup/panda-daisy-components"})," and remove the ",n.jsx(e.code,{children:"private: true"})," flag."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["It may be necessary to add some additional fields to the ",n.jsx(e.code,{children:"package.json"})," if it will be imported from GitHub rather than a file, here"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`
diff --git a/package.json b/package.json
index 5053e1c..0502e14 100644
--- a/package.json
+++ b/package.json
@@ -1,7 +1,18 @@
{
-  "name": "/home/ryan/Sync/Projects/solid-js/panda/panda-storybook",
+  "name": "@ryan/panda-daisy-components",
  "version": "0.0.0",
-  "private": true,
+  "main": "src/index.ts",
+  "module": "src/index.ts",
+  "types": "src/index.ts",
+  "exports": {
+    ".": {
+      "import": "./src/index.ts",
+      "types": "./src/index.ts"
+    }
+  },
+  "files": [
+    "src"
+  ],
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",

`})}),`
`,n.jsx(e.p,{children:"and a complete example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "name": "@ryan/panda-daisy-components",
  "version": "0.0.0",
  "main": "src/index.ts",
  "module": "src/index.ts",
  "types": "src/index.ts",
  "exports": {
    ".": {
      "import": "./src/index.ts",
      "types": "./src/index.ts"
    },
    "./presets/*": {
      "import": "./src/presets/*.ts",
      "types": "./src/presets/*.ts"
    }
  },

  "files": ["src"],
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "prepare": "panda codegen",
    "prepare-clean": "panda codegen --clean"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^4.1.1",
    "@pandacss/dev": "^1.2.0",
    "@storybook/addon-a11y": "^9.1.3",
    "@storybook/addon-docs": "^9.1.3",
    "@storybook/addon-links": "^9.1.3",
    "@storybook/addon-onboarding": "^9.1.3",
    "@storybook/addon-vitest": "^9.1.3",
    "@vitest/browser": "^3.2.4",
    "@vitest/coverage-v8": "^3.2.4",
    "playwright": "^1.55.0",
    "solid-js": "^1.9.9",
    "storybook": "^9.1.3",
    "storybook-solidjs-vite": "^9.0.3",
    "vitest": "^3.2.4"
  },
  "dependencies": {
    "@tanstack/solid-virtual": "^3.13.12",
    "lucide-solid": "^0.542.0",
    "solid-transition-group": "^0.3.0"
  }
}
`})}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Update any peerDependencies to signal requirements for a consumer"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"These won't be imported automatically, but the consumer can check / be advised"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Export the components through ",n.jsx(e.code,{children:"index.ts"})," allowing the consumer to import them like so:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { VirtualList } from "@ryangreenup/panda-daisy-components";
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["Export the ",n.jsx(e.code,{children:"presets"})," through the ",n.jsx(e.code,{children:"package.json"})," (as shown above), these ",n.jsx(e.strong,{children:"cannot"})," be exported through the ",n.jsx(e.code,{children:"index.ts"})," and must be exported directly. The consumer can import the presets like so:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { daisyLikePreset } from "@ryangreenup/panda-daisy-components/presets/daisy/daisy";
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Push to Github"}),`
`]}),`
`]})]}),`
`,n.jsx(e.h2,{id:"appendix",children:"Appendix"}),`
`,n.jsx(e.h3,{id:"example-of-panda-css-in-mdx",children:"Example of Panda CSS in MDX"}),`
`,n.jsx("div",{class:"sbdocs-no-override",children:n.jsxs(e.p,{children:["This paragraph is inside the ",n.jsx(e.code,{children:"sbdocs-no-override"})," class, then it ends to permit Panda CSS Below"]})}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{class:"header",children:[n.jsx("th",{children:"Spinning"}),n.jsx("th",{children:"Pulsing"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{class:"odd",children:[n.jsx("td",{class:"group",children:n.jsx("div",{class:o({bg:"red.600",animation:"bounce",w:"50",h:"50",_groupHover:{bg:"red.800",transform:"scale(2)",transition:"all 0.3s ease"}}),children:n.jsx(e.p,{children:"foo"})})}),n.jsx("td",{class:"group",children:n.jsx("div",{class:o({bg:"red.600",animation:"pulse",w:"50",h:"50",_groupHover:{bg:"red.800",transform:"scale(2)",transition:"all 0.3s ease"}}),children:n.jsx(e.p,{children:"foo"})})})]})})]})]})}function x(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{x as default};
