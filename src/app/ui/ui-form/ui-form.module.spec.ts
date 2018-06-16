import { UiFormModule } from './ui-form.module';

describe('UiFormModule', () => {
  let uiFormModule: UiFormModule;

  beforeEach(() => {
    uiFormModule = new UiFormModule();
  });

  it('should create an instance', () => {
    expect(uiFormModule).toBeTruthy();
  });
});
