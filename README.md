
# Install Tailwind CSS
## Install tailwindcss and @tailwindcss/cli via npm.

```
npm install tailwindcss @tailwindcss/cli
```

## Import Tailwind in your CSS
Add the @import "tailwindcss"; import to your main CSS file.
```
for example in style.css

@import "tailwindcss";
```
## Start the Tailwind CLI build process
- Run the CLI tool to scan your source files for classes and build your CSS.

```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch

```
## Start using Tailwind in your HTML
```HTML
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>

```