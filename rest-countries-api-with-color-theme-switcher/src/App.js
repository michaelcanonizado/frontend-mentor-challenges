import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import Error from './pages/Error';
import Countries, { loader as countriesLoader } from './pages/Countries';
import CountryDetail, { loader as countryLoader } from './pages/CountryDetail';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Countries />,
				loader: countriesLoader,
			},
			{
				path: 'countries/:countryCode',
				children: [
					{
						index: true,
						element: <CountryDetail />,
						loader: countryLoader,
					},
				],
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
