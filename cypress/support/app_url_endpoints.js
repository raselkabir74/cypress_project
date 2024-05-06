export const APP_URL = {
  LOGIN: '/alogin',
  CAMPAIGN_PAGE: '',
  CAMPAIGN_SETTINGS_PAGE: '',
  CAMPAIGN_APPROVE_PAGE: (id) => ``,
  CAMPAIGN_MASS_APPROVE_PAGE: (ids) => ``,
  CAMPAIGN_MASS_EDIT_PAGE: (ids) => ``,
  CAMPAIGN_EDIT_PAGE: (id) => ``,
  CAMPAIGN_VIEW_PAGE: (id) => ``,
  NOTIFICATIONS: '',
  CREATIVE_SET_PAGE: '',
}

export const DASH_API_ENDPOINTS = {
  OAUTH: `/oauth/token`,
  BANNER_CAMPAIGN_CREATION: `/api/v1/campaign/banner/create`,
  CAMPAIGN_DELETION: (id) => `/api/v1/campaign/banner/delete/${id}`,
}
