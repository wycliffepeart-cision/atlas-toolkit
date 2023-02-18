import Fuse from 'fuse.js';
import { useEffect, useRef, useState } from 'react';
import {a} from "vitest/dist/types-0373403c";

export function IconsWrapper({ children, ...props }) {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'grid',
				alignItems: 'center',
				borderRadius: '8px',
				justifyContent: 'center',
				backgroundColor: '#fff',
				gridTemplateRows: '1fr auto',
				boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.05), 0px 2px 10px rgba(0, 0, 0, 0.05)',
			}}
		>
			<div style={{ display: 'flex', alignItems: "center", justifyContent: "center", rowGap: ".8rem", flexDirection: "column" }}>
				{children}
				<div style={{ fontSize: '11px' }}>{props.name}</div>
			</div>
		</div>
	);
}

export function IconsFilter() {
	const [data] = useState([
		{
			name: 'Home',
			// @ts-ignore
			component: <atlas-icon-home />,
		},
		{
			name: 'Mail',
			// @ts-ignore
			component: <atlas-icon-mail />,
		},
		{
			name: 'Message',
			// @ts-ignore
			component: <atlas-icon-mail />,
		},
	]);
	const ref = useRef<any>();
	const [icons, setIcons] = useState(data);

	useEffect(() => {
		ref.current.addEventListener('input', ({ target: { value } }) => {
			const options = {
				keys: ['name'],
			};

			console.log(value);

			if (value?.length === 0) {
				setIcons([...data]);
				return;
			}

			const fuse = new Fuse(data, options);
			const s = fuse.search(value);
			setIcons([...s.map(({ item }) => item)]);
		});
	}, [data]);

	return (
		<div
			style={{
				backgroundColor: 'rgb(244, 244, 244)',
				padding: '1rem',
				marginTop: '2rem',
				width: '100%',
			}}
		>
			<input
				ref={ref}
				placeholder='Search...'
				style={{
					fontSize: '1rem',
					width: '100%',
					padding: '1rem',
					marginBottom: '2rem',
					borderRadius: '6px',
					border: '2px solid #ddd',
				}}
			/>

			{icons.length > 0 ? (
				<div
					style={{
						rowGap: '1rem',
						display: 'grid',
						columnGap: '1rem',
						borderRadius: '6px',
						justifyContent: 'space-between',
						gridTemplateRows: 'repeat(3, 100px)',
						gridTemplateColumns: 'repeat(auto-fill, 100px)',
					}}
				>
					{icons.map((icon, i) => (
						<IconsWrapper key={i} {...icon}>
							{icon.component}
						</IconsWrapper>
					))}
				</div>
			) : null}
		</div>
	);
}
