# Modal Basis

Simple modal component

Works on modern browsers only (uses es6 modules and css custom properties)

## Usage

The triggering element (button or anchor) needs to contain `data-toggle="modal"` attribute.

An eventual closing element needs to have the `.dismiss` class and to be inside the `.modal` element. It can only be triggered with a 'click' event.

### Options
**`.--no-overlay`**

By default, triggering a `.modal` element will also trigger the page's `#overlay` element*. This behaviour can been changed by adding a `.--no-overlay` class on the `.modal` element.

`<div class="modal --no-overlay">Lorem ipsum...</div>`

*overlay element is dynamically included through Overlay Basis dependency.

**`.--lock-overlay`**

The `.modal` element is dismissed when the page's `#overlay` is clicked. To change this behaviour, just add a `.--lock-overlay` class on the `.modal` element.

`<div class="modal --lock-overlay">Lorem ipsum...</div>`

Let's see some 'core' examples (just wait for the 'modifier' section for funnier stuff):

### Trigger a `.modal` with a button, through a `[data-target]` attribute
```html
<!-- this button will toggle a '.modal' element which 'id' is 'targeted-modal' -->
<button data-toggle="modal" data-target="#targeted-modal">Show</button>

<!-- this is the '.modal' element that will be triggered -->
<div id="targeted-modal" class="modal">
    <button class="dismiss">Hide</button>
    <p>Lorem ipsum dolor sit amet...</p>
</div>
```

### Trigger a `.modal` with an anchor, through a `[href]` attribute
```html
<!-- this anchor tag will toggle a '.modal' element which 'id' is 'targeted-modal' -->
<a data-toggle="modal" href="#targeted-modal">Show</a>

<!-- this is the '.modal' element that will be triggered -->
<div id="targeted-modal" class="modal">
    <button class="dismiss">Hide</button>
    <p>Lorem ipsum dolor sit amet...</p>
</div>
```

### Trigger a `.modal` with a button inside a `.modal-group` element

No need for a `data-target` or a `href` attributes on the triggering element here, but `data-toggle="modal"` is still mandatory.

```html
<div class="modal-group">

    <!-- trigger and '.modal' are enclosed by a '.modal-group' element,
    no need for a [data-target] or a [href] attributes here -->
    <button data-toggle="modal">Show</button>

    <div class="modal">
        <button class="dismiss">Hide</button>
        <p>Lorem ipsum dolor sit amet...</p>
    </div>

</div>
```

### Modifiers
Default `.modal` behaviour can be extended by adding some modifier classes.

#### Transitions

Modal Basis has a few bonus classes to make a `.modal` element slide from one side of the screen: `.--transition-top`, `.--transition-right`, `.--transition-bottom`, `.--transition-left`:

`<div class="modal --transition-left">`


There is also a `.--transition-scale` modifier:

`<div class="modal --transition-scale">`

#### Modal dialog box

The `.--type-dialog` class constrains the `.modal` element to the center of the view (horizontally and vertically).

Its dimensions are reduced to half its width by default:
`<div class="modal --type-dialog">`

It can also leverage a transition modifier:
`<div class="modal --type-dialog --transition-top">`