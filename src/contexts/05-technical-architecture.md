# 05 — Technical Architecture

> Version 2.0

---

# Purpose

This document defines the complete frontend architecture, coding standards, project organization, performance strategy, SEO implementation, accessibility requirements, animation architecture and deployment guidelines.

The objective is to create a production-grade website that is maintainable, scalable and performant while preserving the premium visual experience defined throughout this specification.

This architecture document should be treated as the engineering contract for the project.

---

# Technology Stack

Framework

Next.js 15 (App Router)

Language

TypeScript

Package Manager

pnpm

Styling

Tailwind CSS

Animation

GSAP

State

React Context (if needed)

Icons

Lucide React

Fonts

next/font

Image Optimization

Next Image

Deployment

Vercel

Analytics

Google Analytics 4

Cookie Consent

Required

---

# Architecture Philosophy

The project should prioritize

Maintainability

↓

Readability

↓

Performance

↓

Scalability

↓

Developer Experience

Every file should have a single responsibility.

Every component should remain reusable.

Avoid deeply nested component trees.

---

# Folder Structure

```text
src/

app/

components/

sections/

layouts/

hooks/

lib/

styles/

utils/

constants/

config/

types/

public/

images/

fonts/
```

---

# Component Philosophy

Each component should solve one problem.

Example

Navbar

↓

Navigation only

Hero

↓

Hero only

Reservation CTA

↓

Reservation only

Avoid creating large multipurpose components.

---

# Component Structure

Each component should contain

```text
Component.tsx

Component.module.css
(or Tailwind)

types.ts

animations.ts (if required)
```

Avoid placing large GSAP timelines directly inside JSX.

---

# Configuration

All configurable values belong inside

```text
config/site.config.ts
```

Contains

Restaurant Name

Address

Phone

Email

Opening Hours

Social Links

Google Maps

Analytics ID

Reservation URL

Legal Name

No hardcoded business information anywhere else.

---

# Styling Rules

Tailwind utility classes preferred.

Avoid inline styles.

Use CSS variables for

Colors

Spacing

Typography

Z-index

Border Radius

Animation Durations

---

# Naming Conventions

Components

PascalCase

Example

HeroSection.tsx

---

Hooks

camelCase

Example

useScrollReveal.ts

---

Constants

UPPER_SNAKE_CASE

---

Folders

kebab-case

---

# Image Strategy

Every image should use

Next/Image

Responsive sizes

Lazy loading

Blur placeholder

Priority only for Hero

Maximum Hero Size

200KB

Menu Cards

80KB

Gallery

120KB

Format

WebP

Fallback

JPEG

---

# Font Loading

Use

next/font

Self host fonts

Subset Japanese glyphs

Avoid render blocking

Never import fonts via CSS.

---

# Responsive Breakpoints

Mobile

375+

Tablet

768+

Laptop

1024+

Desktop

1280+

Large Desktop

1536+

Design every breakpoint independently.

Do not simply shrink layouts.

---

# Animation Architecture

Every page should expose

initAnimations()

destroyAnimations()

Avoid anonymous GSAP timelines.

Use

gsap.context()

Always cleanup on unmount.

---

# ScrollTrigger Rules

Use

once:true

where possible.

Avoid excessive pinning.

Avoid long scroll hijacking.

Scrolling should remain native.

---

# State Management

This website is primarily static.

Avoid Redux.

Avoid Zustand unless required.

Use local component state.

Context only for

Theme

Cookie Consent

Navigation

---

# Routing

App Router

Each page

Own metadata

Own OpenGraph

Own JSON-LD

Own title

Own description

---

# Metadata

Every page must export

title

description

keywords

OpenGraph

Twitter

Canonical URL

---

# SEO

One H1 per page.

Structured Restaurant Schema.

Breadcrumb Schema where appropriate.

robots.txt

sitemap.xml

Canonical URLs

Semantic HTML

No duplicate headings.

---

# Accessibility

Semantic HTML only.

Keyboard navigation.

Visible focus.

ARIA labels.

Reduced motion support.

Skip to content.

Screen reader friendly.

---

# Performance Targets

Lighthouse

Performance

95+

Accessibility

100

SEO

100

CLS

<0.1

LCP

<2.5s

INP

<200ms

---

# Code Standards

Prefer composition over inheritance.

No duplicated code.

Functions under 60 lines where possible.

Meaningful variable names.

No magic numbers.

Strict TypeScript.

ESLint.

Prettier.

---

# Error Handling

404

Custom page

Error Boundary

Graceful image fallback

Graceful animation failure

Graceful font fallback

---

# Forms

Static frontend.

Contact form

Formspree or placeholder endpoint.

Validation

HTML5

No heavy libraries.

---

# Google Analytics

Load only after consent.

Lazy initialize.

Never block rendering.

Reference inside Privacy Policy.

---

# Cookie Consent

Minimal banner.

Dark theme.

Accept

Reject

Preferences

Store consent locally.

---

# Security

Content Security Policy

HTTPS only

No inline scripts

Sanitize user input

Secure headers

---

# Deployment

Platform

Vercel

Preview Deployments

Enabled

Production

Automatic

Image Optimization

Enabled

Compression

Enabled

---

# Browser Support

Chrome

Safari

Firefox

Edge

Latest two versions

Mobile Safari

Chrome Android

---

# Testing

Desktop

1920

1440

1280

Laptop

Tablet

iPad

Mobile

375

390

414

Pixel

Galaxy

---

# Acceptance Criteria

Architecture passes only when

✓ Modular

✓ Reusable

✓ Performant

✓ Accessible

✓ Responsive

✓ SEO Ready

✓ Config Driven

✓ No Hardcoded Business Data

✓ Lighthouse ≥95

✓ Easily Maintainable

✓ Production Ready

---

# Claude Code Implementation Prompt

You are implementing a production-grade Next.js application.

Prioritize readability, maintainability and performance.

Every component should be reusable.

Every animation should clean up correctly.

Every image should be optimized.

Every page should export metadata.

Every interaction should remain accessible.

The architecture should support future expansion without significant refactoring.

The final project should resemble the engineering quality of a professionally maintained commercial website rather than a portfolio project.