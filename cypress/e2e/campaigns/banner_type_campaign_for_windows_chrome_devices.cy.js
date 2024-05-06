import LoginPage from '../../pages/loginPage'
import CampaignPage from '../../pages/campaignPage'
import CampaignApprovePage from '../../pages/campaignApprovePage'
import CampaignViewPage from '../../pages/campaignViewPage'
import BidRequest from '../../support/bid_request'
import DashAPIRequest from '../../support/dash_api_requests'
import BidResponseAssert from '../../support/bid_response_assertion'

const LOGIN_PAGE = new LoginPage()

describe('Verify Banner type Campaign Creation, Approval and Bidding for windows chrome devices', () => {
  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      let testError = {
        title: this.currentTest.title,
        errMessage: this.currentTest.err ? this.currentTest.err.message : null,
        errStack: this.currentTest.err ? this.currentTest.err.stack : null,
      }
      const errorMessage = `
          Test failed:
          Title: ${testError.title}
          Error message: ${testError.errMessage || 'Error message not available'}
          Stack trace: ${testError.errStack || 'Stack trace not available'}
        `
      cy.fixture('../campaign_json/campaign.json').as('createdCampaign')
      cy.get('@createdCampaign').then((campaign) => {
        const DASH_API_REQUEST = new DashAPIRequest(campaign)
        DASH_API_REQUEST.deleteCampaign().then(() => {
          throw new Error(errorMessage)
        })
      })
    }
  })

  describe('Campaign creation and approve', () => {
    before(() => {
      LOGIN_PAGE.logIn()
    })

    it('Create campaign', () => {
      cy.fixture('banner_type_with_windows_chrome_campaign.json').as('campaign')
      cy.get('@campaign').then((campaignData) => {
        const CAMPAIGN_PAGE = new CampaignPage(campaignData)
        CAMPAIGN_PAGE.createCampaignAndVerifySuccessMsg()
      })
    })

    it('Approve campaign', () => {
      cy.fixture('../campaign_json/campaign.json').as('createdCampaign')
      cy.get('@createdCampaign').then((campaign) => {
        const CAMPAIGN_APPROVE_PAGE = new CampaignApprovePage(campaign)
        CAMPAIGN_APPROVE_PAGE.approveCampaignAndVerifyCampaignStatus()
      })
    })
  })

  describe('Bid request and response validation', () => {
    it('Send success bid requests', () => {
      cy.fixture('../bid_request/banner_windows_chrome_device_success_bid_request_body.json').as('successBidRequest')
      cy.get('@successBidRequest').then((requestBody) => {
        const BID_REQUEST = new BidRequest(requestBody)
        BID_REQUEST.createAndSaveBidResponse({ successBidResponse: true })
      })
    })

    it('Verify success bid response', { baseUrl: null }, () => {
      cy.fixture('../campaign_json/campaign.json').as('createdCampaign')
      cy.get('@createdCampaign').then((campaign) => {
        const BID_RESPONSE_ASSERTION = new BidResponseAssert(campaign)
        BID_RESPONSE_ASSERTION.verifyBidResponse({ snapName: 'banner_type_campaign_with_windwons_chrome_device' })
      })
    })

    it('Send failure bid requests', () => {
      cy.fixture('../bid_request/banner_windows_chrome_device_failure_bid_request_body.json').as('failureBidRequest')
      cy.get('@failureBidRequest').then((requestBody) => {
        const BID_REQUEST = new BidRequest(requestBody)
        BID_REQUEST.createAndSaveBidResponse({ successBidResponse: false })
      })
    })
  })

  describe('Statistics validation and clean up', () => {
    before(() => {
      LOGIN_PAGE.logIn()
    })

    it('Verify campaign statistics', () => {
      cy.fixture('../campaign_json/campaign.json').as('createdCampaign')
      cy.get('@createdCampaign').then((campaign) => {
        const CAMPAIGN_VIEW_PAGE = new CampaignViewPage(campaign)
        CAMPAIGN_VIEW_PAGE.verifyCampaignImpressions()
        const DASH_API_REQUEST = new DashAPIRequest(campaign)
        DASH_API_REQUEST.deleteCampaign()
      })
    })
  })
})
