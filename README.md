# PixiJS Accessibility Demo

This demo showcases how to implement accessibility features in a PixiJS application. It demonstrates how to make interactive elements accessible to users with disabilities, including those using screen readers and keyboard navigation.

## Features

- **Initialization:** The demo initializes PixiJS accessibility features with specific options, including enabling accessibility by default.
- **Accessible Objects:** Demonstrates how to make PixiJS `Container` objects accessible, including setting properties like `accessible`, `accessibleHint`, `accessibleType`, and `accessibleText`.
- **Keyboard Navigation:** Shows how interactive elements can be navigated using the Tab key.
- **Screen Reader Compatibility:** Explains how the implemented accessibility features work with screen readers to provide information about interactive elements.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   ```

2. **Install Dependencies:**
   ```bash
   npm install  # or yarn install
   ```

3. **Run the Demo:**
   ```bash
   npm start # or yarn start
   ```

## Implementation Details

### Accessibility Initialization

Accessibility features are initialized in `src/Main.ts` using the following code:

```javascript
app.renderer.accessibility.init({
  accessibilityOptions: {
    enabledByDefault: true,
    activateOnTab: false,        // Optional: Set to true to activate on tab focus
    deactivateOnMouseMove: false // Optional: Set to true to deactivate on mouse move
  }
});
```

- **enabledByDefault:** Enables accessibility features from the start.
- **activateOnTab:** (Optional) If set to true, the accessibility element will be activated when it receives focus via the Tab key.
- **deactivateOnMouseMove:** (Optional) If set to true, the accessibility element will be deactivated when the mouse moves over it.

### Making Objects Accessible

Any object extending `PIXI.Container` can be made accessible. Below are two examples:

#### Button Component (`src/components/button.ts`)

```typescript
this.accessible = true;
this.accessibleHint = props.text || "Click Me";
this.accessibleType = "button";
```

- **accessible:** Set to true to enable accessibility for the object.
- **accessibleHint:** Provides a descriptive hint for screen readers.
- **accessibleType:** Specifies the type of interactive element (e.g., "button").

#### Header Component (`src/components/header.ts`)

```typescript
this.accessible = true;
this.accessibleType = headerType; // e.g., "heading", "h1", "h2", etc.
this.accessibleText = this.text;
```

- **accessibleType:** For headers, specify the appropriate heading level (e.g., "h1", "h2").
- **accessibleText:** Sets the text content for the screen reader.

### Testing Accessibility

- **Keyboard Navigation:** Use the Tab key to navigate through interactive elements. Observe how focus changes and how accessible hints are read by screen readers. These interactive elements also accept keyboard inputs such as enter/space to activate click events.
- **Screen Reader:** Turn on a screen reader (e.g., NVDA, VoiceOver, JAWS) to hear the accessible information associated with each element. Verify that headings, buttons, and other interactive components are properly described.
