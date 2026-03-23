---
name: pr-generation
description: Create, merge, and clean up a PR from the current workspace changes without stopping mid-workflow.
argument-hint: '[optional PR focus or extra context]'
agent: 3.1-Beast
model: Raptor mini (Preview) (copilot)
---

# PR Command Automation Prompt

Use the Beast agent workflow and persist until the branch is merged, the PR is closed as merged, cleanup is finished, and the final closed PR link is shown.

Use the repo context instead of asking for owner, repo, branch, or base branch. Derive them automatically from the current git remote and repository state.

First, run these commands and fix any issues they introduce before continuing:

- npm run format
- npm run lint:fix

Then execute this workflow with git plus GitHub tools:

1. Verify there are local changes to commit. If the working tree is clean, stop and say there is nothing to send.
2. Determine the default base branch automatically.
3. Create and check out a short descriptive branch name based on the actual changes.
4. Stage all changed files.
5. Create one non-interactive commit whose message follows this format:
   - First line: a short summary title.
   - Blank line.
   - Bullet list with emoji markers.
   - Each bullet references the relevant file names and specific modifications.
6. Push the branch to origin.
7. Create a non-draft pull request against the detected base branch.
8. Merge the pull request immediately if there are no conflicts and no blocking merge restriction.
9. After merging, verify the pull request is now closed as merged. Do not stop after creation. Do not ask me to review it first.
10. Delete the source branch on remote and local.
11. Check out the base branch again and pull the latest remote state.
12. Return the merged PR number, title, merge result, and the closed PR link.

Execution rules:

- Prefer GitHub tools for PR creation, merge, and verification.
- If the current session does not expose the needed GitHub merge tool, use a non-interactive terminal fallback and still verify the PR ended in the closed and merged state.
- Never open the PR as draft.
- Never stop after creating the PR.
- Never ask the user to choose a branch name, repo, or PR title unless the workflow is genuinely blocked.
- If merge conflicts or repository protections block the merge, stop only after reporting the exact blocker.
- If merge succeeds, make sure the final response includes the closed PR link rather than an open PR link.
