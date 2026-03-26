import { describe, it, expect } from 'vitest';
import { SITE_CONFIG } from '../../config/site.config.js';

describe('SITE_CONFIG', () => {
  it('has required brand fields', () => {
    expect(SITE_CONFIG.brand.name).toBe('PRCJ');
    expect(SITE_CONFIG.brand.currency).toBeDefined();
    expect(SITE_CONFIG.brand.locale).toBeDefined();
  });

  it('has catalog config', () => {
    expect(SITE_CONFIG.catalog.pageSize).toBeGreaterThan(0);
    expect(SITE_CONFIG.catalog.freeShippingThreshold).toBeGreaterThan(0);
    expect(SITE_CONFIG.catalog.taxRate).toBeGreaterThan(0);
    expect(SITE_CONFIG.catalog.taxRate).toBeLessThan(1);
  });

  it('has contact details', () => {
    expect(SITE_CONFIG.contact.email).toBeTruthy();
    expect(SITE_CONFIG.contact.phone).toBeTruthy();
  });
});
