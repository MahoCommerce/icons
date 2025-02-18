# The Maho icons library

This repository contains a set of **5800+ icons**, in **SVG format**, released under the **MIT license**.

We did not do the work of creating the icons, all of the credits and support goes to the awesome team at [Tabler](https://tabler.io)
that created the [Tabler Icons](https://tabler.io/icons) project.

## Why we chose this icon pack

There are multiple factors why, after a lot of research, we chose this specific icon pack to be bundled with [Maho](https://mahocommerce.com):

- MIT license
- Image format in SVG
- Available in **outline** and **filled** variants
- Support for **currentColor** and **strokeWidth** for infinite customizability via CSS

<a href="https://tabler.io/icons"><img width=800 src="https://github.com/user-attachments/assets/90b6773f-a711-460f-b2fd-6db8abfc63a9" /></a>

## Why we created this repository

- [Upstream repository](https://github.com/tabler/tabler-icons) wasn't available on [Packagist](https://packagist.org)
- We wanted to have _only the SVG icons_ in the repository and nothing else (upstream has a lot more stuff that's not needed for our use)
- We wanted to use [SVGO](https://svgo.dev) to optimize every icon, we have an automatic workflow in place that imports changes from
  the original repo and applies all the optimizations needed before committing it and making it available to everybody

## How is this repository integrated into Maho

It's a simple composer dependency, all the icons live only in the vendor folder and are not accessible via web (eliminating the risk of
[hotlinking](https://en.wikipedia.org/wiki/Inline_linking). Maho's core reads it from vendor and inlines them in the generated HTML.  
This allows for the possibility of using CSS to change color and strokeWidth of the icons.

## Is this project only Maho related?

Not really, there's no Maho related code in this repository, thus you can embed it in any project.
