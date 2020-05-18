import Root from './Root'
import {categoriesWidgetsHome} from './config'
import {getCategoriesIds, getPostsGroupedByCategory} from './helpers'

export default {
  name: "custom-homepackage-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {
      beforeSSR: async ({ state, actions }) => {
        if (state.router.link === "/") {
          
          console.log(state.router.link)
          console.log('getting data from beforeSSR...')
          await Promise.all(
            Object.values(categoriesWidgetsHome)
              .map(category => actions.source.fetch(`/category/${category}/`))
          )
        }
      }
    }
  }
};
