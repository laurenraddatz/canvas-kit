# Canvas Kit React Color Picker

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in pre-release.

Color Picker is a popup for selecting a color.

The Color Picker is designed to be used different contexts. The pattern shown below is one where the
Color Picker is used as a popup from a button target by using hooks around the callbacks provided by
the component.

## Installation

```sh
yarn add @workday/canvas-kit-labs-react-color-picker
```

or

```sh
yarn add @workday/canvas-kit-labs-react-color-picker
```

## Usage

```tsx
import * as React from 'react';
import ColorPicker from '@workday/canvas-kit-labs-react-color-picker';
import {colors} from '@workday/canvas-kit-react-core';
import {Button} from '@workday/canvas-kit-react-button';
import {Popper} from '@workday/canvas-kit-react-common';


const MyComponent: React.FunctionComponent = () => {
  const [backgroundColor, setBackgroundColor] = React.useState<string>(colors.kiwi400);
  const [isColorPickerOpen, setIsColorPickerOpen] = React.useState<boolean>(false);
  const buttonRef = React.useRef(null);

  const handleClick = () => setIsColorPickerOpen(!isColorPickerOpen);

  const handleSubmit = (color: string) => {
    setBackgroundColor(color)
    setIsColorPickerOpen(false)
  };

  return (
    <Button onClick={handleClick} buttonRef={buttonRef}>
      Click me
    </Button>
    <Popper placement={'bottom'} open={isColorPickerOpen} anchorElement={buttonRef.current}>
      <ColorPicker
        onChange={color => setBackgroundColor(color)}
        onReset={() => handleSubmit(colors.kiwi400)}
        resetColor={colors.kiwi400}
        resetLabel={getTranslatedResetLabel()}
        selectedColor={backgroundColor}
        showCustomInput={true}
        onSubmitCLick={handleSubmit}
      />;
    </Popper>
  )
}
```

## Static Properties

> None

## Component Props

### Required

#### `onChange: (color: string) => void`

> This handler is called when the user selects a color through either a mouse or keyboard event. It
> is called with the hex value of the color selected by the user, or with a custom hex value entered
> by the user in the custom input.

### Optional

#### `onReset: Function`

> When this handler is provided, a Reset button will be displayed at the top of the picker using the
> `resetLabel` provided. This handler is called when the reset button is selected through either a
> mouse or keyboard event.

---

#### `resetColor: string`

> The color to display as part of the Reset button. It is strongly recommended that consumers
> provide a properly globalized value.

> Note: This prop is only necessary when the `onReset` handler is provided.

---

#### `resetLabel: string`

> The text to display as part of the Reset button. It is strongly recommended that consumers provide
> a properly globalized value.

> Note: This prop is only necessary when the `onReset` handler is provided.

Default: `Reset`

---

#### `selectedColor: string`

> The hex value of the color to display styled in a selected state. If the value doesn't match one
> of the available colors, the hex value will be displayed in the custom input.

---

#### `customColors: string[]`

> The hex values of the colors to display in the color picker grid. If no custom colors are
> provided, a default set will be rendered.

---

#### `showCustomInput: boolean`

> When `true` the `ColorInput` component and a submit button will be displayed at the bottom of the
> picker allowing the user to enter a custom hex value.

Default: `false`

---

#### `customInputLabel: string`

> The text to display abover the custom input. It is strongly recommended that consumers provide a
> properly globalized value.

> Note: This prop is only used when `showCustomInput` is `true`.

Default: `Custom Hex Color`

---

#### `onSubmitClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void`

> When this handler is provided, an action can be tied to clicking the check button provided. This
> handler is called when the check button is selected through a keyboard event only.

> Note: This prop is only used when `showCustomInput` is `true`.

---