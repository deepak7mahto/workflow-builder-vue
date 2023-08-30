import { defineStore } from 'pinia'

export class TreeNode {
  constructor(name) {
    this.name = name;
    this.id = (Math.random() * 100000).toFixed(0);
    this.parent = null;
    this.children = [];
  }
}

const noNode = new TreeNode('no');

// noNode.children = [new TreeNode('send_mail', new TreeNode('send_mail'))]

const yesNode = new TreeNode('yes');

// yesNode.children = [new TreeNode('send_mail', new TreeNode('send_mail'))]

const ifElseNode = new TreeNode('if-else');

ifElseNode.children = [yesNode, noNode];

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

        console.log(node.id, parentId)

        if (node.id === parentId) {
          if (data === 'if-else') {
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

      function removeTreeNode(currentTree) {

        let latestChildren = currentTree.children.filter((item) => item.id !== node.id);

        latestChildren = latestChildren.map((currentItem) => {
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
