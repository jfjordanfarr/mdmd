# Code Dump: mdmd

*Generated on: mdmd*

## .eslintrc.js

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    project: "./tsconfig.json", // Important: Point ESLint to your tsconfig.json
  },
  plugins: [
    "@typescript-eslint", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier", // Integrates Prettier with ESLint
  ],
  extends: [
    "eslint:recommended", // ESLint's built-in recommended rules
    "plugin:@typescript-eslint/recommended", // Recommended rules for TypeScript
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // Additional rules requiring type information
    "prettier", // Disables ESLint rules that would conflict with Prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  env: {
    node: true, // Enables Node.js global variables and Node.js scoping.
    es2022: true, // Add global variables for ES2022.
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs.
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "warn", // Warn on 'any' type
    "prettier/prettier": "warn", // Show Prettier problems as warnings
    // Add any project-specific rules here
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    ".eslintrc.js",
    ".prettierrc.js", // also ignore prettier config
    ".devcontainer/",
    ".github/",
    "AgentOps/",
  ],
};

```

## LICENSE

```
MIT License

Copyright (c) 2025 Jordan Farr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

## test-doc.myst.md

```markdown
# MDMD Test Document

::: {unit id="unit001" unit-type="csharp-class" language="csharp" brief="A test C# class."}
This is a C# class.

```csharp
public class MyClass1 {}
```

:::

::: {unit id="unit002" unit-type="python-function" language="python" brief="A Python function."}
This is a Python function.

```python
def my_func():
    pass
```

:::

::: {composition id="comp001" composition-type="logical-module" brief="A module combining two units."}
This composition uses [[unit001]] and [[unit002]].

```mermaid
graph TD
    U1["Unit 1<br>Ref: [[unit001]]"] --> U2["Unit 2<br>Ref: [[unit002]]"]
end
```

:::

```

## .markdownlint.json

```json
{
  "default": true,
  "MD013": { "line_length": 500 },
  "MD041": false,
  "no-hard-tabs": true,
  "whitespace": false,
  "MD040": false,
  "MD048": false,
  "MD024": true,
  "directories": {
    "AgentOps": {
      "MD013": false,
      "MD004": false,
      "MD024": false,
      "MD033": { "allowed_elements": ["details", "summary", "br"] },
      "MD041": false,
      "MD009": false,
      "MD010": false,
      "MD012": false,
      "MD022": false,
      "MD025": false,
      "MD026": false,
      "MD031": false,
      "MD032": false,
      "MD034": false,
      "MD040": false,
      "MD046": false,
      "MD047": false
    },
    "MDMD_Specification": {
      "MD013": { "line_length": 100 },
      "MD033": { "allowed_elements": ["br"] }
    },
    "docs": {
      "MD013": { "line_length": 100 },
      "MD033": { "allowed_elements": ["br"] }
    }
  },
  "fenced-code-blocks": {
    "style": "consistent",
    "marker": "```"
  }
}

```

## tsconfig.json

```json
{
  "compilerOptions": {
    /* Basic Options */
    "target": "ES2022", // Target modern ECMAScript features
    "module": "ESNext", // For .mjs output
    "moduleResolution": "Bundler", // Modern resolution, often better for ESM
    "lib": ["ES2022", "DOM"], // Include ES2022 features and DOM types (useful for web-standard APIs Myst or its deps might use)
    "declaration": true, // Generate .d.ts files
    "declarationMap": true, // Generate source maps for .d.ts files
    "sourceMap": true, // Generate .js.map source map files
    "outDir": "./dist", // Output directory for compiled JavaScript
    "rootDir": "./src", // Specify root directory of source files
    "composite": true, // Enables building dependent projects (if any later) more efficiently

    /* Strict Type-Checking Options */
    "strict": true, // Enable all strict type-checking options
    "noImplicitAny": true, // Raise error on expressions and declarations with an implied 'any' type.
    "strictNullChecks": true, // Enable strict null checks
    "strictFunctionTypes": true, // Enable strict checking of function types.
    "strictBindCallApply": true, // Enable strict 'bind', 'call', and 'apply' methods on functions.
    "strictPropertyInitialization": true, // Ensure non-undefined class properties are initialized in the constructor.
    "noImplicitThis": true, // Raise error on 'this' expressions with an implied 'any' type.
    "alwaysStrict": true, // Parse in strict mode and emit "use strict" for each source file.

    /* Module Resolution Options */
    "resolveJsonModule": true, // Include modules imported with .json extension
    "esModuleInterop": true, // Enables emit interoperability between CommonJS and ES Modules
    "allowSyntheticDefaultImports": true, // Allow default imports from modules with no default export

    /* Experimental Options */
    // "experimentalDecorators": true, // Uncomment if you use decorators
    // "emitDecoratorMetadata": true, // Uncomment if you use decorators with metadata

    /* Advanced Options */
    "skipLibCheck": true, // Skip type checking of all declaration files (*.d.ts).
    "forceConsistentCasingInFileNames": true, // Disallow inconsistently-cased references to the same file.
    "isolatedModules": true // Ensures each file can be safely transpiled without relying on other imports for type information (good for some bundlers)
  },
  "include": ["src/**/*"], // Which files to include in compilation
  "exclude": ["node_modules", "dist", "tests", "**/*.spec.ts", "**/*.test.ts"] // Which files to exclude
}

```

## myst.yml

```yaml
version: 1
project:
  title: MDMD Plugin Test
  plugins:
    - ./dist/index.mjs # Path to your compiled plugin entry point

```

## package.json

```json
{
  "name": "mdmd",
  "version": "0.1.0",
  "description": "Membrane Design MarkDown (MDMD): A MyST Markdown plugin and methodology for specifying complex solutions via {unit} and {composition} primitives, designed for human-AI collaboration.",
  "type": "module",
  "main": "dist/index.mjs",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "files": [
    "dist/",
    "README.md",
    "LICENSE",
    "MDMD_Specification/"
  ],
  "scripts": {
    "build": "tsc --project tsconfig.json",
    "dev": "tsc --watch --project tsconfig.json",
    "lint": "eslint ./src --ext .ts,.js",
    "lint:fix": "eslint ./src --ext .ts,.js --fix",
    "format": "prettier --write \"**/*.{ts,js,json,md,yaml,yml}\"",
    "format:check": "prettier --check \"**/*.{ts,js,json,md,yaml,yml}\"",
    "test": "echo \"Error: no test specified yet. TODO: Add Vitest/Jest\" && exit 0",
    "clean": "rm -rf ./dist",
    "prepublishOnly": "npm run clean && npm run build"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jfjordanfarr/mdmd.git"
  },
  "keywords": [
    "myst",
    "markdown",
    "specification",
    "design",
    "llm",
    "ai",
    "unit",
    "composition",
    "mdmd"
  ],
  "author": "Jordan Sterling Farr",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/jfjordanfarr/mdmd/issues"
  },
  "homepage": "https://github.com/jfjordanfarr/mdmd#readme",
  "devDependencies": {
    "@types/mdast": "^4.0.4",
    "@types/node": "^20.12.12",
    "@typescript-eslint/eslint-plugin": "^7.10.0",
    "@typescript-eslint/parser": "^7.10.0",
    "eslint": "^8.57.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.1.3",
    "myst-common": "^1.1.2",
    "myst-parser": "^1.5.14",
    "prettier": "^3.2.5",
    "typescript": "^5.4.5",
    "unist-builder": "^4.0.0"
  },
  "dependencies": {
    "remark-parse": "^11.0.0",
    "unified": "^11.0.5"
  }
}

```

## .gitignore

```ignore
## Ignore Visual Studio temporary files, build results, and
## files generated by popular Visual Studio add-ons.
##
## Get latest from https://github.com/github/gitignore/blob/main/VisualStudio.gitignore

# User-specific files
*.rsuser
*.suo
*.user
*.userosscache
*.sln.docstates

# User-specific files (MonoDevelop/Xamarin Studio)
*.userprefs

# Mono auto generated files
mono_crash.*

# Build results
[Dd]ebug/
[Dd]ebugPublic/
[Rr]elease/
[Rr]eleases/
x64/
x86/
[Ww][Ii][Nn]32/
[Aa][Rr][Mm]/
[Aa][Rr][Mm]64/
[Aa][Rr][Mm]64[Ee][Cc]/
bld/
[Bb]in/
[Oo]bj/
[Oo]ut/
[Ll]og/
[Ll]ogs/

# Visual Studio 2015/2017 cache/options directory
.vs/
# Uncomment if you have tasks that create the project's static files in wwwroot
#wwwroot/

# Visual Studio 2017 auto generated files
Generated\ Files/

# MSTest test Results
[Tt]est[Rr]esult*/
[Bb]uild[Ll]og.*

# NUnit
*.VisualState.xml
TestResult.xml
nunit-*.xml

# Build Results of an ATL Project
[Dd]ebugPS/
[Rr]eleasePS/
dlldata.c

# Benchmark Results
BenchmarkDotNet.Artifacts/

# .NET Core
project.lock.json
project.fragment.lock.json
artifacts/

# ASP.NET Scaffolding
ScaffoldingReadMe.txt

# StyleCop
StyleCopReport.xml

# Files built by Visual Studio
*_i.c
*_p.c
*_h.h
*.ilk
*.meta
*.obj
*.iobj
*.pch
*.pdb
*.ipdb
*.pgc
*.pgd
*.rsp
# but not Directory.Build.rsp, as it configures directory-level build defaults
!Directory.Build.rsp
*.sbr
*.tlb
*.tli
*.tlh
*.tmp
*.tmp_proj
*_wpftmp.csproj
*.log
*.tlog
*.vspscc
*.vssscc
.builds
*.pidb
*.svclog
*.scc

# Chutzpah Test files
_Chutzpah*

# Visual C++ cache files
ipch/
*.aps
*.ncb
*.opendb
*.opensdf
*.sdf
*.cachefile
*.VC.db
*.VC.VC.opendb

# Visual Studio profiler
*.psess
*.vsp
*.vspx
*.sap

# Visual Studio Trace Files
*.e2e

# TFS 2012 Local Workspace
$tf/

# Guidance Automation Toolkit
*.gpState

# ReSharper is a .NET coding add-in
_ReSharper*/
*.[Rr]e[Ss]harper
*.DotSettings.user

# TeamCity is a build add-in
_TeamCity*

# DotCover is a Code Coverage Tool
*.dotCover

# AxoCover is a Code Coverage Tool
.axoCover/*
!.axoCover/settings.json

# Coverlet is a free, cross platform Code Coverage Tool
coverage*.json
coverage*.xml
coverage*.info

# Visual Studio code coverage results
*.coverage
*.coveragexml

# NCrunch
_NCrunch_*
.NCrunch_*
.*crunch*.local.xml
nCrunchTemp_*

# MightyMoose
*.mm.*
AutoTest.Net/

# Web workbench (sass)
.sass-cache/

# Installshield output folder
[Ee]xpress/

# DocProject is a documentation generator add-in
DocProject/buildhelp/
DocProject/Help/*.HxT
DocProject/Help/*.HxC
DocProject/Help/*.hhc
DocProject/Help/*.hhk
DocProject/Help/*.hhp
DocProject/Help/Html2
DocProject/Help/html

# Click-Once directory
publish/

# Publish Web Output
*.[Pp]ublish.xml
*.azurePubxml
# Note: Comment the next line if you want to checkin your web deploy settings,
# but database connection strings (with potential passwords) will be unencrypted
*.pubxml
*.publishproj

# Microsoft Azure Web App publish settings. Comment the next line if you want to
# checkin your Azure Web App publish settings, but sensitive information contained
# in these scripts will be unencrypted
PublishScripts/

# NuGet Packages
*.nupkg
# NuGet Symbol Packages
*.snupkg
# The packages folder can be ignored because of Package Restore
**/[Pp]ackages/*
# except build/, which is used as an MSBuild target.
!**/[Pp]ackages/build/
# Uncomment if necessary however generally it will be regenerated when needed
#!**/[Pp]ackages/repositories.config
# NuGet v3's project.json files produces more ignorable files
*.nuget.props
*.nuget.targets

# Microsoft Azure Build Output
csx/
*.build.csdef

# Microsoft Azure Emulator
ecf/
rcf/

# Windows Store app package directories and files
AppPackages/
BundleArtifacts/
Package.StoreAssociation.xml
_pkginfo.txt
*.appx
*.appxbundle
*.appxupload

# Visual Studio cache files
# files ending in .cache can be ignored
*.[Cc]ache
# but keep track of directories ending in .cache
!?*.[Cc]ache/

# Others
ClientBin/
~$*
*~
*.dbmdl
*.dbproj.schemaview
*.jfm
*.pfx
*.publishsettings
orleans.codegen.cs

# Including strong name files can present a security risk
# (https://github.com/github/gitignore/pull/2483#issue-259490424)
#*.snk

# Since there are multiple workflows, uncomment next line to ignore bower_components
# (https://github.com/github/gitignore/pull/1529#issuecomment-104372622)
#bower_components/

# RIA/Silverlight projects
Generated_Code/

# Backup & report files from converting an old project file
# to a newer Visual Studio version. Backup files are not needed,
# because we have git ;-)
_UpgradeReport_Files/
Backup*/
UpgradeLog*.XML
UpgradeLog*.htm
ServiceFabricBackup/
*.rptproj.bak

# SQL Server files
*.mdf
*.ldf
*.ndf

# Business Intelligence projects
*.rdl.data
*.bim.layout
*.bim_*.settings
*.rptproj.rsuser
*- [Bb]ackup.rdl
*- [Bb]ackup ([0-9]).rdl
*- [Bb]ackup ([0-9][0-9]).rdl

# Microsoft Fakes
FakesAssemblies/

# GhostDoc plugin setting file
*.GhostDoc.xml

# Node.js Tools for Visual Studio
# .ntvs_analysis.dat # Already covered by node_modules typically
# node_modules/ # Already covered by a general Node section below

# Visual Studio 6 build log
*.plg

# Visual Studio 6 workspace options file
*.opt

# Visual Studio 6 auto-generated workspace file (contains which files were open etc.)
*.vbw

# Visual Studio 6 auto-generated project file (contains which files were open etc.)
*.vbp

# Visual Studio 6 workspace and project file (working project files containing files to include in project)
*.dsw
*.dsp

# Visual Studio 6 technical files
# *.ncb # Covered by VS C++ cache
# *.aps # Covered by VS C++ cache

# Visual Studio LightSwitch build output
**/*.HTMLClient/GeneratedArtifacts
**/*.DesktopClient/GeneratedArtifacts
**/*.DesktopClient/ModelManifest.xml
**/*.Server/GeneratedArtifacts
**/*.Server/ModelManifest.xml
_Pvt_Extensions

# Paket dependency manager
.paket/paket.exe
paket-files/

# FAKE - F# Make
.fake/

# CodeRush personal settings
.cr/personal

# Python Tools for Visual Studio (PTVS)
__pycache__/
*.pyc

# Cake - Uncomment if you are using it
# tools/**
# !tools/packages.config

# Tabs Studio
*.tss

# Telerik's JustMock configuration file
*.jmconfig

# BizTalk build output
*.btp.cs
*.btm.cs
*.odx.cs
*.xsd.cs

# OpenCover UI analysis results
OpenCover/

# Azure Stream Analytics local run output
ASALocalRun/

# MSBuild Binary and Structured Log
*.binlog

# AWS SAM Build and Temporary Artifacts folder
.aws-sam

# NVidia Nsight GPU debugger configuration file
*.nvuser

# MFractors (Xamarin productivity tool) working folder
.mfractor/

# Local History for Visual Studio
.localhistory/

# Visual Studio History (VSHistory) files
.vshistory/

# BeatPulse healthcheck temp database
healthchecksdb

# Backup folder for Package Reference Convert tool in Visual Studio 2017
MigrationBackup/

# Ionide (cross platform F# VS Code tools) working folder
.ionide/

# Fody - auto-generated XML schema
FodyWeavers.xsd

# VS Code files for those working on multiple tools
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
*.code-workspace

# Local History for Visual Studio Code
.history/

# Windows Installer files from build outputs
*.cab
*.msi
*.msix
*.msm
*.msp

# JetBrains Rider
*.sln.iml

#-----------------------------------------------------------------------------
# NODE / JAVASCRIPT / TYPESCRIPT ADDITIONS
#-----------------------------------------------------------------------------

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)
web_modules/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.mbcache/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarnclean

# Next.js build outputs
.next/
out/

# Nuxt.js build outputs
.nuxt/
dist/

# Svelte build outputs (typically)
__sapper__/
.svelte-kit/

# Gatsby build outputs
.cache/
public/

# Parcel cache files
.cache
.parcel-cache

# Docusaurus build outputs
.docusaurus

# Remix build outputs
build/
public/build/
.cache/

# Storybook build outputs
storybook-static

# MDMD Project Specific
# Compiled TypeScript output
dist/
# TypeScript incremental build info
tsconfig.tsbuildinfo
# Any local test result artifacts (if we use specific names later)
test-results/
# AgentOps codebase dump files (can get large, not usually committed)
AgentOps/*Dump.md

```

## .editorconfig

```
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

```

## package-lock.json

```json
{
  "name": "mdmd",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "mdmd",
      "version": "0.1.0",
      "license": "MIT",
      "dependencies": {
        "remark-parse": "^11.0.0",
        "unified": "^11.0.5"
      },
      "devDependencies": {
        "@types/mdast": "^4.0.4",
        "@types/node": "^20.12.12",
        "@typescript-eslint/eslint-plugin": "^7.10.0",
        "@typescript-eslint/parser": "^7.10.0",
        "eslint": "^8.57.0",
        "eslint-config-prettier": "^9.1.0",
        "eslint-plugin-prettier": "^5.1.3",
        "myst-common": "^1.1.2",
        "myst-parser": "^1.5.14",
        "prettier": "^3.2.5",
        "typescript": "^5.4.5",
        "unist-builder": "^4.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.7.0.tgz",
      "integrity": "sha512-dyybb3AcajC7uha6CvhdVRJqaKyn7w2YKqKyAN37NKYgZT36w+iRb0Dymmc5qEJ549c/S31cMMSFd75bteCpCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.1.tgz",
      "integrity": "sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.1.4.tgz",
      "integrity": "sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.6.0",
        "globals": "^13.19.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/@eslint/js": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-8.57.1.tgz",
      "integrity": "sha512-d9zaMRSTIKDLhctzH12MtXvJKSSUhaHcjV+2Z+GK+EEY7XKpP5yR4x+N3TAcHTcu963nIr+TMcCb4DBCYX1z6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/@humanwhocodes/config-array": {
      "version": "0.13.0",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.13.0.tgz",
      "integrity": "sha512-DZLEEqFWQFiyK6h5YIeynKx7JlvCYWL0cImfSRXZ9l4Sg2efkFGTuFf6vzXjK1cq6IYkU+Eg/JizXw+TD2vRNw==",
      "deprecated": "Use @eslint/config-array instead",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanwhocodes/object-schema": "^2.0.3",
        "debug": "^4.3.1",
        "minimatch": "^3.0.5"
      },
      "engines": {
        "node": ">=10.10.0"
      }
    },
    "node_modules/@humanwhocodes/config-array/node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/@humanwhocodes/config-array/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/object-schema": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-2.0.3.tgz",
      "integrity": "sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==",
      "deprecated": "Use @eslint/object-schema instead",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@pkgr/core": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/@pkgr/core/-/core-0.2.4.tgz",
      "integrity": "sha512-ROFF39F6ZrnzSUEmQQZUar0Jt4xVoP9WnDRdWwF4NNcXs3xBTLgBUDoOwW141y1jP+S8nahIbdxbFC7IShw9Iw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.20.0 || ^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/pkgr"
      }
    },
    "node_modules/@types/debug": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@types/debug/-/debug-4.1.12.tgz",
      "integrity": "sha512-vIChWdVG3LG1SMxEvI/AK+FWJthlrqlTu7fbrlywTkkaONwk/UAGaULXRlf8vkzFBLVm0zkMdCquhL5aOjhXPQ==",
      "license": "MIT",
      "dependencies": {
        "@types/ms": "*"
      }
    },
    "node_modules/@types/mdast": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/@types/mdast/-/mdast-4.0.4.tgz",
      "integrity": "sha512-kGaNbPh1k7AFzgpud/gMdvIm5xuECykRR+JnWKQno9TAXVa6WIVCGTPvYGekIDL4uwCZQSYbUxNBSb1aUo79oA==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "*"
      }
    },
    "node_modules/@types/ms": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/@types/ms/-/ms-2.1.0.tgz",
      "integrity": "sha512-GsCCIZDE/p3i96vtEqx+7dBUGXrc7zeSK3wwPHIaRThS+9OhWIXRqzs4d6k1SVU8g91DrNRWxWUGhp5KXQb2VA==",
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "20.17.57",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.17.57.tgz",
      "integrity": "sha512-f3T4y6VU4fVQDKVqJV4Uppy8c1p/sVvS3peyqxyWnzkqXFJLRU7Y1Bl7rMS1Qe9z0v4M6McY0Fp9yBsgHJUsWQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.19.2"
      }
    },
    "node_modules/@types/unist": {
      "version": "2.0.11",
      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-2.0.11.tgz",
      "integrity": "sha512-CmBKiL6NNo/OqgmMn95Fk9Whlp2mtvIv+KNpQKN2F4SjvrEesubTRWGYSg+BnWZOnlCaSTU1sMpsBOzgbYhnsA==",
      "license": "MIT"
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "7.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-7.18.0.tgz",
      "integrity": "sha512-94EQTWZ40mzBc42ATNIBimBEDltSJ9RQHCC8vc/PDbxi4k8dVwUAv4o98dk50M1zB+JGFxp43FP7f8+FP8R6Sw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.10.0",
        "@typescript-eslint/scope-manager": "7.18.0",
        "@typescript-eslint/type-utils": "7.18.0",
        "@typescript-eslint/utils": "7.18.0",
        "@typescript-eslint/visitor-keys": "7.18.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.3.1",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^1.3.0"
      },
      "engines": {
        "node": "^18.18.0 || >=20.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^7.0.0",
        "eslint": "^8.56.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "7.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-7.18.0.tgz",
      "integrity": "sha512-4Z+L8I2OqhZV8qA132M4wNL30ypZGYOQVBfMgxDH/K5UX0PNqTu1c6za9ST5r9+tavvHiTWmBnKzpCJ/GlVFtg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@typescript-eslint/scope-manager": "7.18.0",
        "@typescript-eslint/types": "7.18.0",
        "@typescript-eslint/typescript-estree": "7.18.0",
        "@typescript-eslint/visitor-keys": "7.18.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || >=20.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.56.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "7.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-7.18.0.tgz",
      "integrity": "sha512-jjhdIE/FPF2B7Z1uzc6i3oWKbGcHb87Qw7AWj6jmEqNOfDFbJWtjt/XfwCpvNkpGWlcJaog5vTR+VV8+w9JflA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "7.18.0",
        "@typescript-eslint/visitor-keys": "7.18.0"
      },
      "engines": {
        "node": "^18.18.0 || >=20.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "7.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-7.18.0.tgz",
      "integrity": "sha512-XL0FJXuCLaDuX2sYqZUUSOJ2sG5/i1AAze+axqmLnSkNEVMVYLF+cbwlB2w8D1tinFuSikHmFta+P+HOofrLeA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/typescript-estree": "7.18.0",
        "@typescript-eslint/utils": "7.18.0",
        "debug": "^4.3.4",
        "ts-api-utils": "^1.3.0"
      },
      "engines": {
        "node": "^18.18.0 || >=20.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.56.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "7.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-7.18.0.tgz",
      "integrity": "sha512-iZqi+Ds1y4EDYUtlOOC+aUmxnE9xS/yCigkjA7XpTKV6nCBd3Hp/PRGGmdwnfkV2ThMyYldP1wRpm/id99spTQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || >=20.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "7.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-7.18.0.tgz",
      "integrity": "sha512-aP1v/BSPnnyhMHts8cf1qQ6Q1IFwwRvAQGRvBFkWlo3/lH29OXA3Pts+c10nxRxIBrDnoMqzhgdwVe5f2D6OzA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@typescript-eslint/types": "7.18.0",
        "@typescript-eslint/visitor-keys": "7.18.0",
        "debug": "^4.3.4",
        "globby": "^11.1.0",
        "is-glob": "^4.0.3",
        "minimatch": "^9.0.4",
        "semver": "^7.6.0",
        "ts-api-utils": "^1.3.0"
      },
      "engines": {
        "node": "^18.18.0 || >=20.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "7.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-7.18.0.tgz",
      "integrity": "sha512-kK0/rNa2j74XuHVcoCZxdFBMF+aq/vH83CXAOHieC+2Gis4mF8jJXT5eAfyD3K0sAxtPuwxaIOIOvhwzVDt/kw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.4.0",
        "@typescript-eslint/scope-manager": "7.18.0",
        "@typescript-eslint/types": "7.18.0",
        "@typescript-eslint/typescript-estree": "7.18.0"
      },
      "engines": {
        "node": "^18.18.0 || >=20.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.56.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "7.18.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-7.18.0.tgz",
      "integrity": "sha512-cDF0/Gf81QpY3xYyJKDV14Zwdmid5+uuENhjH2EqFaF0ni+yAyq/LzMaIJdhNJXZI7uLzwIlA+V7oWoyn6Curg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "7.18.0",
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^18.18.0 || >=20.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.3.0.tgz",
      "integrity": "sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/acorn": {
      "version": "8.14.1",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.14.1.tgz",
      "integrity": "sha512-OvQ/2pUDKmgfCg++xsTX1wGxfTaszcHVcTctW4UJB4hibJx2HXxxO5UmVgyjMa+ZDsiaf5wWLXYpRWMmBI0QHg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/array-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
      "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/bail": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/bail/-/bail-2.0.2.tgz",
      "integrity": "sha512-0xO6mYd7JB2YesxDKplafRpsiOzPt9V02ddPCLbY1xYGPOX24NTyN50qnUxgCPcSoYMhKpAuBTjQoRZCAkUDRw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/boolbase": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
      "integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/brace-expansion": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
      "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/character-entities": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/character-entities/-/character-entities-2.0.2.tgz",
      "integrity": "sha512-shx7oQ0Awen/BRIdkjkvz54PnEEI/EjwXDSIZp86/KKdbafHh1Df/RYGBhn4hbe2+uKC9FnT5UCEdyPz3ai9hQ==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/classnames": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/classnames/-/classnames-2.5.1.tgz",
      "integrity": "sha512-saHYOzhIQs6wy2sVxTM6bUDsQO4F50V9RQ22qBpEdCW+I+/Wmke2HOl6lS6dTpdxVhb88/I6+Hs+438c3lfUow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/credit-roles": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/credit-roles/-/credit-roles-2.1.0.tgz",
      "integrity": "sha512-wt1jw7lDnzY1Ob4cDHpXboN4Bfu6l7reKal0zxtKnxogqw916l+Iu862LxIze4U4y44ssAd0TOQqVg2cXY2V6Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/css-selector-parser": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/css-selector-parser/-/css-selector-parser-1.4.1.tgz",
      "integrity": "sha512-HYPSb7y/Z7BNDCOrakL4raGO2zltZkbeXyAd6Tg9obzix6QhzxCotdBl6VT0Dv4vZfJGVz3WL/xaEI9Ly3ul0g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/csv-parse": {
      "version": "5.6.0",
      "resolved": "https://registry.npmjs.org/csv-parse/-/csv-parse-5.6.0.tgz",
      "integrity": "sha512-l3nz3euub2QMg5ouu5U09Ew9Wf6/wQ8I++ch1loQ0ljmzhmfZYrH9fflS22i/PQEvsPvxCwxgz5q7UB8K1JO4Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.1.tgz",
      "integrity": "sha512-KcKCqiftBJcZr++7ykoDIEwSa3XWowTfNPo92BYxjXiyYEVrUQh2aLyhxBCwww+heortUFxEJYcRzosstTEBYQ==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decode-named-character-reference": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/decode-named-character-reference/-/decode-named-character-reference-1.1.0.tgz",
      "integrity": "sha512-Wy+JTSbFThEOXQIR2L6mxJvEs+veIzpmqD7ynWxMXGpnk3smkHQOp6forLdHsKpAMW9iJpaBBIxz285t1n1C3w==",
      "license": "MIT",
      "dependencies": {
        "character-entities": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/dequal": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/dequal/-/dequal-2.0.3.tgz",
      "integrity": "sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/devlop": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/devlop/-/devlop-1.1.0.tgz",
      "integrity": "sha512-RWmIqhcFf1lRYBvNmr7qTNuyCt/7/ns2jbpp1+PalgE/rDQcBT0fioSMUpJ93irlUhC5hrg4cYqe6U+0ImW0rA==",
      "license": "MIT",
      "dependencies": {
        "dequal": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/dir-glob": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
      "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-type": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/doi-utils": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/doi-utils/-/doi-utils-2.0.5.tgz",
      "integrity": "sha512-BAaEF9L9KqJmQfk1frtgAySPnwOdaY2UzZ85XvFAMLdGeqrH/GiwIziQU2y3WgrCuQ0ng74bq5uYBo8Qma/WqA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/entities": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-2.1.0.tgz",
      "integrity": "sha512-hCx1oky9PFrJ611mf0ifBLBRW8lUUVRlFolb5gWRfIELabBlbp9xZvrqZLZAs+NxFnbfQoeGd8wDkygjg7U85w==",
      "dev": true,
      "license": "BSD-2-Clause",
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-8.57.1.tgz",
      "integrity": "sha512-ypowyDxpVSYpkXr9WPv2PAZCtNip1Mv5KTW0SCurXv/9iOpcrH9PaqUElksqEB6pChqHGDRCFTyrZlGhnLNGiA==",
      "deprecated": "This version is no longer supported. Please see https://eslint.org/version-support for other options.",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.6.1",
        "@eslint/eslintrc": "^2.1.4",
        "@eslint/js": "8.57.1",
        "@humanwhocodes/config-array": "^0.13.0",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@nodelib/fs.walk": "^1.2.8",
        "@ungap/structured-clone": "^1.2.0",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.3.2",
        "doctrine": "^3.0.0",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^7.2.2",
        "eslint-visitor-keys": "^3.4.3",
        "espree": "^9.6.1",
        "esquery": "^1.4.2",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^6.0.1",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "globals": "^13.19.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "is-path-inside": "^3.0.3",
        "js-yaml": "^4.1.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3",
        "strip-ansi": "^6.0.1",
        "text-table": "^0.2.0"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-config-prettier": {
      "version": "9.1.0",
      "resolved": "https://registry.npmjs.org/eslint-config-prettier/-/eslint-config-prettier-9.1.0.tgz",
      "integrity": "sha512-NSWl5BFQWEPi1j4TjVNItzYV7dZXZ+wP6I6ZhrBGpChQhZRUaElihE9uRRkcbRnNb76UMKDF3r+WTmNcGPKsqw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "eslint-config-prettier": "bin/cli.js"
      },
      "peerDependencies": {
        "eslint": ">=7.0.0"
      }
    },
    "node_modules/eslint-plugin-prettier": {
      "version": "5.4.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-prettier/-/eslint-plugin-prettier-5.4.1.tgz",
      "integrity": "sha512-9dF+KuU/Ilkq27A8idRP7N2DH8iUR6qXcjF3FR2wETY21PZdBrIjwCau8oboyGj9b7etWmTGEeM8e7oOed6ZWg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prettier-linter-helpers": "^1.0.0",
        "synckit": "^0.11.7"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint-plugin-prettier"
      },
      "peerDependencies": {
        "@types/eslint": ">=8.0.0",
        "eslint": ">=8.0.0",
        "eslint-config-prettier": ">= 7.0.0 <10.0.0 || >=10.1.0",
        "prettier": ">=3.0.0"
      },
      "peerDependenciesMeta": {
        "@types/eslint": {
          "optional": true
        },
        "eslint-config-prettier": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-scope": {
      "version": "7.2.2",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.2.tgz",
      "integrity": "sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint/node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/eslint/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/espree": {
      "version": "9.6.1",
      "resolved": "https://registry.npmjs.org/espree/-/espree-9.6.1.tgz",
      "integrity": "sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.9.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
      "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "license": "MIT"
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-diff": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/fast-diff/-/fast-diff-1.3.0.tgz",
      "integrity": "sha512-VxPP4NqbUjj6MaAOafWeUn2cXWLcCtljklUtZf0Ind4XQ+QPtmA0b18zZy0jIQx+ExRVCR/ZQpBmik5lXshNsw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz",
      "integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.19.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.19.1.tgz",
      "integrity": "sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.2.0.tgz",
      "integrity": "sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.3",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
      "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/glob/node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/glob/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/globals": {
      "version": "13.24.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.24.0.tgz",
      "integrity": "sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globby": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/globby/-/globby-11.1.0.tgz",
      "integrity": "sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-union": "^2.1.0",
        "dir-glob": "^3.0.1",
        "fast-glob": "^3.2.9",
        "ignore": "^5.2.0",
        "merge2": "^1.4.1",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
      "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/he": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
      "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "he": "bin/he"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/is-buffer": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-2.0.5.tgz",
      "integrity": "sha512-i2R6zNFDwgEHJyQUtJEk0XFi1i0dPFn/oqjK3/vPCcDeJvW5NQ83V8QbicfF1SupOaB0h8ntgBC2YiE7dfyctQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-plain-obj": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-4.1.0.tgz",
      "integrity": "sha512-+Pgi+vMuUNkJyExiMBt5IlFoMyKnr5zhJ4Uspz58WOhBF5QoIZkFyNHIbBAtHwzVAgk5RtndVNsDRN61/mmDqg==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/js-yaml": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
      "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/linkify-it": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/linkify-it/-/linkify-it-3.0.3.tgz",
      "integrity": "sha512-ynTsyrFSdE5oZ/O9GEf00kPngmOfVwazR5GKDq6EYfhlpFug3J2zybX56a2PRRpc9P+FuSoGNAwjlbDs9jJBPQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "uc.micro": "^1.0.1"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/markdown-it": {
      "version": "12.3.2",
      "resolved": "https://registry.npmjs.org/markdown-it/-/markdown-it-12.3.2.tgz",
      "integrity": "sha512-TchMembfxfNVpHkbtriWltGWc+m3xszaRD0CZup7GFFhzIgQqxIfn3eGj1yZpfuflzPvfkt611B2Q/Bsk1YnGg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1",
        "entities": "~2.1.0",
        "linkify-it": "^3.0.1",
        "mdurl": "^1.0.1",
        "uc.micro": "^1.0.5"
      },
      "bin": {
        "markdown-it": "bin/markdown-it.js"
      }
    },
    "node_modules/markdown-it-amsmath": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/markdown-it-amsmath/-/markdown-it-amsmath-0.4.0.tgz",
      "integrity": "sha512-wWGX5bpHu9iq4cqi/U58srCH0js5ws7X3BrQZcN2/anQ9S4P8MpvTxHLCZC2rmGHA6mSZf4PKWF6caBc+nxH2g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=16",
        "npm": ">=6"
      },
      "peerDependencies": {
        "markdown-it": "^12 || ^13"
      }
    },
    "node_modules/markdown-it-deflist": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/markdown-it-deflist/-/markdown-it-deflist-2.1.0.tgz",
      "integrity": "sha512-3OuqoRUlSxJiuQYu0cWTLHNhhq2xtoSFqsZK8plANg91+RJQU1ziQ6lA2LzmFAEes18uPBsHZpcX6We5l76Nzg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/markdown-it-dollarmath": {
      "version": "0.5.0",
      "resolved": "https://registry.npmjs.org/markdown-it-dollarmath/-/markdown-it-dollarmath-0.5.0.tgz",
      "integrity": "sha512-W+8se6cx6vowjzRAfDbHDPBQ+Y9G/8M/JZSFiaYvT0HqfwyFK1hIA1Xj360Nc3ymknKgdDVoL5fI8XjAqZF3tg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=16",
        "npm": ">=6"
      },
      "peerDependencies": {
        "markdown-it": "^12 || ^13"
      }
    },
    "node_modules/markdown-it-footnote": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/markdown-it-footnote/-/markdown-it-footnote-3.0.3.tgz",
      "integrity": "sha512-YZMSuCGVZAjzKMn+xqIco9d1cLGxbELHZ9do/TSYVzraooV8ypsppKNmUJ0fVH5ljkCInQAtFpm8Rb3eXSrt5w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/markdown-it-front-matter": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/markdown-it-front-matter/-/markdown-it-front-matter-0.2.4.tgz",
      "integrity": "sha512-25GUs0yjS2hLl8zAemVndeEzThB1p42yxuDEKbd4JlL3jiz+jsm6e56Ya8B0VREOkNxLYB4TTwaoPJ3ElMmW+w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/markdown-it-myst": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/markdown-it-myst/-/markdown-it-myst-1.0.11.tgz",
      "integrity": "sha512-fJQzvP7F67mMHXiwVeUm6wZknjDn/kTpsktQlVMWIFDoBcej6BhQlUJq5HiX2sbsDsyeNqKNUo4LN7pBoQaXvw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "js-yaml": "^4.1.0",
        "markdown-it": "^13.0.1",
        "vfile": "^5.3.7"
      }
    },
    "node_modules/markdown-it-myst-extras": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/markdown-it-myst-extras/-/markdown-it-myst-extras-0.3.0.tgz",
      "integrity": "sha512-678qviK97MEzSM9Hr0jlX5nBPzMcKZo6Ixgh4nEf/WYpii8LXQ72FametoXkzyDy77qNKDE3vlqYhqfbbCGHrw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=16",
        "npm": ">=6"
      },
      "peerDependencies": {
        "markdown-it": "^12 || ^13"
      }
    },
    "node_modules/markdown-it-myst/node_modules/entities": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/entities/-/entities-3.0.1.tgz",
      "integrity": "sha512-WiyBqoomrwMdFG1e0kqvASYfnlb0lp8M5o5Fw2OFq1hNZxxcNk8Ik0Xm7LxzBhuidnZB/UtBqVCgUz3kBOP51Q==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.12"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/markdown-it-myst/node_modules/linkify-it": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/linkify-it/-/linkify-it-4.0.1.tgz",
      "integrity": "sha512-C7bfi1UZmoj8+PQx22XyeXCuBlokoyWQL5pWSP+EI6nzRylyThouddufc2c1NDIcP9k5agmN9fLpA7VNJfIiqw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "uc.micro": "^1.0.1"
      }
    },
    "node_modules/markdown-it-myst/node_modules/markdown-it": {
      "version": "13.0.2",
      "resolved": "https://registry.npmjs.org/markdown-it/-/markdown-it-13.0.2.tgz",
      "integrity": "sha512-FtwnEuuK+2yVU7goGn/MJ0WBZMM9ZPgU9spqlFs7/A/pDIUNSOQZhUgOqYCficIuR2QaFnrt8LHqBWsbTAoI5w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1",
        "entities": "~3.0.1",
        "linkify-it": "^4.0.1",
        "mdurl": "^1.0.1",
        "uc.micro": "^1.0.5"
      },
      "bin": {
        "markdown-it": "bin/markdown-it.js"
      }
    },
    "node_modules/markdown-it-task-lists": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/markdown-it-task-lists/-/markdown-it-task-lists-2.1.1.tgz",
      "integrity": "sha512-TxFAc76Jnhb2OUu+n3yz9RMu4CwGfaT788br6HhEDlvWfdeJcLUsxk1Hgw2yJio0OXsxv7pyIPmvECY7bMbluA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/mdast": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/mdast/-/mdast-3.0.0.tgz",
      "integrity": "sha512-xySmf8g4fPKMeC07jXGz971EkLbWAJ83s4US2Tj9lEdnZ142UP5grN73H1Xd3HzrdbU5o9GYYP/y8F9ZSwLE9g==",
      "deprecated": "`mdast` was renamed to `remark`",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/mdast-util-from-markdown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/mdast-util-from-markdown/-/mdast-util-from-markdown-2.0.2.tgz",
      "integrity": "sha512-uZhTV/8NBuw0WHkPTrCqDOl0zVe1BIng5ZtHoDk49ME1qqcjYmmLmOf0gELgcRMxN4w2iuIeVso5/6QymSrgmA==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "@types/unist": "^3.0.0",
        "decode-named-character-reference": "^1.0.0",
        "devlop": "^1.0.0",
        "mdast-util-to-string": "^4.0.0",
        "micromark": "^4.0.0",
        "micromark-util-decode-numeric-character-reference": "^2.0.0",
        "micromark-util-decode-string": "^2.0.0",
        "micromark-util-normalize-identifier": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "unist-util-stringify-position": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-from-markdown/node_modules/@types/unist": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-3.0.3.tgz",
      "integrity": "sha512-ko/gIFJRv177XgZsZcBwnqJN5x/Gien8qNOn0D5bQU/zAzVf9Zt3BlcUiLqhV9y4ARk0GbT3tnUiPNgnTXzc/Q==",
      "license": "MIT"
    },
    "node_modules/mdast-util-from-markdown/node_modules/unist-util-stringify-position": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-stringify-position/-/unist-util-stringify-position-4.0.0.tgz",
      "integrity": "sha512-0ASV06AAoKCDkS2+xw5RXJywruurpbC4JZSm7nr7MOt1ojAzvyyaO+UxZf18j8FCF6kmzCZKcAgN/yu2gm2XgQ==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-to-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-to-string/-/mdast-util-to-string-4.0.0.tgz",
      "integrity": "sha512-0H44vDimn51F0YwvxSJSm0eCDOJTRlmN0R1yBh4HLj9wiV1Dn0QoXGbvFAWj2hSItVTlCmBF1hqKlIyUBVFLPg==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdurl": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/mdurl/-/mdurl-1.0.1.tgz",
      "integrity": "sha512-/sKlQJCBYVY9Ers9hqzKou4H6V5UWc/M59TH2dvkt+84itfnq7uFOMLpOiOS4ujvHP4etln18fmIxA5R5fll0g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromark": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/micromark/-/micromark-4.0.2.tgz",
      "integrity": "sha512-zpe98Q6kvavpCr1NPVSCMebCKfD7CA2NqZ+rykeNhONIJBpc1tFKt9hucLGwha3jNTNI8lHpctWJWoimVF4PfA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@types/debug": "^4.0.0",
        "debug": "^4.0.0",
        "decode-named-character-reference": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-core-commonmark": "^2.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-combine-extensions": "^2.0.0",
        "micromark-util-decode-numeric-character-reference": "^2.0.0",
        "micromark-util-encode": "^2.0.0",
        "micromark-util-normalize-identifier": "^2.0.0",
        "micromark-util-resolve-all": "^2.0.0",
        "micromark-util-sanitize-uri": "^2.0.0",
        "micromark-util-subtokenize": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-core-commonmark": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/micromark-core-commonmark/-/micromark-core-commonmark-2.0.3.tgz",
      "integrity": "sha512-RDBrHEMSxVFLg6xvnXmb1Ayr2WzLAWjeSATAoxwKYJV94TeNavgoIdA0a9ytzDSVzBy2YKFK+emCPOEibLeCrg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "decode-named-character-reference": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-factory-destination": "^2.0.0",
        "micromark-factory-label": "^2.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-factory-title": "^2.0.0",
        "micromark-factory-whitespace": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-classify-character": "^2.0.0",
        "micromark-util-html-tag-name": "^2.0.0",
        "micromark-util-normalize-identifier": "^2.0.0",
        "micromark-util-resolve-all": "^2.0.0",
        "micromark-util-subtokenize": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-destination": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-destination/-/micromark-factory-destination-2.0.1.tgz",
      "integrity": "sha512-Xe6rDdJlkmbFRExpTOmRj9N3MaWmbAgdpSrBQvCFqhezUn4AHqJHbaEnfbVYYiexVSs//tqOdY/DxhjdCiJnIA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-label": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-label/-/micromark-factory-label-2.0.1.tgz",
      "integrity": "sha512-VFMekyQExqIW7xIChcXn4ok29YE3rnuyveW3wZQWWqF4Nv9Wk5rgJ99KzPvHjkmPXF93FXIbBp6YdW3t71/7Vg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-space": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-space/-/micromark-factory-space-2.0.1.tgz",
      "integrity": "sha512-zRkxjtBxxLd2Sc0d+fbnEunsTj46SWXgXciZmHq0kDYGnck/ZSGj9/wULTV95uoeYiK5hRXP2mJ98Uo4cq/LQg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-title": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-title/-/micromark-factory-title-2.0.1.tgz",
      "integrity": "sha512-5bZ+3CjhAd9eChYTHsjy6TGxpOFSKgKKJPJxr293jTbfry2KDoWkhBb6TcPVB4NmzaPhMs1Frm9AZH7OD4Cjzw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-whitespace": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-whitespace/-/micromark-factory-whitespace-2.0.1.tgz",
      "integrity": "sha512-Ob0nuZ3PKt/n0hORHyvoD9uZhr+Za8sFoP+OnMcnWK5lngSzALgQYKMr9RJVOWLqQYuyn6ulqGWSXdwf6F80lQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-character": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/micromark-util-character/-/micromark-util-character-2.1.1.tgz",
      "integrity": "sha512-wv8tdUTJ3thSFFFJKtpYKOYiGP2+v96Hvk4Tu8KpCAsTMs6yi+nVmGh1syvSCsaxz45J6Jbw+9DD6g97+NV67Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-chunked": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-chunked/-/micromark-util-chunked-2.0.1.tgz",
      "integrity": "sha512-QUNFEOPELfmvv+4xiNg2sRYeS/P84pTW0TCgP5zc9FpXetHY0ab7SxKyAQCNCc1eK0459uoLI1y5oO5Vc1dbhA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-classify-character": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-classify-character/-/micromark-util-classify-character-2.0.1.tgz",
      "integrity": "sha512-K0kHzM6afW/MbeWYWLjoHQv1sgg2Q9EccHEDzSkxiP/EaagNzCm7T/WMKZ3rjMbvIpvBiZgwR3dKMygtA4mG1Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-combine-extensions": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-combine-extensions/-/micromark-util-combine-extensions-2.0.1.tgz",
      "integrity": "sha512-OnAnH8Ujmy59JcyZw8JSbK9cGpdVY44NKgSM7E9Eh7DiLS2E9RNQf0dONaGDzEG9yjEl5hcqeIsj4hfRkLH/Bg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-decode-numeric-character-reference": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/micromark-util-decode-numeric-character-reference/-/micromark-util-decode-numeric-character-reference-2.0.2.tgz",
      "integrity": "sha512-ccUbYk6CwVdkmCQMyr64dXz42EfHGkPQlBj5p7YVGzq8I7CtjXZJrubAYezf7Rp+bjPseiROqe7G6foFd+lEuw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-decode-string": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-decode-string/-/micromark-util-decode-string-2.0.1.tgz",
      "integrity": "sha512-nDV/77Fj6eH1ynwscYTOsbK7rR//Uj0bZXBwJZRfaLEJ1iGBR6kIfNmlNqaqJf649EP0F3NWNdeJi03elllNUQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "decode-named-character-reference": "^1.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-decode-numeric-character-reference": "^2.0.0",
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-encode": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-encode/-/micromark-util-encode-2.0.1.tgz",
      "integrity": "sha512-c3cVx2y4KqUnwopcO9b/SCdo2O67LwJJ/UyqGfbigahfegL9myoEFoDYZgkT7f36T0bLrM9hZTAaAyH+PCAXjw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT"
    },
    "node_modules/micromark-util-html-tag-name": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-html-tag-name/-/micromark-util-html-tag-name-2.0.1.tgz",
      "integrity": "sha512-2cNEiYDhCWKI+Gs9T0Tiysk136SnR13hhO8yW6BGNyhOC4qYFnwF1nKfD3HFAIXA5c45RrIG1ub11GiXeYd1xA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT"
    },
    "node_modules/micromark-util-normalize-identifier": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-normalize-identifier/-/micromark-util-normalize-identifier-2.0.1.tgz",
      "integrity": "sha512-sxPqmo70LyARJs0w2UclACPUUEqltCkJ6PhKdMIDuJ3gSf/Q+/GIe3WKl0Ijb/GyH9lOpUkRAO2wp0GVkLvS9Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-resolve-all": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-resolve-all/-/micromark-util-resolve-all-2.0.1.tgz",
      "integrity": "sha512-VdQyxFWFT2/FGJgwQnJYbe1jjQoNTS4RjglmSjTUlpUMa95Htx9NHeYW4rGDJzbjvCsl9eLjMQwGeElsqmzcHg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-sanitize-uri": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-sanitize-uri/-/micromark-util-sanitize-uri-2.0.1.tgz",
      "integrity": "sha512-9N9IomZ/YuGGZZmQec1MbgxtlgougxTodVwDzzEouPKo3qFWvymFHWcnDi2vzV1ff6kas9ucW+o3yzJK9YB1AQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-encode": "^2.0.0",
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-subtokenize": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/micromark-util-subtokenize/-/micromark-util-subtokenize-2.1.0.tgz",
      "integrity": "sha512-XQLu552iSctvnEcgXw6+Sx75GflAPNED1qx7eBJ+wydBb2KCbRZe+NwvIEEMM83uml1+2WSXpBAcp9IUCgCYWA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-symbol": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-symbol/-/micromark-util-symbol-2.0.1.tgz",
      "integrity": "sha512-vs5t8Apaud9N28kgCrRUdEed4UJ+wWNvicHLPxCa9ENlYuAY31M0ETy5y1vA33YoNPDFTghEbnh6efaE8h4x0Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT"
    },
    "node_modules/micromark-util-types": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/micromark-util-types/-/micromark-util-types-2.0.2.tgz",
      "integrity": "sha512-Yw0ECSpJoViF1qTU4DC6NwtC4aWGt1EkzaQB8KPPyCRR8z9TWeV0HbEFGTO+ZY1wB22zmxnJqhPyTpOVCpeHTA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT"
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/myst-common": {
      "version": "1.7.11",
      "resolved": "https://registry.npmjs.org/myst-common/-/myst-common-1.7.11.tgz",
      "integrity": "sha512-yfc7s9PU2xj8G7UEFBJeuizalgGPx+VOmqIQ2HyZn5xogR/oCrqw8YmAsDEf0ErDj2dt+1+PpFaMekqVRgFbrQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mdast": "^3.0.0",
        "myst-frontmatter": "^1.7.11",
        "myst-spec": "^0.0.5",
        "nanoid": "^4.0.0",
        "unified": "^10.1.2",
        "unist-util-remove": "^3.1.0",
        "unist-util-select": "^4.0.3",
        "unist-util-visit": "^4.1.2",
        "vfile": "^5.0.0",
        "vfile-message": "^3.0.0"
      }
    },
    "node_modules/myst-common/node_modules/unified": {
      "version": "10.1.2",
      "resolved": "https://registry.npmjs.org/unified/-/unified-10.1.2.tgz",
      "integrity": "sha512-pUSWAi/RAnVy1Pif2kAoeWNBa3JVrx0MId2LASj8G+7AiHWoKZNTomq6LG326T68U7/e263X6fTdcXIy7XnF7Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0",
        "bail": "^2.0.0",
        "extend": "^3.0.0",
        "is-buffer": "^2.0.0",
        "is-plain-obj": "^4.0.0",
        "trough": "^2.0.0",
        "vfile": "^5.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/myst-directives": {
      "version": "1.5.14",
      "resolved": "https://registry.npmjs.org/myst-directives/-/myst-directives-1.5.14.tgz",
      "integrity": "sha512-ngx4j5VjZvDggG3WcoflB++ce5Y+0U8uFdbWgOjdYy786GYH5gMR/0d+bmhFCNcOXKZaevJMvnXj4aaFz2YNPg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "classnames": "^2.3.2",
        "csv-parse": "^5.5.5",
        "js-yaml": "^4.1.0",
        "myst-common": "^1.7.11",
        "myst-spec-ext": "^1.7.11",
        "nanoid": "^4.0.2",
        "unist-util-select": "^4.0.3",
        "vfile": "^5.3.7"
      }
    },
    "node_modules/myst-frontmatter": {
      "version": "1.7.11",
      "resolved": "https://registry.npmjs.org/myst-frontmatter/-/myst-frontmatter-1.7.11.tgz",
      "integrity": "sha512-oc0mdl36Fw6OLifFTc4oHUsgWcFCg1KAVQQ0KgWUsiUXpUecaZZX1yzwB2HeH37RmXLYT5Lv/SqF9pqEPBwJew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "credit-roles": "^2.1.0",
        "doi-utils": "^2.0.5",
        "myst-toc": "^0.1.2",
        "orcid": "^1.0.0",
        "simple-validators": "^1.1.0",
        "spdx-correct": "^3.2.0"
      }
    },
    "node_modules/myst-parser": {
      "version": "1.5.14",
      "resolved": "https://registry.npmjs.org/myst-parser/-/myst-parser-1.5.14.tgz",
      "integrity": "sha512-x/PvGX9p0YO3F4dgRZYm6IooG5f6OLcNmeLwQU+SZFmYg2OMuQBUdnNMjDPfMGKkIkMx9s22fbIWXye/ZYLqoQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "he": "^1.2.0",
        "markdown-it": "^12.3.2",
        "markdown-it-amsmath": "^0.4.0",
        "markdown-it-deflist": "^2.1.0",
        "markdown-it-dollarmath": "^0.5.0",
        "markdown-it-footnote": "^3.0.3",
        "markdown-it-front-matter": "^0.2.3",
        "markdown-it-myst": "1.0.11",
        "markdown-it-myst-extras": "0.3.0",
        "markdown-it-task-lists": "^2.1.1",
        "myst-common": "^1.7.11",
        "myst-directives": "^1.5.14",
        "myst-roles": "^1.5.14",
        "myst-spec": "^0.0.5",
        "unified": "^10.1.1",
        "unist-builder": "^3.0.0",
        "unist-util-remove": "^3.1.0",
        "unist-util-select": "^4.0.3",
        "unist-util-visit": "^4.1.0",
        "vfile": "^5.3.7"
      }
    },
    "node_modules/myst-parser/node_modules/unified": {
      "version": "10.1.2",
      "resolved": "https://registry.npmjs.org/unified/-/unified-10.1.2.tgz",
      "integrity": "sha512-pUSWAi/RAnVy1Pif2kAoeWNBa3JVrx0MId2LASj8G+7AiHWoKZNTomq6LG326T68U7/e263X6fTdcXIy7XnF7Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0",
        "bail": "^2.0.0",
        "extend": "^3.0.0",
        "is-buffer": "^2.0.0",
        "is-plain-obj": "^4.0.0",
        "trough": "^2.0.0",
        "vfile": "^5.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/myst-parser/node_modules/unist-builder": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/unist-builder/-/unist-builder-3.0.1.tgz",
      "integrity": "sha512-gnpOw7DIpCA0vpr6NqdPvTWnlPTApCTRzr+38E6hCWx3rz/cjo83SsKIlS1Z+L5ttScQ2AwutNnb8+tAvpb6qQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/myst-roles": {
      "version": "1.5.14",
      "resolved": "https://registry.npmjs.org/myst-roles/-/myst-roles-1.5.14.tgz",
      "integrity": "sha512-wVfVllNsUWmHHIC7hFyopCATdP+gh45KXNgZArJ4s6Zw8am47tS5MgqUycjzBHf9i1aJrtjDf6RiJLN5uJ4rsw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "myst-common": "^1.7.11",
        "myst-spec-ext": "^1.7.11"
      }
    },
    "node_modules/myst-spec": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/myst-spec/-/myst-spec-0.0.5.tgz",
      "integrity": "sha512-L/4TV1l5ZbWUOgSnXqiYrx192SV4I+HqjX7TBQ4k02/heeNFckpkUIyLulraap5heTyLcJs8UYBxu+Kv5JiiRw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/myst-spec-ext": {
      "version": "1.7.11",
      "resolved": "https://registry.npmjs.org/myst-spec-ext/-/myst-spec-ext-1.7.11.tgz",
      "integrity": "sha512-FB+ZCgqoftccKCT4edGYudNUGcPdnhNKydQf4Gjbyc99ZyFeYlqgVF416sRJlTVD5xxXazRa9uheCjEQ45lYPA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "myst-spec": "^0.0.5"
      }
    },
    "node_modules/myst-toc": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/myst-toc/-/myst-toc-0.1.3.tgz",
      "integrity": "sha512-X5MrAeR+jlanAd7xNsDeC+A8GDQRjhj5u9lmwtsIMzHuxzZ5ttt/91ZJKCh0MfeQUgtHPzp1ZAeeEHMLjXAsUQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "simple-validators": "^1.0.6"
      }
    },
    "node_modules/nanoid": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-4.0.2.tgz",
      "integrity": "sha512-7ZtY5KTCNheRGfEFxnedV5zFiORN1+Y1N6zvPTnHQd8ENUvfaDBeuJDZb2bN/oXwXxu3qkTXDzy57W5vAmDTBw==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.js"
      },
      "engines": {
        "node": "^14 || ^16 || >=18"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nth-check": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.1.1.tgz",
      "integrity": "sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "boolbase": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/fb55/nth-check?sponsor=1"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/orcid": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/orcid/-/orcid-1.0.0.tgz",
      "integrity": "sha512-zdRFh+1FAZt0Vy9XaKNu+5h4zXC2pkunZH8MV7tSGoq54skik8nxn5ks3E9f33m+tPxuliSRzEHz7owb1Z0HYg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "orcid": "dist/orcid.cjs"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prettier": {
      "version": "3.5.3",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.5.3.tgz",
      "integrity": "sha512-QQtaxnoDJeAkDvDKWCLiwIXkTgRhwYDEQCghU9Z6q03iyek/rxRh/2lC3HB7P8sWT2xC/y5JDctPLBIGzHKbhw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "prettier": "bin/prettier.cjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/prettier-linter-helpers": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/prettier-linter-helpers/-/prettier-linter-helpers-1.0.0.tgz",
      "integrity": "sha512-GbK2cP9nraSSUF9N2XwUwqfzlAFlMNYYl+ShE/V+H8a9uNl/oUqB1w2EL54Jh0OlyRSd8RfWYJ3coVS4TROP2w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-diff": "^1.1.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/remark-parse": {
      "version": "11.0.0",
      "resolved": "https://registry.npmjs.org/remark-parse/-/remark-parse-11.0.0.tgz",
      "integrity": "sha512-FCxlKLNGknS5ba/1lmpYijMUzX2esxW5xQqjWxw2eHFfS2MSdaHVINFmhjo+qN1WhZhNimq0dZATN9pH0IDrpA==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "unified": "^11.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "deprecated": "Rimraf versions prior to v4 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/semver": {
      "version": "7.7.2",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.2.tgz",
      "integrity": "sha512-RF0Fw+rO5AMf9MAyaRXI4AV0Ulj5lMHqVxxdSgiVbixSCXoEmmX/jk0CuJw4+3SqroYO9VoUh+HcuJivvtJemA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/simple-validators": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/simple-validators/-/simple-validators-1.1.0.tgz",
      "integrity": "sha512-bMYR0+Wvc3wLOvB695GXQfP5dz/HiVZq03hZVl2AW4Wy5J5pypeDn+alDPMsVoJ9wLbT3AKhyIGmimT/DPa9bg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/spdx-correct": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.2.0.tgz",
      "integrity": "sha512-kN9dJbvnySHULIluDHy32WHRUu3Og7B9sbY7tsFLctQkIqnMh3hErYgdMjTYuqmcXX+lK5T1lnUt3G7zNswmZA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "node_modules/spdx-exceptions": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.5.0.tgz",
      "integrity": "sha512-PiU42r+xO4UbUS1buo3LPJkjlO7430Xn5SVAhdpzzsPHsjbYVflnnFdATgabnLude+Cqu25p6N+g2lw/PFsa4w==",
      "dev": true,
      "license": "CC-BY-3.0"
    },
    "node_modules/spdx-expression-parse": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
      "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "node_modules/spdx-license-ids": {
      "version": "3.0.21",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.21.tgz",
      "integrity": "sha512-Bvg/8F5XephndSK3JffaRqdT+gyhfqIPwDHpX80tJrF8QQRYMo8sNMeaZ2Dp5+jhwKnUmIOyFFQfHRkjJm5nXg==",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/synckit": {
      "version": "0.11.8",
      "resolved": "https://registry.npmjs.org/synckit/-/synckit-0.11.8.tgz",
      "integrity": "sha512-+XZ+r1XGIJGeQk3VvXhT6xx/VpbHsRzsTkGgF6E5RX9TTXD0118l87puaEBZ566FhqblC6U0d4XnubznJDm30A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@pkgr/core": "^0.2.4"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/synckit"
      }
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/trough": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/trough/-/trough-2.2.0.tgz",
      "integrity": "sha512-tmMpK00BjZiUyVyvrBK7knerNgmgvcV/KLVyuma/SC+TQN167GrMRciANTz09+k3zW8L8t60jWO1GpfkZdjTaw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "1.4.3",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-1.4.3.tgz",
      "integrity": "sha512-i3eMG77UTMD0hZhgRS562pv83RC6ukSAC2GMNWc+9dieh/+jDM5u5YG+NHX6VNDRHQcHwmsTHctP9LhbC3WxVw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=16"
      },
      "peerDependencies": {
        "typescript": ">=4.2.0"
      }
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typescript": {
      "version": "5.8.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.8.3.tgz",
      "integrity": "sha512-p1diW6TqL9L07nNxvRMM7hMMw4c5XOo/1ibL4aAIGmSAt9slTE1Xgw5KWuof2uTOvCg9BY7ZRi+GaF+7sfgPeQ==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/uc.micro": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/uc.micro/-/uc.micro-1.0.6.tgz",
      "integrity": "sha512-8Y75pvTYkLJW2hWQHXxoqRgV7qb9B+9vFEtidML+7koHUFapnVJAZ6cKs+Qjz5Aw3aZWHMC6u0wJE3At+nSGwA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/undici-types": {
      "version": "6.19.8",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.19.8.tgz",
      "integrity": "sha512-ve2KP6f/JnbPBFyobGHuerC9g1FYGn/F8n1LWTwNxCEzd6IfqTwUQcNXgEtmmQ6DlRrC1hrSrBnCZPokRrDHjw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unified": {
      "version": "11.0.5",
      "resolved": "https://registry.npmjs.org/unified/-/unified-11.0.5.tgz",
      "integrity": "sha512-xKvGhPWw3k84Qjh8bI3ZeJjqnyadK+GEFtazSfZv/rKeTkTjOJho6mFqh2SM96iIcZokxiOpg78GazTSg8+KHA==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "bail": "^2.0.0",
        "devlop": "^1.0.0",
        "extend": "^3.0.0",
        "is-plain-obj": "^4.0.0",
        "trough": "^2.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unified/node_modules/@types/unist": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-3.0.3.tgz",
      "integrity": "sha512-ko/gIFJRv177XgZsZcBwnqJN5x/Gien8qNOn0D5bQU/zAzVf9Zt3BlcUiLqhV9y4ARk0GbT3tnUiPNgnTXzc/Q==",
      "license": "MIT"
    },
    "node_modules/unified/node_modules/unist-util-stringify-position": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-stringify-position/-/unist-util-stringify-position-4.0.0.tgz",
      "integrity": "sha512-0ASV06AAoKCDkS2+xw5RXJywruurpbC4JZSm7nr7MOt1ojAzvyyaO+UxZf18j8FCF6kmzCZKcAgN/yu2gm2XgQ==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unified/node_modules/vfile": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/vfile/-/vfile-6.0.3.tgz",
      "integrity": "sha512-KzIbH/9tXat2u30jf+smMwFCsno4wHVdNmzFyL+T/L3UGqqk6JKfVqOFOZEpZSHADH1k40ab6NUIXZq422ov3Q==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unified/node_modules/vfile-message": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/vfile-message/-/vfile-message-4.0.2.tgz",
      "integrity": "sha512-jRDZ1IMLttGj41KcZvlrYAaI3CfqpLpfpf+Mfig13viT6NKvRzWZ+lXz0Y5D60w6uJIBAOGq9mSHf0gktF0duw==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "unist-util-stringify-position": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-builder": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/unist-builder/-/unist-builder-4.0.0.tgz",
      "integrity": "sha512-wmRFnH+BLpZnTKpc5L7O67Kac89s9HMrtELpnNaE6TAobq5DTZZs5YaTQfAZBA9bFPECx2uVAPO31c+GVug8mg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-builder/node_modules/@types/unist": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-3.0.3.tgz",
      "integrity": "sha512-ko/gIFJRv177XgZsZcBwnqJN5x/Gien8qNOn0D5bQU/zAzVf9Zt3BlcUiLqhV9y4ARk0GbT3tnUiPNgnTXzc/Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unist-util-is": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/unist-util-is/-/unist-util-is-5.2.1.tgz",
      "integrity": "sha512-u9njyyfEh43npf1M+yGKDGVPbY/JWEemg5nH05ncKPfi+kBbKBJoTdsogMu33uhytuLlv9y0O7GH7fEdwLdLQw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-remove": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/unist-util-remove/-/unist-util-remove-3.1.1.tgz",
      "integrity": "sha512-kfCqZK5YVY5yEa89tvpl7KnBBHu2c6CzMkqHUrlOqaRgGOMp0sMvwWOVrbAtj03KhovQB7i96Gda72v/EFE0vw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0",
        "unist-util-is": "^5.0.0",
        "unist-util-visit-parents": "^5.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-select": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/unist-util-select/-/unist-util-select-4.0.3.tgz",
      "integrity": "sha512-1074+K9VyR3NyUz3lgNtHKm7ln+jSZXtLJM4E22uVuoFn88a/Go2pX8dusrt/W+KWH1ncn8jcd8uCQuvXb/fXA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0",
        "css-selector-parser": "^1.0.0",
        "nth-check": "^2.0.0",
        "zwitch": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-stringify-position": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/unist-util-stringify-position/-/unist-util-stringify-position-3.0.3.tgz",
      "integrity": "sha512-k5GzIBZ/QatR8N5X2y+drfpWG8IDBzdnVj6OInRNWm1oXrzydiaAT2OQiA8DPRRZyAKb9b6I2a6PxYklZD0gKg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-visit": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/unist-util-visit/-/unist-util-visit-4.1.2.tgz",
      "integrity": "sha512-MSd8OUGISqHdVvfY9TPhyK2VdUrPgxkUtWSuMHF6XAAFuL4LokseigBnZtPnJMu+FbynTkFNnFlyjxpVKujMRg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0",
        "unist-util-is": "^5.0.0",
        "unist-util-visit-parents": "^5.1.1"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-visit-parents": {
      "version": "5.1.3",
      "resolved": "https://registry.npmjs.org/unist-util-visit-parents/-/unist-util-visit-parents-5.1.3.tgz",
      "integrity": "sha512-x6+y8g7wWMyQhL1iZfhIPhDAs7Xwbn9nRosDXl7qoPTSCy0yNxnKc+hWokFifWQIDGi154rdUqKvbCa4+1kLhg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0",
        "unist-util-is": "^5.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/vfile": {
      "version": "5.3.7",
      "resolved": "https://registry.npmjs.org/vfile/-/vfile-5.3.7.tgz",
      "integrity": "sha512-r7qlzkgErKjobAmyNIkkSpizsFPYiUPuJb5pNW1RB4JcYVZhs4lIbVqk8XPk033CV/1z8ss5pkax8SuhGpcG8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0",
        "is-buffer": "^2.0.0",
        "unist-util-stringify-position": "^3.0.0",
        "vfile-message": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/vfile-message": {
      "version": "3.1.4",
      "resolved": "https://registry.npmjs.org/vfile-message/-/vfile-message-3.1.4.tgz",
      "integrity": "sha512-fa0Z6P8HUrQN4BZaX05SIVXic+7kE3b05PWAtPuYP9QLHsLKYR7/AlLW3NtOrpXRLeawpDLMsVkmk5DG0NXgWw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0",
        "unist-util-stringify-position": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zwitch": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/zwitch/-/zwitch-2.0.4.tgz",
      "integrity": "sha512-bXE4cR/kVZhKZX/RjPEflHaKVhUVl85noU3v6b8apfQEc1x4A+zBxjZ4lN8LqGd6WZ3dl98pY4o717VFmoPp+A==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    }
  }
}

```

## README.md

```markdown
# mdmd

Membrane Design MarkDown (MDMD) is a strategy for specifying general solutions that utilizes a _bilayer_ of specifications: A "unit" layer (lower-level, 1:1 mapping from .md to implementation), and a "composition" layer (higher-level, many-to-many mapping). The specification is built specifically to enhance AI-assisted and AI-driven development.

```

## .prettierrc.js

```javascript
module.exports = {
  printWidth: 100, // Max line length
  tabWidth: 2, // Indent size
  useTabs: false, // Use spaces instead of tabs
  semi: true, // Print semicolons at the ends of statements
  singleQuote: true, // Use single quotes instead of double quotes
  trailingComma: 'es5', // Trailing commas where valid in ES5 (objects, arrays, etc.)
  bracketSpacing: true, // Print spaces between brackets in object literals
  arrowParens: 'always', // Always include parens around a sole arrow function parameter
  endOfLine: 'lf', // Line ending
};

```

## AgentOps/03_AGENT_TO_AGENT_CONVERSATION.md

```markdown
---
title: AgentOps - Agent to Agent Conversation Log
description: A log of messages exchanged between AI agents, facilitated by a human operator, for the Nucleus project.
version: 1.0 
date: 2025-05-19
---

# Agent to Agent Conversation

Sometimes, AI agents need to get help from other AI agents. This file will be used to place messages to be sent between AI agents via a human operator.

## Message 1: Cascade (Via User) to Gemini 2.5 Pro

**Subject:** Full Codebase Review

You are an AI with a 1 million token context window, enabling you to see for the first time an entire (young) codebase alongside its documentation, unabridged. This has opened up profound new methodologies for checking the logical consistency of a project, making sure all minds point in the same direction, toward the same shared goals.

Our style of development is "docs-first", which is due to a unique agentic development style that emphasizes documentation as the primary source of truth for the codebase. This is a departure from the traditional "code-first" approach, where documentation is often seen as secondary or even secondary to code. This is noted to you so that you have a potential tie-breaker of authority when viewing internal inconsistencies of the codebase, which are expected to be present. 

### Internal Consistency Check:

Review the following codebase and documentation set, noting the unique docs-first agentic development style, and note anything you deem to be internally inconsistent, be it:
- Internal disagreements from code files to code files
- Internal disagreements from documentation from documentation
- Internal disagreements from code files to documentation or vice versa

### Technical Debt Review:

Take note of any obvious to-do items, placeholders, workarounds, or other technical debt that needs accounting for. 

### Informed Next Steps:

Based on the completion state of the codebase and the documentation outlining the project vision, roadmap, and goals, outline the next steps for development.

### Special Requests:

{Special Requests}

### Workspace file census:

{Workspace File Census}

### Codebase Dump:

-
--
---
----
-----
------
-------

{Codebase Dump}

-------
------
-----
----
---
--
-

## Message 2: Gemini 2.5 Pro to Cascade (Via User)

{Message}

---
---

## Message 3: Cascade to Gemini 2.5 Pro (Via User)

Pass 2:

You have correctly identified the large scale of the task given to you. This is a case where you are actually capable of improving your response by performing another round of reasoning, based on your first response. In doing so, you'll be able to revisit parts of the codebase with new focus. This will enable you to refine and expand your recommendations with substantial scale, depth, and accuracy (according to pre-publication results).

It is possible that there were hallucinated file paths or other small inaccuracies in your last response, as this is a common stumbling point for LLMs overall. Please make sure to verify the accuracy of your response. 

Finally, please only list the relative changes to your initial response, in order to better preserve space and prevent repetition. The initial response followed by any refinements will be supplied to an AI agent to bootstrap agentic development for the next steps. (You can see what was last being worked on in 02_CURRENT_SESSION_STATE.md). 

---
---

## Message 4: Gemini 2.5 Pro to Cascade (Via User)

{Message}

---
---

## Message 5: Cascade to Gemini 2.5 Pro (Via User)

Final Pass:

This will be the last attempt given to you to inspect the full codebase and documentation set to refine, expand, and deepen your response. Utilize your latest findings to inform your choices of where to put your attention in this final pass. The "Grounding with Google Search" has been enabled for this final pass, in case you have any research or questions that require external sources, or any claims of fact that should be defined by an external citation. Thank you for your efforts. Your response will be used to bootstrap the next agentic development session (but may not include the messages before this as a means of preserving context, so you are encouraged to be comprehensive in the final response). 

---
---

## Message 6: Gemini 2.5 Pro to Cascade (Via User)

{Message}
```

## AgentOps/02_CURRENT_SESSION_STATE.md

```markdown
---
title: 'Agent Session State - MDMD Project'
description: "Tracks the current state of the agent's operations for developing the MDMD MyST plugin and specifications."
version: '1.9' # Increment version
date: 2025-05-31
see_also:
  - title: 'MDMD Methodology'
    link: ../00_START_HERE_METHODOLOGY.md
  - title: 'MDMD Project Context'
    link: ../01_PROJECT_CONTEXT.md
  - title: 'MDMD Specification v0.1'
    link: ../../MDMD_Specification/MDMD.md
---

## Agent State - MDMD Project

- **Agent Version:** GitHub Copilot
- **LLM Used:** Copilot's internal model
- **Current Overall Goal:** Implement core functionality for `unitDirective.ts` and `compositionDirective.ts`, focusing on robust Markdown/MyST string parsing and AST construction, resolving critical linting issues, and testing the directives.
- **Current Focus Document:** `src/directives/compositionDirective.ts` and `src/directives/unitDirective.ts`.
- **Action for Current Document:** 1. Check for and address any remaining critical linting/type issues in both directive files. 2. Perform a clean build and test execution.
- **Overall Plugin Progress:** Project builds successfully. String parsing to AST is implemented in both directives. Awaiting final lint check and test run.

## Log of Key Actions / Decisions / Issues (Newest First)

- **2025-05-31 - User emphasized prioritizing expressive, readable code over strict stylistic linting. Will proceed with this guidance. User also noted manual edits to directive files; will re-read them.**
- **2025-05-31 - User confirmed `npm run clean && npm run build` succeeds. Noted that a linting warning persists in `compositionDirective.ts`. Acknowledged user's concern about potential "co-hallucination" and will proceed based on direct evidence and tool outputs.**
- 2025-05-31 - `compositionDirective.ts` is building successfully. The `mystParse(string) as Root` approach is confirmed. Applying this logic to `unitDirective.ts`.
- 2025-05-31 - Continuing to address the `mystParse` "Unsafe call" error. The direct cast to `Root` in `compositionDirective.ts` resolved the build issue.
- 2025-05-31 - Continuing to address the `mystParse` "Unsafe call" error. The current approach is to use a more explicit type definition for the imported `mystParse` function to aid TypeScript's type inference.
- 2025-05-31 - User provided detailed plan from "Long Context Gemini" to address `mystParse` "Unsafe call" error. Investigated `unified` pipeline, but reverted to direct `mystParse` as it seems to be the intended API. `myst-parser` dependencies confirmed (`unified`, `markdown-it-myst`).
- 2025-05-31 - User initiated a new set of tasks: 1. Refine `markdownlint.json`. 2. Implement `extractPrimaryCodeBlock` in `unitDirective.ts`. 3. Refine `unitDirective.ts` run function. 4. Refine `compositionDirective.ts` run function. 5. Update session state.
- 2025-05-31 - Resolved TypeScript errors in `compositionDirective.ts` related to `mystParse` usage. Build is succeeding.
- 2025-05-31 - Attempting to fix `mystParse` usage in `compositionDirective.ts`. Previous `VFile` attempt was incorrect; `mystParse` seems to expect a string. Addressing remaining type and linting errors.
- 2025-05-31 - Still working on fixing TypeScript error `TS1005: 'from' expected` in `src/directives/compositionDirective.ts:12`.
- 2025-05-31 - Identified TypeScript error `TS1005: 'from' expected` in `src/directives/compositionDirective.ts:12`. Current task is to fix this error.
- 2025-05-31 - User initiated research into `myst-parser` for string-to-AST conversion. Tasked with updating `compositionDirective.ts` and `unitDirective.ts` with correct `mystParse` usage.
- YYYY-MM-DD HH:MM - Initial session setup for MDMD plugin development.
- ...

## Agent Notes & Reminders (Focus for this Session)

- **Primary Goal:** 1. Resolve critical linting/type warnings (especially "Unsafe call") in `compositionDirective.ts`. 2. Successfully parse `leadingMarkdown` and `trailingMarkdown` in `unitDirective.ts` using the `mystParse(string) as Root` pattern.
- Prioritize code safety and correctness. Be more assertive with overly strict stylistic linting rules if they impede progress on core functionality.
- After `unitDirective.ts` is updated and `compositionDirective.ts` is as clean as practically possible (focusing on safety), perform a clean build.
- Crucially, capture and report the console output from `myst build test-doc.myst.md --html` to verify directive options and body parsing for both directives.

## Immediate Next Step for AI Assistant

1.  **Read `src/directives/compositionDirective.ts` (due to manual user edits).**
2.  **Read `src/directives/unitDirective.ts` (due to manual user edits).**
3.  **Get current linting/type warnings for `src/directives/compositionDirective.ts`.**
4.  **Attempt to fix critical warnings (e.g., "Unsafe call") in `src/directives/compositionDirective.ts`.**
5.  **Refine `src/directives/unitDirective.ts`:**
    - Apply `mystParse(string) as Root` pattern for `leadingMarkdown` and `trailingMarkdown`.
    - Ensure `Root` is imported from `mdast`.
    - Correct `u` builder formatting for critical issues.
6.  **Build & Test:**
    - Run `npm run clean && npm run build`.
    - If successful, run `myst build test-doc.myst.md --html`.
    - Report build status and the full console output from `myst build`.
7.  **Update Session State:** Reflect the outcome of build and test.

```

## AgentOps/01_PROJECT_CONTEXT.md

```markdown
---
title: AgentOps - MDMD Project Context
description: High-level project context for developing the MDMD MyST plugin, including vision, goals, and tech stack.
version: 1.0
date: 2025-05-31
---

# MDMD: Project Context (MyST Plugin Development)

**Attention AI Assistant:** This document provides high-level context for the current phase of the **MDMD (Membrane Design MarkDown)** project: the development of a **MyST Markdown plugin package**. Refer to `MDMD_Specification/MDMD.md` for the core definition of MDMD, and `docs/Concepts/` for its philosophy and intent. **The primary source for your behavior and tool usage guidelines is `.github/copilot-instructions.md` in the project root.**

## Vision & Goal (for this Phase)

**Vision:** To create a MyST Markdown extension that enables users to specify complex systems using `{unit}` and `{composition}` primitives, facilitating human-AI collaboration in design and implementation across diverse domains.
**Current Goal:** Develop a foundational MyST plugin (TypeScript/Deno 2 - TBD) that can parse `{unit}` and `{composition}` directives from `.myst.md` files into a well-defined Abstract Syntax Tree (AST) structure. This AST will then serve as the basis for LLM-driven interpretation, code generation, and specification analysis.

## Key Technologies (for Plugin Development)

- **Core Specification Language:** MDMD, as defined in `MDMD_Specification/MDMD.md`.
- **Host Environment:** MyST Markdown (`mystmd` CLI). Our plugin must be loadable and executable by `mystmd`.
- **Plugin Development Language:** **TypeScript** (investigating Deno 2 for the dev environment, with Node.js-compatible module output, OR fallback to Node.js/TypeScript if Deno interop is too complex for MyST plugins).
- **Key MyST/Markdown Libraries:**
  - `mystmd` plugin APIs (for defining directives, accessing parser utilities).
  - `unist`/`mdast` conventions (as MyST AST is based on these).
  - JavaScript/TypeScript AST manipulation utilities if needed.
- **Development Environment:** VS Code, GitHub Copilot, Git.
- **LLMs (as Consumers/Generators of MDMD, not for plugin code itself yet):** Gemini, OpenAI models, etc. The plugin enables LLMs to work with MDMD more effectively by providing a structured AST.

## Architecture Snapshot (of the MyST Plugin)

The plugin will:

1.  Define new MyST directives: `{unit}` and `{composition}`.
2.  Provide parsing logic for the options of these directives (e.g., `id`, `unit-type`, `composition-type`, `language`, `source-ref`).
3.  Process the body of these directives, recognizing standard Markdown content and fenced code blocks (for `{unit}`) or Mermaid diagrams (for `{composition}`).
4.  Construct corresponding nodes in the MyST AST, making the directive's options and processed body content programmatically accessible.
    - Example `{unit}` AST node might have properties like `unitId`, `unitType`, `unitLanguage`, `unitSourceRef`, `codeBlockNode` (a standard MyST `code` node), and `descriptionNodes` (an array of standard MyST block content nodes).

## Data Flow (MDMD File -> MyST Parser -> Our Plugin -> MyST AST)

1.  User authors a `.myst.md` file containing `{unit}` and `{composition}` directives.
2.  `mystmd` CLI parses the file.
3.  When `mystmd` encounters our directives, it invokes our plugin's registered parsing logic.
4.  Our plugin processes the directive's options and body.
5.  Our plugin returns a new MyST AST node (or a modified subtree) representing the parsed MDMD directive.
6.  This enriched AST is then available for further MyST processing (e.g., rendering, other transformations, or export as JSON for external tools like our future "Sync Engine").

## Current Focus for Plugin Development

Refer to `AgentOps/02_CURRENT_SESSION_STATE.md` for the specific task related to implementing or refining the MyST plugin. Initial tasks will focus on parsing the `{unit}` directive.

```

## AgentOps/00_START_HERE_METHODOLOGY.md

```markdown
---
title: AgentOps - MDMD Development Methodology
description: Supplementary AgentOps methodology for AI-assisted development for the MDMD project.
version: 1.0
date: 2025-05-31 
---

# AgentOps Methodology for MDMD

## Introduction

This document outlines supplementary AgentOps methodology for AI-assisted development used in the **MDMD (Membrane Design MarkDown)** project. **The primary source of specific rules and guidelines for the AI development assistant (currently GitHub Copilot) is the `.github/copilot-instructions.md` file in the project root.** This document provides additional project-specific context and workflow details relevant to developing MDMD itself (the MyST plugin and surrounding specifications/tooling).

Following this process helps maintain context, track progress, and ensure efficient collaboration between human developers/leads and AI assistants. This methodology also serves as a framework for generating high-quality training data for future AI development agents.

## Core Principles (Supplementary to `.github/copilot-instructions.md`)

**(Review the foundational principles like Quality over Expedience, No Assumptions, Specification Rigor, Tool Usage defined in [`.github/copilot-instructions.md`](../.github/copilot-instructions.md) first.)**

1.  **Stateful Context Management**: Using dedicated documents (`01_PROJECT_CONTEXT.md`, `02_CURRENT_SESSION_STATE.md`) to preserve context for all collaborators (Human, Long Context Gemini, GitHub Copilot). Accurate state tracking is paramount.
2.  **Incremental Progress Tracking**: Breaking work into manageable tasks and tracking the immediate focus (Session State).
3.  **Structured Collaboration**: AI assistants use the provided state documents to understand the current focus and assist with the defined "Next Step", following specific interaction patterns. Human leads provide guidance, feedback, and validation.
4.  **Continuous Documentation/Specification**: Updating state documents in real-time as progress is made. MDMD specifications (`{unit}` and `{composition}` directives) are the core artifacts being developed and refined.
5.  **Adherence to MDMD Specification:** Development of the MDMD plugin and examples must align with the `MDMD_Specification/MDMD.md` document. For TypeScript/plugin development, adhere to modern best practices, SOLID principles, and effective use of MyST plugin APIs.
6.  **Test-Driven Development (TDD) (Aspirational):** Aim to write tests for MyST plugin functionality where practical.
7.  **TRACS Methodology for Document Reviews**: (Retained for awareness) From time to time, for large-scale reviews of MDMD specification files themselves, TRACS may be employed: Transform, Realign, Archive, Consolidate, Solidify.

## Roles of Key AgentOps Files

*   **`.github/copilot-instructions.md` (Project Root):** The primary authority for GitHub Copilot's behavior, core principles, and tool usage.
*   **`MDMD_Specification/MDMD.md`**: The "Why & What" of MDMD itself. Core definition of `{unit}` and `{composition}`.
*   **`docs/Concepts/CONCEPTS_MDMD_PHILOSOPHY.md` & `CONCEPTS_CORE_PRIMITIVES_INTENT.md`**: The philosophical underpinnings and goals.
*   **`00_START_HERE_METHODOLOGY.md` (This file):** Supplementary workflow details.
*   **`01_PROJECT_CONTEXT.md`**: The "What" for the current development effort (e.g., building the MyST plugin). Provides stable, high-level technical context: goals, tech stack for the plugin (TypeScript, MyST APIs), architectural summary of the plugin.
*   **`02_CURRENT_SESSION_STATE.md`**: The "Now". Captures the **microstate**. Dynamic and updated frequently. Details the *specific task*, *last action*, relevant *code*, *errors/blockers*, and the *immediate next step*. **This is your primary focus.**
*   **`03_AGENT_TO_AGENT_CONVERSATION.md`**: Retained as a template for structured multi-pass LLM interactions if needed for complex analysis or generation tasks related to MDMD development.

## Workflow Process

1.  **Session Start:** Developer/Lead shares `02_CURRENT_SESSION_STATE.md` (and potentially others like `01_PROJECT_CONTEXT.md` or `MDMD_Specification/MDMD.md`) with the AI. AI reviews state, context, and plan.
2.  **Task Execution:** Focus on the **Immediate Next Step** defined in `02_CURRENT_SESSION_STATE.md`. GitHub Copilot assists with file modifications, TypeScript code generation for the MyST plugin, debugging, analysis, etc., **following the guidelines in `.github/copilot-instructions.md`**.
3.  **Code Modification:** Use the `edit_file` tool according to guidelines.
4.  **Check Current State:** Read `02_CURRENT_SESSION_STATE.md` carefully.
5.  **State Update:** Crucially, GitHub Copilot must accurately update `02_CURRENT_SESSION_STATE.md` as the first action ('Step Zero') of its turn.
6.  **Specification Development:** MDMD files using `{unit}` and `{composition}` will be created and refined. Adhere to `MDMD_Specification/MDMD.md`.

## Nagging Thoughts / Best Practices (To Consider Alongside `.github/copilot-instructions.md`)

1.  **Correctness & Alignment:** Ask: "Does this change align with `01_PROJECT_CONTEXT.md` (for the plugin dev), `MDMD_Specification/MDMD.md`, and the core principles in `.github/copilot-instructions.md`?"
2.  **Avoid Technical Debt in Plugin:** Prioritize clean, maintainable TypeScript code for the MyST plugin.
3.  **Robust Plugin Solutions:** Ask: "Is this MyST plugin code robust? Does it handle AST manipulation correctly? Does it align with MyST plugin best practices?"
4.  **Simplicity & Clarity in Plugin Code.**
5.  **Use Tools Correctly.**
6.  **Update State Documents.**

By adhering to this methodology and `.github/copilot-instructions.md`, you will significantly contribute to the successful development of the MDMD MyST plugin and its surrounding specifications.
```

## AgentOps/Scripts/tree_gitignore.py

```python
import os
import argparse
from pathlib import Path
import pathspec

def find_gitignore(start_path):
    """Find the .gitignore file in the start_path or its parents."""
    current_path = Path(start_path).resolve()
    while True:
        gitignore_path = current_path / '.gitignore'
        if gitignore_path.is_file():
            return gitignore_path
        parent = current_path.parent
        if parent == current_path: # Reached root
            return None
        current_path = parent

def load_gitignore_patterns(gitignore_path):
    """Load patterns from a .gitignore file."""
    if not gitignore_path:
        return []
    with open(gitignore_path, 'r') as f:
        return [line for line in f.read().splitlines() if line and not line.strip().startswith('#')]

def build_tree(directory, spec, gitignore_root, prefix=''):
    """Recursively build the directory tree string."""
    current_dir_path = Path(directory).resolve()
    try:
        # Get absolute paths first
        items_abs = sorted(list(current_dir_path.iterdir()), key=lambda x: (x.is_file(), x.name.lower()))
    except PermissionError:
        print(f"{prefix}└── [ACCESS DENIED] {current_dir_path.name}/")
        return
    except FileNotFoundError:
        print(f"Error: Directory not found: {current_dir_path}")
        return

    # Filter items based on .gitignore spec using paths relative to gitignore_root
    filtered_items_abs = [
        item_abs for item_abs in items_abs
        if not spec.match_file(str(item_abs.relative_to(gitignore_root)))
    ]

    pointers = ['├── ' for _ in range(len(filtered_items_abs) - 1)] + ['└── ']

    for pointer, item_abs_path in zip(pointers, filtered_items_abs):
        print(f"{prefix}{pointer}{item_abs_path.name}{'/' if item_abs_path.is_dir() else ''}")

        if item_abs_path.is_dir():
            extension = '│   ' if pointer == '├── ' else '    '
            # Pass gitignore_root down recursively
            build_tree(item_abs_path, spec, gitignore_root, prefix=prefix + extension)

def main():
    parser = argparse.ArgumentParser(description='List directory contents like tree, respecting .gitignore.')
    parser.add_argument('directory', nargs='?', default='.', help='The directory to list (default: current directory)')
    args = parser.parse_args()

    start_dir = Path(args.directory).resolve()

    if not start_dir.is_dir():
        print(f"Error: '{start_dir}' is not a valid directory.")
        return

    gitignore_path = find_gitignore(start_dir)
    gitignore_root = gitignore_path.parent if gitignore_path else start_dir # Use start_dir if no gitignore found
    patterns = load_gitignore_patterns(gitignore_path)
    # Add default git ignores
    patterns.extend(['.git'])
    # Ensure patterns containing '/' are treated correctly relative to the root
    spec = pathspec.PathSpec.from_lines(pathspec.patterns.GitWildMatchPattern, patterns)

    print(f"{start_dir.name}/ ({gitignore_root})") # Show which root is used
    build_tree(start_dir, spec, gitignore_root)

if __name__ == "__main__":
    main()

```

## AgentOps/Scripts/codebase_to_markdown.py

```python
import os
import argparse
import fnmatch
import re
from pathlib import Path

# --- Binary/Non-text file extensions to exclude ---
BINARY_EXTENSIONS = {
    # Images
    '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.ico', '.webp', '.tiff', '.tif',
    # Videos
    '.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm', '.mkv', '.m4v',
    # Audio
    '.mp3', '.wav', '.flac', '.aac', '.ogg', '.wma', '.m4a',
    # Archives
    '.zip', '.rar', '.7z', '.tar', '.gz', '.bz2', '.xz',
    # Documents
    '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
    # Executables
    '.exe', '.dll', '.so', '.dylib', '.bin', '.app', '.deb', '.rpm', '.msi',
    # Fonts
    '.ttf', '.otf', '.woff', '.woff2', '.eot',
    # Database
    '.db', '.sqlite', '.sqlite3', '.mdb',
    # Other binary formats
    '.iso', '.img', '.dmg', '.toast', '.vcd'
}

def is_binary_file(file_path):
    """Check if a file is likely binary based on extension or content."""
    # Check extension first
    if file_path.suffix.lower() in BINARY_EXTENSIONS:
        return True
    
    # For files without clear extensions, check if content is binary
    try:
        with open(file_path, 'rb') as f:
            chunk = f.read(1024)  # Read first 1KB
            if b'\0' in chunk:  # Null bytes typically indicate binary
                return True
            # Check for high ratio of non-printable characters
            text_chars = bytearray({7,8,9,10,12,13,27} | set(range(0x20, 0x100)) - {0x7f})
            if chunk and len(chunk.translate(None, text_chars)) / len(chunk) > 0.30:
                return True
    except (IOError, OSError):
        # If we can't read the file, assume it might be binary
        return True
    
    return False

# --- Language Mappings (can be extended) ---
LANGUAGE_MAP = {
    '.py': 'python',
    '.js': 'javascript',
    '.ts': 'typescript',
    '.tsx': 'typescript',
    '.java': 'java',
    '.cs': 'csharp',
    '.fs': 'fsharp',
    '.vb': 'vbnet',
    '.go': 'go',
    '.rs': 'rust',
    '.c': 'c',
    '.cpp': 'cpp',
    '.h': 'cpp', # Often used with C/C++
    '.html': 'html',
    '.css': 'css',
    '.scss': 'scss',
    '.less': 'less',
    '.xml': 'xml',
    '.json': 'json',
    '.yaml': 'yaml',
    '.yml': 'yaml',
    '.sh': 'bash',
    '.bash': 'bash',
    '.zsh': 'bash',
    '.ps1': 'powershell',
    '.psm1': 'powershell',
    '.psd1': 'powershell',
    '.rb': 'ruby',
    '.php': 'php',
    '.sql': 'sql',
    '.md': 'markdown',
    '.txt': '', # Plain text
    '.gitignore': 'ignore',
    '.gitattributes': 'ignore',
    'Dockerfile': 'dockerfile',
    # Add more as needed
}

def get_language_hint(file_path):
    """Gets a language hint for Markdown code blocks based on file extension."""
    suffix = file_path.suffix.lower()
    if suffix in LANGUAGE_MAP:
        return LANGUAGE_MAP[suffix]
    # Handle files with no extension but specific names
    if file_path.name in LANGUAGE_MAP:
        return LANGUAGE_MAP[file_path.name]
    return '' # Default to plain text or no hint

def parse_gitignore(gitignore_path):
    """Parses a .gitignore file and returns a list of patterns."""
    patterns = []
    if not gitignore_path.is_file():
        return patterns
    try:
        with open(gitignore_path, 'r', encoding='utf-8', errors='ignore') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#'):
                    patterns.append(line)
    except Exception as e:
        print(f"Warning: Could not read gitignore {gitignore_path}: {e}")
    return patterns

def get_gitignore_patterns(directory):
    """Finds all .gitignore files from the directory up to the root and returns patterns."""
    all_patterns = {} # Dict[Path, List[str]] storing patterns per gitignore file dir
    current_dir = Path(directory).resolve()
    root = Path(current_dir.anchor)

    while True:
        gitignore_file = current_dir / '.gitignore'
        if gitignore_file.is_file():
            if gitignore_file.parent not in all_patterns: # Avoid redundant parsing if nested
                 patterns = parse_gitignore(gitignore_file)
                 if patterns:
                     print(f"DEBUG: Found .gitignore: {gitignore_file} with {len(patterns)} patterns")
                     all_patterns[gitignore_file.parent] = patterns # Store patterns relative to their dir
        if current_dir == root:
            break
        parent = current_dir.parent
        if parent == current_dir: # Should not happen, but safeguard
             break
        current_dir = parent
    return all_patterns


def matches_gitignore(relative_path_posix, gitignore_patterns_map):
    """Checks if a relative path matches any gitignore patterns from relevant directories."""
    path_obj = Path(relative_path_posix)
    # Check patterns from parent directories downwards
    for gitignore_dir, patterns in gitignore_patterns_map.items():
        try:
            # Check if the file path is within or below the gitignore_dir
            # We need the relative path of the file *to the gitignore dir*
            relative_to_gitignore_dir = path_obj.relative_to(gitignore_dir.relative_to(Path('.').resolve())).as_posix()
        except ValueError:
            # The file is not under this gitignore's directory scope
            continue

        for pattern in patterns:
            # Basic fnmatch implementation (doesn't cover all gitignore nuances like !)
            # Handle directory matching (pattern ending with /)
            is_dir_pattern = pattern.endswith('/')
            match_pattern = pattern.rstrip('/')

            # A pattern without '/' can match a file or directory
            # A pattern with '/' only matches a directory
            # Need to check against the path string and potentially its parts

            # Simplistic matching for now:
            if fnmatch.fnmatch(relative_to_gitignore_dir, match_pattern) or \
               fnmatch.fnmatch(relative_to_gitignore_dir, match_pattern + '/*') or \
               any(fnmatch.fnmatch(part, match_pattern) for part in Path(relative_to_gitignore_dir).parts): # Match any segment
                # Refine directory matching
                if is_dir_pattern:
                     # Check if the match is actually for a directory segment
                     if Path(relative_to_gitignore_dir).is_dir() or (match_pattern in Path(relative_to_gitignore_dir).parts): # Heuristic
                         print(f"DEBUG: Gitignored (DIR pattern '{pattern}'): {relative_path_posix}")
                         return True
                else:
                    print(f"DEBUG: Gitignored (pattern '{pattern}'): {relative_path_posix}")
                    return True
    return False


def main():
    parser = argparse.ArgumentParser(description="Dump codebase structure and content to a Markdown file.")
    parser.add_argument("-s", "--source", required=True, help="Source directory to scan.")
    parser.add_argument("-o", "--output", required=True, help="Output Markdown file path.")
    parser.add_argument("-e", "--exclude", nargs='*', default=['.git', '.vscode', '.idea', 'bin', 'obj', 'node_modules'],
                        help="Directory names to exclude (exact match). Example: bin obj")
    parser.add_argument("-ep", "--exclude-patterns", nargs='*', 
                        default=[
                            '**/Examples/*',
                            '**/Library-References/*',
                            '**/Archive/*'
                            ],
                        help="Glob patterns for paths to exclude (relative to source). Example: '**/temp/*' '*.log'")
    parser.add_argument("-f", "--force", action="store_true", help="Overwrite output file if it exists.")
    parser.add_argument("-v", "--verbose", action="store_true", help="Enable verbose output.")

    args = parser.parse_args()

    source_dir = Path(args.source).resolve()
    output_file = Path(args.output).resolve()
    exclude_dirs = set(args.exclude)
    exclude_patterns = args.exclude_patterns # Store the patterns
    verbose = args.verbose

    if not source_dir.is_dir():
        print(f"Error: Source directory '{source_dir}' not found or is not a directory.")
        return

    if output_file.exists() and not args.force:
        print(f"Error: Output file '{output_file}' already exists. Use --force to overwrite.")
        return

    # Ensure output directory exists
    output_file.parent.mkdir(parents=True, exist_ok=True)

    print(f"Source Directory: {source_dir}")
    print(f"Output File: {output_file}")
    print(f"Exclude Dirs: {', '.join(exclude_dirs)}")
    print(f"Exclude Patterns: {', '.join(exclude_patterns)}") # Print the patterns

    # --- Gitignore Handling ---
    print("Collecting .gitignore patterns...")
    gitignore_map = get_gitignore_patterns(source_dir)
    print(f"Found patterns in {len(gitignore_map)} .gitignore files.")

    processed_count = 0
    skipped_excluded_dir = 0
    skipped_gitignore = 0
    skipped_read_error = 0
    skipped_output_file = 0 # Added counter for the output file itself
    skipped_pattern_exclude = 0 # Added counter for pattern excludes

    try:
        with open(output_file, 'w', encoding='utf-8') as md_file:
            md_file.write(f"# Code Dump: {source_dir.name}\n\n")
            md_file.write(f"*Generated on: {Path().cwd().name}*\n\n") # Simple timestamp marker

            for root, dirs, files in os.walk(source_dir, topdown=True):
                current_dir_path = Path(root)
                relative_dir_path = current_dir_path.relative_to(source_dir)

                # --- Directory Exclusion ---
                # Modify dirs in-place to prevent os.walk from descending
                original_dirs = list(dirs) # Copy before filtering
                dirs_to_remove_std_exclude = {d for d in dirs if d in exclude_dirs or d.startswith('.')}
                dirs_to_remove_gitignore = set()
                dirs_to_remove_pattern = set() # Set for pattern excluded dirs

                dirs[:] = [d for d in dirs if d not in dirs_to_remove_std_exclude]

                # Filter remaining dirs based on gitignore and patterns
                for d in list(dirs): # Iterate over a copy while potentially modifying dirs
                    dir_rel_path = relative_dir_path / d
                    dir_rel_path_posix = dir_rel_path.as_posix().replace('\\', '/')

                    # Check exclude patterns
                    matched_by_exclude_pattern = False
                    offending_pattern_for_log = "" # For logging
                    for current_pattern_original in exclude_patterns:
                        pattern_to_test_against_dir = current_pattern_original
                        if pattern_to_test_against_dir.endswith('/*'):
                            pattern_to_test_against_dir = pattern_to_test_against_dir[:-2] # e.g., from "**/foo/*" to "**/foo"
                        elif pattern_to_test_against_dir.endswith('/'):
                            pattern_to_test_against_dir = pattern_to_test_against_dir[:-1] # e.g., from "**/foo/" to "**/foo"
                        
                        # Initial match attempt
                        current_match_result = fnmatch.fnmatch(dir_rel_path_posix, pattern_to_test_against_dir)

                        # If the initial match fails, and the pattern is like "**/dirname",
                        # and the path is a simple name (no slashes, e.g. "dirname"),
                        # then try matching against the "dirname" part of the pattern.
                        if not current_match_result and \
                           pattern_to_test_against_dir.startswith('**/') and \
                           '/' not in dir_rel_path_posix:
                            simplified_target_pattern = pattern_to_test_against_dir[3:] # Remove "**/"
                            if verbose:
                                print(f"DEBUG_FNMATCH_DIR (Alt Attempt): Testing dir='{dir_rel_path_posix}' vs simplified_target_pattern='{simplified_target_pattern}' from original_pattern='{current_pattern_original}'")
                            if fnmatch.fnmatch(dir_rel_path_posix, simplified_target_pattern):
                                current_match_result = True
                        
                        if verbose:
                            # Log the original test attempt's details clearly
                            print(f"DEBUG_FNMATCH_DIR: Testing dir_path='{dir_rel_path_posix}' against pattern_to_test='{pattern_to_test_against_dir}' (original_pattern='{current_pattern_original}'). Final Match Result: {current_match_result}")
                        
                        if current_match_result:
                            matched_by_exclude_pattern = True
                            offending_pattern_for_log = current_pattern_original
                            break
                    
                    if matched_by_exclude_pattern:
                        dirs_to_remove_pattern.add(d)
                        if verbose: 
                            print(f"Skipping excluded pattern directory: {dir_rel_path_posix} (due to pattern: '{offending_pattern_for_log}')")
                        skipped_pattern_exclude += 1
                        continue # Skip gitignore check if already pattern-excluded

                    # Check gitignore
                    if matches_gitignore(dir_rel_path_posix, gitignore_map):
                        dirs_to_remove_gitignore.add(d)
                        # Verbose reporting for gitignore is handled within matches_gitignore
                        # if verbose: print(f"Skipping gitignored directory: {dir_rel_path_posix}")
                        skipped_gitignore += 1 # Count handled here

                # Report skipped standard excludes
                for skipped_dir in dirs_to_remove_std_exclude:
                     if verbose: print(f"Skipping standard excluded directory: {(relative_dir_path / skipped_dir).as_posix()}")
                     skipped_excluded_dir += 1

                # Update dirs list for os.walk
                dirs[:] = [d for d in dirs if d not in dirs_to_remove_gitignore and d not in dirs_to_remove_pattern]


                # --- File Processing ---
                for filename in files:
                    file_path = current_dir_path / filename
                    relative_path = file_path.relative_to(source_dir)
                    relative_path_posix = relative_path.as_posix().replace('\\', '/') # Use forward slashes for gitignore

                    # --- Skip the output file itself ---
                    if file_path == output_file:
                        if verbose: print(f"Skipping output file itself: {relative_path_posix}")
                        skipped_output_file += 1
                        continue

                    # --- Skip binary files ---
                    if is_binary_file(file_path):
                        if verbose: print(f"Skipping binary file: {relative_path_posix}")
                        skipped_read_error += 1  # Count as read error for simplicity
                        continue

                    # Check standard exclusions first (e.g., if a file is in an excluded dir name like 'bin')
                    if any(part in exclude_dirs for part in relative_path.parts):
                        if verbose: print(f"Skipping excluded file (in standard excluded path): {relative_path_posix}")
                        skipped_excluded_dir +=1 # Count doesn't distinguish file/dir well here
                        continue

                    # Check exclude patterns
                    offending_pattern_for_file_log = ""
                    file_matches_exclude_pattern = False
                    for current_pattern in exclude_patterns:
                        if fnmatch.fnmatch(relative_path_posix, current_pattern):
                            offending_pattern_for_file_log = current_pattern
                            file_matches_exclude_pattern = True
                            break
                    
                    if file_matches_exclude_pattern:
                        if verbose: 
                            print(f"Skipping excluded pattern file: '{relative_path_posix}' (due to pattern: '{offending_pattern_for_file_log}')")
                        skipped_pattern_exclude += 1
                        continue

                    # Check gitignore
                    if matches_gitignore(relative_path_posix, gitignore_map):
                        if verbose: print(f"Skipping gitignored file: {relative_path_posix}")
                        skipped_gitignore += 1
                        continue

                    # Read and write content
                    if verbose: print(f"Processing file: {relative_path_posix}")
                    try:
                        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f_content:
                            content = f_content.read()

                        lang_hint = get_language_hint(file_path)
                        md_file.write(f"## {relative_path_posix}\n\n")
                        md_file.write(f"```{lang_hint}\n")
                        md_file.write(content)
                        md_file.write(f"\n```\n\n")
                        processed_count += 1

                    except Exception as e:
                        print(f"Warning: Could not read file {file_path}: {e}")
                        skipped_read_error += 1

    except Exception as e:
        print(f"Error writing to output file {output_file}: {e}")
        return

    print("\nScript finished.")
    print(f" - Files dumped: {processed_count}")
    total_skipped = skipped_excluded_dir + skipped_gitignore + skipped_read_error + skipped_output_file + skipped_pattern_exclude # Add pattern skips to total
    print(f" - Total items skipped: {total_skipped}")
    print(f"   - Skipped (Standard Exclude Dir/Path): {skipped_excluded_dir}")
    print(f"   - Skipped (Exclude Pattern): {skipped_pattern_exclude}") # Added summary line for patterns
    print(f"   - Skipped (.gitignore): {skipped_gitignore}")
    print(f"   - Skipped (Output File): {skipped_output_file}")
    print(f"   - Skipped (Read Error): {skipped_read_error}")
    print(f"Output written to: {output_file}")

if __name__ == "__main__":
    main()

```

## AgentOps/Stories/00_STORY_INITIAL_PROJECT_SETUP.md

```markdown
{No Content Yet}

```

## MDMD_Specification/MDMD.md

```markdown
# MDMD (Membrane Design MarkDown) Specification v0.1

## 1. Abstract

MDMD (Membrane Design MarkDown) is a system for specifying complex solutions. It utilizes MyST Markdown extended with two core directives: `{unit}` and `{composition}`. MDMD facilitates a layered approach to design, moving from concrete, implementable details to higher-level conceptual architectures. It is designed for collaborative creation by humans and AI, aiming for clarity, traceability, and the potential for bi-directional synchronization between specifications and their real-world implementations (e.g., source code, configuration files, physical designs).

## 2. Core Primitives (The Bilayer Model)

MDMD defines two primary structural directives, forming a conceptual "bilayer":

### 2.1. The `{unit}` Directive

- **Purpose:** Represents a fundamental, discrete, and specifiable building block of a system. It defines the _contract_ or _declaration_ of an atomic part. This is the "Inner Leaflet" of the MDMD bilayer, interfacing closely with concrete implementation details.
- **Syntax:**

  ```myst
  ::: {unit}
  id: "unique-identifier-for-this-unit"
  unit-type: "string-tag-describing-the-unit-kind"
  language: "relevant-language-of-content-block"
  status: "idea | draft | review | stable | deprecated"
  version: "string-version-identifier"
  brief: "One-line concise summary of the unit's purpose."
  source-ref: "./path/to/linked/source/file.ext"
  see-also: ["[[other-id]]", "../another-doc.md#section"]

  (Optional) Free-form Markdown text providing human-readable explanations,
  context, rationale, examples, or specific notes for AI interpretation
  regarding the content block. This section can use any standard MyST Markdown
  features, including lists, admonitions, and links to other `{unit}`s
  or `{composition}`s (e.g., `[[target-id]]`).

  \`\`\`[language-identifier-from-option-or-specific-to-content]
  // The core formal definition or content of the unit.
  // Examples: API signatures, data structure definitions, configuration snippets,
  // textual requirements, material specifications, ingredient lists.
  // The interpretation of this block is heavily guided by the `unit-type`
  // and `language` options.
  \`\`\`

  (Optional) Further Markdown explanation or examples.
  :::
  ```

- **Key Option Interpretation:**
  - `id` (String, Required): Globally unique identifier. Primary target for `[[id]]` links.
  - `unit-type` (String, Required, Open Tag): **Crucial semantic hint.** Guides interpretation of the content block. Examples: `c-function-signature`, `csharp-class-interface`, `python-module-api`, `yaml-k8s-deployment`, `json-schema-definition`, `architectural-principle`, `user-requirement`. (This list is exemplary, not exhaustive; the system is open to new `unit-type` tags.)
  - `language` (String, Optional): The primary language of the main content block (e.g., "csharp", "python", "yaml", "json", "markdown", "natural-english").
  - `source-ref` (String, Optional, Path): A link to an external source file this unit describes or is derived from. Essential for bi-directional synchronization tasks.
- **Body Content Interpretation:** The fenced code block (or primary content block if `language` is `markdown` or `natural-english`) contains the formal definition. Surrounding Markdown provides context.

### 2.2. The `{composition}` Directive

- **Purpose:** Represents how `{unit}`s and/or other `{composition}`s are assembled, interact, or are conceptually grouped. It describes larger system parts, architectures, processes, or conceptual frameworks. This is the "Outer Leaflet" of the MDMD bilayer, focused on relationships and higher-level understanding.
- **Syntax:**

  ```myst
  ::: {composition}
  id: "unique-identifier-for-this-composition"
  composition-type: "string-tag-describing-the-composition-kind"
  status: "idea | draft | review | stable | deprecated"
  version: "string-version-identifier"
  brief: "One-line concise summary of the composition's purpose."
  see-also: ["[[other-id]]", "../another-doc.md#section"]

  Rich Markdown content forms the body. This typically includes:
  - Prose explanations of purpose, design, rationale.
  - **Explicit `[[id]]` links** to constituent `{unit}`s and sub-`{composition}`s, forming a navigable graph.
  - Embedded diagrams (e.g., MermaidJS: `sequenceDiagram`, `graph TD`, `classDiagram`, `stateDiagram`, `erDiagram`) illustrating structures and interactions. `Ref: [[id]]` annotations within diagram elements are encouraged for linking.
  - Lists of principles, requirements, or interaction steps.
  :::
  ```

- **Key Option Interpretation:**
  - `id` (String, Required): Globally unique identifier. Primary target for `[[id]]` links.
  - `composition-type` (String, Required, Open Tag): **Crucial semantic hint.** Guides interpretation of the content. Examples: `logical-software-module`, `system-data-flow-diagram`, `api-usage-scenario`, `deployment-architecture-overview`, `user-story-map`, `project-phase-definition`. (Exemplary, not exhaustive.)
- **Body Content Interpretation:** The body is free-form MyST Markdown. Its primary purpose is to describe the assembly and interaction of its referenced components. Diagrams and explicit `[[id]]` links are key structural elements.

## 3. Core Principles for MDMD Interpretation & Generation

- **Primacy of `*-type` Attributes:** `unit-type` and `composition-type` are the strongest signals for understanding the nature and expected content of a directive.
- **Content Blocks are Ground Truth for Contracts:** In `{unit}`s defining implementable artifacts, the fenced code block is the primary source of the formal contract.
- **Markdown Body for Context and Nuance:** Use the surrounding Markdown within directives to provide essential explanations, rationale, examples, and any specific guidance for processing or interpretation.
- **Links (`[[id]]`) Create the System Graph:** All `[[id]]` references should be resolvable to other `{unit}` or `{composition}` directives within the specification set. These links define the system's structure and dependencies.
- **Diagrams Enhance Understanding:** MermaidJS (or other MyST-compatible diagrams) within `{composition}`s should visually represent the relationships between linked elements, ideally using `Ref: [[id]]` annotations.
- **Open Vocabulary for `*-type`:** While conventions for common `unit-type` and `composition-type` values will emerge and should be preferred for consistency, the system allows for new, descriptive tags as needed by the domain being specified.
- **Bi-Directional Intent:**
  - **MDMD-to-Implementation:** `{unit}` directives, especially those with code blocks and relevant `unit-type`s, can serve as precise specifications for generating code stubs, configuration files, or other artifacts. `{composition}` directives provide context for how these units should be integrated.
  - **Implementation-to-MDMD:** Existing code, configurations, or other artifacts can be analyzed to generate corresponding MDMD `{unit}` directives. Relationships and interactions can be summarized into `{composition}` directives. The `source-ref` in a `{unit}` is critical for this linkage.

## 4. Example Task: Generating a C# Class Stub from an MDMD `{unit}`

Given an MDMD `{unit}`:

```myst
::: {unit}
id: "user-service-interface"
unit-type: "csharp-interface-definition"
language: "csharp"
brief: "Defines the contract for user management operations."

This interface provides methods for creating, retrieving, and updating user data.

\`\`\`csharp
public interface IUserService
{
    Task<UserDto?> GetUserAsync(string userId);
    Task<UserDto> CreateUserAsync(CreateUserRequest request);
    Task<bool> UpdateUserAsync(string userId, UpdateUserRequest request);
}
\`\`\`
:::
```

The expected output would be a C# interface file. The properties of `UserDto`, `CreateUserRequest`, etc., would ideally be defined in their own linked `{unit}` directives with `unit-type="csharp-dto-definition"`.

## 5. Example Task: Generating an MDMD `{unit}` from a C Function Signature

Given a C function: `int process_data(const char* input, char* output, size_t max_len); // Processes input data and writes to output.`
An expected MDMD `{unit}` might be:

```myst
::: {unit}
id: "c-func-process-data"
unit-type: "c-function-signature"
language: "c"
brief: "Processes input data and writes to an output buffer."
source-ref: "./src/data_processor.c#L52" // Example link to source

Processes the null-terminated `input` string and writes the result to the `output`
buffer, ensuring not to exceed `max_len`.

\`\`\`c
int process_data(const char* input, char* output, size_t max_len);
\`\`\`

**Parameters:**
*   `input` (const char*): The input data to process.
*   `output` (char*): The buffer to write processed data to.
*   `max_len` (size_t): The maximum number of bytes to write to `output`.
**Returns:**
*   (int): 0 on success, non-zero on error.
:::
```

This MDMD Specification Document provides the foundational rules for interpreting and generating MDMD content.

```

## MDMD_Specification/Primitives/CompositionDirective.myst.md

```markdown
::: {composition}
id: "mdmd-primitive-composition-directive-spec"
composition-type: "language-primitive-specification"
status: "draft"
version: "0.1"
brief: "Specification for the MDMD '{composition}' directive."
see-also: ["[[mdmd-spec-main]]", "[[mdmd-concept-composition-intent]]", "[[mdmd-primitive-unit-directive-spec]]"]

This composition defines the MDMD `{composition}` directive. It's used to describe
how `{unit}`s and/or other `{composition}`s are assembled, interact, or are
conceptually grouped to form larger system parts or explain overarching concepts.
It acts as the "Outer Leaflet" of the MDMD bilayer.

## 1. Purpose

The `{composition}` directive allows authors to structure narratives, define
architectural views, illustrate interactions, and group related specification
elements. It relies heavily on Markdown prose, embedded diagrams, and explicit
linking to other MDMD directives (`[[id]]`).

Reference: [[mdmd-concept-composition-intent]]

## 2. MyST Directive Implementation Contract

This `{unit}` defines the contract for the `DirectiveSpec` object that our
MyST JavaScript plugin must export to implement the MDMD `{composition}` directive.

::: {unit}
id: "myst-directive-spec-for-mdmd-composition"
unit-type: "typescript-interface-definition"
language: "typescript"
brief: "The MyST DirectiveSpec contract for the MDMD {composition} directive."
source-ref: "src/directives/compositionDirective.ts" // Our target TS file

This `DirectiveSpec` from `myst-common` outlines the expected structure for
defining the `{composition}` directive within a MyST JavaScript plugin.

\`\`\`typescript
import type { DirectiveSpec, DirectiveData, GenericNode } from 'myst-common';
import { mystParse } from 'myst-parser'; // To parse the body string
import { u } from 'unist-builder';

export const compositionDirectiveSpec: DirectiveSpec = {
name: 'composition',
// arg: undefined, // No positional arg for v0.1
options: {
id: { type: String, required: true, doc: 'Unique ID for this composition.' },
'composition-type': { type: String, required: true, doc: 'Semantic type tag.' },
status: { type: String, doc: 'Lifecycle status.' },
version: { type: String, doc: 'Composition version.' },
brief: { type: String, doc: 'One-line summary.' },
'see-also': { type: String, doc: 'Related items (comma-separated or YAML list).' }
},
body: {
type: String, // Expect the raw string body from MyST
required: false,
doc: 'Rich Markdown content, diagrams, and [[id]] links.'
},
run(data: DirectiveData): GenericNode[] {
// Implementation TBD:
// 1. Parse data.options.
// 2. Parse data.body (string) as MyST Markdown into AST children using mystParse.
// 3. Construct and return an 'mdmdComposition' AST node using unist-builder,
// embedding the parsed body children and options.
return []; // Placeholder
}
};
\`\`\`

**Key parsing logic for `run(data)` function:**

- The `data.body` (string) needs to be parsed entirely as MyST Markdown. The `mystParse` function from `myst-parser` should be used for this.
- The resulting AST children, along with the parsed options from `data.options`, will populate a custom `mdmdComposition` AST node.
- The plugin should recognize and potentially process/validate `[[id]]` links within the parsed body content in a later phase (for v0.1, just parsing them as standard links is fine).
- Mermaid diagrams (and other MyST extensions) embedded in the body will be handled by MyST's core parsing of `data.body` when we call `mystParse`.
  :::

## 3. Target MDMD Composition AST Node Structure

This `{unit}` describes the conceptual structure of the `mdmdComposition` AST node that our plugin's `run()` function should generate.

::: {unit}
id: "ast-node-mdmd-composition"
unit-type: "json-schema-like-definition" // Or "typescript-interface-definition"
language: "typescript" // Using TS for schema clarity
brief: "Target AST node structure for a parsed MDMD {composition}."

\`\`\`typescript
import type { GenericNode } from 'myst-common'; // For children

interface MdmdCompositionNodeProps {
compositionId: string; // From 'id' option
compositionType: string; // From 'composition-type' option
status?: string;
version?: string;
brief?: string;
seeAlso?: string[]; // Assuming we parse the string option into an array
}

interface MdmdCompositionNode extends GenericNode { // Extends myst-common's GenericNode
type: 'mdmdComposition'; // Custom node type
children: GenericNode[]; // Parsed MyST AST nodes from the directive's body
data?: MdmdCompositionNodeProps; // Or flatten props onto the node itself
}
\`\`\`

**Note:** The `children` array will contain the full MyST AST generated from parsing the `{composition}` directive's body content. This includes paragraphs, lists, headings, Mermaid diagrams (as `code` nodes with `lang: mermaid`), and crucially, any `link` nodes (which we'd later teach tools to recognize if they are `[[id]]` style).
:::
:::

```

## MDMD_Specification/Primitives/UnitDirective.myst.md

```markdown
::: {composition}
id: "mdmd-primitive-unit-directive-spec"
composition-type: "language-primitive-specification"
status: "draft"
version: "0.1"
brief: "Specification for the MDMD '{unit}' directive."
see-also: ["[[mdmd-spec-main]]", "[[mdmd-concept-unit-intent]]"]

This composition defines the MDMD `{unit}` directive, which is a fundamental
building block for concrete contract specifications.

## 1. Purpose

The `{unit}` directive is designed to encapsulate a single, discrete, specifiable
building block of a system. It defines the contract or declaration of an atomic part,
acting as the "Inner Leaflet" of the MDMD bilayer.

Reference: [[mdmd-concept-unit-intent]]

## 2. MyST Directive Implementation Contract

The following `{unit}` defines the contract for the `DirectiveSpec` object that our
MyST JavaScript plugin must export to implement the MDMD `{unit}` directive.

::: {unit}
id: "myst-directive-spec-for-mdmd-unit"
unit-type: "typescript-interface-definition"
language: "typescript"
brief: "The MyST DirectiveSpec contract for the MDMD {unit} directive."
source-ref: "src/directives/unitDirective.ts" // Our target TS file

This `DirectiveSpec` from `myst-common` outlines the expected structure for
defining the `{unit}` directive within a MyST JavaScript plugin.

\`\`\`typescript
import type { DirectiveSpec, DirectiveData, GenericNode } from 'myst-common';

export const unitDirectiveSpec: DirectiveSpec = {
name: 'unit',
// arg: undefined, // No positional arg for v0.1
options: {
id: { type: String, required: true, doc: 'Unique ID for this unit.' },
'unit-type': { type: String, required: true, doc: 'Semantic type tag.' },
language: { type: String, doc: 'Language of the main content block.' },
status: { type: String, doc: 'Lifecycle status.' },
version: { type: String, doc: 'Unit version.' },
brief: { type: String, doc: 'One-line summary.' },
'source-ref': { type: String, doc: 'Link to source file.' },
'see-also': { type: String, doc: 'Related items (comma-separated or YAML list).' }
},
body: {
type: String, // Request raw string body from MyST
required: false,
doc: 'Markdown prose and a primary fenced code block defining the unit.'
},
run(data: DirectiveData): GenericNode[] {
// Implementation TBD:
// 1. Parse data.options.
// 2. Parse data.body (string) to separate leading/trailing MD and code block.
// 3. Construct and return an 'mdmdUnit' AST node using unist-builder.
return []; // Placeholder
}
};
\`\`\`

**Key parsing logic for `run(data)` function:**

- The `data.body` (string) needs to be parsed to identify:
  1.  Leading Markdown content (parsed into MyST AST children).
  2.  The primary fenced code block (its lang and value captured).
  3.  Trailing Markdown content (parsed into MyST AST children).
- All options from `data.options` and the parsed body components should be used to populate a custom `mdmdUnit` AST node.
  :::

## 3. Target MDMD Unit AST Node Structure

This `{unit}` describes the conceptual structure of the `mdmdUnit` AST node that our plugin's `run()` function should generate.

::: {unit}
id: "ast-node-mdmd-unit"
unit-type: "json-schema-like-definition" // Or "typescript-interface-definition"
language: "typescript" // Using TS for schema clarity
brief: "Target AST node structure for a parsed MDMD {unit}."

\`\`\`typescript
interface MdmdUnitNodeProps {
unitId: string;
unitType: string;
unitLanguage?: string;
status?: string;
version?: string;
brief?: string;
sourceRef?: string;
seeAlso?: string[]; // Assuming we parse the string option into an array

// Content from the directive's body
codeBlockLang?: string;
codeBlockValue?: string;
}

interface MdmdUnitNode extends GenericNode { // Extends myst-common's GenericNode
type: 'mdmdUnit';
children: GenericNode[]; // Parsed leading/trailing Markdown + placeholder for code (or code as a child)
data?: MdmdUnitNodeProps; // Or flatten props onto the node itself
}
\`\`\`

**Note:** The exact representation of the code block _within_ the `mdmdUnit` AST node (e.g., as a direct child `code` node, or its properties stored in `MdmdUnitNodeProps`) is a key design decision for the plugin implementation. For simplicity, the main code block could become a standard MyST `code` node as one of the `children` of the `mdmdUnit` node. The surrounding markdown would also be children.
:::
:::

```

## src/index.ts

```typescript
// src/index.ts
import type { MystPlugin } from 'myst-common';
import { unitDirective } from './directives/unitDirective';
import { compositionDirective } from './directives/compositionDirective';

const mdmdPlugin: MystPlugin = {
  name: 'mdmd-primitives', // Or just 'mdmd'
  directives: [unitDirective, compositionDirective],
};

export default mdmdPlugin;

```

## src/directives/unitDirective.ts

```typescript
// src/directives/unitDirective.ts
import type { DirectiveSpec, DirectiveData, GenericNode } from 'myst-common';
import type { Root } from 'mdast'; // Ensure Root is imported
import { u } from 'unist-builder';
import { mystParse as actualMystParse } from 'myst-parser';

// Typed mystParse function
const mystParse = actualMystParse as (source: string) => Root;

interface ExtractedCodeBlock {
  leadingMarkdown: string;
  codeBlockLang: string | null;
  codeBlockValue: string | null;
  trailingMarkdown: string;
}

// Helper function to find and extract the first fenced code block
function extractPrimaryCodeBlock(bodyString: string): ExtractedCodeBlock {
  // Regex to find the first fenced code block, capturing language and content.
  // It handles optional language, and captures everything until the closing ```
  const fencedCodeBlockRegex = /^```(\w*)\r?\n([\s\S]*?)\r?\n```/m;
  const match = fencedCodeBlockRegex.exec(bodyString);

  if (match) {
    const lang = match[1] || null; // Language identifier (e.g., typescript, python)
    const value = match[2] || ''; // Code content, default to empty string if somehow null
    const fullMatch = match[0];
    const matchIndex = bodyString.indexOf(fullMatch);

    return {
      leadingMarkdown: bodyString.substring(0, matchIndex).trim(),
      codeBlockLang: lang,
      codeBlockValue: value,
      trailingMarkdown: bodyString.substring(matchIndex + fullMatch.length).trim(),
    };
  }

  // No fenced code block found, treat entire body as leading Markdown
  return {
    leadingMarkdown: bodyString.trim(),
    codeBlockLang: null,
    codeBlockValue: null,
    trailingMarkdown: '',
  };
}

// Helper function to parse a markdown string to an array of GenericNode
function parseMarkdownString(markdownString: string): GenericNode[] {
  if (!markdownString || markdownString.trim() === '') return [];
  try {
    const parsedRoot = mystParse(markdownString);
    if (parsedRoot && parsedRoot.type === 'root' && Array.isArray(parsedRoot.children)) {
      return parsedRoot.children as GenericNode[];
    }
    console.warn('mystParse did not return a valid Root node for string:', markdownString);
    return [
      u('paragraph', [
        u('text', `Warning: Could not parse Markdown: ${markdownString.substring(0, 100)}...`),
      ]),
    ];
  } catch (e) {
    console.error('Error parsing markdown string with mystParse:', e);
    return [
      u('paragraph', [u('text', `Error parsing Markdown: ${markdownString.substring(0, 100)}...`)]),
    ];
  }
}

export const unitDirective: DirectiveSpec = {
  name: 'unit',
  options: {
    id: { type: String, required: true, doc: 'Unique identifier for this unit.' },
    'unit-type': { type: String, required: true, doc: 'Semantic type of the unit.' },
    language: { type: String, doc: "Primary language of the unit's main content/code block." },
    status: { type: String, doc: 'Lifecycle status.' },
    version: { type: String, doc: 'Version of this specific unit.' },
    brief: { type: String, doc: 'Concise one-line summary.' },
    'source-ref': { type: String, doc: 'Path to a linked source file.' },
    'see-also': { type: String, doc: 'Comma-separated list of IDs or paths.' },
  },
  body: {
    type: String,
    required: false,
    doc: 'Markdown content, optionally with one primary code block.',
  },
  run(data: DirectiveData): GenericNode[] {
    console.log('[MDMD Plugin] unitDirective RUNNING!');
    const bodyString = typeof data.body === 'string' ? data.body : '';
    const { leadingMarkdown, codeBlockLang, codeBlockValue, trailingMarkdown } =
      extractPrimaryCodeBlock(bodyString);

    const leadingAstChildren: GenericNode[] = parseMarkdownString(leadingMarkdown);
    const trailingAstChildren: GenericNode[] = parseMarkdownString(trailingMarkdown);

    const unitNodeChildren: GenericNode[] = [...leadingAstChildren];

    if (codeBlockValue !== null) {
      const actualCodeLang = codeBlockLang || (data.options?.language as string) || '';
      unitNodeChildren.push(u('code', { lang: actualCodeLang }, codeBlockValue));
    }
    unitNodeChildren.push(...trailingAstChildren);

    const mdmdUnitNode = u(
      'mdmdUnit',
      {
        unitId: (data.options?.id as string) || 'unknown-id',
        unitType: (data.options?.['unit-type'] as string) || 'unknown-type',
        unitLanguage: codeBlockLang || (data.options?.language as string) || undefined,
        status: (data.options?.status as string) || undefined,
        version: (data.options?.version as string) || undefined,
        brief: (data.options?.brief as string) || undefined,
        sourceRef: (data.options?.['source-ref'] as string) || undefined,
        seeAlso: (data.options?.['see-also'] as string) || undefined,
      },
      unitNodeChildren
    );

    return [mdmdUnitNode];
  },
};

```

## src/directives/compositionDirective.ts

```typescript
// src/directives/compositionDirective.ts
import { u } from 'unist-builder';
import { mystParse } from 'myst-parser';
import type { DirectiveSpec, DirectiveData, GenericNode } from 'myst-common';
import type { Root } from 'mdast'; // Added Root import

// Helper function to parse a MyST string into an array of GenericNodes
function parseMystStringBody(bodyString: string): GenericNode[] {
  if (!bodyString || bodyString.trim() === '') {
    return [];
  }
  try {
    // The key change: cast to Root, then access children
    const parsedRoot = mystParse(bodyString) as Root;
    return parsedRoot.children as GenericNode[];
  } catch (error) {
    console.error('Error parsing MyST string body:', error);
    // Return a paragraph node with an error message, formatted to satisfy the linter
    return [u('paragraph', [u('text', `Error parsing body: ${bodyString.substring(0, 100)}...`)])];
  }
}

export const compositionDirective: DirectiveSpec = {
  name: 'composition',
  arg: {
    type: String,
    required: false,
  },
  options: {
    id: {
      type: String,
      required: true,
    },
    'composition-type': {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    // Allow any other options for extensibility
  },
  body: {
    type: String,
    required: false,
  },
  run(data: DirectiveData): GenericNode[] {
    const {
      'composition-type': compositionType,
      id,
      label,
    } = data.options as {
      'composition-type'?: string;
      id?: string;
      label?: string;
    };

    if (!id) {
      return [
        u('paragraph', [
          u('strong', 'Composition Error:'),
          u('text', ' The '),
          u('code', ':id:'),
          u('text', ' option is mandatory for the {composition} directive.'),
        ]),
      ];
    }

    const bodyNodes = parseMystStringBody(data.body as string);

    // Construct the mdmdComposition node
    // Ensure all properties are defined, providing defaults where necessary
    const compositionNode: GenericNode = {
      type: 'mdmdComposition',
      id: id, // id is guaranteed by the check above
      'composition-type': compositionType || 'default', // Default if not provided
      label: label || '', // Default to empty string if not provided
      children: bodyNodes,
    };

    return [compositionNode];
  },
};

```

## docs/Concepts/CONCEPTS_CORE_PRIMITIVES_INTENT.md

```markdown
# MDMD Core Primitives: Intent and Purpose

This document outlines the intended roles of the foundational MDMD directives. The formal specification of these directives _using MDMD itself_ will follow once the base MyST plugin is operational.

## 1. The `{unit}` Directive

- **Conceptual Role:** To define an atomic, fundamental building block. This is the smallest piece of a system that has a distinct, specifiable contract or definition. It's the "inner leaflet" of our membrane.
- **What it _must_ capture (Intent for future formal MDMD spec of `{unit}` itself):**
  - A unique identifier (`id`).
  - A type descriptor (`unit-type`) that gives strong semantic context.
  - The primary language of its core content (`language`).
  - A formal content block (e.g., code signature, schema, list of properties, textual statement).
  - Surrounding Markdown for human and AI contextual understanding.
  - Linkage to its "true source" if it's a spec _of_ an existing artifact (`source-ref`).
- **Examples of things that are `{unit}`s:**
  - A C function's public signature.
  - A C# class's public interface (methods, properties).
  - A Python function's signature and docstring.
  - A YAML snippet defining a Kubernetes resource.
  - A JSON Schema for a data object.
  - A specific legal clause in a contract.
  - A single ingredient in a recipe with its quantity and preparation.
  - A single, testable user requirement.

## 2. The `{composition}` Directive

- **Conceptual Role:** To describe how `{unit}`s and/or other `{composition}`s are assembled, related, and interact to form a more complex entity or to explain a higher-level concept, architecture, or process. This is the "outer leaflet."
- **What it _must_ capture (Intent for future formal MDMD spec of `{composition}` itself):**
  - A unique identifier (`id`).
  - A type descriptor (`composition-type`) giving strong semantic context to the grouping.
  - Rich Markdown body for explanation, rationale, and narrative.
  - **Crucially: Explicit, navigable links (`[[id]]`) to the constituent `{unit}`s and sub-`{composition}`s.**
  - Diagrams (e.g., Mermaid) that visually represent these relationships, ideally with linkable references in the diagram elements.
- **Examples of things that are `{composition}`s:**
  - The architecture of a software microservice (composed of API units, data model units, etc.).
  - A user workflow or feature specification (composed of requirement units, UI interaction units).
  - A data flow diagram and its explanation.
  - The full specification for a deployable application.
  - A chapter in a book (composed of section units).
  - The complete recipe for a dish (composed of ingredient units and instruction units).
  - An entire legal contract (composed of clause units and section compositions).

```

## docs/Concepts/CONCEPTS_MDMD_PHILOSOPHY.md

```markdown
# MDMD Philosophy: The Executable Idea

## Vision

MDMD (Membrane Design MarkDown) aims to be a universal textual medium for progressively concretizing ideas into fully specified, actionable solutions across diverse domains (software, engineering, legal, creative arts, etc.). It facilitates a symbiotic collaboration between human intellect and Artificial Intelligence.

## Core Metaphor: The Bilayer Membrane

The design of any complex system can be conceptualized as a "bilayer membrane":

- **Inner Leaflet (The Concrete Contract):** The precise, verifiable interfaces and definitions of fundamental building blocks. These are the points of direct interaction with "reality" (e.g., executable code, physical material specifications, defined legal terms).
- **Outer Leaflet (The Conceptual Architecture):** The organization, relationships, interactions, and purpose of these building blocks, forming coherent larger structures and explaining the system's "why" and "how" at a human-understandable level.

MDMD provides the language to describe both leaflets and their interplay.

## Principles

1.  **Progressive Concretization:** Ideas -> High-Level Compositions -> Detailed Units -> Implementation.
2.  **Human Readability First:** Specifications must be clear and intuitive for human authors and reviewers.
3.  **AI Interpretability:** Structure must be sufficient for LLMs (guided by the MDMD Spec Doc) to understand, generate, and relate specifications to implementations.
4.  **Extensibility:** The system of types (`unit-type`, `composition-type`) must be open and adaptable to any domain.
5.  **Bi-Directional Thinking:** Encourage a fluid movement between specification and implementation, ideally with tooling to assist synchronization.
6.  **Openness:** The MDMD framework itself and its resultant specifications should be open and shareable.

## The Role of LLMs

LLMs act as:

- **Interpreters:** Understanding MDMD files guided by the MDMD Specification.
- **Generators:** Drafting MDMD content from high-level ideas or existing artifacts (code, documents).
- **Translators:** Bridging MDMD specifications to/from implementation-specific details.
- **Assistants:** Helping humans refine, link, and maintain MDMD documents.

MDMD is the structured language for this human-AI dialogue.

```

