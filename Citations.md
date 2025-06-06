# Code Citations

This project contains configuration and code inspired by the following public sources. Where possible, license information is included. Boilerplate or framework-prescribed code (such as standard Tailwind CSS config structure) is not cited individually.

| Source | License | Context/Notes |
|--------|---------|--------------|
| [jwmickey/jwmickey.github.io/tailwind.config.js](https://github.com/jwmickey/jwmickey.github.io/blob/45eb7bcbf3285e238d33530c6eba809d5b6c8667/tailwind.config.js) | Unknown | Used as a base for Tailwind CSS configuration |
| [meliodas0n/config/miscel/react_instructions](https://github.com/meliodas0n/config/blob/17cb9914b2bbaadecbd1d3ad49b7e338bece154d/miscel/react_instructions) | Unknown | Referenced for React and Tailwind integration instructions |
| [TechnicalSpacedevVN/spacedev-document/spacedev-react/ngay-10/1.setup-project-base.md](https://github.com/TechnicalSpacedevVN/spacedev-document/blob/a19ef8108826fc66922e68674b7cafab5dbd2d76/spacedev-react/ngay-10/1.setup-project-base.md) | Unknown | Referenced for Tailwind and project setup patterns |

> **Note:** Upstream repositories did not specify a license at the cited revision or in a discoverable location, so "Unknown" is listed above. If you plan to distribute or use this codebase publicly, please re-check source licenses and update accordingly.

## Example Referenced Snippet

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
