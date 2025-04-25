import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";
// Project: Playwright Test Automation Framework

export class NavigationPage extends HelperBase {

  // Page Object for the Navigation Page
  // This class contains methods to navigate to different pages in the application
  // It extends the HelperBase class to inherit common functionality
  // The constructor takes a Page object as a parameter and initializes the page
  // It also initializes the Locators for the different menu items in the navigation bar
  // The class contains methods to navigate to different pages by clicking on the corresponding menu items
  // The methods selectGoupMenuItem and selectMenuItem are used to expand the menu items and click on the desired menu item
  // The class is used in the tests to navigate to different pages and perform actions on them
  
  readonly fromLayoutsMenuItem: Locator;
  readonly datePickerMenuItem: Locator;
  readonly smartTableMenuItem: Locator;
  readonly toastrMenuItem: Locator;
  readonly tooltipMenuItem: Locator;

  constructor(page: Page) {
    super(page);
    this.fromLayoutsMenuItem = page.getByText('Form Layouts');
    this.datePickerMenuItem = page.getByText('Datepicker');
    this.smartTableMenuItem = page.getByText('Smart Table');
    this.toastrMenuItem = page.getByText('Toastr');
    this.tooltipMenuItem = page.getByText('Tooltip');
  }

  async formLayoutsPage(){
    await this.selectGoupMenuItem('Forms');
    await this.page.getByText('Form Layouts').click();
    await this.waitForNumberOfSeconds(2);
  }

  async datepickerPage(){
    await this.selectGoupMenuItem('Forms');
    await this.datePickerMenuItem.click();
  }

  async smartTablePage(){
    await this.selectGoupMenuItem('Tables & Data');
    await this.smartTableMenuItem.click();
  }

  async toastrPage(){
    await this.selectGoupMenuItem('Modal & Overlays');
    await this.toastrMenuItem.click();
  }

  async tooltipPage(){
    await this.selectGoupMenuItem('Modal & Overlays');
    await this.tooltipMenuItem.click();
  }

  private async selectGoupMenuItem(groupItemTitle: string){
    const groupMenuItem = this.page.getByTitle(groupItemTitle)
    const expandedState = await groupMenuItem.getAttribute('aria-expanded')
    if(expandedState == "false"){
      await groupMenuItem.click()
    }
  }
}