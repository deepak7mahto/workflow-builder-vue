import { defineStore } from 'pinia'

export class TreeNode {
  constructor(name) {
    this.name = name;
    this.id = (Math.random() * 100000).toFixed(0);
    this.parent = null;
    this.children = [];
  }
}

// const noNode = new TreeNode('no');

// noNode.children = [new TreeNode('send_mail', new TreeNode('send_mail'))]

// const yesNode = new TreeNode('yes');

// yesNode.children = [new TreeNode('send_mail', new TreeNode('send_mail'))]

// const ifElseNode = new TreeNode('if-else');

// ifElseNode.children = [yesNode, noNode];

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

      function insertTreeNode(currentTree) {
        if (currentTree.id === parent.id) {
          currentTree.children.splice(nodeIndex + 1, 0, new TreeNode(data))
        }

        const latestChildren = currentTree.children.map((currentItem) => {
          return insertTreeNode(currentItem);
        });

        return { ...currentTree, children: latestChildren }
      }

      const newTree = insertTreeNode({ ...this.tree });

      this.tree = { ...newTree }

    },
    removeNode(node) {
      console.log('Removing Node', node);

      function removeTreeNode(currentTree) {

        const latestChildren = currentTree.children.filter((item) => item.id !== node.id).map((currentItem) => {
          return removeTreeNode(currentItem);
        });

        return { ...currentTree, children: latestChildren }
      }

      const newTree = removeTreeNode({ ...this.tree });

      this.tree = { ...newTree }
    }
  },
  persist: true,
})
