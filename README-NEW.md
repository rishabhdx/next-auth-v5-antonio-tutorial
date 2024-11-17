## GitHub Copilot Chat

- Extension Version: 0.22.2 (prod)
- VS Code: vscode/1.95.2
- OS: Mac

## Network

User Settings:

```json
  "github.copilot.advanced": {
    "debug.useElectronFetcher": true,
    "debug.useNodeFetcher": false
  }
```

Connecting to https://api.github.com:

- DNS ipv4 Lookup: 20.207.73.85 (33 ms)
- DNS ipv6 Lookup: ::ffff:20.207.73.85 (21 ms)
- Electron Fetcher (configured): HTTP 200 (352 ms)
- Node Fetcher: HTTP 200 (131 ms)
- Helix Fetcher: HTTP 200 (444 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:

- DNS ipv4 Lookup: 140.82.113.21 (130 ms)
- DNS ipv6 Lookup: ::ffff:140.82.113.21 (155 ms)
- Electron Fetcher (configured): HTTP 200 (2005 ms)
- Node Fetcher: HTTP 200 (930 ms)
- Helix Fetcher: HTTP 200 (973 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).
