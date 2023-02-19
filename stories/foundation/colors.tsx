export function Color(props) {
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '150px' }}>
			<div
				style={{
					backgroundColor: props.color,
					padding: '1rem',
					display: 'grid',
					justifyContent: 'flex-end',
				}}
			>
				<div
					style={{
						width: '250px',
						backgroundColor: 'white',
						display: 'grid',
						gridTemplateRows: '1fr 1fr 1fr',
						padding: '1rem',
						borderRadius: '6px',
						fontSize: '10px',
						rowGap: '.5rem',
					}}
				>
					<span style={{ fontSize: '14px', fontWeight: 'bold', color: '#252525' }}>{props.name}</span>
					<span style={{ fontSize: '13px' }}>{props.hex}</span>
					<span
						style={{
							color: props.accentColor,
							fontWeight: 'bold',
							fontSize: '18px',
						}}
					>
						{props.accent}
					</span>
				</div>
			</div>
		</div>
	);
}

export const PrimaryBlue = [
	{
		color: '#00607F',
		name: 'atlas-color-primary-b500',
		hex: '#00607F',
		accent: 'AAA',
		accentColor: '#007FA8',
	},
	{
		color: '#007FA8',
		name: 'atlas-color-primary-b400',
		hex: '#007FA8',
		accent: 'AAA',
		accentColor: '#007FA8',
	},
	{
		color: '#009ED1',
		name: 'atlas-color-primary-b300',
		hex: '#009ED1',
		accent: 'AAA',
		accentColor: '#009ED1',
	},
	{
		color: '#00BDF9',
		name: 'atlas-color-primary-b200',
		hex: '#00BDF9',
		accent: 'AAA',
		accentColor: '#00BDF9',
	},
	{
		color: '#5AD7FF',
		name: 'atlas-color-primary-b100',
		hex: '#5AD7FF',
		accent: 'AAA',
		accentColor: '#5AD7FF',
	},
	{
		color: '#9FE7FF',
		name: 'atlas-color-primary-b50',
		hex: '#9FE7FF',
		accent: 'AAA',
		accentColor: '#007FA8',
	},
	{
		color: '#DFF9FF',
		name: 'atlas-color-primary-b25',
		hex: '#DFF9FF',
		accent: 'AAA',
		accentColor: '#007FA8',
	},
];

export const PrimaryOrange = [
	{
		color: '#00607F',
		name: 'atlas-color-primary-b500',
		hex: '#00607F',
		accent: 'AAA',
		accentColor: '#007FA8',
	},
	{
		color: '#007FA8',
		name: 'atlas-color-primary-b400',
		hex: '#007FA8',
		accent: 'AAA',
		accentColor: '#007FA8',
	},
	{
		color: '#009ED1',
		name: 'atlas-color-primary-b300',
		hex: '#009ED1',
		accent: 'AAA',
		accentColor: '#009ED1',
	},
	{
		color: '#00BDF9',
		name: 'atlas-color-primary-b200',
		hex: '#00BDF9',
		accent: 'AAA',
		accentColor: '#00BDF9',
	},
	{
		color: '#5AD7FF',
		name: 'atlas-color-primary-b100',
		hex: '#5AD7FF',
		accent: 'AAA',
		accentColor: '#5AD7FF',
	},
	{
		color: '#9FE7FF',
		name: 'atlas-color-primary-b50',
		hex: '#9FE7FF',
		accent: 'AAA',
		accentColor: '#007FA8',
	},
	{
		color: '#DFF9FF',
		name: 'atlas-color-primary-b25',
		hex: '#DFF9FF',
		accent: 'AAA',
		accentColor: '#007FA8',
	},
];
