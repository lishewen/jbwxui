import { StaticpagesModule } from './staticpages.module';

describe('StaticpagesModule', () => {
  let staticpagesModule: StaticpagesModule;

  beforeEach(() => {
    staticpagesModule = new StaticpagesModule();
  });

  it('should create an instance', () => {
    expect(staticpagesModule).toBeTruthy();
  });
});
