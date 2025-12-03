---
theme: ./
layout: center
class: text-center
---
# Nord Theme 

A [Nord](https://www.nordtheme.com/) inspired theme for [Slidev](https://sli.dev/)

---

# What is Slidev?

`Slidev` is a slide maker and presentation tool designed for developers. It includes the following features:

- 📝 **Text-based** - focus on your content with Markdown, then style it later
- 🎨 **Themable** - themes can be shared and reused as npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embed Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export to PDF, PPTX, PNGs, or even a hostable SPA
- 🛠 **Hackable** - virtually anything that's possible on a webpage is possible in Slidev

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

| Shortcut | Purpose |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---

# Code

```c {max-height:"100%"}
float Q_rsqrt( float number )
{
	long i;
	float x2, y;
	const float threehalfs = 1.5F;

	x2 = number * 0.5F;
	y  = number;
	i  = * ( long * ) &y;                       // evil floating point bit level hacking
	i  = 0x5f3759df - ( i >> 1 );               // what the fxxk?
	y  = * ( float * ) &i;
	y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration
//	y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed

	return y;
}
```

---
layout: center
class: "text-center"
---

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

lorem ipsum dolor sit _amet_

---
layout: center
---

> I am a blockquote

---

# Components 
<br>

### NordBadge

<br>
<div class="flex items-center gap-4">
  <NordBadge variant="primary">Primary</NordBadge>
  <NordBadge variant="success">Success</NordBadge>
  <NordBadge variant="warning">Beta</NordBadge>
  <NordBadge variant="danger">Deprecated</NordBadge>
</div>

<br />

```html
<!-- Example usage in a slide -->
<NordBadge variant="primary">New</NordBadge>
```



