import { IconLayoutDashboard } from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
	{
		navlabel: true,
		subheader: 'Salão de festas',
	},
	{
		id: uniqueId(),
		title: 'Agenda',
		icon: IconLayoutDashboard,
		href: '/admin',
	},
];

export default Menuitems;
