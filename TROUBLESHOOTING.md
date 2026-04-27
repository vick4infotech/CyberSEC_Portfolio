# Troubleshooting

Do not open index.html directly from the file system. This is a Vite React application and must be started through the dev server.

Use:

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite, usually http://localhost:5173/.

If the browser is blank with no visible error:

1. Stop the server with Ctrl + C.
2. Delete node_modules and package-lock.json.
3. Run npm install again.
4. Run npm run dev again.
5. Hard refresh the browser with Ctrl + Shift + R.

This version uses HashRouter, so routes work reliably even when previewed or deployed from a subfolder.
