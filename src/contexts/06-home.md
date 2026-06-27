# 06 — Home Page

> Version 2.0

---

# Purpose

The Home page is the emotional centerpiece of the website.

Unlike traditional restaurant websites, the homepage should **not** immediately attempt to sell food.

Instead, it should establish atmosphere, craftsmanship, authenticity and trust before introducing the menu.

Visitors should feel like they are entering a premium omakase restaurant rather than browsing another restaurant landing page.

The Home page should progressively unfold like a story.

Every section naturally transitions into the next.

The scrolling experience should resemble walking through different spaces inside the restaurant.

---

# Primary Visual Reference

Reference Image

> japanese siteeee.png

This image establishes the visual language for the Home page.

Preserve

• Editorial composition

• Premium spacing

• Cinematic photography

• Typography hierarchy

• Visual rhythm

• Quiet luxury

• Darkness

• Warm lighting

Never copy

• Exact layout

• Typography placement

• Image placement

• Composition

Every section should feel inspired by the reference while remaining original.

---

# User Journey

Visitors should experience the Home page in the following emotional order.

Arrival

↓

Curiosity

↓

Calm

↓

Craftsmanship

↓

Appetite

↓

Trust

↓

Reservation

↓

Closure

Every section should reinforce the previous one.

No section should feel disconnected.

---

# Home Page Structure

Loading Experience

↓

Hero

↓

Brand Statement

↓

Featured Menu

↓

Story Preview

↓

Reservation CTA

↓

Testimonials

↓

Footer

---

# -----------------------------------------

# HERO

---

## Purpose

The Hero exists to establish emotional trust before introducing food.

Food should not be the first thing visitors notice.

Craftsmanship should.

Typography should command attention.

Photography should support typography rather than compete with it.

Visitors should immediately understand

"This restaurant values quality."

The Hero should become the signature experience of the website.

---

# Emotional Goal

Wonder

Curiosity

Luxury

Stillness

Confidence

The Hero should feel cinematic.

Never promotional.

---

# Visual Direction

Reference

japanese siteeee.png

Preserve

Editorial composition

Large photography

Dark atmosphere

Strong typography

Minimal navigation

Quiet luxury

Original implementation only.

Never recreate the screenshot.

---

# Layout Blueprint

Desktop

```
 ---------------------------------------------------------
| Logo            Navigation                 Reservation |
|                                                     |
|                                                     |
|   Large Editorial Typography                        |
|                                                     |
|   Supporting Copy                                   |
|                                                     |
|   CTA                                               |
|                                                     |
|                              Large Hero Photography |
|                              occupying ~58% width   |
|                                                     |
|-----------------------------------------------------|
|          Infinite Japanese Food Ticker              |
 ------------------------------------------------------
```

The layout should not be symmetrical.

Photography dominates.

Typography balances.

Whitespace creates breathing room.

---

Tablet

Navigation compresses.

Typography scales down.

Photography remains dominant.

Ticker remains.

Spacing slightly reduced.

---

Mobile

Hero becomes vertically composed.

Photography first.

Typography overlays lower portion.

Reservation button remains visible.

Navigation collapses into premium drawer.

Ticker becomes swipeable.

The mobile Hero should feel intentionally redesigned.

Not compressed.

---

# Hero Photography

The photograph should appear

Editorial

Warm

Natural

Professionally captured

Minimal

Dark

Authentic

Use shallow depth of field.

Avoid busy compositions.

The image should breathe naturally through subtle scaling.

---

# Typography

Restaurant Name

Large

Japanese Serif

Weight

700

Supporting Headline

Elegant

Readable

Maximum

3 lines

Body Copy

16–18px

Maximum width

480px

Avoid long paragraphs.

---

# CTA

One primary button only.

Label

Reserve Now

or

Experience Omakase

Hover

Background fills

Arrow slides

Scale

Maximum

1.02

Never glow.

Never pulse.

---

# Navigation

Transparent initially.

Background appears only after scrolling.

Navigation should never dominate.

Keep it visually quiet.

---

# GSAP Timeline

Loading Complete

↓

250ms

Logo fades in

↓

450ms

Navigation stagger

↓

800ms

Headline mask reveal

↓

1200ms

Supporting copy

↓

1600ms

CTA expands

↓

1900ms

Ticker starts

↓

2200ms

Hero image breathing begins

Nothing should animate simultaneously.

Everything should feel choreographed.

---

# Hero Scroll Behaviour

As users begin scrolling

Typography slowly shifts upward.

Hero photography subtly scales down.

Ticker fades.

Navigation gains background.

The Hero should transform naturally into the Brand Statement.

Avoid abrupt disappearance.

---

# Micro Interactions

Navigation

Thin gold underline

Button

Background fill

Photography

Tiny zoom on hover (desktop)

Ticker

Continuous motion

Cursor

Magnetic over CTA only.

---

# Accessibility

Hero text contrast

AA compliant

Images

Meaningful alt text

Navigation

Keyboard accessible

CTA

Visible focus state

Reduced Motion

Supported

---

# Performance

Hero image

Priority

WebP

Maximum

200KB

Animations

GPU accelerated

LCP target

<2.5 seconds

---

# Things To Avoid

Centered hero

Glassmorphism

Huge gradients

Floating cards

Neon effects

Large rounded buttons

Overlapping text on food

Video backgrounds

Over-animation

Template layouts

AI symmetry

---

# Acceptance Criteria

Hero succeeds only if

✓ First impression feels premium

✓ Photography dominates

✓ Typography establishes hierarchy

✓ Mobile feels redesigned

✓ Animation feels cinematic

✓ Hero remains beautiful without animations

✓ Users immediately understand restaurant positioning

---

# Claude Code Implementation Prompt

Build a cinematic Hero section inspired by the editorial quality of `japanese siteeee.png`.

Do not recreate the reference.

Use it only to understand its composition, typography hierarchy, spacing philosophy and visual rhythm.

The Hero should feel handcrafted.

Avoid every common landing page pattern.

Photography should dominate approximately 60% of the viewport.

Typography should occupy the remaining space.

Whitespace should become part of the composition.

Animations should reveal the Hero gradually.

The first impression should communicate craftsmanship before food.

The final Hero should resemble an Awwwards editorial website rather than a restaurant template.

---

# =========================================

# BRAND STATEMENT

=========================================

## Purpose

The Brand Statement intentionally slows the experience.

After the cinematic Hero, users should be given breathing room.

This section introduces the philosophy behind Sushi Kuro Nami.

It is not promotional.

It is reflective.

The pace should noticeably slow.

---

# Emotional Goal

Calm

Respect

Authenticity

Japanese craftsmanship

---

# Layout

Desktop

Large whitespace.

Two-column composition.

Left

Editorial copy.

Right

Minimal Japanese brush illustration or subtle abstract visual.

The illustration should never dominate.

---

Tablet

Columns remain.

Spacing reduced.

Illustration scales proportionally.

---

Mobile

Single column.

Illustration below content.

Large spacing preserved.

Never compress typography.

---

# Typography

Large serif heading.

Supporting copy

Maximum

6 lines.

Reading width

620px.

Comfortable line height.

No excessive bold text.

---

# Animation

Section fades gently into view.

Heading reveals line by line.

Illustration fades.

Nothing slides dramatically.

Visitors should barely notice the animation.

---

# Background

Remain dark.

Allow slightly warmer surface tone than Hero.

Very subtle grain texture permitted.

---

# Accessibility

Readable line length.

Contrast AA.

Illustration hidden from screen readers if decorative.

---

# Performance

SVG illustration preferred.

Avoid large assets.

No Lottie unless optimized.

---

# Things To Avoid

Statistics

Counters

Feature icons

Marketing slogans

Awards

Promotional copy

Cards

This section exists to create emotional breathing space.

---

# Acceptance Criteria

✓ Visitors slow down

✓ Typography dominates

✓ Illustration supports rather than competes

✓ Calm atmosphere

✓ Editorial composition

✓ Excellent readability

---

# Claude Code Implementation Prompt

Design the Brand Statement as a quiet editorial spread inspired by Japanese print design.

Use generous whitespace.

Minimal imagery.

Elegant typography.

Avoid cards, icons, statistics and marketing language.

This section should feel like reading the opening page of a premium magazine rather than a business website.

Scrolling into this section should feel like taking a breath after the Hero.

# =========================================

# FEATURED MENU

=========================================

## Purpose

The Featured Menu is the first section where food becomes the protagonist.

However—

the objective is still not selling.

The objective is appreciation.

Users should feel they are looking through an editorial food magazine rather than an online restaurant menu.

Each dish should feel curated.

Every card should communicate craftsmanship.

Avoid overwhelming visitors with choices.

Quality over quantity.

Less is always more.

---

# Emotional Goal

Temptation

Curiosity

Desire

Luxury

Craftsmanship

---

# Reference

Reference

japanese siteeee.png

Observe

Large photography

Minimal typography

Dark surroundings

Premium spacing

Editorial balance

Do not recreate.

Create an original interpretation.

---

# Section Layout

Desktop

```
---------------------------------------------------------

               Featured Menu

     Small editorial description

---------------------------------------------------------

[ Large Card ]

[ Medium Card ]   [ Medium Card ]

[ Large Card ]

---------------------------------------------------------

Explore Complete Menu →

---------------------------------------------------------
```

Cards should intentionally vary in size.

Avoid perfect symmetry.

Users should feel visual rhythm.

---

Tablet

Two-column masonry.

Cards retain different heights.

Spacing reduced.

Photography remains dominant.

---

Mobile

Horizontal swipe experience.

One featured dish visible.

Next dish partially visible.

Encourages exploration.

Avoid shrinking desktop cards.

---

# Section Header

Heading

Large

Japanese Serif

Editorial style.

Supporting paragraph

Maximum

3 lines.

Reading width

560px.

---

# Card Composition

Each card contains

Photography

↓

Japanese Name

↓

Romanized Name

↓

Short Description

↓

Price

Typography remains intentionally small.

Photography dominates.

---

# Photography

Professional restaurant photography only.

Natural lighting.

Visible texture.

Real ingredients.

No busy backgrounds.

No excessive garnish.

The food should appear freshly prepared.

Each image should have its own personality.

---

# Card Sizes

Large

Landscape

16:10

Medium

Square

1:1

Occasionally

Portrait

4:5

Avoid identical cards.

---

# Hover Behaviour

Image

Scale

1.03

↓

Card lifts

4px

↓

Gold divider appears

↓

Cursor changes

No shadows suddenly appearing.

No glow.

---

# Animation

Cards reveal

80ms stagger.

Image first.

↓

Typography

↓

Divider

↓

Price

The animation should feel assembled.

Not faded.

---

# Scroll Behaviour

Cards reveal individually.

Do not reveal entire grid.

Every card should have its own entrance.

Scrolling should resemble discovering dishes one by one.

---

# Micro Interactions

Hover

Image zoom

↓

Divider expands

↓

Text moves upward

2px

↓

Cursor magnetism

Desktop only.

---

# CTA

"Explore Full Menu"

Simple text.

Thin arrow.

No button.

Hover

Arrow slides

6px

Underline grows.

---

# Accessibility

Meaningful alt text.

Readable prices.

Keyboard navigation.

Hover alternatives for touch.

Focus state.

---

# Performance

Images

WebP

80KB target.

Lazy loaded.

Blur placeholder.

---

# Things To Avoid

Food delivery style cards

Ratings

Stars

Discounts

Badges

Large buttons

Crowded layouts

Over saturated photography

Rounded cards

Glassmorphism

---

# Acceptance Criteria

✓ Cards feel editorial

✓ Photography dominates

✓ Masonry composition

✓ Calm interactions

✓ Premium typography

✓ Mobile swipe experience

✓ Original layout

✓ Feels handcrafted

---

# Claude Code Implementation Prompt

Create an editorial Featured Menu inspired by luxury culinary magazines.

Food should feel curated rather than listed.

Avoid ecommerce aesthetics.

Cards should vary in size.

Photography should dominate.

Typography should remain intentionally restrained.

Interactions should be subtle.

Users should slowly explore rather than rapidly scan.

---

# =========================================

# STORY / ABOUT PREVIEW

=========================================

## Purpose

After introducing food,

the website shifts attention toward the people behind the restaurant.

This section builds trust.

Visitors should understand

who

creates the experience.

Rather than

what

is served.

Story precedes conversion.

---

# Emotional Goal

Trust

Respect

Craftsmanship

Authenticity

---

# Visual Direction

Imagine opening a premium coffee-table book.

Large photography.

Long reading lines.

Minimal decoration.

Editorial layout.

Quiet atmosphere.

---

# Desktop Layout

```
---------------------------------------------------------

Large Photography

                     Small Label

                     Large Heading

                     Story

                     Story

                     Story

                     Read More →

---------------------------------------------------------
```

Photography occupies approximately

55%

Text occupies

45%

Never centered.

---

# Tablet

Photography stacks.

Large margins preserved.

Reading width reduced.

---

# Mobile

Photography first.

↓

Heading

↓

Story

↓

CTA

No side-by-side layouts.

---

# Photography

Restaurant interior.

Chef.

Knife preparation.

Wood textures.

Hands preparing sushi.

Never generic smiling staff.

Photography should tell the story.

---

# Typography

Heading

Japanese Serif.

Editorial scale.

Body

Readable.

Maximum

7 lines.

CTA

Minimal.

Thin arrow.

---

# Animation

Photography reveals first.

↓

Heading

↓

Paragraph

↓

CTA

No dramatic effects.

Everything appears naturally.

---

# Scroll Behaviour

The section enters slowly.

Photography reveals through clip-path.

Typography fades upward.

Very restrained.

---

# Background

Slightly lighter than Hero.

Very subtle warm tint.

Maintains continuity.

---

# Micro Interactions

CTA underline expands.

Arrow slides.

Photography

Tiny scale

1.02

Desktop only.

---

# Accessibility

Readable paragraphs.

Large tap target.

Semantic article.

Proper heading structure.

---

# Performance

Photography

120KB target.

WebP.

Lazy loaded.

---

# Things To Avoid

Timeline

Awards

Certificates

Corporate language

Business statistics

Mission statements

Marketing buzzwords

This section should feel human.

---

# Acceptance Criteria

✓ Visitors understand craftsmanship

✓ Story feels authentic

✓ Photography dominates

✓ Editorial composition

✓ Comfortable reading

✓ CTA feels natural

---

# Claude Code Implementation Prompt

Design the Story Preview as if it were a two-page spread in a premium Japanese lifestyle magazine.

Large photography should dominate.

Typography should support the imagery.

Avoid corporate "About Us" layouts.

Focus on craftsmanship, tradition and authenticity.

Visitors should feel emotionally connected to the restaurant before they continue scrolling.
# =========================================

# RESERVATION CTA

=========================================

## Purpose

The Reservation section is the emotional climax of the homepage.

The visitor has now experienced

The atmosphere

↓

The philosophy

↓

The craftsmanship

↓

The food

↓

The people

Now comes the invitation.

This section should never feel like a sales pitch.

Instead—

It should feel like a quiet invitation.

The restaurant is simply opening its doors.

Nothing more.

---

# Emotional Goal

Commitment

Anticipation

Luxury

Exclusivity

Calm Confidence

---

# Visual Direction

Think

Luxury Hotel

↓

Private Lounge

↓

Exclusive Dining Room

Not

Restaurant Advertisement

Avoid unnecessary text.

The photography should create the emotion.

---

# Desktop Layout

```
------------------------------------------------------------

               Full Width Restaurant Interior

                  Dark Overlay

          "Experience Japanese Craftsmanship"

      Reservations are limited each evening.

            [ Reserve Your Experience ]

------------------------------------------------------------
```

Photography occupies the entire section.

Everything else floats gently above it.

---

# Tablet

Photography remains full width.

Content centered.

Button width increases.

---

# Mobile

Photography height reduced.

Typography enlarged.

CTA spans nearly full width.

Comfortable touch target.

---

# Photography

Restaurant Interior

Private Dining

Warm Lighting

Wood

Paper Lanterns

Chef preparing sushi

Never crowded.

Never noisy.

Users should imagine themselves sitting there.

---

# Typography

Heading

Editorial Serif

Large

Maximum

2 lines

Body

Maximum

2 lines

No marketing copy.

Simple.

Elegant.

---

# CTA Button

Single action only.

Label

Reserve Your Experience

or

Book a Table

No secondary buttons.

No icons.

Hover

Background fills

↓

Arrow slides

↓

Border disappears

Desktop only.

---

# Animation

Background fades first.

↓

Heading appears.

↓

Paragraph.

↓

Button expands.

↓

Subtle ambient lighting animation begins.

Very restrained.

---

# Scroll Behaviour

Section fades naturally.

Photography slowly brightens.

CTA gently expands.

No dramatic movement.

---

# Micro Interactions

Button

Magnetic cursor

↓

Background fill

↓

Arrow movement

↓

Tiny scale

Maximum

1.02

---

# Accessibility

Contrast AA.

Button focus visible.

Photography decorative.

Keyboard accessible.

---

# Performance

Image

WebP

Lazy loaded.

Maximum

160KB

---

# Things To Avoid

Countdown timers

Limited offer

Discount banners

Reservation statistics

Animated counters

Urgency marketing

Large icons

Trust badges

This is luxury.

Luxury never rushes people.

---

# Acceptance Criteria

✓ Feels exclusive

✓ Calm atmosphere

✓ Premium photography

✓ Single clear CTA

✓ No marketing language

✓ Elegant motion

---

# Claude Code Implementation Prompt

Create a Reservation section that feels like an invitation rather than a conversion block.

Large photography should dominate.

Typography should remain minimal.

The section should quietly encourage reservations through atmosphere rather than persuasion.

Avoid every common landing page CTA pattern.

Luxury should come from restraint.

---

# =========================================

# TESTIMONIALS

=========================================

## Purpose

Visitors now seek reassurance.

Testimonials should build confidence without interrupting the calm rhythm of the homepage.

Avoid social proof clichés.

Design them like editorial interview excerpts.

---

# Emotional Goal

Trust

Confidence

Authenticity

Warmth

---

# Layout

Desktop

Three editorial quote cards.

Horizontal auto-scroll.

Pause on hover.

Large spacing.

---

Tablet

Two cards visible.

---

Mobile

Single swipeable card.

Snap scrolling.

---

# Card Design

Customer Name

↓

Location

↓

Quote

↓

Small divider

Avoid

Stars

Profile circles

Ratings

Verification badges

---

# Typography

Large quotation.

Readable body.

Muted customer details.

---

# Animation

Cards reveal sequentially.

Auto-scroll

Very slow.

Pause on hover.

---

# Accessibility

Keyboard controls.

Readable typography.

No auto-scroll for reduced motion.

---

# Things To Avoid

★★★★★

Google Review badges

Large quotation graphics

Speech bubbles

Floating cards

---

# Acceptance Criteria

✓ Editorial

✓ Calm

✓ Trustworthy

✓ Excellent readability

---

# Claude Code Implementation Prompt

Design testimonials like excerpts from a premium magazine interview.

Avoid traditional review widgets.

Focus on typography and spacing rather than decoration.

---

# =========================================

# FOOTER

=========================================

## Purpose

The Footer concludes the experience.

It should feel like leaving the restaurant.

Quiet.

Elegant.

Unhurried.

---

# Emotional Goal

Closure

Calm

Completion

---

# Layout

Desktop

```
------------------------------------------------------------

Logo

Tagline

Navigation

Contact

Social

Legal

------------------------------------------------------------

© 2026 Sushi Kuro Nami

------------------------------------------------------------
```

Very large spacing.

Thin dividers.

Minimal links.

---

# Tablet

Two columns.

---

# Mobile

Accordion.

Large touch targets.

Comfortable spacing.

---

# Typography

Small.

Muted.

Readable.

No visual competition.

---

# Animation

Footer fades upward.

Background darkens.

Very subtle lantern glow.

Nothing more.

---

# Accessibility

Semantic footer.

Keyboard navigation.

Visible focus.

---

# Performance

Static.

No unnecessary JavaScript.

---

# Things To Avoid

Newsletter popup

Instagram feed

Large logos

Awards

Payment icons

App download badges

---

# Acceptance Criteria

✓ Elegant

✓ Quiet

✓ Minimal

✓ Excellent spacing

✓ Strong typography

---

# Claude Code Implementation Prompt

Design the Footer as the final quiet room of the restaurant.

Avoid visual clutter.

Allow generous whitespace.

Typography should feel understated.

The visitor should leave with a sense of calm.

---

# =========================================

# HOME PAGE ACCEPTANCE CHECKLIST

=========================================

The Home page is complete only when

✓ Hero establishes atmosphere before food

✓ Brand Statement slows the experience

✓ Featured Menu feels editorial

✓ Story builds trust

✓ Reservation CTA feels inviting

✓ Testimonials build confidence

✓ Footer creates closure

✓ Every section has a unique composition

✓ No repeated layouts

✓ Mobile feels intentionally redesigned

✓ Motion remains subtle

✓ Performance target exceeds 95

✓ Accessibility reaches WCAG AA

✓ Design feels handcrafted

✓ The homepage remains visually impressive even with animations disabled

✓ The experience resembles walking through a luxury omakase restaurant

---

# COMPLETE CLAUDE CODE IMPLEMENTATION PROMPT

Implement the Home page as a premium editorial experience inspired by the visual language of **`japanese siteeee.png`**.

Use the reference only to understand its atmosphere, typography hierarchy, spacing, image treatment and visual rhythm.

Do not recreate the reference layout.

The homepage should tell a story.

Hero introduces craftsmanship.

Brand Statement slows the visitor.

Featured Menu creates appetite.

Story builds trust.

Reservation becomes an invitation.

Testimonials reinforce confidence.

Footer concludes the experience.

Every section should have a distinct composition.

Avoid repeated layouts.

Photography should dominate.

Typography should establish hierarchy.

Whitespace should become a design element.

Animations should guide attention rather than decorate the interface.

The final implementation should resemble a handcrafted Awwwards-quality editorial website rather than a restaurant landing page or AI-generated template.

When evaluating each section, ask:

- Would this still look premium with animations disabled?
- Does this section have a unique identity?
- Is the layout driven by typography and photography rather than effects?
- Does the transition into the next section feel natural?
- Would a professional design studio be proud to publish this?

If any answer is **No**, redesign the section before proceeding.