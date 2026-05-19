IPTV Hospitality Prototype — Comprehensive Architecture & Design Context

You can save this as the canonical context/specification for the prototype phase.

1. Project Goal

The current phase is building the final hospitality IPTV platform.

The goal is ONLY:

To build a custom TV solution(App that can be run on LG WebOS Smart TV as the default App(meaning our should be the standard launcher bypassing the lg standard UI on our commercial hotel tv)). 
This solution needs to be compatible LG WebOS of the below mentioned specs.

Description of the our App:

Homepage (i mean Panel since tv does not have pages but we call them Panel.)
So  
1.HomePanel:
UI description: A full sized background image with a Header(in semi transparent green color).
On the left of header, it will display the greet message- Dear Mr.<guestName> (will be recieved from our local server(which recieves checkin string.)). on the right of header we can display, basic weather info like temperature and humidity.
Then on the bottom we will have BottomDock in the semi transparent green color style. the dock will feature clickable navigation cards(utilizing the Button component of enact). each cards is acting as a link to other Panels.
2.TV Channels Panel
UI Description: a grid of tv channel icon cards. in center, starting from the top(leaving enough gutters and spacing) to 80% of the height. then below that again Dock. that will Category Cards- for tv channel categories. as per the active and selected category option. only those TV channels cards will be displayed. By default one category will be active when panel is loaded.
TV Channel Icon Cards will be acting like a link. clicking them will request the LG WebOs via its exposed Luna API. to switch the TV source to HDMI(Since, Tata Sky SetUp box is connected to it.)
Using the CEC feature(known as Simplink provided by LG). each icon will be mapped to a specific codde(TV channel number) that will be send to the Setup Box via HDMI CEC.We can use the LG's URC[Universal REmote COntrol Engine] . I am not quite aware of whether it would work. so thse are some options we can try.
Option 1: Use the Commercial Universal Remote Control (URC) API (Recommended)Because the UQ801C0SB is part of LG's commercial line, it supports Universal Remote Control (URC) profiles. LG pre-programs the infrared (IR) and blast profiles for major global STBs (including Tata Play) directly into the TV's firmware.You can leverage the Commercial WebAPI / HCAP API to trigger these pre-mapped commands. Instead of sending raw CEC, your Enact app commands the TV to virtually press the numbers on the Tata Play remote using the TV's internal URC blaster module:Configure the TV manually first: Go to Settings > All Settings > General > Devices > External Devices > Universal Control Settings. Pair HDMI 1 with Tata Play / Tata Sky. Ensure the LG remote can control the STB.Use the Input Change API: Force the TV to switch focus to HDMI 1 using the webOS TV External Input API.Invoke the URC Command Keypad: Call the internal commercial API to simulate pressing digits sequentially.
3. OTT Apps Panel.
UI Description: Same UI design with a Dock at bottom. having cards arranged horizontall. each card are launcher links to OTT apps available on the TV.As for now, we will just have launcher links for Hotstar, Netflix, Amazon, Youtube, SonyLiv.

All these Panels can be navigated from cards on Bottom Dock on Home Panel as mentioned above.
Since we know enact manages these as stack we change index on clicks to navigate between panels.
WE NEED TO ENSURE THAT THE DESIGN IS CREATED CONSIDERING IT IS FOR TVs THUS 10-FOOT DESIGN STYLE. LARGE FONT SIZES ANDN ICONS AND ALL.

we will use full feature of enact and luna api provided by LG to interact with WebOs. since our App is just like a custom UI acting as  default launcher(Bypassing the standard LG[by doing some changes in LG TV settings]) and actual apps are on LG TV only.
We will need to consider that LG TV remote navigation i.e our UI is compatible with spatial navigation and this ENact Framework comes into picture which handles all these thing seemlessly.

As for now we will not create the backend just the frontend. and we will simulate API calls just for now once we are sure that okay that UI can be run then we will go for backend since it is complex build the backend and if UI is not compatible with TV then it will be wasted.   

NOT:

backend architecture
PMS integration
distributed systems
production orchestration
2. Current Technical Scope

We are building:

A frontend-only hospitality IPTV  for LG webOS TVs.

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
webOS Simulator(first will test on this then sideload the .ipk on the tv)
WebOS cli tool to build the final app. 
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

webOS simulator on laptop and TV

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

Returns to previous panel.(by default pressing back or home asks "Whether to exit the App popup" or Goes to LG home UI. we need to intercept this event and consume it with in our application to navigate to HOme pangel if home button pressed or previous panel if back pressed). THIS IS VERY CRUCIAL CONSTRAINT!!!

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

To build the above described UI as 

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

Use the ENACT framework to its fullest!