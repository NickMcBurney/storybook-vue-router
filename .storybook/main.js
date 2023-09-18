module.exports = {
  stories: ["../examples/**/*.stories.mdx", "../examples/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["../preset.js", "@storybook/addon-essentials", "@storybook/addon-mdx-gfm"],
  docs: {
    autodocs: true
  },
  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  }
};