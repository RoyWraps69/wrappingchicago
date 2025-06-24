
export const SITEMAP_CONFIG = {
  domain: 'https://www.wrappingchicago.com',
  getCurrentDate: () => new Date().toISOString().split('T')[0],
  defaultChangeFreq: 'weekly' as const,
  defaultPriority: 0.8
};

export const CHANGE_FREQUENCIES = {
  ALWAYS: 'always' as const,
  HOURLY: 'hourly' as const,
  DAILY: 'daily' as const,
  WEEKLY: 'weekly' as const,
  MONTHLY: 'monthly' as const,
  YEARLY: 'yearly' as const,
  NEVER: 'never' as const
};

export const PRIORITIES = {
  CRITICAL: 1.0,
  HIGH: 0.9,
  MEDIUM_HIGH: 0.8,
  MEDIUM: 0.7,
  LOW_MEDIUM: 0.6,
  LOW: 0.5
};
