## Coding challenge

Please write a responsive website, which mimics the behaviour of https://bower.io/search/.

**Layout**

The site should have a header section, a left sidebar, a footer and a content area. The content area should show a list of modules with their name, owner & stars.

**Pagination & Sorting**

The list of modules should be sortable by name, owner & stars. It is important that the list is paged, which means that only 5 items per page will be shown. In addition it should be possible to search for a specific module.

**API**

You can use the Libraries.io API to query for modules (Example: https://libraries.io/api/bower-search?q=jquery). It will return you all the data which you need to display. It also becomes very helpful when implementing the search. Please be aware that responses from Libraries.io contain a "per-page" flag and a "total" flag in the response header, which will tell you how many search results there are.

**Assessment**

When writing your code, please make sure that your project is structured and can be executed with `yarn install` & `yarn start`. When running `yarn start`, a browser should show up and display your developed site. If we run `yarn test`, we want to see unit tests running for the business logic of your code. Your project must be cross-platform compatible (running on Linux, Windows & macOS).

Please make sure that you accomplish the task using React and TypeScript.

Good luck!
