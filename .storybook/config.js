import { configure } from '@storybook/react';
import '../src/App.scss'
import 'react-bulma-components/dist/react-bulma-components.min.css';

// global styles

function loadStories() {
  const req = require.context('../src/components', true, /\.story\.js$|story\/index\.js/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
