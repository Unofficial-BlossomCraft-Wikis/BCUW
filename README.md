# BCUW V5-Alpha

The BlossomCraft Unofficial Wiki is a community-driven wiki for the BlossomCraft Minecraft server.

As of 1/11/2025, the wiki has been moved into this monorepo setup.

## File Structure

- `client/`: Contains the client-side code for the wiki. Including the website and app.
  - `website/`: Contains the code for the website.

## Why V5?
We are bumping the version of BCUW as we move to a new backend (NextJS) we will attempt to maintain backwards compatibility with V4 as much as possible, though it is possible that stuff will break.

### Note
Although officially titled V5, it will be following a different versioning that will be used per commit. [Epoch Semantic Versioning (Epoch SemVer)](https://antfu.me/posts/epoch-semver) that The creator of UnoCSS and Vitest has started using. Yes its made for packages, but it can help with debugging and tracing back bugs.

{EPOCH * 100 + MAJOR}.MINOR.PATCH

    EPOCH: Increment when you make significant or groundbreaking changes.
    MAJOR: Increment when you make minor incompatible API changes.
    MINOR: Increment when you add functionality in a backwards-compatible manner.
    PATCH: Increment when you make backwards-compatible bug fixes.

thus making this version of BCUW 500.0.0-a.0

### Current version
v500.0.0-a.0

## Goals of V5
-[] Maintain client-side capatibility (/complex/path on v4 -> /complex/path on v5)
-[] move all information from MDX files to a database
-[] keep the website as visually consistent as possible
-[] make the website as accessible as possible