import { UiCarouselModule } from './ui-carousel.module';

describe('UiCarouselModule', () => {
  let uiCarouselModule: UiCarouselModule;

  beforeEach(() => {
    uiCarouselModule = new UiCarouselModule();
  });

  it('should create an instance', () => {
    expect(uiCarouselModule).toBeTruthy();
  });
});
