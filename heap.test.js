import {expect} from 'chai';
import {maxHeapify} from './heap';

describe('heap methods',function(){
  describe('maxHeapify',function(){
    let arr;

    beforeEach(function(){
      arr = [4,14,7,2,8,1];
    });

    it('works?',function(){
      console.log(maxHeapify(arr,0));
      expect(1).to.equal(1);
    });
  });
});
