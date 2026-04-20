import json
from pathlib import Path
from google.oauth2 import service_account
from googleapiclient.discovery import build

KEY_PATH = Path(r"E:/repos/mcp/my-rents-seo.json")
SITE_URL = "sc-domain:myrents-app.com"
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]

creds = service_account.Credentials.from_service_account_file(KEY_PATH, scopes=SCOPES)
service = build("webmasters", "v3", credentials=creds)

# 1. site verification
site = service.sites().get(siteUrl=SITE_URL).execute()

# 2. sitemaps
sitemaps = service.sitemaps().list(siteUrl=SITE_URL).execute()

# 3. search analytics
from datetime import datetime, timedelta
end_date = datetime.utcnow().date()
start_date = end_date - timedelta(days=27)
body_base = {
    "startDate": start_date.isoformat(),
    "endDate": end_date.isoformat(),
}

analytics = service.searchanalytics()
trend = analytics.query(siteUrl=SITE_URL, body={**body_base, "dimensions": ["date"], "rowLimit": 10000}).execute()
pages = analytics.query(siteUrl=SITE_URL, body={**body_base, "dimensions": ["page"], "rowLimit": 10}).execute()
queries = analytics.query(siteUrl=SITE_URL, body={**body_base, "dimensions": ["query"], "rowLimit": 10}).execute()

result = {
    "site": site,
    "sitemaps": sitemaps,
    "trend": trend,
    "pages": pages,
    "queries": queries,
}
print(json.dumps(result, indent=2, ensure_ascii=False))
