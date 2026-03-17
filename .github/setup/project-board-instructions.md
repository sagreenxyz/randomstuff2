# SAGreenXYZ Roadmap — GitHub Project Board Setup

If the automated workflow was unable to create the GitHub Project (Projects v2) board,
follow these manual steps.

## Option A — GitHub Web UI (Recommended)

1. Go to your GitHub profile → **Projects** tab → **New project**
2. Choose **Board** layout
3. Name it: `SAGreenXYZ Roadmap`
4. Add the following columns (Status field options):
   - **Backlog** — All unstarted issues
   - **In Design** — Issues being designed or specced
   - **In Progress** — Actively being developed
   - **In Review** — PRs open, awaiting review
   - **Done** — Closed/merged
5. Link the project to this repository: project **Settings → Linked repositories → Add repository**
6. Add all issues: project **+ Add items** → select all issues from `sagreenxyz/randomstuff2`
7. Move all issues to the **Backlog** column

## Option B — GitHub CLI (requires `project` OAuth scope)

The default `GITHUB_TOKEN` in Actions does not include the `project` scope.
To automate this, you need a Personal Access Token (PAT) with `project` scope:

1. Go to **GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens**
2. Create a token with:
   - Resource owner: your account
   - Repository access: `sagreenxyz/randomstuff2`
   - Permissions: **Projects** → Read and write
3. Add it as a repository secret named `PROJECT_TOKEN`
4. Re-run the `Setup Repository` workflow — the `setup-project-board` job will use `PROJECT_TOKEN`

## Option C — GitHub GraphQL API (advanced)

```bash
# 1. Get your user node ID
gh api graphql -f query='query { viewer { id login } }'

# 2. Create the project
gh api graphql -f query='
  mutation($ownerId: ID!, $title: String!) {
    createProjectV2(input: {ownerId: $ownerId, title: $title}) {
      projectV2 { id number url }
    }
  }' -f ownerId="<YOUR_USER_NODE_ID>" -f title="SAGreenXYZ Roadmap"

# 3. Add issues to the project (repeat for each issue node ID)
gh api graphql -f query='
  mutation($project: ID!, $contentId: ID!) {
    addProjectV2ItemById(input: {projectId: $project, contentId: $contentId}) {
      item { id }
    }
  }' -f project="<PROJECT_ID>" -f contentId="<ISSUE_NODE_ID>"
```

## Column Layout

| Column | Purpose |
|--------|---------|
| Backlog | All unstarted issues (default for new issues) |
| In Design | Issues being designed or specced |
| In Progress | Actively being developed |
| In Review | PRs open, awaiting review |
| Done | Closed/merged issues |
