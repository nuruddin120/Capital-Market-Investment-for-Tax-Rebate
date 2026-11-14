# BD BO Account Tax Rebate Calculator

Bangladesh Income Tax Act compliant calculator to determine eligible share market investment for Tax Rebate (Schedule 24D) and Asset Statement (IT-10B).

## Included Methods
1. **Method 1: Net Inflow Cap Method** (`MAX(0, MIN(Net Inflow, Incremental Cost))`) — Most audit-safe.
2. **Method 2: Incremental Holding Method** (`MAX(0, Closing Cost - Opening Cost)`).
3. **Method 3: Closing Cumulative Method** (`Closing Equity at Cost`) — Applicable only when Opening Balance is 0.00.

## Deployment on GitHub & Vercel
1. Create a new repository on GitHub and upload all files from this folder (`index.html`, `style.css`, `script.js`, `vercel.json`, `README.md`).
2. Go to [Vercel](https://vercel.com), click **Add New → Project**, and import your GitHub repository.
3. Leave Framework Preset as **Other** and click **Deploy**.
