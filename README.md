# Velcrostrip

Velcostrip is a general use React component library. The goal is for it to
include most of the "general" stuff you would need in any typical frontend
application (and then maybe a bunch of extra goodies, too).

You can see more or less everything in action in the
[Styleguidist docs](https://gargrave.github.io/velcrostrip/). This will be
updated each time I release any version bump.

It is based on one of my favorite raw CSS libraries,
[Shoelace](https://www.shoelace.style/index.html). I love Shoelace, but
unfortunately its build/customization process is a bit obtuse, so I decided I
would take its inspiration and make a React version. The basic color schemes,
designs, and components will generally be _pretty similar_, although I am not
intending for it to be a 1:1 clone, and I may not include all of its components.
We'll see...

For better or worse, I am also using
[Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
as inspiration in extending some components past what Shoelace provides
(particularly with the ARIA stuff, which Bootstrap is very good at).

Other shoutouts:

- The `Loader` component types are based on these
  [pure CSS loaders](https://loading.io/css/).

## Usage

I have to say this first:

- I would not recommend using this in any production setting right now. This is
  mostly just a fun side project for me right now, and I make no guarantee as to
  how much time (if any) I will have to continue development, fix bugs, add new
  features, and all of that good stuff. As much as I enjoy it, my time is very
  limited, and side projects are the first to get pushed aside.
- To expand on the point above, most of these steps are what _should_ work, but
  I also don't have time for full regression testing when I do a release, so
  again: no guarantees here. YMMV, buyer beware, use at your own risk, and all
  of that good stuff.

---

- **Install**
  - `yarn add @gargrave/velcrostrip`
- **Use**
  - Everything is exported both top-level and directly-level. So you can import
    components two ways:
    - `import { Button } from '@gargrave/velcrostrip`, or
    - `import { Button } from 'packages/velcrostrip/src/Button'`
    - The difference of course is that the first will import the entire library
      as soon as you import a single component, and it _might_ bloat your build
      a little bit.

At that point, you are ready to use the `Button` component. TypeScript types are
included for all components, so you should get good completion for props and
such, but you can also check out the styleguide with `yarn styleguide`, which
will have examples covering almost everything.

This is a major work-in-progress, and will be for the foreseeable future. The
components that are currently available are listed below. I will be putting up a
demo site soon, I promise!

- Alert
- Button
- Card
- Loader

## Styling

For styling, all of the components use the excellent
[emotion](https://emotion.sh/docs/introduction) library, along with
[polished](https://github.com/styled-components/polished) for Sass-like
functionality. However, I do intend to make every component customizable with
your own styles and class without being tied to any framework of my choosing.
(How much I will actually accomplish this goal is yet to be seen.)

## TODO

- Host the styleguide/demo
  - Setup styleguide build process
- Notes/demos for custom styling/theming
- Continue importing more loader types
