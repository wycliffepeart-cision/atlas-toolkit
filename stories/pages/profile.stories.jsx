export default {
	title: 'Pages/Profile',
	parameters: {
		viewMode: 'story',
		previewTabs: {
			'storybook/docs/panel': {
				hidden: true,
			},
		},
	},
};

const Component = (args) => <div>Hello</div>;

export const Template = Component.bind({});
