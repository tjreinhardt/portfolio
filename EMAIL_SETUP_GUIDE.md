# EmailJS Setup Guide for Breme AI Contact Form

## Overview
The contact form now uses EmailJS to send emails directly from the client-side without requiring a backend server. This provides a much better user experience.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Configure Email Service
1. In EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail, Outlook, etc.)
3. Follow the setup instructions for your provider
4. Note your **Service ID** (e.g., `service_breme_ai`)

### 3. Create Email Template
1. Click "Create New Template"
2. Use this template structure:

```
Subject: {{inquiry_type}} Inquiry - {{company}}

Hello Breme AI Team,

My name is {{from_name}} from {{company}}.

Inquiry Type: {{inquiry_type}}

Message:
{{message}}

Contact: {{from_email}}

Best regards,
{{from_name}}
```

3. Note your **Template ID** (e.g., `template_contact_form`)

### 4. Get Public Key
1. Go to "Account" > "General"
2. Copy your **Public Key**

### 5. Update ContactMe.tsx
Replace these values in `components/ContactMe.tsx`:

```typescript
const serviceId = 'your_actual_service_id'; // Replace with your Service ID
const templateId = 'your_actual_template_id'; // Replace with your Template ID  
const publicKey = 'your_actual_public_key'; // Replace with your Public Key
```

### 6. Test the Form
1. Fill out the contact form on your website
2. Check that emails are received at info@bremenow.com
3. Verify all form data appears correctly in the email

## Template Variables Used
- `{{from_name}}` - Contact's full name
- `{{from_email}}` - Contact's email address
- `{{company}}` - Company/Organization name
- `{{inquiry_type}}` - Selected inquiry type
- `{{message}}` - Message content
- `{{to_email}}` - Your receiving email (info@bremenow.com)

## Features Included
✅ **Auto-send emails** - No need to open email client
✅ **Form validation** - Required fields and email validation
✅ **Loading states** - Shows "Sending Message..." during submission
✅ **Success/Error messages** - Clear feedback to users
✅ **Form reset** - Clears form after successful submission
✅ **Mobile responsive** - Works perfectly on all devices

## Benefits Over mailto:
- No need for users to have email client configured
- Works on all devices (mobile, desktop, tablet)
- Professional user experience
- Form data validation before sending
- Immediate feedback to users
- Automatic form clearing after success

## Troubleshooting
- **Emails not sending**: Check Service ID, Template ID, and Public Key
- **Template errors**: Ensure all variables match exactly
- **Blocked by email provider**: Check EmailJS service configuration
- **CORS issues**: EmailJS handles this automatically for client-side requests

## Monthly Limits (Free Plan)
- 200 emails per month
- Can upgrade for higher limits if needed

This setup provides a professional, seamless email experience for your contact form! 