/**
 * Apex Cuts - Video Editor Portfolio Engine
 * Pure Vanilla JavaScript (ES6+)
 */

// 1. Dataset of Portfolio Projects
const portfolioProjects = [
  {
    id: 'project-1',
    title: 'MrBeast Style $500K Retention Master',
    client: 'HyperPlay Gaming (3.4M Subs)',
    category: 'youtube',
    aspectRatio: '16:9',
    format: 'horizontal',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    views: '4.8M Views',
    duration: '14:20',
    retention: '+86% Average Retention',
    tags: ['Hook Pacing', 'Sound SFX', 'Motion GFX', 'Fast Cuts'],
    tools: ['Premiere Pro', 'After Effects', 'Pro Sound Pack'],
    summary: 'Restructured the 3-act pacing and injected 120+ custom SFX layers, 3D animated pop-ups, and speed ramps to double the creator’s retention past minute 8.',
    challenge: 'The original raw footage had heavy dead air and slow dialogue. Retention dropped below 40% at minute 3.',
    solution: 'Designed an aggressive 3-second hook loop, rhythmic sound punch-ins, and animated kinetic typography maps.'
  },
  {
    id: 'project-2',
    title: 'Cyberpunk Sneaker Launch 3D Commercial',
    client: 'AERO Athletics & Footwear',
    category: 'commercial',
    aspectRatio: '16:9',
    format: 'horizontal',
    thumbnail: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    views: '1.2M Ad Impressions',
    duration: '0:45',
    retention: '4.8x ROAS Generated',
    tags: ['DaVinci Color', '3D Camera Track', 'Bass Sound Design'],
    tools: ['DaVinci Resolve', 'Blender', 'After Effects'],
    summary: 'High-octane commercial with seamless match cuts, holographic UI overlays, and punchy anamorphic color grading.',
    challenge: 'Client needed a 45-second spot that conveyed futuristic performance without feeling cluttered.',
    solution: 'Built stylized whip-pans, motion blur transitions, and custom neon particle bursts mapped to beat drops.'
  },
  {
    id: 'project-3',
    title: 'Viral 30-Day Fitness Transformation Reel',
    client: 'Coach Alex Fitness (920K TikTok)',
    category: 'shorts',
    aspectRatio: '9:16',
    format: 'vertical',
    thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    views: '8.4M Views',
    duration: '0:38',
    retention: '142% Completion Rate',
    tags: ['Alex Hormozi Captions', 'Sound Design', 'B-Roll Loops'],
    tools: ['Premiere Pro', 'CapCut Pro', 'After Effects'],
    summary: 'Ultra-retention vertical edit with animated bouncing emojis, auto-zoom sound impacts, and seamless infinite loop ending.',
    challenge: 'Viewers were swiping away within the first 1.5 seconds on organic TikTok & Reels.',
    solution: 'Engineered a visual pattern interrupt in the first 0.8 seconds and synchronized word-by-word highlighted captions.'
  },
  {
    id: 'project-4',
    title: 'Apex Legends Global Series Tournament Highlights',
    client: 'Cloud9 Esports & Team Liquid',
    category: 'gaming',
    aspectRatio: '16:9',
    format: 'horizontal',
    thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    views: '2.1M Views',
    duration: '08:45',
    retention: '+74% Audience Watch Time',
    tags: ['Velocity Remapping', 'Beat Sync', 'Killfeed HUD', 'Bass Drop'],
    tools: ['Premiere Pro', 'After Effects', 'Optical Flow'],
    summary: 'Hyper-synced gaming montage featuring smooth frame blending, velocity speed ramps, 3D world-space text, and cinematic camera shakes.',
    challenge: 'Footage had varying frame rates (60fps to 240fps) and chaotic team audio.',
    solution: 'Built custom audio ducks, frequency isolations, and optical flow interpolations synchronized to heavy trap beats.'
  },
  {
    id: 'project-5',
    title: 'SaaS AI Platform Cinematic Product Trailer',
    client: 'Nexus Intelligence Labs (Silicon Valley)',
    category: 'commercial',
    aspectRatio: '16:9',
    format: 'horizontal',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    views: '650K Clicks',
    duration: '01:15',
    retention: '68% Conversion Rate',
    tags: ['UI Animation', 'Isometric 3D', 'Sound Foley', 'Clean Minimal'],
    tools: ['After Effects', 'Figma', 'DaVinci Resolve'],
    summary: 'Premium tech commercial transforming complex vector UI interfaces into dynamic 3D camera sweeps and tactile haptic sound layers.',
    challenge: 'Product was still in beta and real screencasts looked dry and uninspired.',
    solution: 'Recreated all software windows into sleek dark-mode glassmorphic 3D cards with simulated lighting reflections.'
  },
  {
    id: 'project-6',
    title: 'High-Impact Finance & Crypto Documentary',
    client: 'The Wealth Blueprint (640K Subs)',
    category: 'youtube',
    aspectRatio: '16:9',
    format: 'horizontal',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    views: '1.9M Views',
    duration: '22:10',
    retention: '+79% Longform Retention',
    tags: ['MagnatesMedia Style', 'Paper Tear GFX', 'Orchestral Score'],
    tools: ['After Effects', 'Photoshop', 'Premiere Pro'],
    summary: 'MagnatesMedia-style investigative video essay featuring vintage newspaper collages, 2.5D parallax photo animations, and dramatic string buildups.',
    challenge: 'Topic was data-heavy and required maintaining high visual momentum without live-action talent.',
    solution: 'Engineered 140+ animated map illustrations, 3D coin physics, and dynamic archival cutout characters.'
  }
];

// 2. Global State
let currentFilter = 'all';
let currentAudioContext = null;
let leadStorage = JSON.parse(localStorage.getItem('apex_cuts_inquiries') || '[]');

// 3. Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderPortfolioGrid();
  initFilterControls();
  initComparisonSlider();
  initSoundLab();
  initRetentionLab();
  initCalculator();
  initInquiryForm();
  initLeadDrawer();
  initLiveClock();
  initCopyButtons();
  initFaqAccordion();
  initMobileNav();
  updateInquiryCountBadge();
});

// 4. Portfolio Rendering & Filter Engine
function renderPortfolioGrid() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  const filtered = currentFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === currentFilter);

  grid.innerHTML = filtered.map(item => `
    <article class="project-card format-${item.format}" id="${item.id}">
      <div class="project-media-wrapper" onclick="openVideoModal('${item.id}')">
        <img src="${item.thumbnail}" alt="${item.title}" class="project-img" loading="lazy">
        <span class="project-category-tag">${item.category.toUpperCase()}</span>
        <span class="project-duration-tag">${item.duration}</span>
        <div class="project-play-hover">
          <div class="play-icon-sm">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
      <div class="project-body">
        <div class="project-header-info">
          <div class="project-client-name">${item.client}</div>
          <h3 class="project-title">${item.title}</h3>
          <p class="project-summary">${item.summary}</p>
        </div>
        <div>
          <div class="project-metrics">
            <div class="metric-pill"><span>👁</span> ${item.views}</div>
            <div class="metric-pill"><span>📈</span> ${item.retention}</div>
          </div>
          <div class="project-tags">
            ${item.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

function initFilterControls() {
  const buttons = document.querySelectorAll('#portfolio-controls .filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-category');
      renderPortfolioGrid();
    });
  });
}

// 5. Video Lightbox Modal
window.openVideoModal = function(projectId) {
  const project = portfolioProjects.find(p => p.id === projectId) || portfolioProjects[0];
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('modal-video');
  const videoContainer = document.getElementById('modal-video-container');

  if (!modal || !video) return;

  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-client').textContent = project.client;
  document.getElementById('modal-category').textContent = project.category.toUpperCase();
  document.getElementById('modal-views').textContent = project.views;
  document.getElementById('modal-retention').textContent = project.retention;
  document.getElementById('modal-duration').textContent = project.duration;
  document.getElementById('modal-description').textContent = project.summary;
  document.getElementById('modal-challenge').textContent = project.challenge;
  document.getElementById('modal-solution').textContent = project.solution;

  if (project.format === 'vertical') {
    videoContainer.classList.add('vertical');
  } else {
    videoContainer.classList.remove('vertical');
  }

  video.src = project.videoSrc;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  video.play().catch(() => {});
};

window.closeVideoModal = function() {
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('modal-video');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
};

document.getElementById('modal-close-btn')?.addEventListener('click', window.closeVideoModal);
document.getElementById('video-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'video-modal') window.closeVideoModal();
});

// 6. Before / After Color Grade Comparison Slider
function initComparisonSlider() {
  const sliderInput = document.getElementById('comp-slider-input');
  const beforeWrapper = document.getElementById('comp-before-wrapper');
  const handle = document.getElementById('comp-slider-handle');

  if (!sliderInput || !beforeWrapper || !handle) return;

  sliderInput.addEventListener('input', (e) => {
    const val = e.target.value;
    beforeWrapper.style.width = `${val}%`;
    handle.style.left = `${val}%`;
  });
}

// 7. NEW FEATURE: Web Audio Sound Lab & Foley Engine
function initSoundLab() {
  // Generate 24 visualizer bars
  const stage = document.getElementById('visualizer-stage');
  if (stage) {
    stage.innerHTML = Array.from({ length: 24 }).map(() => `<div class="visualizer-bar"></div>`).join('');
  }

  const pads = document.querySelectorAll('.sound-pad-btn');
  pads.forEach(pad => {
    pad.addEventListener('click', () => {
      const soundType = pad.getAttribute('data-sound');
      playSoundEffect(soundType);
      
      pad.classList.add('playing');
      setTimeout(() => pad.classList.remove('playing'), 300);

      const statusText = document.getElementById('sound-status-text');
      if (statusText) {
        statusText.textContent = `PLAYING: ${pad.querySelector('.sound-pad-title')?.textContent.toUpperCase()}`;
      }
    });
  });
}

function playSoundEffect(type) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!currentAudioContext) {
      currentAudioContext = new AudioContextClass();
    }
    if (currentAudioContext.state === 'suspended') {
      currentAudioContext.resume();
    }

    const ctx = currentAudioContext;
    const now = ctx.currentTime;

    animateVisualizer();

    if (type === 'subdrop') {
      // 808 Sub Bass Drop
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(32, now + 0.5);
      gain.gain.setValueAtTime(0.8, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.6);
    } else if (type === 'whoosh') {
      // White noise swoop
      const bufferSize = ctx.sampleRate * 0.4;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(200, now);
      filter.frequency.exponentialRampToValueAtTime(3000, now + 0.2);
      filter.frequency.exponentialRampToValueAtTime(400, now + 0.4);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.6, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);
    } else if (type === 'riser') {
      // Tension riser
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(100, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.8);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.7);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.85);
    } else if (type === 'uipop') {
      // Clean UI Pop
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.08);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'coin') {
      // Two-tone achievement chime
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(987.77, now);
      osc.frequency.setValueAtTime(1318.51, now + 0.08);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } else {
      // Default glitch / laser
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.15);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    }
  } catch (err) {
    console.log('AudioContext initialized on gesture');
  }
}

function animateVisualizer() {
  const bars = document.querySelectorAll('.visualizer-bar');
  bars.forEach((bar) => {
    const randomHeight = Math.floor(Math.random() * 45) + 8;
    bar.style.height = `${randomHeight}px`;
    setTimeout(() => {
      bar.style.height = '6px';
    }, 350);
  });
}

// 8. NEW FEATURE: Retention Lab Interactive Checkpoints
function initRetentionLab() {
  const nodeCards = document.querySelectorAll('.retention-node-card');
  const dots = document.querySelectorAll('.retention-dot');

  nodeCards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = card.getAttribute('data-idx');
      setActiveRetentionNode(idx);
    });
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = dot.getAttribute('data-idx');
      setActiveRetentionNode(idx);
    });
  });
}

function setActiveRetentionNode(idx) {
  document.querySelectorAll('.retention-node-card').forEach(card => {
    if (card.getAttribute('data-idx') === idx) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  document.querySelectorAll('.retention-dot').forEach(dot => {
    if (dot.getAttribute('data-idx') === idx) {
      dot.setAttribute('r', '9');
      dot.setAttribute('fill', '#fbbf24');
    } else {
      dot.setAttribute('r', '6');
      dot.setAttribute('fill', 'var(--accent-amber)');
    }
  });
}

// 9. NEW FEATURE: Interactive Project Cost Calculator
let calcState = {
  category: 'youtube',
  categoryName: 'YouTube Longform',
  baseRate: 350,
  rawMins: 45,
  targetMins: 12,
  speedMultiplier: 1.0,
  speedName: 'Standard (3-4 Days)',
  addonsCost: 0,
  selectedAddons: []
};

function initCalculator() {
  const typeBtns = document.querySelectorAll('#calc-type-selector .calc-type-btn');
  const footageSlider = document.getElementById('calc-footage-slider');
  const lengthSlider = document.getElementById('calc-length-slider');
  const speedBtns = document.querySelectorAll('#calc-speed-selector .speed-option-btn');
  const addonChecks = document.querySelectorAll('#calc-addons-group .calc-addon');
  const transferBtn = document.getElementById('apply-quote-to-form-btn');

  // Category Selector
  typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      calcState.category = btn.getAttribute('data-type');
      calcState.baseRate = parseInt(btn.getAttribute('data-base') || '350', 10);
      calcState.categoryName = btn.querySelector('.calc-type-name')?.textContent || 'YouTube Longform';
      document.getElementById('calc-badge-type').textContent = calcState.categoryName;
      recalculateQuote();
    });
  });

  // Footage Slider
  footageSlider?.addEventListener('input', (e) => {
    calcState.rawMins = parseInt(e.target.value, 10);
    document.getElementById('calc-footage-val').textContent = `${calcState.rawMins} Mins Raw`;
    recalculateQuote();
  });

  // Length Slider
  lengthSlider?.addEventListener('input', (e) => {
    calcState.targetMins = parseInt(e.target.value, 10);
    document.getElementById('calc-length-val').textContent = `${calcState.targetMins} Mins Finished`;
    recalculateQuote();
  });

  // Speed Multiplier
  speedBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      speedBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      calcState.speedMultiplier = parseFloat(btn.getAttribute('data-multiplier') || '1.0');
      calcState.speedName = btn.textContent;
      document.getElementById('calc-speed-val').textContent = calcState.speedName;
      recalculateQuote();
    });
  });

  // Add-ons
  addonChecks.forEach(chk => {
    chk.addEventListener('change', () => {
      let totalAddons = 0;
      const selected = [];
      addonChecks.forEach(c => {
        if (c.checked) {
          totalAddons += parseInt(c.getAttribute('data-cost') || '0', 10);
          selected.push(c.value);
        }
      });
      calcState.addonsCost = totalAddons;
      calcState.selectedAddons = selected;
      recalculateQuote();
    });
  });

  // Transfer Quote To Form
  transferBtn?.addEventListener('click', () => {
    applyQuoteToForm();
  });

  recalculateQuote();
}

function recalculateQuote() {
  const footageComplexityFee = Math.max(0, Math.floor((calcState.rawMins - 20) * 2.2));
  const subtotal = (calcState.baseRate + footageComplexityFee) * calcState.speedMultiplier + calcState.addonsCost;
  const total = Math.round(subtotal);

  document.getElementById('quote-final-amount').textContent = total;
  document.getElementById('breakdown-base').textContent = `$${calcState.baseRate}`;
  document.getElementById('breakdown-footage').textContent = `+$${footageComplexityFee}`;
  document.getElementById('breakdown-turnaround').textContent = `${calcState.speedMultiplier}x`;
  document.getElementById('breakdown-addons').textContent = `+$${calcState.addonsCost}`;
  document.getElementById('breakdown-total').textContent = `$${total}`;
}

function applyQuoteToForm() {
  const typeSelect = document.getElementById('project-type');
  const budgetSelect = document.getElementById('project-budget');
  const deadlineSelect = document.getElementById('project-deadline');
  const messageArea = document.getElementById('client-message');

  const total = document.getElementById('quote-final-amount')?.textContent || '490';

  if (typeSelect) {
    // Select closest option
    const options = Array.from(typeSelect.options);
    const match = options.find(opt => opt.text.toLowerCase().includes(calcState.category.toLowerCase()));
    if (match) typeSelect.value = match.value;
  }

  if (budgetSelect) {
    const num = parseInt(total, 10);
    if (num < 500) budgetSelect.value = '$300 - $500';
    else if (num <= 1500) budgetSelect.value = '$500 - $1,500';
    else if (num <= 3000) budgetSelect.value = '$1,500 - $3,000';
    else budgetSelect.value = '$3,000+';
  }

  if (deadlineSelect) {
    if (calcState.speedMultiplier > 1.3) deadlineSelect.value = 'Rush: 24 to 48 Hours';
    else if (calcState.speedMultiplier > 1.1) deadlineSelect.value = '3 to 5 Days';
    else deadlineSelect.value = '3 to 5 Days';
  }

  if (messageArea) {
    messageArea.value = `[Auto-Filled from Calculator Quote]
- Category: ${calcState.categoryName}
- Estimated Total: $${total}
- Raw Footage: ${calcState.rawMins} minutes | Target Length: ${calcState.targetMins} minutes
- Turnaround: ${calcState.speedName}
- Add-ons: ${calcState.selectedAddons.join(', ') || 'None'}

Inspiration / Channel details:
`;
  }

  showToast(`Applied $${total} quote details to booking form!`);
  const contactSection = document.getElementById('contact');
  contactSection?.scrollIntoView({ behavior: 'smooth' });
}

// 10. Pricing Tier Quick Selectors
window.selectPackage = function(packageName, budgetVal, categoryVal) {
  const typeSelect = document.getElementById('project-type');
  const budgetSelect = document.getElementById('project-budget');
  const messageArea = document.getElementById('client-message');

  if (typeSelect && categoryVal) typeSelect.value = categoryVal;
  if (budgetSelect && budgetVal) budgetSelect.value = budgetVal;
  if (messageArea) {
    messageArea.value = `Interested in the "${packageName}" package.\n\nProject details / Raw footage links:\n`;
  }

  showToast(`Selected "${packageName}" package!`);
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

// 11. Contact & Inquiry Form Submission Engine
function initInquiryForm() {
  const form = document.getElementById('inquiry-form');
  const statusMsg = document.getElementById('form-status-msg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('client-name')?.value.trim();
    const email = document.getElementById('client-email')?.value.trim();
    const handle = document.getElementById('client-handle')?.value.trim() || 'N/A';
    const type = document.getElementById('project-type')?.value;
    const budget = document.getElementById('project-budget')?.value;
    const deadline = document.getElementById('project-deadline')?.value;
    const footageLink = document.getElementById('footage-link')?.value.trim() || 'No link provided';
    const message = document.getElementById('client-message')?.value.trim() || 'No additional notes';

    const selectedAddons = Array.from(document.querySelectorAll('input[name="addons"]:checked')).map(c => c.value);

    // Basic Validation
    if (!name || !email) {
      if (statusMsg) {
        statusMsg.className = 'form-status-msg error';
        statusMsg.textContent = 'Please provide both your name and a valid email address.';
      }
      return;
    }

    const newInquiry = {
      id: `REQ-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toLocaleString(),
      name,
      email,
      handle,
      type,
      budget,
      deadline,
      footageLink,
      addons: selectedAddons,
      message,
      status: 'Pending Review'
    };

    leadStorage.unshift(newInquiry);
    localStorage.setItem('apex_cuts_inquiries', JSON.stringify(leadStorage));
    updateInquiryCountBadge();
    renderDrawerLeads();

    if (statusMsg) {
      statusMsg.className = 'form-status-msg success';
      statusMsg.innerHTML = `
        <strong>✓ Inquiry Received, ${name}!</strong><br>
        Your brief has been logged (Ref: <span style="font-family: var(--font-mono);">${newInquiry.id}</span>). Alex will reach out at <strong>${email}</strong> within 2 hours with creative direction and confirmation.
      `;
    }

    showToast(`Brief ${newInquiry.id} submitted successfully!`);
    form.reset();
  });
}

// 12. NEW FEATURE: Inquiries & CRM Drawer Engine
function initLeadDrawer() {
  const openBtn = document.getElementById('open-drawer-btn');
  const closeBtn = document.getElementById('close-drawer-btn');
  const backdrop = document.getElementById('lead-drawer-backdrop');
  const exportBtn = document.getElementById('export-leads-btn');
  const clearBtn = document.getElementById('clear-leads-btn');

  openBtn?.addEventListener('click', () => {
    backdrop?.classList.add('open');
    renderDrawerLeads();
  });

  closeBtn?.addEventListener('click', () => {
    backdrop?.classList.remove('open');
  });

  backdrop?.addEventListener('click', (e) => {
    if (e.target.id === 'lead-drawer-backdrop') {
      backdrop.classList.remove('open');
    }
  });

  exportBtn?.addEventListener('click', () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(leadStorage, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `apex_cuts_inquiries_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Exported inquiries JSON file!');
  });

  clearBtn?.addEventListener('click', () => {
    if (confirm('Clear all saved briefs from local workspace?')) {
      leadStorage = [];
      localStorage.setItem('apex_cuts_inquiries', JSON.stringify(leadStorage));
      updateInquiryCountBadge();
      renderDrawerLeads();
      showToast('Cleared saved briefs.');
    }
  });
}

function updateInquiryCountBadge() {
  const badge = document.getElementById('inquiry-count-badge');
  if (badge) {
    badge.textContent = leadStorage.length;
  }
}

function renderDrawerLeads() {
  const list = document.getElementById('drawer-leads-list');
  if (!list) return;

  if (leadStorage.length === 0) {
    list.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">📁</div>
        <p style="font-weight: 600; color: var(--text-primary);">No submitted briefs yet</p>
        <p style="font-size: 0.85rem; margin-top: 6px;">Submit an inquiry via the booking form or calculator to see it tracked here.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = leadStorage.map(item => `
    <div class="lead-item-card">
      <div class="lead-item-header">
        <span class="lead-id-tag">${item.id}</span>
        <span class="lead-status-pill">${item.status}</span>
      </div>
      <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem; margin-bottom: 2px;">
        ${item.name} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">(${item.email})</span>
      </div>
      <div style="font-size: 0.82rem; color: var(--accent-cyan); margin-bottom: 8px;">
        ${item.type} • Budget: ${item.budget}
      </div>
      <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.4; background: rgba(0,0,0,0.3); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
        ${item.message}
      </div>
      <div style="font-size: 0.74rem; color: var(--text-muted); display: flex; justify-content: space-between;">
        <span>Deadline: ${item.deadline}</span>
        <span>${item.timestamp}</span>
      </div>
    </div>
  `).join('');
}

// 13. Direct Copy Buttons
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        btn.classList.add('copied');
        const span = btn.querySelector('span');
        if (span) span.textContent = '✓ Copied!';
        showToast(`Copied "${textToCopy}" to clipboard!`);

        setTimeout(() => {
          btn.classList.remove('copied');
          if (span) span.textContent = '📋 Copy';
        }, 2200);
      });
    });
  });
}

// 14. Live Clock & Availability
function initLiveClock() {
  const clockEl = document.getElementById('live-time-display');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    // EST Time representation
    const estTime = now.toLocaleTimeString('en-US', {
      timeZone: 'America/New_York',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    clockEl.textContent = estTime;
  }

  update();
  setInterval(update, 1000);
}

// 15. FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    header?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// 16. Mobile Navigation & Global Modal Controls
function initMobileNav() {
  const btn = document.getElementById('mobile-menu-btn');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;

  function toggleNav(open) {
    const shouldOpen = typeof open === 'boolean' ? open : !links.classList.contains('mobile-open');
    if (shouldOpen) {
      links.classList.add('mobile-open');
      btn.textContent = '✕';
      btn.setAttribute('aria-expanded', 'true');
    } else {
      links.classList.remove('mobile-open');
      btn.textContent = '☰';
      btn.setAttribute('aria-expanded', 'false');
    }
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleNav();
  });

  // Close when clicking any nav link
  links.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => {
      toggleNav(false);
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (links.classList.contains('mobile-open') && !links.contains(e.target) && !btn.contains(e.target)) {
      toggleNav(false);
    }
  });

  // Close modals, drawer, and nav on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleNav(false);
      closeVideoModal();
      const drawerBackdrop = document.getElementById('lead-drawer-backdrop');
      if (drawerBackdrop && drawerBackdrop.classList.contains('open')) {
        drawerBackdrop.classList.remove('open');
      }
    }
  });
}

// 17. Toast Notifications
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
