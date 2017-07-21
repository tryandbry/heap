# heap
A heap is:
1. complete: each level of the tree is completely filled except possibly the bottom level, in which case the nodes are in the leftmost positions
2. satisfies the heap-order property: the root is greater than either of its children

Implementing heap method(s):

method | description
------ | -----------
maxHeapify | turns a binary tree (represented as an array) that is almost a heap (i.e. breaks only one of two conditions) into a heap

## Testing:
```
npm test
```
