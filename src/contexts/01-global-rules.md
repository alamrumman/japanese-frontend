# 01 — Global Rules

Version 2.0

---

# Purpose

This document defines the mandatory design, engineering and interaction rules that apply to every page, every component and every animation throughout the website.

These rules are non-negotiable.

If a component violates any rule defined here, the component should be redesigned rather than adjusted.

Consistency is more valuable than novelty.

---

# Design Philosophy

Every screen should feel handcrafted.

Every section should have intention.

Every interaction should have purpose.

Every pixel should earn its place.

Avoid visual noise.

Avoid unnecessary decoration.

Design should quietly communicate quality.

---

# Primary Design Reference

Primary Reference

> japanese siteeee.png

This image defines the project's visual language.

Study it before implementing any page.

Observe

• spacing

• typography hierarchy

• darkness

• photography

• composition

• proportion

• rhythm

• visual balance

Do not copy it.

Use it only to understand the design language.

---

# Layout Rules

## Rule 01

Never center everything.

Premium websites rarely use perfectly symmetrical layouts.

Instead create visual balance.

Not symmetry.

---

## Rule 02

Avoid boxed layouts.

Sections should breathe naturally.

Containers should disappear whenever possible.

---

## Rule 03

Every section must introduce a different visual composition.

Never repeat

Image Left

Text Right

for multiple consecutive sections.

Create rhythm.

Example

Image Left

↓

Image Right

↓

Full Width

↓

Split

↓

Editorial

↓

Centered

↓

Asymmetrical

---

## Rule 04

Maximum content width

1280px

Hero may exceed this.

Photography may intentionally bleed outside.

---

## Rule 05

Whitespace is mandatory.

If a section feels crowded—

remove content.

Not spacing.

---

# Grid System

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Use CSS Grid.

Avoid deeply nested Flex layouts unless appropriate.

---

# Spacing System

Base Unit

8px

Allowed spacing values

8

16

24

32

40

48

64

80

96

128

Never invent arbitrary spacing values.

Spacing should create rhythm.

---

# Border Radius

Cards

4px

Buttons

4px

Inputs

2px

Images

4px

Large rounded corners are prohibited.

---

# Shadows

Use shadows sparingly.

Shadows should create depth.

Never decoration.

Avoid

Large blur radius

Heavy opacity

Floating cards

Preferred

Subtle elevation

Soft ambient shadow

---

# Borders

Prefer borders over shadows.

Border Color

#2A2A2A

Border Thickness

1px

Gold borders only for emphasis.

---

# Color Rules

Primary Background

#0D0D0D

Surface

#161616

Primary Text

#F5F0E8

Muted Text

#8A8A8A

Accent

#C8965A

Secondary Accent

#E8B87A

Japanese Red

#C0392B

Red should appear less than 5% of the interface.

---

# Typography Rules

Only four font families are allowed.

Noto Serif JP

Noto Sans JP

Shippori Mincho

Inter

Never introduce additional fonts.

---

# Typography Scale

Hero

72–96px

Page Heading

56px

Section Heading

40px

Card Heading

24px

Body

16–18px

Caption

14px

Small Labels

12px

Use generous line height.

---

# Photography Rules

Photography is the hero.

Never use illustrations where photography communicates better.

Images should

Be cinematic

Warm

Natural

Professional

Dark

Editorial

Avoid

Over-saturated food

Artificial lighting

HDR

Over sharpened stock photos

Obvious AI images

---

# Navigation Rules

Navbar height

88px

Sticky

Yes

Transparent initially

Yes

Solid after scroll

Yes

Background blur

Minimal

Navigation should never dominate the page.

---

# Sidebar Rules

Left editorial rail remains subtle.

Do not animate constantly.

Hover animations only.

Active page indicator should use a thin gold line.

---

# Button Rules

Buttons should never feel playful.

No bouncing.

No scaling beyond 1.03.

Preferred hover

Background fill

Arrow slide

Border transition

Forbidden

Glow

Pulse

Floating

Elastic

---

# Card Rules

Cards should resemble printed editorial blocks.

Avoid

Large shadows

Large radius

Floating effects

Glassmorphism

Cards should rely on photography.

Not decoration.

---

# Image Rules

Images should occupy more visual weight than text.

Photography should communicate first.

Typography supports photography.

---

# Icon Rules

Lucide only.

Stroke width

1.5

Icons should remain secondary.

Do not decorate with icons.

---

# Divider Rules

Thin.

Elegant.

Invisible unless needed.

Preferred

1px

Muted

Gold only for emphasis.

---

# Form Rules

Inputs

Minimal

Flat

Thin border

No heavy outlines

Labels remain outside fields.

Avoid floating labels.

---

# Animation Rules

Animation should support comprehension.

Never attention seeking.

Preferred Duration

150ms

250ms

400ms

600ms

1000ms

Avoid

2 second fade animations

Fast flashing

Bounce

Elastic

Random movement

---

# GSAP Rules

Preferred Easings

power2.out

power3.out

expo.out

CustomEase

Avoid

bounce

elastic

back

unless intentionally required.

---

# Scroll Rules

Scroll animations should trigger once.

Do not continuously animate sections while scrolling.

Animations should feel earned.

---

# Hover Rules

Desktop only.

Mobile should never simulate hover.

Hover feedback should complete within

200ms.

---

# Mobile Rules

Never shrink desktop.

Redesign it.

Typography increases.

Spacing increases.

Navigation changes.

Layouts simplify.

Interactions become touch friendly.

---

# Accessibility Rules

Contrast

WCAG AA minimum

Keyboard Navigation

Required

Reduced Motion

Required

Visible Focus

Required

Alt Text

Required

Semantic HTML

Required

---

# SEO Rules

One H1.

Canonical URL.

Structured Data.

Meta Description.

Open Graph.

Twitter Card.

Robots.

Sitemap.

All mandatory.

---

# Performance Rules

Images

WebP

Lazy Loaded

Responsive

Fonts

Self Hosted

Subset

Scripts

Deferred

Animations

GPU accelerated

---

# Component Rules

Every component must be reusable.

No duplicated markup.

No duplicated styling.

No inline styles except animation transforms.

---

# Code Rules

Readable.

Modular.

Typed.

Maintainable.

No magic numbers.

No hardcoded brand information.

Everything configurable.

---

# Things To Avoid

Bootstrap

Material UI appearance

Glassmorphism

Neumorphism

Heavy gradients

Huge drop shadows

Repeated layouts

AI symmetry

Neon effects

Random blobs

Stock landing pages

Dribbble clones

Generic restaurant templates

---

# Acceptance Checklist

Before approving any page verify

✓ Original layout

✓ Editorial composition

✓ Strong typography

✓ Quiet luxury

✓ Consistent spacing

✓ Professional photography

✓ Responsive redesign

✓ Accessible

✓ Performant

✓ Motion feels intentional

✓ Matches japanese siteeee.png mood

✓ Does not resemble AI generated work

If any item fails—

redesign the page.