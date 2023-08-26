import { defineStore } from 'pinia'

export const useWorkFlowStore = defineStore('workflow', {
  state: () => ({ tree: {} }),
  getters: {
    getTree: state => state.tree,
  },
  actions: {
    addNode(node, data) {
      console.log('Adding ', node, data)
    },
  },
})
