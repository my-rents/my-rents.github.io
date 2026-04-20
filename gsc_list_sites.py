from pathlib import Path
from google.oauth2 import service_account
from googleapiclient.discovery import build

KEY_PATH = Path(r"E:/repos/mcp/my-rents-seo.json")
creds = service_account.Credentials.from_service_account_file(KEY_PATH, scopes=["https://www.googleapis.com/auth/webmasters.readonly"])
service = build("webmasters", "v3", credentials=creds)
print(service.sites().list().execute())
