// EmailJS configuration file
// This file contains the setup for EmailJS service and template

// EmailJS Service Configuration Guide
// 1. Create a free account at https://www.emailjs.com/
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create a new email template
// 4. Update the service_id and template_id below

const EMAILJS_CONFIG = {
  // Your EmailJS public key (already initialized in the main script)
  publicKey: "RrfKXUJqdjRY9RI8E",
  
  // Service ID - replace 'default_service' with your actual service ID from EmailJS dashboard
  serviceId: "default_service",
  
  // Template ID - replace 'template_default' with your actual template ID from EmailJS dashboard
  templateId: "template_default",
  
  // Recipient email (this is hardcoded in the main script as well)
  toEmail: "abdalrahimsaid@gmail.com"
};

/*
EMAILJS TEMPLATE SETUP INSTRUCTIONS:

1. In your EmailJS dashboard, create a new template with the following parameters:
   - Template name: User Data Collection
   - Subject: {{subject}}
   - Content: 
     <div>
       {{{message}}}
     </div>

2. Make sure to use triple braces {{{message}}} to allow HTML content in the email

3. Save the template and note the template ID

4. Update the templateId value in this configuration file

Note: The script is currently using default service and template IDs.
For the script to work properly, you need to create a service and template
in your EmailJS dashboard and update the IDs in this file.
*/
