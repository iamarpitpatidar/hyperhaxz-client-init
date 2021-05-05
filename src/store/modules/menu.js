export const menu = {
  namespaced: true,
  state: () => ({
    isOpen: false
  }),
  mutations: {
    toggleMenuState (state) {
      state.isOpen = !state.isOpen
    }
  }
}
