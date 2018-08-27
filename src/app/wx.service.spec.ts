import { TestBed, inject } from '@angular/core/testing';

import { WXService } from './wx.service';

describe('WXService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WXService]
    });
  });

  it('should be created', inject([WXService], (service: WXService) => {
    expect(service).toBeTruthy();
  }));
});
