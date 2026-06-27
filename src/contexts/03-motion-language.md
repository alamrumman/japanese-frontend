# 03 — Motion Language

> Version 2.0

---

# Purpose

Motion is one of the defining characteristics of this project.

It should quietly communicate craftsmanship rather than technical ability.

Animations should never exist to impress.

They should exist to guide.

To reveal.

To establish rhythm.

Users should rarely notice the animations.

Instead—

they should simply feel that the website is incredibly polished.

If an animation becomes the center of attention—

it has failed.

---

# Motion Philosophy

The website should feel

Calm

Deliberate

Elegant

Natural

Confident

Timeless

Never

Fast

Flashy

Aggressive

Overdesigned

Playful

Game-like

---

# Core Principle

Every animation must answer one question.

> Why is this moving?

If there is no meaningful answer—

remove it.

---

# Motion Hierarchy

Animations should occur in this order of importance.

Loading Experience

↓

Page Transition

↓

Hero Reveal

↓

Scroll Storytelling

↓

Component Reveal

↓

Hover Interaction

↓

Micro Feedback

Never reverse this hierarchy.

---

# Animation Personality

Imagine

A Japanese tea ceremony.

Not

A gaming website.

Motion should feel

Slow

Intentional

Controlled

Elegant

Minimal

Breathing

Never

Hyperactive

Elastic

Chaotic

Noisy

---

# Animation Durations

Micro Interaction

120–180ms

---

Hover

180–220ms

---

Cards

250–350ms

---

Content Reveal

400–700ms

---

Hero

1600–2200ms

---

Page Transition

500–700ms

---

Loading Experience

1800–2500ms

---

# Preferred Easings

Always prefer

Power2.out

Power3.out

Expo.out

Circ.out

CustomEase

Avoid

Bounce

Elastic

Back

Steps

Linear

except for infinite tickers.

---

# Loading Experience

The website should never suddenly appear.

Instead—

Users enter the restaurant.

Sequence

Black screen

↓

Restaurant logo

↓

Small Japanese tagline

↓

Soft breathing animation

↓

Ink brush wipe

↓

Hero appears underneath

No

Loading bars

Progress percentages

Spinners

Skeletons

The loading experience should feel ceremonial.

---

# Page Transition

Every page transition should feel handcrafted.

Transition Sequence

User clicks

↓

Current page freezes

↓

Ink brush wipe

↓

Current page disappears

↓

Next page fades underneath

↓

Brush exits

↓

Navigation updates

Total Duration

600ms

Never

Slide pages

Rotate pages

Zoom pages

Flip pages

---

# Hero Reveal Timeline

0ms

Background visible

↓

250ms

Logo fades

↓

450ms

Navigation stagger

↓

800ms

Headline mask reveal

↓

1200ms

Supporting text

↓

1600ms

CTA expands

↓

1900ms

Ticker begins

↓

2200ms

Hero photography begins slow breathing

Nothing should animate simultaneously.

---

# Scroll Philosophy

Scrolling should feel like

Walking through the restaurant.

Every section introduces itself.

No sudden appearances.

No popping.

No exaggerated parallax.

---

# Scroll Reveal

Preferred

Opacity

↓

TranslateY

↓

Clip Path

↓

Mask Reveal

Never

Scale from 0

Rotate

Spin

Bounce

---

# Scroll Timing

Elements should reveal

Only once.

Never continuously replay.

The page should become calmer as users scroll deeper.

---

# Hero Photography Motion

The hero image should never be static.

Very slowly

Scale

100%

↓

103%

↓

100%

Duration

18–25 seconds

Almost imperceptible.

Creates life.

---

# Typography Reveal

Typography should appear

As if written.

Preferred

Mask reveal

Clip reveal

Character stagger

Line reveal

Avoid

Letter bouncing

Random fades

Rotation

---

# Navigation Motion

Initial Reveal

Stagger

40ms

Hover

2px translate

Gold divider grows

Active Item

Thin gold line

No scaling.

---

# Button Motion

Hover

Background fills

↓

Arrow slides

↓

Text color updates

Avoid

Bounce

Glow

Pulse

---

# Card Motion

Hover

TranslateY

-4px

Shadow increases slightly

Image

Scale

1.02

Duration

180ms

Nothing more.

---

# Cursor Behaviour

Desktop only.

Small center dot.

Large trailing ring.

Ring expands over interactive elements.

Hidden on touch devices.

Never lag noticeably.

---

# Ticker Motion

Continuous.

Linear.

Never pause.

Very slow.

Should feel ambient.

---

# Gallery Motion

Images reveal individually.

80ms stagger.

No random timing.

No bouncing.

---

# About Timeline Motion

Reveal each milestone sequentially.

Line grows.

Content fades.

Photography appears.

Users should feel progression.

---

# Menu Motion

Category underline slides.

Food cards fade.

Never replace content instantly.

Avoid tabs snapping.

---

# Reservation CTA

Section fades.

Button expands.

Background subtly brightens.

No dramatic entrance.

---

# Footer Reveal

Background darkens.

Footer rises.

Lantern glow appears subtly.

Very calm.

---

# Reduced Motion

If

prefers-reduced-motion

is enabled

Disable

Hero choreography

Parallax

Breathing animation

Character stagger

Cursor

Page transitions

Replace with

Instant opacity transitions.

Accessibility first.

---

# Performance Rules

Use

transform

opacity

clip-path

Avoid

width

height

top

left

layout-triggering animations

All motion should remain GPU accelerated.

---

# Animation Restrictions

Never use

Bounce

Elastic

Infinite floating

Random delays

Continuous scaling

Oversized parallax

Long fades

Motion blur

Particle systems

Confetti

Typing effects

Count up animations

Unless explicitly justified.

---

# Emotional Progression

The website should become quieter over time.

Loading

↓

Wonder

↓

Discovery

↓

Trust

↓

Calm

↓

Confidence

↓

Silence

Motion should mirror this emotional progression.

---

# Acceptance Criteria

Motion is approved only if

✓ Animations guide attention

✓ Motion feels premium

✓ Nothing distracts

✓ Performance remains smooth

✓ Animations support storytelling

✓ Reduced motion works

✓ Hero feels cinematic

✓ Interactions feel tactile

✓ No animation feels unnecessary

✓ Website remains beautiful with all animations disabled.

---

# Claude Code Motion Prompt

Implement motion as an invisible layer of craftsmanship.

Do not animate to impress.

Animate to guide.

Every transition should feel intentional.

Every reveal should improve hierarchy.

Every hover should feel tactile.

Every page transition should resemble a handcrafted ink brush stroke.

The user should never consciously admire the animations.

They should simply feel that the website is exceptionally well designed.