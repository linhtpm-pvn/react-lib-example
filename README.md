# FormKit UI

A beautifully designed, reusable, and developer-friendly React form component library built with TypeScript and Tailwind CSS.

> **Note:** This project also includes a live, interactive documentation application where you can see the components in action. This `README.md` provides a static overview of the library's components and their usage.

## Installation

```bash
npm install formkit-ui
```

## Local Development (using npm link)

To test this library in a local project without publishing it to npm, you can use `npm link`. This is a great way to develop and test components in a real-world application simultaneously.

1.  **In this library's root directory (`formkit-ui`):**
    Run this command to create a global symbolic link from your computer to this project.

    ```bash
    npm link
    ```

2.  **In your other project's root directory (e.g., `my-react-app`):**
    Run this command to link the `formkit-ui` library into your project's `node_modules`.

    ```bash
    npm link formkit-ui
    ```

Now, you can import components from `formkit-ui` in your project as if you had installed it from npm. Any changes you make in the `formkit-ui` library will be reflected immediately in your project (you might need to restart your development server).

### Unlinking

When you're finished, you can unlink the library:

1.  **In your other project's root directory:**
    ```bash
    npm unlink formkit-ui
    ```

2.  **In this library's root directory:**
    ```bash
    npm unlink
    ```

---

## Components

- [Button](#button)
- [Input](#input)
- [Textarea](#textarea)
- [Select](#select)
- [Label](#label)

---

## Button

A versatile button component with multiple variants, sizes, and states.

### Usage

```tsx
import { Button } from './components/ui/Button';

<Button variant="primary" size="lg">
  Primary Button
</Button>
```

### Properties

| Prop      | Type                                                              | Default     | Description                                      |
|-----------|-------------------------------------------------------------------|-------------|--------------------------------------------------|
| `variant` | `'primary' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost' \| 'link'` | `'primary'` | The visual style of the button.                  |
| `size`    | `'sm' \| 'default' \| 'lg'`                                         | `'default'` | The size of the button.                          |
| `disabled`| `boolean`                                                         | `false`     | Disables the button, making it un-clickable.     |
| `className`| `string`                                                         | `''`        | Additional CSS classes to apply.                 |

---

## Input

A standard text input field with consistent styling and states.

### Usage

```tsx
import { Input } from './components/ui/Input';
import { Label } from './components/ui/Label';

<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

### Properties

| Prop      | Type                           | Default  | Description                                        |
|-----------|--------------------------------|----------|----------------------------------------------------|
| `type`    | `React.HTMLInputTypeAttribute` | `'text'` | The type of the input (e.g., text, email, password). |
| `disabled`| `boolean`                      | `false`  | Disables the input field.                          |
| `className`| `string`                      | `''`     | Additional CSS classes to apply.                   |

---

## Textarea

A multi-line text input field for longer content.

### Usage

```tsx
import { Textarea } from './components/ui/Textarea';
import { Label } from './components/ui/Label';

<div>
  <Label htmlFor="bio">Biography</Label>
  <Textarea id="bio" placeholder="Tell us about yourself..." />
</div>
```

### Properties

| Prop      | Type      | Default | Description                      |
|-----------|-----------|---------|----------------------------------|
| `disabled`| `boolean` | `false` | Disables the textarea field.     |
| `className`| `string`  | `''`    | Additional CSS classes to apply. |

---

## Select

A dropdown selection component for choosing from a list of options.

### Usage

```tsx
import { Select } from './components/ui/Select';
import { Label } from './components/ui/Label';

<div>
  <Label htmlFor="framework">Favorite Framework</Label>
  <Select id="framework">
    <option value="react">React</option>
    <option value="vue">Vue</option>
    <option value="svelte">Svelte</option>
  </Select>
</div>
```

### Properties

| Prop      | Type      | Default | Description                  |
|-----------|-----------|---------|------------------------------|
| `disabled`| `boolean` | `false` | Disables the select field.   |
| `className`| `string`  | `''`    | Additional CSS classes to apply. |

---

## Label

A simple label component to be used with form elements for accessibility.

### Usage

```tsx
import { Label } from './components/ui/Label';

<Label htmlFor="username">Username</Label>
```

### Properties

| Prop      | Type     | Default     | Description                                              |
|-----------|----------|-------------|----------------------------------------------------------|
| `htmlFor` | `string` | `undefined` | The ID of the form element the label is associated with. |
| `className`| `string` | `''`        | Additional CSS classes to apply.                         |