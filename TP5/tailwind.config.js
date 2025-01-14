/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
// Note : si lors de la compilation, on a l'erreur module plugin not found, il faut installer tailwindcss comme dépendance (-D)
// Note : plutôt que de mettre le code de notre plugin ici, il serait mieux de le mettre dans un fichier à part puis de l'importer ici...

const ESGIplugin = plugin(
	({ matchUtilities, theme }) => {
		matchUtilities(
			{
				colCount: (value) => {
					return { "column-count": value };
				},
			},
			{ values: theme("colCount") }
		);
	},
	{
		theme: {
			colCount: {
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
			},
		},
	}
);

module.exports = {
	content: ["index.html"],
	theme: {
		extend: {},
	},
	plugins: [ESGIplugin],
};
