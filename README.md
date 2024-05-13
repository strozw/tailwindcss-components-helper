
# tailwind components helper

## about

This package was created to improve the development experience by enabling code completion when defining styles such as Emotion and Styled Components using `addComponents` and `matchComponents`, which are used when creating tailwindcss plugins. 

It was also created to support the ideas defined in the tailwindcss description below.
https://github.com/tailwindlabs/tailwindcss/discussions/13673

## Install

```
# npm
npm install -D tailwindcss-components-helper

# yarn
yarn add -D tailwindcss-components-helper

# pnpm
pnpm add -D tailwindcss-components-helper
```

## usages

If you use it in a `"type": "module"` project, it will look like this:


```
import plugin from 'tailwindcss/plugin'
import { defineComponent as typed } from 'tailwindcss-components-helper'

/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {},

	},
	plugins: [
		plugin(({ theme, addComponents, matchComponents }) => {
			addComponents({
				testAddComponents: typed({
					display: 'block',

					// camelCase enabled
					marginTop: '20px',

					// kebab-case enabled
					'margin-top': '20px',
				})
			})

			matchComponents(
				value => ({
					testMatchComponents: typed({
						display: 'block',

						// camelCase enabled
						marginTop: value,

						// kebab-case enabled
						'margin-top': value,
					})
				}),
				{ values: theme('space') }
			)
		})
	],
}
```

