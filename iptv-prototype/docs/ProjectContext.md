IPTV Hospitality Prototype — Comprehensive Architecture & Design Context

You can save this as the canonical context/specification for the prototype phase.

1. Project Goal

The current phase is NOT building the final hospitality IPTV platform.

The goal is ONLY:

Validate whether a custom React + Enact TV UI can reliably run on LG webOS TVs with proper remote navigation and TV-focused UX.

This is a:

runtime validation phase
UX validation phase
TV ergonomics phase

NOT:

backend architecture
PMS integration
distributed systems
production orchestration
2. Current Technical Scope

We are building:

A frontend-only hospitality IPTV prototype for LG webOS TVs.

No backend yet.

Everything currently:

static
mock-driven
local prototype only
3. Technology Stack
Core Stack
React
Enact
Sandstone UI
JavaScript
webOS Simulator
4. Why Enact Was Chosen

Enact is specifically optimized for:

TV applications
remote navigation
focus systems
directional UX
LG webOS compatibility

Critical capabilities already provided by Enact:

spatial navigation
focus management
remote key handling
TV-optimized components
accessibility behavior
fullscreen panel systems
5. Target Runtime

Primary runtime target:

LG webOS TVs

Current testing target:

webOS simulator on laptop

Future deployment target:

actual LG hospitality TVs
6. Important Runtime Constraints

Even during prototype phase, all UI decisions must consider:

Real TV Hardware Constraints

Real LG TVs have:

weak ARM CPUs
limited RAM
limited GPU acceleration
slower browser runtimes than desktop Chrome

Therefore prototype must remain:

lightweight
simple
optimized
7. UI Philosophy

The UI follows:

10-foot TV UI design principles

Meaning:

usable from far away
large typography
large focus targets
minimal clutter
high contrast
predictable navigation
8. Core UX Principle

This is NOT a webpage.

The application is fundamentally:

a directional focus-navigation system

Everything must work naturally using ONLY:

UP
DOWN
LEFT
RIGHT
OK
BACK

from LG remote.

9. Navigation Philosophy

The UI prioritizes:

simplicity
low cognitive load
shallow navigation depth

Avoid:

deep nested menus
dashboard complexity
tiny UI elements
scroll-heavy interfaces
10. Application Architecture

The prototype uses a reusable component architecture.

Current Folder Structure
src/
 ├── App/
 ├── components/
 ├── views/
 ├── index.js
11. Folder Responsibilities
views/

Contains:

TV screens/panels/pages

Examples:

HomePanel
ChannelGridPanel
OTTPanel
HotelInfoPanel

These represent:

fullscreen TV screens
components/

Contains reusable UI building blocks.

Examples:

NavigationCard
HeaderBar
DockBar
HeroOverlay

Reusable across multiple panels.

App/

Contains:

root app wrapper
global app orchestration
shared styling
top-level rendering
index.js

Application boot entry point.

Responsible for:

mounting React app
starting Enact runtime
12. Current Prototype Scope

The FIRST implemented screen is:

HomePanel

This becomes:

the main hospitality landing screen
13. HomePanel Layout Design

The HomePanel layout structure:

--------------------------------
TOP HEADER OVERLAY
--------------------------------

FULLSCREEN HERO BACKGROUND

--------------------------------
BOTTOM NAVIGATION DOCK
--------------------------------
14. Header Design

Top overlay contains:

greeting text
guest name
potentially hotel branding later

Example:

Welcome Mr. Adnan

Design requirements:

semi-transparent
dark green luxury aesthetic
minimal
elegant
readable over background image
15. Background Layer

Main center section contains:

fullscreen hotel/luxury image

Purpose:

ambience
luxury branding
premium hospitality feel

Technical constraints:

optimized image size
lightweight rendering
no giant PNGs
use compressed JPG/WebP
16. Bottom Navigation Dock

Bottom section contains:

horizontally aligned navigation cards

This is the PRIMARY interaction zone.

Design:

semi-transparent green overlay
remote-friendly spacing
large focusable cards
17. Navigation Cards

Initial navigation cards:

Live TV
OTT Apps
Hotel Info
Services

Each card:

focusable
clickable via LG remote OK button
reusable component
visually large and readable
18. Navigation Architecture

Each card navigates to another TV panel.

Example:

Live TV
    ↓
ChannelGridPanel

This uses:

panel-based architecture
not webpage routing philosophy
19. Remote Navigation Rules

The UI MUST fully support:

actual LG remote
keyboard arrow simulation
Enact focus engine

Important behavior requirements:

LEFT / RIGHT

Moves focus between bottom dock cards.

OK / Enter

Activates selected card.

BACK / Escape

Returns to previous panel.

20. Initial Focus Behavior

On app startup:

focus should default to first navigation card

Example:

Live TV card initially focused
21. Visual Focus Rules

Focused element MUST be extremely obvious.

Focused cards should:

brighten
scale slightly
glow/border highlight

Reason:
TVs viewed from distance.

22. Performance Constraints

Prototype must remain lightweight.

Avoid:

excessive DOM depth
heavy animation systems
particle effects
large blur filters
huge image assets
23. Rendering Philosophy

The app should feel:

smooth
immediate
responsive

Priority order:

navigation quality
>
responsiveness
>
visual complexity
24. Current Development Workflow

Current workflow:

VS Code
↓
npm run serve
↓
localhost:8080
↓
keyboard arrow testing

Simulator usage comes AFTER:

browser validation succeeds
25. Simulator Philosophy

Simulator is used to validate:

TV runtime behavior
packaging compatibility
webOS compatibility

NOT:

basic UI experimentation

Browser iteration remains primary during MVP phase.

26. Design Aesthetic

Target visual style:

Luxury hospitality TV interface

Inspired by:

premium hotel TVs
OTT launchers
cinematic TV UI systems

Color palette:

dark green overlays
elegant transparency
minimal visual clutter
premium typography
27. Reusable UI Strategy

The prototype should be built using reusable TV components.

Examples planned:

NavigationCard
HeaderOverlay
BottomDock
HeroBackground
PanelContainer

This prepares the architecture for:

future scaling
additional TV screens
maintainable codebase
28. Immediate Technical Goal

The immediate milestone is:

A fully navigable HomePanel using keyboard arrows that behaves naturally like a real LG TV interface.

This validates:

Enact focus system
remote compatibility
TV ergonomics
panel architecture
rendering feasibility
29. Critical TV UX Principles

The prototype must always prioritize:

A. Focus Visibility

Users must NEVER lose track of focus.

B. Predictable Navigation

Directional movement must feel deterministic.

C. Minimal Interaction Depth

TV users dislike excessive navigation steps.

D. Distance Readability

Everything designed for:

couch distance
hotel bed distance
30. Most Important Architectural Principle

The most important mental model for this project:

This is not web development.
This is TV interaction engineering.

The primary system being engineered is:

remote-driven focus navigation

not:

traditional webpage interaction.
If this prototype had to fail first in 24 hours, where would it most likely fail — and why?

Most likely first failure:

Focus navigation and visual focus clarity on real TVs.

Why?

Because TV applications fundamentally depend on:

directional navigation
focus visibility
remote ergonomics

Much more than:

React rendering
visual design
frontend architecture.

If focus behavior feels unnatural:
the entire TV UX immediately feels broken.