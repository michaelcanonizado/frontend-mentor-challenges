import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import Error from './pages/Error';
import Countries from './pages/Countries';
import CountryDetail from './pages/CountryDetail';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Countries /> },
			{
				path: 'countries',
				children: [
					{ index: true, element: <Countries /> },
					{
						path: ':countryId',

						children: [{ index: true, element: <CountryDetail /> }],
					},
				],
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
