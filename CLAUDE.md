## UI Guidelines

See [design-principles.md](./design-principles.md) for full design principles including color palette, typography, spacing, component rules, and section structure.

## Tech Stack

| Technology        | Version          | Purpose                      |
| ----------------- | ---------------- | ---------------------------- |
| **Next.js**       | 15+ (App Router) | React framework, SSR/SSG     |
| **TypeScript**    | 5+               | Type safety                  |
| **Tailwind CSS**  | 4+               | Utility-first styling        |
| **i18next**       | Latest           | Internationalization (RO/EN) |
| **react-i18next** | Latest           | React bindings for i18next   |
| **ESLint**        | Latest           | Code linting                 |
| **Prettier**      | Latest           | Code formatting              |

## Project Structure

```
src/
  app/             # Next.js App Router pages
  components/      # Reusable React components (max 150 lines each)
    sections/      # Full-page sections (Hero, Services, Gallery, etc.)
    ui/            # Atomic UI components (Button, Card, etc.)
  i18n/            # i18next config and translation files
    locales/
      ro/          # Romanian translations (default)
      en/          # English translations
  styles/          # Global styles
  types/           # TypeScript type definitions
public/
  images/          # Static images and assets
docs/              # Documentation
```

## i18n Setup

- Default language: **Romanian (ro)**
- Supported languages: Romanian (ro), English (en)
- Language toggle in the Footer
- Translation keys in `src/i18n/locales/[lang]/common.json`

## Guidelines

- **UI guidelines**: See `./design-principles.md`
- **Responsive**: Mobile-first design
- **Types**: Use TypeScript interfaces for all props
- **Styling**: Tailwind only – no inline styles, no CSS modules
- **Components**: Keep components ≤ 150 lines
- **Security**: Sanitize all user inputs (against injections)
- **Translations**: Use `i18next` with `en` and `ro` (default). Language is switchable from the footer.
