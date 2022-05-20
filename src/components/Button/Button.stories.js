/* eslint-disable import/no-anonymous-default-export */
import { Button } from '../UI/Button.styled';

export default {
	title: 'Components/Button/Button',
	component: Button,
	decorators: [
		Story => {
			return (
				<div>
					<Story />
				</div>
			);
		},
	],
};

const propsMore = {
	children: 'Mehr anzeigen',
};

const propsLess = {
	children: 'Weniger anzeigen',
};

const propsDelete = {
	children: 'Löschen',
};

const propsAdd = {
	children: 'Eintrag hinzufügen',
};

export function ShowMore() {
	return <Button {...propsMore} />;
}
export function ShowLess() {
	return <Button {...propsLess} />;
}

export function Delete() {
	return <Button {...propsDelete} />;
}
export function Add() {
	return <Button {...propsAdd} />;
}
