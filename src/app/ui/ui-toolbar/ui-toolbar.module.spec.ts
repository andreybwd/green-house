import { UiToolbarModule } from './ui-toolbar.module';

describe('UiToolbarModule', () => {
  let uiToolbarModule: UiToolbarModule;

  beforeEach(() => {
    uiToolbarModule = new UiToolbarModule();
  });

  it('should create an instance', () => {
    expect(uiToolbarModule).toBeTruthy();
  });
});
