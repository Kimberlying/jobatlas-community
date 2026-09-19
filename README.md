# JobAtlas Community

JobAtlas Community is the open-source edition of JobAtlas, an Australian job-discovery product focused on helping people find more roles without checking company career sites one by one.

The Community Edition provides a transparent, self-hostable search interface for official company sources, ATS listings, and selected job platforms. The paid JobAtlas Cloud product is built on the same Community foundation and adds hosted operations.

## What is included

- Multi-profession search across IT, marketing, finance, audit, healthcare, medicine, construction, operations, and more
- Filters for source, location, profession, employment type, work mode, and hiring status
- Sorting by freshness, salary, and match score
- Salary, first-seen time, last-checked time, status, and official application links
- Local saved-job interactions
- Non-sending Email, Telegram, Discord, and WhatsApp alert configuration prototypes
- Three switchable visual themes: Forest Mist, Paper, and Night Watch
- Responsive layouts for phone, tablet, and desktop

## Run locally

No build step or dependency installation is required.

1. Clone this repository.
2. Open `dist/index.html` in a browser.

## Data notice

All job records bundled with this repository are sample data for product demonstration. They are not assertions that those jobs are currently open. The alert form does not transmit or store contact details.

A production deployment should replace sample records with legally collected public job data and retain source attribution, official application URLs, and check timestamps.

## Community and Cloud boundary

This public repository contains the free search experience and demo data. JobAtlas Cloud includes this Community Edition and keeps the following hosted-service capabilities private:

- production data connectors and monitoring infrastructure
- high-frequency refresh and change detection
- email, SMS, or messaging delivery
- user accounts, subscriptions, billing, and abuse prevention
- production observability and operations

Nothing in the Cloud edition removes the rights granted to the Community Edition under its license.

## License

JobAtlas Community is licensed under the GNU Affero General Public License v3.0. See `LICENSE`.
