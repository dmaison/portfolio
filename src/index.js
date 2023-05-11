import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Router from './router';

const root = createRoot( document.getElementById( 'root' ) );
root.render(
  	<StrictMode>
		<Router />
  	</StrictMode>
);

reportWebVitals();