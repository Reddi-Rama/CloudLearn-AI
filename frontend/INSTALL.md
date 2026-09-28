# CloudLearn AI — Generative AI Visual Pack

This package adds purpose-built local SVG educational diagrams for the active Generative AI course.

## Install

Copy the `public` folder contents into:

`D:\Documents\CloudLearn-AI\frontend\public\`

Copy:

`src/content/aiml/generative-ai/generativeAIVisualMap.ts`

into:

`D:\Documents\CloudLearn-AI\frontend\src\content\aiml\generative-ai\`

## Active lesson coverage

Module 1: 8/8 lessons
Module 2: 15/15 lessons

The diagrams are local SVGs, so they do not depend on external image hosts.

## Renderer integration

Import:

```tsx
import { generativeAIVisualMap } from "@/content/aiml/generative-ai/generativeAIVisualMap";
```

Then use the current lesson's module/lesson identity to render the mapped images. If the renderer only receives the lesson object, pass the module/lesson identity from the dynamic route or add it to the content object. Do not modify Modules 3–9.
