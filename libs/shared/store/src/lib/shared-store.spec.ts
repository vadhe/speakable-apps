import { sharedStore } from './shared-store';

describe('sharedStore', () => {
  it('should work', () => {
    expect(sharedStore()).toEqual('shared-store');
  });
});
