import { describe, it, expect, vi } from 'vitest';

describe('FEATURES', () => {
  it('always-on features are true', async () => {
    const { FEATURES } = await import('../../config/features.js');
    expect(FEATURES.catalog).toBe(true);
    expect(FEATURES.contactForm).toBe(true);
    expect(FEATURES.appointmentForm).toBe(true);
  });

  it('phase-2 features default to false (env not set to true)', async () => {
    // In test env, env vars not set to "true" so these should be false
    const { FEATURES } = await import('../../config/features.js');
    expect(FEATURES.isPaymentSystem).toBe(false);
    expect(FEATURES.isChatBot).toBe(false);
    expect(FEATURES.isWishlist).toBe(false);
    expect(FEATURES.isAdminPanel).toBe(false);
    expect(FEATURES.isLoyaltyPoints).toBe(false);
  });
});
