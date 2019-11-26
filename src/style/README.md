# Built-in Style

### Intro

MT-Moible contains some common styles that can be used directly by the className.

### Text ellipsis

When the text content length exceeds the maximum container width, the excess text is automatically omitted.

```html
<div class="mt-ellipsis">
  This is a paragraph of 250px width limit, the back will be omitted.
</div>
```

### Hairline

Add 1px border under the Retina screen for the element, based on a pseudo element.

```html
<!-- border top -->
<div class="mt-hairline--top"></div>

<!-- border bottom -->
<div class="mt-hairline--bottom"></div>

<!-- border left -->
<div class="mt-hairline--left"></div>

<!-- border right -->
<div class="mt-hairline--right"></div>

<!-- border top & bottom -->
<div class="mt-hairline--top-bottom"></div>

<!-- full border -->
<div class="mt-hairline--surround"></div>
```

### Animation

```html
<!-- fade in  -->
<transition name="mt-fade">
  <div v-show="visible">Fade</div>
</transition>

<!-- slide up -->
<transition name="mt-slide-up">
  <div v-show="visible">Slide Up</div>
</transition>

<!-- slide down -->
<transition name="mt-slide-down">
  <div v-show="visible">Slide Down</div>
</transition>

<!-- slide left -->
<transition name="mt-slide-left">
  <div v-show="visible">Slide Left</div>
</transition>

<!-- slide right -->
<transition name="mt-slide-right">
  <div v-show="visible">Slide Right</div>
</transition>
```
