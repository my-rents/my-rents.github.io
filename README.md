Example [Hugo](https://gohugo.io) website using [GitLab Pages](https://about.gitlab.com/stages-devops-lifecycle/pages/).

Learn more about GitLab Pages at the [official documentation](https://docs.gitlab.com/ce/user/project/pages/).

## GitLab CI/CD

This project's static Pages are built by [GitLab CI/CD](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/),
following the steps defined in [`.gitlab-ci.yml`](.gitlab-ci.yml).

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project.
1. Install `git` and `go`.
1. [Install](https://gohugo.io/getting-started/installing/) Hugo.
1. Install the theme as a Hugo module:

   ```shell
   hugo mod init gitlab.com/pages/hugo
   hugo mod get -u github.com/theNewDynamic/gohugo-theme-ananke
   ```

1. Preview your project:

   ```shell
   hugo server
   ```

1. Add content.
1. Optional. Generate the website:

   ```shell
   hugo
   ```

Read more at Hugo's [documentation](https://gohugo.io/getting-started/).

## Use a custom theme

Hugo supports a variety of themes.

Visit <https://themes.gohugo.io/> and pick the theme you want to use. In the
Pages example, we use <https://themes.gohugo.io/themes/gohugo-theme-ananke/>.

### Use a custom theme using a Hugo module

The example [`.gitlab-ci.yml`](.gitlab-ci.yml) uses Hugo modules to import the theme.

To use your own theme:

1. Edit `.gitlab-ci.yml`, and replace the URL in the `hugo mod get` line with the URL of your theme:

   ```yaml
   - hugo mod get -u github.com/theNewDynamic/gohugo-theme-ananke
   ```

1. Edit `config.toml` and add the theme:

   ```plaintext
   theme = ["github.com/theNewDynamic/gohugo-theme-ananke"]
   ```

## `hugo` vs `hugo_extended`

The [Container Registry](https://gitlab.com/pages/hugo/container_registry)
contains two kinds of Hugo Docker images, `hugo` and
`hugo_extended`. Their main difference is that `hugo_extended` comes with
Sass/SCSS support. If you don't know if your theme supports it, it's safe to
use `hugo_extended` since it's a superset of `hugo`.

The Container Registry contains three repositories:

- `registry.gitlab.com/pages/hugo`
- `registry.gitlab.com/pages/hugo/hugo`
- `registry.gitlab.com/pages/hugo/hugo_extended`

`pages/hugo:<version>` and `pages/hugo/hugo:<version>` are effectively the same.
`hugo_extended` was created afterwards, so we had to create the `pages/hugo/` namespace.

See [how the images are built and deployed](https://gitlab.com/pages/hugo/-/blob/707b8e367cdea5dbf471ff5bbec9f684ae51de79/.gitlab-ci.yml#L36-47).

## GitLab User or Group Pages

To use this project as your user/group website, you will need to perform
some additional steps:

1. Rename your project to `namespace.gitlab.io`, where `namespace` is
   your `username` or `groupname`. This can be done by navigating to your
   project's **Settings > General (Advanced)**.
1. Change the `baseurl` setting in your `config.toml`, from `"https://drodriguez-apps.gitlab.io/my-rents/"` to `baseurl = "https://namespace.gitlab.io"`.
   Proceed equally if you are using a custom domain: `baseurl = "https://example.com"`.

Read more about [GitLab Pages for projects and user/group websites](https://docs.gitlab.com/ce/user/project/pages/getting_started_part_one.html).

## Did you fork this project?

If you forked this project for your own use, please go to your project's
**Settings** and remove the forking relationship, which won't be necessary
unless you want to contribute back to the upstream project.

## Troubleshooting

CSS is missing! That means two things:

- Either that you have wrongly set up the CSS URL in your templates.
- Or your static generator has a configuration option that needs to be explicitly
  set in order to serve static assets under a relative URL.
