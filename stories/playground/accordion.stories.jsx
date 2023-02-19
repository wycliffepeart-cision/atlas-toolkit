export default {
	title: 'Playground/Accordion',
	parameters: {
		viewMode: 'story',
		previewTabs: {
			'storybook/docs/panel': {
				hidden: true,
			},
		},
	},
};

const Template = (args) => <div>Hello</div>;

export const Play = Template.bind({});
