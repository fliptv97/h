# h Function

The `h` function is a utility for creating DOM elements in a declarative way using JavaScript objects and strings.

## Usage

```typescript
import h from './h';

const element = h({
  type: 'div',
  classList: ['my-class'],
  attributes: { id: 'my-id' },
  listeners: {
    click: (e) => console.log('Clicked!', e),
  },
  children: [
    'Hello, world!',
    {
      type: 'span',
      children: ['Nested span text'],
    },
  ],
});

document.body.appendChild(element);
```

## API
The `h` function takes a single argument, which can be either a string or an object.

If the argument is a string, the `h` function creates and returns a text node with the string as its content.

If the argument is an object, the `h` function creates an element as specified by the object. The object can have the following properties:
- `type` (required): The type of the element to create (e.g., 'div', 'span').
- `classList`: An array of CSS classes to add to the element.
- `attributes`: An object where the keys are attribute names and the values are attribute values.
- `listeners`: An object where the keys are event names and the values are event handlers.
- `children`: An array of children to append to the element. Each child can be either a string (which will be turned into a text node) or an object (which will be passed to the h function to create a child element).