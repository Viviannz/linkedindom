# Stripe Integration Setup Guide

Complete guide to set up Stripe payments for your LinkedIn Domination System.

## 🎯 Overview

Your app now has a **$49/month subscription** model:
- Users see a pricing page on first visit
- After subscribing via Stripe, they get access to the ChatKit AI assistant
- Subscription status is stored in browser localStorage (35-day validity)

---

## 📋 Step 1: Set Up Stripe Account

### Create/Access Your Stripe Account
1. Go to [stripe.com](https://stripe.com)
2. Sign up or log in
3. Complete your business profile

### Switch to Test Mode (for development)
1. In Stripe Dashboard, toggle **"Test mode"** (top right corner)
2. You'll use test keys first, then switch to live mode when ready

---

## 💳 Step 2: Create Your Product & Pricing

### Create a Subscription Product
1. In Stripe Dashboard, go to **Products** → **Add product**
2. Fill in:
   - **Name**: `LinkedIn Domination System` (or your preferred name)
   - **Description**: `Unlimited AI-powered LinkedIn coaching and strategy`
   - **Pricing**: Select **"Recurring"**
   - **Amount**: `$49.00` (or your chosen price)
   - **Billing period**: **Monthly**
3. Click **Save product**

### Get Your Price ID
1. After creating the product, click on it
2. Find the **Pricing** section
3. Copy the **Price ID** (starts with `price_...`)
   - Example: `price_1AbC2dEfGhIjKlMn`
   - **Save this!** You'll need it for environment variables

---

## 🔑 Step 3: Get Your API Keys

### Get Secret Key
1. Go to **Developers** → **API keys**
2. Copy your **Secret key** (starts with `sk_test_...` in test mode)
   - Click **"Reveal test key"** to see it
   - **Keep this secret!** Never commit to Git

### Get Publishable Key (optional for now)
- You'll see a **Publishable key** (starts with `pk_test_...`)
- Not needed yet, but good to note

---

## 🔔 Step 4: Set Up Webhook (for subscription management)

### Create Webhook Endpoint
1. Go to **Developers** → **Webhooks**
2. Click **Add endpoint**
3. For **Endpoint URL**, enter:
   ```
   https://dominationos.netlify.app/api/stripe-webhook
   ```
   *(Replace with your actual Netlify domain)*

4. Click **Select events** and choose:
   - `checkout.session.completed`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`

5. Click **Add endpoint**

### Get Webhook Secret
1. After creating the endpoint, click on it
2. Click **"Reveal"** in the **Signing secret** section
3. Copy the webhook secret (starts with `whsec_...`)
   - **Save this!** You'll need it for environment variables

---

## ⚙️ Step 5: Configure Netlify Environment Variables

### Add Environment Variables in Netlify
1. Go to your Netlify dashboard
2. Select your site (`dominationos`)
3. Go to **Site configuration** → **Environment variables**
4. Add these variables:

| Variable Name | Value | Example |
|--------------|-------|---------|
| `STRIPE_SECRET_KEY` | Your Stripe secret key | `sk_test_51Ab...` |
| `STRIPE_PRICE_ID` | Your product price ID | `price_1Ab...` |
| `STRIPE_WEBHOOK_SECRET` | Your webhook signing secret | `whsec_Ab...` |
| `OPENAI_API_KEY` | *(already set)* | `sk-proj-...` |
| `CHATKIT_WORKFLOW_ID` | *(already set)* | `chatkit_workflow_...` |

5. Click **Save** after adding each variable

---

## 📦 Step 6: Deploy to Netlify

### Install Stripe Dependency
The code is ready, but Netlify needs to install the Stripe library:

1. **Option A: Trigger a new deploy**
   - Make any small change (add a comment to a file)
   - Commit and push to GitHub
   - Netlify will auto-deploy and install dependencies

2. **Option B: Manual deploy**
   - In Netlify dashboard, go to **Deploys**
   - Click **Trigger deploy** → **Deploy site**

---

## 🧪 Step 7: Test Your Integration

### Test with Stripe Test Cards
1. Visit your site: `https://dominationos.netlify.app`
2. Click **"Subscribe Now"**
3. You'll be redirected to Stripe Checkout
4. Use Stripe test card:
   - **Card number**: `4242 4242 4242 4242`
   - **Expiry**: Any future date (e.g., `12/34`)
   - **CVC**: Any 3 digits (e.g., `123`)
   - **ZIP**: Any 5 digits (e.g., `12345`)
5. Complete checkout
6. You should be redirected back and see the ChatKit widget!

### Verify in Stripe Dashboard
1. Go to **Payments** in Stripe Dashboard
2. You should see your test payment
3. Go to **Customers** to see the created customer
4. Go to **Subscriptions** to see the active subscription

---

## 🚀 Step 8: Go Live!

When you're ready for real customers:

### Switch to Live Mode
1. In Stripe Dashboard, toggle **"Test mode"** OFF
2. Complete any required business verification
3. Get your **live API keys**:
   - Go to **Developers** → **API keys**
   - Copy **Live** secret key (starts with `sk_live_...`)
   - Copy your **Live** price ID from your product

### Update Netlify Environment Variables
1. Update these to **live** values:
   - `STRIPE_SECRET_KEY` → your live secret key
   - `STRIPE_PRICE_ID` → your live price ID
   - `STRIPE_WEBHOOK_SECRET` → your live webhook secret (recreate webhook endpoint in live mode)

### Create Live Webhook
1. In Stripe (live mode), go to **Developers** → **Webhooks**
2. Add endpoint: `https://dominationos.netlify.app/api/stripe-webhook`
3. Select same events as before
4. Copy the new webhook secret and update Netlify

---

## 💰 Pricing Options

Currently set to **$49/month**. To change:

### Update Price in Stripe
1. Create a new pricing plan in your Stripe product
2. Get the new Price ID
3. Update `STRIPE_PRICE_ID` in Netlify

### Update Price on Website
Edit `index.html` around line 477:
```html
<div class="price">$49<span>...</span></div>
```

---

## 🔍 Troubleshooting

### "Stripe price ID not configured" error
- Make sure `STRIPE_PRICE_ID` is set in Netlify environment variables
- Redeploy after adding variables

### Payment succeeds but chat doesn't unlock
- Check browser console for errors
- Verify webhook is receiving events (check Stripe Dashboard → Webhooks → Events)
- Try clearing localStorage and subscribing again

### Webhook failing
- Make sure webhook URL is correct: `https://yourdomain.netlify.app/api/stripe-webhook`
- Check that `STRIPE_WEBHOOK_SECRET` matches the secret in Stripe Dashboard
- View Netlify function logs for errors

---

## 📊 Monitor Your Business

### View Metrics in Stripe
- **Dashboard**: Overview of revenue, customers, subscriptions
- **Payments**: All successful payments
- **Subscriptions**: Active and canceled subscriptions
- **Customers**: Customer list with subscription status

### Handle Cancellations
- Customers can cancel via Stripe billing portal (you can enable this in Settings → Billing)
- Webhook will notify you when subscriptions are canceled
- Future enhancement: Revoke access on cancellation

---

## 🎉 You're All Set!

Your LinkedIn Domination System now has:
- ✅ Beautiful pricing page
- ✅ Secure Stripe checkout
- ✅ Subscription verification
- ✅ Payment gated ChatKit access
- ✅ Simple, clean user experience

**Next Steps:**
1. Test the full flow in test mode
2. Drive traffic to your site
3. Monitor subscriptions in Stripe
4. Consider adding: billing portal, email notifications, usage analytics

---

## 🆘 Need Help?

- **Stripe Docs**: [stripe.com/docs](https://stripe.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Stripe Support**: Available in your Stripe Dashboard

Good luck with your LinkedIn Domination System! 🚀
