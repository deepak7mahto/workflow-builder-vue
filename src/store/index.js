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

noNode.children = [new TreeNode('send_mail', new TreeNode('send_mail'))]

const yesNode = new TreeNode('yes');

yesNode.children = [new TreeNode('send_mail', new TreeNode('send_mail'))]

const ifElseNode = new TreeNode('if-else');

ifElseNode.children = [yesNode, noNode];

const initialState = new TreeNode('root');

initialState.children = [new TreeNode('start_automation'), new TreeNode('send_mail'), new TreeNode('send_mail'), ifElseNode];

console.log(initialState);


export const useWorkFlowStore = defineStore('workflow', {
  state: () => ({
    tree: initialState
  }),
  getters: {
    getTree: state => state.tree,
  },
  actions: {
    addNode(node, data) {
      console.log('Adding ', node, data);
      console.log(node.id);

      function insertTreeNode(currentTree) {

        console.log('Traversing ' + currentTree.id);

        if (currentTree.id === node.id) {
          console.log('Matched');
          currentTree.children.splice(0, 0, new TreeNode(data))
        }

        const latestChildren = currentTree.children.map(currentItem => {
          return insertTreeNode(currentItem);
        });

        return { ...currentTree, children: latestChildren }
      }

      const newTree = insertTreeNode({ ...this.tree });

      console.log(newTree)

      this.tree = { ...newTree }

    },
    removeNode(node) {
      console.log('Removing Node', node);
    }
  },
})
