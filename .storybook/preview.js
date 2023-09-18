export const parameters = {
  options: {
    storySort: {
      order: ['README', '*'],
    },
  }
};

// .storybook/preview.ts
import { setup } from '@storybook/vue3';

// Test global setup() is still called
setup(() => {
  console.log('PREVIEW.JS setup() log')
});
