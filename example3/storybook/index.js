import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

configure(() => {
  loadStories()
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' });
export default StorybookUI;

// import { getStorybookUI, configure } from '@storybook/react-native';

// // import stories
// configure(() => {
//   require('./stories');
// }, module);

// // This assumes that storybook is running on the same host as your RN packager,
// // to set manually use, e.g. host: 'localhost' option
// const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: true });
// export default StorybookUI;
