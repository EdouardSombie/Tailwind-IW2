/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
// Note : si lors de la compilation, on a l'erreur module plugin not found, il faut installer tailwindcss comme dépendance (-D)
// Note : plutôt que de mettre le code de notre plugin ici, il serait mieux de le mettre dans un fichier à part puis de l'importer ici...

const angleValues = {};
for (let i = 0; i <= 360; i++) {
	angleValues[i] = i + "deg";
}

const anglePlugin = plugin(({ matchUtilities }) => {
	matchUtilities(
		{
			angle: (value) => {
				return {
					backgroundImage: `linear-gradient(${value}, var(--tw-gradient-stops))`,
				};
			},
		},
		{ values: angleValues, supportsNegativeValues: true }
	);
});

module.exports = {
	content: ["index.html"],
	theme: {
		extend: {},
	},
	plugins: [anglePlugin],
};
