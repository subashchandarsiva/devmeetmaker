# Dependency Maintenance

## Update Policy

Dependabot checks every npm package directory weekly on Monday. Minor and patch
updates are grouped; major upgrades remain separate PRs. Each directory allows
up to five version-update PRs. The schedule takes effect after the configuration
is merged into the default branch. Automatic merging is not configured; review
updates and run the relevant checks before merging.

## September 8, 2026 Update

Updated Mongoose to major version 8 and removed obsolete connection options; updated jsonwebtoken to major version 9 and the development process tools. Removed the unused request dependency.

Validation: Clean installation and a real MongoDB 7 connection passed in Node 22 Docker containers. All five existing routes returned their expected responses. Temporary database and servers were stopped after testing.

The npm audit result for the updated lockfile is **0 critical, 0 high, 2 moderate**.
These counts include npm dependency propagation and are not directly comparable
to GitHub Dependabot advisory counts. Re-run npm audit for current results.

Two moderate findings remain in the Express/qs dependency chain. Routes remain placeholders; this update does not implement authentication.
