import dynamicComponent from './ability/dynamicComponent/index'
import dynamicComponentState from './ability/dynamicComponent/storeModule'
import eventBus from './ability/eventBus'
import moduleLoader from './ability/moduleLoader'
export default function (app, options = {}) {
  app.config.globalProperties.$eventBus = eventBus()
  app.config.globalProperties.$moduleLoader = moduleLoader(app)
  if (options.store) {
    options.store.registerModule('dynamicComponent', dynamicComponentState)
    app.config.globalProperties.$dynamicComponent = dynamicComponent(
      options.store
    )
  }
}
