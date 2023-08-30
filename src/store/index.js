import { defineStore } from 'pinia'

export class TreeNode {
  constructor(name) {
    this.name = name;
    this.id = (Math.random() * 100000).toFixed(0);
    this.children = [];
  }
}

const initialState = new TreeNode('root');

initialState.children = [new TreeNode('start_automation')];

export const useWorkFlowStore = defineStore('workflow', {
  state: () => ({
    tree: initialState
  }),
  getters: {
    getTree: state => state.tree,
  },
  actions: {
    addNode(parent, nodeIndex, data) {

      function insertTreeNode(node, parentId, data) {

        if (node.id === parentId) {
          if (data === 'if-else') {
            console.log(node)

            const noNode = new TreeNode('no');

            const yesNode = new TreeNode('yes');

            const ifElseNode = new TreeNode('if-else');

            ifElseNode.children = [yesNode, noNode];

            node.children.splice(nodeIndex + 1, 0, ifElseNode)
          } else {
            node.children.splice(nodeIndex + 1, 0, new TreeNode(data))
          }

        }

        for (const child of node.children) {
          insertTreeNode(child, parentId, data)
        }

      }

      insertTreeNode(this.tree, parent.id, data);
    },
    removeNode(node) {

      function removeTreeNode(tree) {

        tree.children = tree.children.filter((child) => child.id !== node.id);

        for (const child of tree.children) {
          removeTreeNode(child)
        }
      }

      removeTreeNode(this.tree);
    }
  },
  persist: true,
})
