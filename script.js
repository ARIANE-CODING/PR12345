const subjects = {
  physics: {
    icon: '🧪',
    name: 'Physics',
    description: 'Explore motion, energy, waves, and the foundations of the physical world.',
    quarters: {
      1: {
        title: 'Quarter 1: Motion and Measurements',
        overview: 'Students learn how quantities like distance, speed, velocity, and acceleration are measured and represented.',
        info: [
          'Measure physical quantities using SI units and scientific notation.',
          'Understand the difference between distance and displacement.',
          'Interpret motion graphs and calculate average speed and acceleration.'
        ],
        videos: [
          { label: 'Introduction to Motion', url: 'https://www.youtube.com/embed/6lqz7J_xs3o' },
          { label: 'Kinematics Overview', url: 'https://www.youtube.com/embed/9wYv6c2yQXg' }
        ],
        animations: [
          'Velocity-time graph animation showing acceleration as the slope of a graph.',
          'Free-fall simulation demonstrating constant gravitational acceleration.'
        ],
        problems: [
          'A car moves 120 meters in 10 seconds. Find its average speed.',
          'If a cyclist starts from rest and accelerates at 3 m/s² for 5 seconds, what is the final velocity?',
          'Convert 72 km/h to m/s.'
        ],
        slides: [
          { title: 'Motion Basics', content: 'Motion is described by displacement, velocity, and acceleration.' },
          { title: 'Units and Graphs', content: 'Graphs help us understand changes in motion over time.' }
        ]
      },
      2: {
        title: 'Quarter 2: Forces and Energy',
        overview: 'Students examine Newton’s laws, force, work, power, and the conservation of energy.',
        info: [
          'Explain how net force affects the motion of an object.',
          'Connect work, power, and mechanical energy to everyday examples.',
          'Apply the conservation of energy to moving objects.'
        ],
        videos: [
          { label: 'Forces and Newton’s Laws', url: 'https://www.youtube.com/embed/kKKM8Y-u7ds' },
          { label: 'Energy and Work', url: 'https://www.youtube.com/embed/92MfrE9k1oc' }
        ],
        animations: [
          'Force diagram animation for an object on a frictional surface.',
          'Potential and kinetic energy transformation with a rolling ball.'
        ],
        problems: [
          'A 10 kg object experiences a net force of 30 N. Find its acceleration.',
          'Calculate the work done when 25 N is applied over 6 m in the direction of motion.',
          'If a 2 kg object is lifted 5 m, how much gravitational potential energy is gained?' 
        ],
        slides: [
          { title: 'Newton’s Laws', content: 'An object’s motion changes when a net force acts on it.' },
          { title: 'Conservation of Energy', content: 'Energy changes form but is not destroyed.' }
        ]
      },
      3: {
        title: 'Quarter 3: Waves and Light',
        overview: 'Students study sound, light, wave properties, and how energy travels through different media.',
        info: [
          'Differentiate between transverse and longitudinal waves.',
          'Explore wavelength, frequency, amplitude, and wave speed.',
          'Understand reflection, refraction, and the behavior of light.'
        ],
        videos: [
          { label: 'Wave Properties', url: 'https://www.youtube.com/embed/2a1b3obv4ts' },
          { label: 'Light and Optics', url: 'https://www.youtube.com/embed/8G-bRrOg1PI' }
        ],
        animations: [
          'Wave pulse travelling across a medium with changing amplitude.',
          'Ray diagram animation showing refraction through a lens.'
        ],
        problems: [
          'A wave has a frequency of 4 Hz and a wavelength of 1.5 m. Find its speed.',
          'If the speed of sound is 340 m/s and the wavelength is 0.5 m, what is the frequency?',
          'A light ray bends as it enters a denser medium. Describe what happens to its speed and wavelength.'
        ],
        slides: [
          { title: 'Wave Characteristics', content: 'Waves carry energy and are described by amplitude, frequency, and wavelength.' },
          { title: 'Refraction', content: 'Light changes direction when it enters a different medium.' }
        ]
      },
      4: {
        title: 'Quarter 4: Electricity and Magnetism',
        overview: 'This quarter introduces electric circuits, magnetism, and the links between electricity and motion.',
        info: [
          'Examine voltage, current, resistance, and Ohm’s Law.',
          'Explore simple circuits and the role of series and parallel connections.',
          'Study magnetic fields and electromagnetic induction.'
        ],
        videos: [
          { label: 'Electricity Basics', url: 'https://www.youtube.com/embed/8L-6XgL0H5Y' },
          { label: 'Magnetism Explained', url: 'https://www.youtube.com/embed/Vn5M4m7gQd4' }
        ],
        animations: [
          'Flow of electrons through a simple circuit.',
          'Magnetic field lines around a bar magnet and a current-carrying wire.'
        ],
        problems: [
          'A circuit has a voltage of 12 V and a resistance of 4 Ω. Find the current.',
          'What is the total resistance of two 6 Ω resistors in series?',
          'How does increasing resistance affect current in a fixed-voltage circuit?'
        ],
        slides: [
          { title: 'Ohm’s Law', content: 'Voltage is directly related to current and resistance.' },
          { title: 'Magnetic Fields', content: 'Electric currents create magnetic fields and can induce motion.' }
        ]
      }
    }
  },
  math: {
    icon: '📐',
    name: 'General Mathematics',
    description: 'Build problem-solving skills in algebra, functions, statistics, and mathematical reasoning.',
    quarters: {
      1: {
        title: 'Quarter 1: Algebra Foundations',
        overview: 'Students review expressions, equations, variables, and basic algebraic procedures.',
        info: [
          'Simplify algebraic expressions using properties of operations.',
          'Solve linear equations and inequalities with one variable.',
          'Translate real-world situations into algebraic expressions.'
        ],
        videos: [
          { label: 'Solving Linear Equations', url: 'https://www.youtube.com/embed/4N8N87bR0hA' },
          { label: 'Algebra Basics', url: 'https://www.youtube.com/embed/8M9V9Osj5mk' }
        ],
        animations: [
          'Balance scale animation showing how equations are solved step by step.',
          'Coordinate plane interaction for line plotting.'
        ],
        problems: [
          'Solve 3x + 7 = 19.',
          'Simplify 4(x + 2) - 3x.',
          'If y = 2x + 5, find y when x = 4.'
        ],
        slides: [
          { title: 'Expressions', content: 'Variables and operations represent mathematical relationships.' },
          { title: 'Equations', content: 'Equivalent expressions can be used to solve for unknown values.' }
        ]
      },
      2: {
        title: 'Quarter 2: Functions and Graphs',
        overview: 'Students examine linear functions, slope, intercepts, and how graphs represent relationships.',
        info: [
          'Recognize function notation and evaluate functions.',
          'Understand slope as a rate of change and compare linear relationships.',
          'Interpret graphs in context and identify key features.'
        ],
        videos: [
          { label: 'Linear Functions', url: 'https://www.youtube.com/embed/2-8aVwMUA0c' },
          { label: 'Graphing Basics', url: 'https://www.youtube.com/embed/4t5f4lU3P7Q' }
        ],
        animations: [
          'Slope animation showing rise over run on a graph.',
          'Function machine demonstrating input-output rules.'
        ],
        problems: [
          'Find the slope of the line through (2, 5) and (6, 13).',
          'Write the equation of a line with slope 3 and y-intercept 2.',
          'Given f(x) = 5x - 1, find f(3).'
        ],
        slides: [
          { title: 'Slope', content: 'Slope measures the rate of change between two points.' },
          { title: 'Function Notation', content: 'A function assigns exactly one output for each input.' }
        ]
      },
      3: {
        title: 'Quarter 3: Geometry and Measurement',
        overview: 'This quarter focuses on shapes, angle relationships, dimensions, and area/volume calculations.',
        info: [
          'Use formulas to calculate perimeter, area, and volume.',
          'Apply properties of triangles, quadrilaterals, and circles.',
          'Use geometry to solve practical measurement challenges.'
        ],
        videos: [
          { label: 'Geometry Essentials', url: 'https://www.youtube.com/embed/W7iOzwccMS8' },
          { label: 'Area and Volume', url: 'https://www.youtube.com/embed/z7v2w7t2YQg' }
        ],
        animations: [
          'Area decomposition of composite shapes.',
          'Volume animation for rectangular prisms and cylinders.'
        ],
        problems: [
          'Find the area of a triangle with base 10 and height 6.',
          'Calculate the perimeter of a rectangle 8 by 5.',
          'A cylinder has radius 3 and height 10. Find the volume.'
        ],
        slides: [
          { title: 'Shapes and Formulas', content: 'Geometry uses formulas to describe size and shape.' },
          { title: 'Measurement', content: 'Area and volume connect dimensions to real-world spaces.' }
        ]
      },
      4: {
        title: 'Quarter 4: Data and Probability',
        overview: 'Students study statistics, probability, and how to interpret and summarize numerical information.',
        info: [
          'Collect and organize data using tables, charts, and measures of center.',
          'Compute mean, median, mode, and range.',
          'Understand basic probability and expected outcomes.'
        ],
        videos: [
          { label: 'Statistics Introduction', url: 'https://www.youtube.com/embed/9t3N8QmB7ew' },
          { label: 'Probability Basics', url: 'https://www.youtube.com/embed/KD6zQvmhGz8' }
        ],
        animations: [
          'Histogram animation for grouped data.',
          'Probability spinner showing outcomes and frequencies.'
        ],
        problems: [
          'Find the mean of 4, 7, 8, 9, 12.',
          'What is the probability of rolling an even number on a six-sided die?',
          'A bag contains 3 red and 2 blue marbles. What is the probability of drawing a blue marble?'
        ],
        slides: [
          { title: 'Measures of Center', content: 'Mean, median, and mode help summarize a data set.' },
          { title: 'Chance', content: 'Probability describes how likely an event is to happen.' }
        ]
      }
    }
  },
  finite: {
    icon: '📊',
    name: 'Finite Mathematics',
    description: 'Apply mathematical methods in finite systems, matrices, probability, and decision-making.',
    quarters: {
      1: {
        title: 'Quarter 1: Sets and Logic',
        overview: 'Students learn basic set notation, set operations, and logical reasoning.',
        info: [
          'Work with unions, intersections, and complements of sets.',
          'Use Venn diagrams to represent relationships among groups.',
          'Analyze simple statements using logic and truth tables.'
        ],
        videos: [
          { label: 'Set Theory Overview', url: 'https://www.youtube.com/embed/1Zf0AHg3G9M' },
          { label: 'Logic and Truth Tables', url: 'https://www.youtube.com/embed/7bGZ_0wK1ME' }
        ],
        animations: [
          'Venn diagram animation for set operations.',
          'Truth table generator showing logical implications.'
        ],
        problems: [
          'If A = {1, 2, 3} and B = {2, 3, 4}, find A ∩ B.',
          'Draw a Venn diagram for A ∪ B.',
          'Evaluate the truth value of “P and not Q” for given values.'
        ],
        slides: [
          { title: 'Set Operations', content: 'Operations on sets help model combinations and relationships.' },
          { title: 'Logical Statements', content: 'Logic organizes reasoning into clear, testable statements.' }
        ]
      },
      2: {
        title: 'Quarter 2: Matrices and Systems',
        overview: 'Students solve systems of equations and represent them using matrices.',
        info: [
          'Add, subtract, and multiply matrices.',
          'Represent systems with coefficient matrices and augmented matrices.',
          'Solve linear systems using elimination, substitution, or matrix methods.'
        ],
        videos: [
          { label: 'Intro to Matrices', url: 'https://www.youtube.com/embed/7iHb1p6AAaA' },
          { label: 'Systems of Linear Equations', url: 'https://www.youtube.com/embed/3JGcJvYI_jg' }
        ],
        animations: [
          'Matrix multiplication visualized with grids.',
          'System-of-equations graph animation showing intersection points.'
        ],
        problems: [
          'Find the sum of matrices A and B.',
          'Solve the system: x + y = 5, x - y = 1.',
          'Multiply a 2x2 matrix by a 2x1 vector.'
        ],
        slides: [
          { title: 'Matrix Operations', content: 'Matrices organize numbers and support efficient calculations.' },
          { title: 'Systems', content: 'Linear systems often model real-world constraints and goals.' }
        ]
      },
      3: {
        title: 'Quarter 3: Probability and Counting',
        overview: 'Students use combinatorics and probability to count outcomes and evaluate uncertainty.',
        info: [
          'Apply the multiplication principle and combinations.',
          'Calculate probabilities with and without replacement.',
          'Use counting methods to analyze event outcomes.'
        ],
        videos: [
          { label: 'Counting Principles', url: 'https://www.youtube.com/embed/2Daqv4cW7F8' },
          { label: 'Probability and Counting', url: 'https://www.youtube.com/embed/9vQbKk9YjR4' }
        ],
        animations: [
          'Combinatorics tree diagram animation.',
          'Probability distribution chart exploring random outcomes.'
        ],
        problems: [
          'How many ways can 3 books be arranged on a shelf?',
          'A committee of 2 is chosen from 5 students. How many possible committees?',
          'What is the probability of drawing a king from a standard deck?'
        ],
        slides: [
          { title: 'Counting Techniques', content: 'Permutations and combinations count possible outcomes carefully.' },
          { title: 'Probability', content: 'Probability measures the chance that an event occurs.' }
        ]
      },
      4: {
        title: 'Quarter 4: Financial and Decision Models',
        overview: 'This quarter applies finite mathematics to business, finance, and optimization decisions.',
        info: [
          'Use linear programming to maximize or minimize a quantity under constraints.',
          'Calculate simple interest, compound interest, and amortization basics.',
          'Interpret the role of models in business and social decision-making.'
        ],
        videos: [
          { label: 'Linear Programming', url: 'https://www.youtube.com/embed/oxxUZ3q1rYQ' },
          { label: 'Finance Essentials', url: 'https://www.youtube.com/embed/lyQ46pVjGQk' }
        ],
        animations: [
          'Feasible region shading for a constrained optimization problem.',
          'Compound interest growth curve.'
        ],
        problems: [
          'A company wants to maximize profit under material and labor constraints. Identify a feasible region.',
          'Compute the simple interest on $500 at 6% for 3 years.',
          'A loan payment schedule shows monthly amortization. Describe the trend of principal and interest.'
        ],
        slides: [
          { title: 'Optimization', content: 'Linear programming helps determine the best solution under constraints.' },
          { title: 'Finance', content: 'Mathematical modeling supports smart decisions in business and personal finance.' }
        ]
      }
    }
  }
};

const subjectNav = document.getElementById('subjectNav');
const subjectContent = document.getElementById('subjectContent');

let activeSubject = 'physics';
let activeQuarter = 1;
let isOverview = true;

function buildSubjectButtons() {
  subjectNav.innerHTML = '';

  const homeButton = document.createElement('button');
  homeButton.type = 'button';
  homeButton.className = `home-button ${isOverview ? 'active' : ''}`;
  homeButton.innerHTML = '<span class="icon">🏠</span><span>Overview</span>';
  homeButton.addEventListener('click', () => {
    isOverview = true;
    render();
  });
  subjectNav.appendChild(homeButton);

  Object.entries(subjects).forEach(([key, subject]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `subject-tab ${key === activeSubject && !isOverview ? 'active' : ''}`;
    button.innerHTML = `<span class="icon">${subject.icon}</span><span>${subject.name}</span>`;
    button.addEventListener('click', () => {
      activeSubject = key;
      activeQuarter = 1;
      isOverview = false;
      render();
    });
    subjectNav.appendChild(button);
  });
}

function renderOverview() {
  const overviewPanel = document.createElement('div');
  overviewPanel.className = 'overview-panel';

  const header = document.createElement('div');
  header.className = 'overview-header';
  header.innerHTML = '<h3>Subject Learning Dashboard</h3>';
  overviewPanel.appendChild(header);

  const grid = document.createElement('div');
  grid.className = 'overview-grid';

  Object.entries(subjects).forEach(([key, subject]) => {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.innerHTML = `
      <div class="subject-icon">${subject.icon}</div>
      <h4>${subject.name}</h4>
      <p>${subject.description}</p>
      <span class="start-btn">Open ${subject.name}</span>
    `;

    card.addEventListener('click', () => {
      activeSubject = key;
      activeQuarter = 1;
      isOverview = false;
      render();
    });

    grid.appendChild(card);
  });

  overviewPanel.appendChild(grid);
  subjectContent.appendChild(overviewPanel);
}

function renderQuarterTabs(quarterData) {
  const quarterNav = document.createElement('div');
  quarterNav.className = 'quarter-nav';

  Object.keys(quarterData).forEach((quarter) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `quarter-tab ${Number(quarter) === activeQuarter ? 'active' : ''}`;
    btn.textContent = `Quarter ${quarter}`;
    btn.addEventListener('click', () => {
      activeQuarter = Number(quarter);
      render();
    });
    quarterNav.appendChild(btn);
  });

  return quarterNav;
}

function renderSummaryStats(quarter) {
  const strip = document.createElement('div');
  strip.className = 'summary-strip';

  const stats = [
    { label: 'Info', count: quarter.info.length },
    { label: 'Videos', count: quarter.videos.length },
    { label: 'Animations', count: quarter.animations.length },
    { label: 'Problems', count: quarter.problems.length },
    { label: 'Slides', count: quarter.slides.length }
  ];

  stats.forEach((stat) => {
    const item = document.createElement('div');
    item.className = 'summary-item';
    item.innerHTML = `<span class="count">${stat.count}</span><span class="label">${stat.label}</span>`;
    strip.appendChild(item);
  });

  return strip;
}

function renderResourceCard(title, items, type) {
  const card = document.createElement('div');
  card.className = 'resource-card';

  const heading = document.createElement('h4');
  const iconMap = {
    list: '📘',
    video: '🎬',
    animation: '✨',
    problem: '✏️',
    slide: '🧾'
  };

  heading.innerHTML = `<span class="badge">${iconMap[type]}</span><span>${title}</span>`;
  card.appendChild(heading);

  if (type === 'list') {
    const list = document.createElement('ul');
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    card.appendChild(list);
  }

  if (type === 'video') {
    const wrap = document.createElement('div');
    wrap.className = 'video-grid';
    items.forEach((video) => {
      const iframe = document.createElement('iframe');
      iframe.className = 'video-frame';
      iframe.src = video.url;
      iframe.title = video.label;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      wrap.appendChild(iframe);

      const link = document.createElement('a');
      link.href = video.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = `Open: ${video.label}`;
      wrap.appendChild(link);
    });
    card.appendChild(wrap);
  }

  if (type === 'animation') {
    const box = document.createElement('div');
    box.className = 'animation-box';
    box.innerHTML = '<div class="orbit"></div><div class="planet"></div>';
    card.appendChild(box);

    const list = document.createElement('ul');
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    card.appendChild(list);
  }

  if (type === 'problem') {
    const list = document.createElement('ul');
    list.className = 'problem-list';
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    card.appendChild(list);
  }

  if (type === 'slide') {
    items.forEach((slide) => {
      const visual = document.createElement('div');
      visual.className = 'slide-visual';
      visual.innerHTML = `<h5>${slide.title}</h5><p>${slide.content}</p>`;
      card.appendChild(visual);
    });
  }

  return card;
}

function renderSubjectPage() {
  const subject = subjects[activeSubject];
  const quarter = subject.quarters[activeQuarter];

  subjectContent.innerHTML = `
    <div class="subject-header">
      <h2>${subject.icon} ${subject.name}</h2>
      <p>${subject.description}</p>
    </div>
  `;

  const quarterTabs = renderQuarterTabs(subject.quarters);
  subjectContent.appendChild(quarterTabs);

  const controls = document.createElement('div');
  controls.className = 'quarter-controls';

  const prevButton = document.createElement('button');
  prevButton.type = 'button';
  prevButton.className = 'nav-action';
  prevButton.textContent = '← Previous Quarter';
  prevButton.addEventListener('click', () => {
    if (activeQuarter > 1) {
      activeQuarter -= 1;
      render();
    }
  });

  const nextButton = document.createElement('button');
  nextButton.type = 'button';
  nextButton.className = 'nav-action';
  nextButton.textContent = 'Next Quarter →';
  nextButton.addEventListener('click', () => {
    if (activeQuarter < 4) {
      activeQuarter += 1;
      render();
    }
  });

  controls.appendChild(prevButton);
  controls.appendChild(nextButton);
  subjectContent.appendChild(controls);

  const panel = document.createElement('div');
  panel.className = 'quarter-panel';

  const overview = document.createElement('div');
  overview.className = 'overview-box';
  overview.innerHTML = `<h3>${quarter.title}</h3><p>${quarter.overview}</p>`;
  panel.appendChild(overview);
  panel.appendChild(renderSummaryStats(quarter));

  const grid = document.createElement('div');
  grid.className = 'resource-grid';

  grid.appendChild(renderResourceCard('Info', quarter.info, 'list'));
  grid.appendChild(renderResourceCard('Videos', quarter.videos, 'video'));
  grid.appendChild(renderResourceCard('Animations', quarter.animations, 'animation'));
  grid.appendChild(renderResourceCard('Problems', quarter.problems, 'problem'));
  grid.appendChild(renderResourceCard('Slides', quarter.slides, 'slide'));

  panel.appendChild(grid);
  subjectContent.appendChild(panel);
}

function render() {
  buildSubjectButtons();

  if (isOverview) {
    subjectContent.innerHTML = '';
    renderOverview();
  } else {
    renderSubjectPage();
  }
}

render();
