import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});

test.afterEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
});

test.describe('First suite', () => {
    
    test.skip('Locator text rules', async ({ page }) => {
        //By Tag name
        page.locator('input');

        //By ID
        await page.locator('#inputEmail1').click() //click on the element

        //By Class value
        page.locator('.shape-rectangle');

        //By Attribute
        page.locator('[placeholder="Email"]');

        //By Class value (full)
        page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]');

        //By combining different attributes
        page.locator('input[placeholder="Email"][nbinput]');

        //by Xpath [Not Recommended]
        page.locator('//*id="inputEmail1"]');

        //by partial Text match
        page.locator(':text("Using)');

        //by exact text match
        page.locator(':text-is("Using the Grid")');
        
    });

    // test('Navigate to date picker page test', async ({ page }) => {
    //     await page.getByText('Datepicker').click();
        
    //     // Add an assertion to verify the expected outcome
    //     const nbCardHeader = await page.getByText('Common Datepicker');
    //     await expect(nbCardHeader).toBeVisible();
    // });

    test.skip('User facing locator rules', async ({ page }) => {
        //Select the "Option 1" radio button by its label
        const radioButton = await page.getByLabel('Option 1');
        await radioButton.check({ force: false });
        await page.getByRole('radio', { name: 'Option 1' }).check({ force: true });
        await page.locator('.nb-card-header placeholder="Email"').fill('zeno');        


        await page.getByLabel('Option 1').click();

        await page.getByPlaceholder('Jow Doe').click();

        await page.getByText('Using the Grid').click();

        // data-testid is a specific attribute that is used to locate elements with playright
        await page.getByTestId('SignIn').click();

        // await page.getByTitle('IoT Dashboard').click();

        //Add an assertion to verify the radio button is selected
        await expect(radioButton).toBeChecked();
        await expect(page.getByRole('radio', { name: 'Option 1' })).toBeChecked();
    });

    test('Input email address', async ({ page }) => {
        // Navigate to the form layout page
        await page.goto('http://localhost:4200/');
        await page.getByText('Forms').click();
        await page.getByText('Form Layouts').click();
    
        // Input an email address into the specific email box using a more specific selector
        const emailInput = page.locator('nb-card:has-text("Using the Grid") input[placeholder="Email"]');
        await emailInput.fill('zeno@example.com');
    
        // Add an assertion to verify the email address is correctly inputted
        await expect(emailInput).toHaveValue('zeno@example.com');
    });

    test.skip('Locate child elements', async ({ page }) => {
        // Navigate to the form layout page
        await page.goto('http://localhost:4200/');
        await page.getByText('Forms').click();
        await page.getByText('Form Layouts').click();
    
        // // Locate the parent element
        // const parentElement = page.locator('nb-card:has-text("Using the Grid")');
    
        // // Locate the child element
        // const childElement = parentElement.locator('input[placeholder="Email"]');
    
        
        const signInButton = page.locator('nb-card').getByRole('button', { name: 'Sign in' });
        await signInButton.click();

        // Add an assertion to verify the "Sign in" button is visible, ofc can be done with verify next page
    
        await expect(signInButton).toBeVisible();
    });

    test('Locate parent elements', async ({ page }) => {
        await page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('textbox', { name: 'Email' }).click();
        await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox', { name: 'Email' }).click();
        
        await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', { name: 'Email' }).click();
    });

    test('Reusing the locators ', async ({ page }) => {
        const basicForm = page.locator('nb-card').filter({hasText: "Basic form"});
        await basicForm.getByRole('textbox', { name: 'Email' }).fill('test@test.com');
        await basicForm.getByRole('textbox', { name: 'Password' }).fill('Welcome123');
        await basicForm.getByRole('button', { name: 'Submit' }).click();
    });

    test('extractig values', async ({ page }) => {
        // singel value
        const basicForm = page.locator('nb-card').filter({hasText: "Basic form"});
        const buttonText = await basicForm.locator('button').textContent();
        expect(buttonText).toBe('Submit');

        // multiple values
        const allRadioButtons = await page.locator('nb-radio').allTextContents();
        console.log(allRadioButtons);
        expect(allRadioButtons).toContain('Option 1');

        // extract input value
        const emailField = basicForm.getByRole('textbox', { name: 'Email' });
        await emailField.fill('test@test.com');
        const emailValue = await emailField.inputValue();
        expect(emailValue).toEqual('test@test.com');

        // check the value of atribute
        const placeholderValue = await emailField.getAttribute('placeholder');
        expect(placeholderValue).toEqual('Email');
    });

    test('assertions', async ({ page }) => {
        
        // General assertion
        const value = 5;
        expect(value).toBe(5);

    });
  // End of the first suite
});
