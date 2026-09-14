/*
 * data/portfolio.js
 *
 * Single source of truth for every approved portfolio entry. Rendered
 * client-side by js/site.js on index.html (grid) and creation.html
 * (single entry, via ?slug=). No build step: this file is loaded with a
 * plain <script src> tag and assigns window.PORTFOLIO, so it works from
 * file:// during local preview and from GitHub Pages once published.
 *
 * Body paragraphs use a light markdown-lite syntax: [text](url) becomes
 * a link, everything else renders as plain text. Keep body copy in sync
 * with art-career/darcyneal-site/portfolio-approved.md, which stays the
 * source of truth for wording.
 *
 * needsVerification: true marks an entry whose approved text was
 * reconstructed from a session summary rather than confirmed against
 * the original WordPress source. Safe to publish, but worth a pass
 * against the WordPress export when that's available again.
 */

window.PORTFOLIO = [
  {
    slug: "sonic-textiles",
    title: "Sonic Textiles",
    tag: "WEARABLE · SOFT CIRCUIT",
    summary: "An ongoing series of textile MIDI controllers that turn fabric patterns into playable interfaces.",
    body: [
      "Sonic Textiles is a series of textile-based interactive controllers that turn fabric patterns into playable interfaces. Capacitive touch sensing built into the fabric outputs MIDI, so touching the textile plays notes or triggers sound, the way a keyboard or pad controller would, but built from cloth instead of plastic and circuit board.",
      "The goal is an ultralightweight controller that looks good on its own while staying compact, flexible, and portable: a visually appealing polyphonic USB MIDI controller only a few layers of material thick. The concept started during Hackertrain, a two-day gathering that moved artists and hackers from across the West Coast to Supercon at Hackaday's headquarters in Pasadena, and working demonstration units were completed during an artist residency at Sou'Wester and during a hackathon at [CETI](https://ceti.institute). It's an ongoing project, one Darcy keeps returning to across residencies and events, as a running curiosity about the other mediums they work with. Planned next steps include moving to flexible PCBs and CNC-cut construction for better durability, portability, and build-to-build consistency."
    ],
    heroImage: "images/sonic-textiles/sonic-textiles-1.jpg",
    gallery: [
      "images/sonic-textiles/sonic-textiles-2.jpg",
      "images/sonic-textiles/sonic-textiles-3.jpg",
      "images/sonic-textiles/sonic-textiles-4.jpg",
      "images/sonic-textiles/sonic-textiles-5.jpg"
    ],
    videos: [
      { title: "Sonic etextile experiments", url: "https://www.youtube.com/watch?v=RxHPhZVKyKM" },
      { title: "Making things on the Hackertrain", url: "https://www.youtube.com/watch?v=e0a2nT5_V3M" }
    ]
  },
  {
    slug: "emf-explorer-badge",
    title: "EMF Explorer Badge",
    tag: "HARDWARE · WORKSHOP KIT",
    summary: "A wearable PCB that turns ambient electromagnetic noise into audio, and the basis for a workshop taught worldwide.",
    body: [
      "The EMF Explorer Badge is an electromagnetic frequency sensing circuit built on a wearable PCB. It amplifies the ambient radio frequency noise produced by everyday electronics and outputs it as audio through a headphone jack, letting you listen to signals you would otherwise never know were there. Bluetooth hardware has a distinctive crackle when active. Cellphones produce a rhythmic burst when transmitting data. A laptop trackpad chirps when touched. The badge reveals this invisible layer of activity around you.",
      "The PCB is designed to be worn on a lanyard. An onboard LED illuminates from the back so it doubles as a night-visibility wearable. It runs on two AAA batteries and the kit requires soldering, though no prior electronics experience is needed. Design files are open source on GitHub.",
      "The badge has become the basis for a workshop taught worldwide. Participants build their own badge, then take it on a sound exploration walk to discover what EMF signals they can find in the wild. The workshop has been run at events such as DEF CON, HOPE, ToorCamp, dadaLab, Open Hardware Summit, Chaos Communication Congress, and Bay Area Maker Faire, and is designed to scale to 50 students at a time. For kits, purchasing info, and workshop inquiries, visit [emfexplorer.space](https://emfexplorer.space)."
    ],
    heroImage: "images/emf-badge/emf-badge-2.jpg",
    gallery: [
      "images/emf-badge/emf-badge-in-hand.jpg",
      "images/emf-badge/emf-board-oshpark.jpg",
      "images/emf-badge/emf-explorer-in-hand.jpg"
    ]
  },
  {
    slug: "emf-explorer-deluxe",
    title: "EMF Explorer Deluxe",
    tag: "HARDWARE · PROTOTYPE",
    summary: "A multi-antenna EMF prototyping platform built in under three weeks during a Shenzhen manufacturing residency.",
    needsVerification: true,
    body: [
      "The EMF Explorer Deluxe is an expanded prototyping platform built to accept multiple antenna inputs, producing a wider and more dynamic range of audio from ambient electromagnetic fields. Where the original EMF Explorer Badge uses a single antenna, the Deluxe allows for simultaneous input from several sources, creating layered and more complex soundscapes from the invisible RF environment.",
      "The project was created during the Research at Scale residency in Shenzhen, China, hosted by [Chaihuo Makerspace](https://www.seeedstudio.com/chaihuo-makerspace) and sponsored by Seeed Studio, and organized by the MIT Media Lab. The entire build, from concept to working prototype, was completed in under three weeks. Working at the center of global electronics manufacturing meant parts, fabrication, and iteration happened at a pace that would be impossible elsewhere.",
      "More about the residency: [media.mit.edu/posts/research-at-scale](https://www.media.mit.edu/posts/research-at-scale/)"
    ],
    heroImage: "images/emf-explorer-deluxe/IMG_3790.png",
    gallery: [
      "images/emf-explorer-deluxe/IMG_3791.png",
      "images/emf-explorer-deluxe/IMG_3839.png",
      "images/emf-explorer-deluxe/IMG_9477.png"
    ]
  },
  {
    slug: "pathlighter",
    title: "Pathlighter",
    tag: "PCB ART · WORKSHOP",
    summary: "A wearable LED lanyard board doubling as a fast, first-solder-friendly teaching tool. Over 450 students taught.",
    body: [
      "The Pathlighter PCB (originally called the Glow Club PCB) is a wearable LED circuit designed as both a teaching tool and a piece of PCB art. Worn on a lanyard, it lights up at night using the fabrication layers of the board itself as the art surface: soldermask, silkscreen, and substrate used as visual elements rather than purely functional ones.",
      "The board was originally created as the soldering platform for [thereuglow.club](https://thereuglow.club), a community built around learning electronics through wearable light art. The design is intentionally fast to build; first-time solderers can complete it in about 20 minutes. That makes it well-suited for high-throughput workshop environments where demand exceeds space, and that revolving-door format has let the workshop reach over 450 students to date.",
      "The Pathlighter has been taught at ToorCamp 2022 and Chaos Communication Camp 2023, and has since spread to larger events. GitHub project files are available for anyone who wants to study or build on the design."
    ],
    heroImage: "images/pathlighter/pathlighter-glow.jpg",
    gallery: [
      "images/pathlighter/pathlighter-assembly.jpg",
      "images/pathlighter/pathlighter-ccc23.jpg",
      "images/pathlighter/pathlighter-front-back.jpg"
    ]
  },
  {
    slug: "dynacontroller",
    title: "DynaController",
    tag: "INSTALLATION",
    summary: "A touch-activated sculpture built as the physical interface for the DynaMandala visual synthesizer, shown at 20+ events.",
    body: [
      "The DynaController is a custom touch-activated sculpture built as the physical interface for the DynaMandala, an interactive 3D visual synthesizer created in Unreal Engine. Touching the controller's capacitive points sends parameters into the DynaMandala in real time, modulating 3D geometry and triggering audio through a quadraphonic speaker system. The result is a fully immersive environment where each player's interaction produces a unique combination of visuals and sound.",
      "The DynaMandala is the work of game developer Stefan Henry Biskup III, who built the entire system in custom Unreal Engine scripting. The DynaController was designed, built, and programmed by Darcy Neal to complete the physical experience of the installation. LED animations throughout the controller interface were programmed by Daniel Young.",
      "The project has been shown at over 20 events, including CONSTELLATIONS '23 at CETI.institute. More information at [dynamandala.com](https://dynamandala.com)."
    ],
    heroImage: "images/dynacontroller/dynacontroller-illuminated.jpg",
    gallery: [
      "images/dynacontroller/dynacontroller-performance.jpg",
      "images/dynacontroller/dynacontroller-event.jpg",
      "images/dynacontroller/dynacontroller-sunlight.jpg",
      "images/dynacontroller/dynacontroller-underside.jpg"
    ]
  },
  {
    slug: "dynacontroller-pcb",
    title: "DynaController PCB",
    tag: "PCB ART",
    summary: "A compact, portable PCB version of the DynaController, built for embedding in other installations.",
    needsVerification: true,
    body: [
      "The DynaController PCB is a compact, portable version of the full-scale DynaController sculpture. It replicates the touchpoint layout of the original controller in a PCB form factor, making it easier to collaborate with other creators and suitable for embedding inside interactive installations via optional terminal connectors.",
      "The board uses JLCPCB's multi-color silkscreen process, which produces full-color detail directly on the PCB surface. The design connects to the DynaMandala visual synthesizer. More about the full project at [dynamandala.com](https://dynamandala.com)."
    ],
    heroImage: "images/dynacontroller/dynacontroller-underside.jpg",
    gallery: [
      "images/dynacontroller/dynacontroller-headshot.png"
    ]
  },
  {
    slug: "joule-bug",
    title: "Joule Bug",
    tag: "WEARABLE",
    summary: "A wearable insect pendant built around a joule thief circuit that gives depleted batteries a second life.",
    needsVerification: true,
    body: [
      "The Joule Bug is a wearable insect pendant built around a joule thief circuit, a self-oscillating boost converter that extracts the remaining charge from batteries too depleted to power conventional electronics. The circuit steps up the residual voltage enough to drive an LED, giving dead cells a second life.",
      "The front of the pendant is decorative PCB art. The fabrication layers of the board itself are used as art layers: soldermask, silkscreen, and fiberglass substrate become the visual surface rather than purely functional elements. This version uses a lead-free HASL silver finish with blue soldermask."
    ],
    heroImage: "images/joule-bug/joule-bug-1.png",
    gallery: [
      "images/joule-bug/joule-bug-2.png",
      "images/joule-bug/joule-bug-3.png",
      "images/joule-bug/joule-bug-back.png"
    ]
  },
  {
    slug: "sao-display-dagger",
    title: "SAO Display Dagger",
    tag: "PCB ART · LIMITED EDITION",
    summary: "A USB-C powered cyberpunk dagger built to display SAO badge accessories, hand-assembled in a limited run.",
    needsVerification: true,
    body: [
      "The SAO Display Dagger is a USB-C powered display platform for SAO (Simple Add-On) badge accessories, shaped as a cyberpunk dagger. A header rail runs the full length of the blade, letting multiple SAOs be mounted and displayed simultaneously so you can show off a hacker convention collection year-round rather than just at events.",
      "Power comes from USB-C. A slide switch in the handle controls an LED strip running along the blade edge, casting a cyan neon glow. The blade PCB uses a multicolor UV soldermask with ENIG accents. The shape was originally designed for Neotropolis.",
      "Every unit is hand-assembled. This was a limited edition run sold at DEF CON and Hackaday's Supercon."
    ],
    heroImage: "images/sao-dagger/sao-dagger-1.jpg",
    gallery: [
      "images/sao-dagger/sao-dagger-2.jpg",
      "images/sao-dagger/sao-dagger-macro.jpg"
    ]
  },
  {
    slug: "freeform-led-workshop",
    title: "Freeform LED Workshop",
    tag: "WORKSHOP",
    summary: "Illuminated freeform sculptures built with no PCB or breadboard, taught as a hands-on workshop with an accompanying zine.",
    needsVerification: true,
    body: [
      "This workshop focused on creating illuminated freeform sculptures with LEDs. Students designed and assembled their own sculptures without PCBs or breadboards, bending wire and components directly into three-dimensional forms. Individual creativity came through in every piece.",
      "An accompanying zine was produced for the workshop. It has been run at the Arai-Eek electronics artist residency in Chiang Mai, Thailand, and at Open Hardware Summit in Berlin, May 2026."
    ],
    heroImage: "images/freeform-led-workshop/IMG_5289.png",
    gallery: [
      "images/freeform-led-workshop/IMG_5296.png",
      "images/freeform-led-workshop/IMG_5298.png",
      "images/freeform-led-workshop/IMG_5304.png",
      "images/freeform-led-workshop/IMG_5307.png",
      "images/freeform-led-workshop/IMG_5308.png"
    ],
    video: "images/freeform-led-workshop/freeform-led-workshop.mp4"
  }
];
