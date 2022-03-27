module.exports = {
	siteMetadata: {
		title: `Frontend Mentor - My Team`,
		description: `Built by 👾 in Pittsburgh, PA.`,
		author: `@ronniekram`,
	},
	plugins: [
		{
			resolve: `@raae/gatsby-plugin-svg-emoji-favicon`,
			options: {
				emoji: `🚧`,
			},
		},
		`gatsby-plugin-image`, // https://www.gatsbyjs.com/plugins/gatsby-plugin-image
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-emotion`,
		`gatsby-plugin-react-helmet`,
	],
};
