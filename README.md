# HideOwnStreamPreview

An Equicord userplugin that hides the floating picture-in-picture preview of **your own screen share** without stopping your broadcast.

- Your viewers continue receiving your stream.
- Other people's stream previews and camera previews are not targeted.
- Enabled by default once installed. Toggle **HideOwnStreamPreview** in Equicord's Plugins settings and reload Discord to apply changes.

## Installation

Requires an Equicord developer build.

### UserPluginInstaller

Enable **UserPluginInstaller** in Equicord's Plugins settings. Post this repository's URL in a Discord message, use the **Install Plugin** button if offered, and follow the installer's prompts:

https://github.com/xBandaku/HideOwnStreamPreview

### Manual installation

Run these commands from your Equicord source folder:

```powershell
git clone https://github.com/xBandaku/HideOwnStreamPreview.git src/userplugins/hideOwnStreamPreview
pnpm build --dev
```

Fully restart Discord after building. If you are currently streaming, wait until your stream ends before restarting.

## Compatibility

The patch targets the floating preview component in Discord desktop 1.0.9265. The Equicord development build succeeded and the patch matched the local Discord code. Live streaming behavior has not yet been verified. Future Discord updates may require updating the patch.

This hides the local floating preview only. It does not change the content transmitted to viewers or Discord's stream thumbnails.

## License

GPL-3.0-or-later. See [LICENSE](LICENSE).
