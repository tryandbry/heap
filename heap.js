
const maxHeapify = (arr,root) => {
  console.log('root:',root);

  //note: index must start at 1 for algorithm to work
  let left = 2*(root+1)-1;
  let right = (2*(root+1) + 1)-1;
  //check if children are less than parent
  if(arr[left] > arr[root]){
    swap(arr,root,left);
    maxHeapify(arr,left);
  }
  else if(arr[right] > arr[root]){
    swap(arr,root,right);
    maxHeapify(arr,right);
  }
  return arr;
}

const swap = (arr,a,b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

export {maxHeapify};
