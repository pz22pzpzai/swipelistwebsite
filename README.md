# Swipelist Marketing Site

Minimal static marketing website for the Swipelist Android app.

## Develop

1. Ensure Python 3 is installed.
2. Serve the site locally:
   ```bash
   python3 -m http.server --directory site 8080
   ```
   Then visit [http://localhost:8080](http://localhost:8080).

## Deployment

GitHub Actions deploys the contents of `/site` to Hostinger via FTPS whenever you push to `main`. The workflow uses [`SamKirkland/FTP-Deploy-Action@v4.3.4`](https://github.com/SamKirkland/FTP-Deploy-Action).

### Required GitHub secrets

Set these in **Settings → Secrets and variables → Actions**:

- `HOSTINGER_FTP_SERVER`  = `ftp.yourdomain.com`
- `HOSTINGER_FTP_USERNAME` = `your_ftp_user`
- `HOSTINGER_FTP_PASSWORD` = `your_ftp_password`
- `HOSTINGER_FTP_PORT`    = `21`
- `HOSTINGER_SERVER_DIR`  = `/public_html` *(or `/domains/yourdomain.com/public_html`)*

Commit to `main` to trigger deployment. Site files in `/site` should appear on the server directory. If Hostinger uses a domain subfolder, update `HOSTINGER_SERVER_DIR` accordingly.
