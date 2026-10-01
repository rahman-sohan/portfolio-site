---
version: "alpha"
name: "Biswas Motors POS Design System"
description: "A clear, dependable visual system for automotive parts inventory, point-of-sale, and administration."

colors:
  primary: "#2563EB"
  primary-hover: "#1D4ED8"
  primary-active: "#1E40AF"
  on-primary: "#FFFFFF"
  primary-subtle: "#EFF6FF"
  secondary: "#047857"
  secondary-hover: "#065F46"
  on-secondary: "#FFFFFF"
  secondary-subtle: "#ECFDF5"
  accent: "#D97706"
  accent-strong: "#92400E"
  accent-subtle: "#FFFBEB"
  danger: "#DC2626"
  danger-strong: "#B91C1C"
  danger-subtle: "#FEF2F2"
  surface: "#FFFFFF"
  background: "#FAFAFA"
  on-surface: "#171717"
  muted: "#525252"
  border: "#E5E7EB"
  border-strong: "#D1D5DB"

typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "2rem"
    fontWeight: "600"
    lineHeight: "1.2"
  heading:
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.5rem"
    fontWeight: "600"
    lineHeight: "1.25"
  body:
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  body-sm:
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: "400"
    lineHeight: "1.5"
  label:
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: "500"
    lineHeight: "1.25"
  mono:
    fontFamily: "JetBrains Mono, Fira Code, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: "400"
    lineHeight: "1.5"

rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  button-secondary-hover:
    backgroundColor: "{colors.secondary-hover}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.md}"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  button-danger:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    height: "40px"
  input-placeholder:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
  status-success:
    backgroundColor: "{colors.secondary-subtle}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
  status-warning:
    backgroundColor: "{colors.accent-subtle}"
    textColor: "{colors.accent-strong}"
    rounded: "{rounded.full}"
  status-danger:
    backgroundColor: "{colors.danger-subtle}"
    textColor: "{colors.danger-strong}"
    rounded: "{rounded.full}"
  selection:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.primary-active}"
    rounded: "{rounded.sm}"
  sidebar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    width: "256px"

---

## Overview

Biswas Motors is a working automotive-parts POS, not a marketing site. The interface should feel fast, trustworthy, and easy to scan during a busy sale. Favor clear hierarchy, compact information density, and predictable controls over decoration.

The visual language is a clean neutral foundation with blue as the primary action color, emerald for positive operational states, amber for attention and warnings, and red only for destructive actions or errors.

## Colors

Use `colors.background` for the application canvas and `colors.surface` for cards, panels, tables, and form controls. Use `colors.on-surface` for important text and `colors.muted` for supporting text. Borders should separate content without becoming visual noise.

Blue is reserved for primary navigation, primary actions, links, focus states, and selected controls. Emerald communicates successful completion, available stock, payments, and other positive states. Amber communicates low stock, pending work, or attention required. Red is reserved for destructive actions, validation errors, and failed operations.

Do not use a saturated color as a large page background. Do not introduce a new accent color when an existing semantic color applies.

## Typography

Use Inter for all interface text and JetBrains Mono for barcodes, SKU values, codes, and other machine-readable identifiers. Headings should be concise and semibold. Body text should remain readable at the defined sizes, especially in tables and POS workflows.

Avoid all-caps body copy. Use weight and spacing for hierarchy rather than oversized headings. Currency totals and quantities may use `typography.mono` when alignment or quick scanning benefits from it.

## Layout

Use the spacing scale as the shared rhythm, with `spacing.xs` as the smallest unit and `spacing.md` as the default internal component spacing. Use larger spacing to separate sections rather than adding arbitrary values.

The main application uses a persistent sidebar on larger screens and a drawer on small screens. Content should remain usable at mobile widths, with tables becoming horizontally scrollable or switching to an appropriate stacked presentation. Keep primary POS actions visible and reachable without excessive scrolling.

## Elevation & Depth

Prefer borders and surface contrast to communicate structure. When elevation is needed, use a light shadow equivalent to `0 1px 3px rgb(0 0 0 / 0.10)` with a subtle secondary spread. Do not stack harsh, dark shadows or use elevation as decoration.

Dialogs and popovers may sit above the application surface, but their focus state, backdrop, and dismissal behavior must remain clear. Elevation must not replace a visible border or sufficient contrast where structure matters.

## Shapes

Use `rounded.md` for controls and inputs, `rounded.lg` for cards and larger panels, and `rounded.full` only for compact status pills, avatars, and icon buttons that are intentionally circular. Keep shape usage consistent within a workflow.

## Components

Buttons must have explicit hover, active, focus, disabled, and loading states. Primary actions use `button-primary`; destructive actions use `button-danger`. Do not use multiple competing primary buttons in the same action group.

Cards use `card` and should contain a clear heading, useful content, or a purposeful action. Avoid wrapping every small element in a card. Forms use `input` styling with visible labels, clear validation, and keyboard-accessible focus states.

Tables and POS lists should prioritize scanability: align numeric values consistently, keep column labels clear, and show loading, empty, and error states. Status badges should use semantic colors and text, not color alone.

## Do's and Don'ts

- Do preserve the semantic meaning of blue, emerald, amber, and red.
- Do use existing UI components from `biswas-motors-dashboard/src/components/ui` before creating a new pattern.
- Do keep interactive targets keyboard accessible and provide visible focus styles.
- Do support both desktop and mobile layouts.
- Do use the existing Tailwind theme names when implementing tokens in the frontend.
- Don't introduce Material purple, gradients, glassmorphism, or unrelated visual themes.
- Don't use arbitrary hex colors in components when a design token already exists.
- Don't rely on color alone to communicate stock, payment, or validation status.
- Don't remove loading, empty, error, or disabled states from data-driven screens.
