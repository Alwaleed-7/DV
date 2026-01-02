<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Data Visualization Midterm - Complete Study Guide</title>
  <style>
    :root {
      --primary: #4361ee;
      --primary-dark: #3a56d4;
      --secondary: #7209b7;
      --success: #2ec4b6;
      --danger: #e71d36;
      --warning: #ff9f1c;
      --light: #f8f9fa;
      --dark: #212529;
      --gray: #6c757d;
      --light-gray: #e9ecef;
      --border-radius: 12px;
      --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      --transition: all 0.3s ease;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
      color: var(--dark);
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      min-height: 100vh;
    }

    .site-header {
      background: white;
      padding: 1rem 2rem;
      box-shadow: var(--shadow);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .logo {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: white;
      font-size: 24px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    .title h1 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .title p {
      color: var(--gray);
      font-size: 0.9rem;
    }

    .top-nav {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .nav-btn {
      padding: 0.5rem 1.5rem;
      border: 2px solid var(--light-gray);
      background: white;
      border-radius: 30px;
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition);
    }

    .nav-btn:hover {
      border-color: var(--primary);
      color: var(--primary);
      transform: translateY(-2px);
    }

    #app {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .view {
      display: none;
    }

    .view.active {
      display: block;
      animation: fadeIn 0.5s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .card {
      background: white;
      border-radius: var(--border-radius);
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: var(--shadow);
      transition: var(--transition);
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }

    .hero {
      text-align: center;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: white;
    }

    .hero h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .cta-row {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin: 2rem 0;
    }

    button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 30px;
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition);
      font-family: 'Inter', sans-serif;
    }

    .primary {
      background: var(--primary);
      color: white;
    }

    .primary:hover {
      background: var(--primary-dark);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(67, 97, 238, 0.3);
    }

    .secondary {
      background: white;
      color: var(--primary);
      border: 2px solid var(--primary);
    }

    .secondary:hover {
      background: var(--primary);
      color: white;
    }

    .progress {
      background: rgba(255, 255, 255, 0.2);
      padding: 1rem;
      border-radius: var(--border-radius);
      margin-top: 2rem;
    }

    .progress-bar {
      height: 10px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 5px;
      overflow: hidden;
      margin: 0.5rem 0;
    }

    #progress-fill {
      height: 100%;
      background: white;
      border-radius: 5px;
      transition: width 0.5s ease;
    }

    .grid.two {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .tick-list li {
      list-style: none;
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
    }

    .tick-list li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: var(--success);
      font-weight: bold;
    }

    /* Chapters Grid */
    .chapters-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .chapter-card {
      background: white;
      border-radius: var(--border-radius);
      padding: 1.5rem;
      box-shadow: var(--shadow);
      transition: var(--transition);
      position: relative;
    }

    .chapter-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }

    .chapter-card.completed {
      border-left: 6px solid var(--success);
      background: linear-gradient(to right, #f0fff4, white);
    }

    .chapter-badge {
      display: inline-block;
      background: var(--primary);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .chapter-card.completed .chapter-badge {
      background: var(--success);
    }

    /* Chapter Content */
    .chapter-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .chapter-header h2 {
      margin-top: 0.5rem;
      color: var(--dark);
    }

    .key-points {
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem 0;
      border-left: 4px solid var(--primary);
    }

    .indent {
      margin-left: 1.5rem;
    }

    .vis-types {
      display: grid;
      gap: 1.5rem;
      margin: 1rem 0;
    }

    .vis-type {
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 8px;
    }

    .principles-list {
      display: grid;
      gap: 1.5rem;
    }

    .principle {
      padding: 1rem;
      border-left: 4px solid var(--primary);
      background: #f8f9fa;
      border-radius: 0 8px 8px 0;
    }

    .data-classification h4 {
      margin: 1rem 0 0.5rem 0;
      color: var(--primary);
    }

    .chapter-actions {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 2px solid var(--light-gray);
    }

    /* Enhanced Quiz Styles */
    .quiz {
      background: white;
      border-radius: var(--border-radius);
      padding: 2rem;
      box-shadow: var(--shadow);
      margin-top: 2rem;
    }

    .quiz.hidden {
      display: none;
    }

    .quiz-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid var(--light-gray);
    }

    .quiz-stats {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .score-display {
      font-size: 1.25rem;
      font-weight: bold;
      color: var(--primary);
    }

    .status {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: 600;
      background: var(--light-gray);
    }

    .status.passed {
      background: #d4edda;
      color: #155724;
    }

    .status.failed {
      background: #f8d7da;
      color: #721c24;
    }

    .question-card {
      background: #f8f9fa;
      border-radius: 10px;
      padding: 1.5rem;
      margin-bottom: 1rem;
      border-left: 4px solid var(--primary);
    }

    .question-text {
      font-weight: 600;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .options {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .option {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem;
      background: white;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .option:hover {
      background: #e9ecef;
      transform: translateX(5px);
    }

    .option input[type="radio"] {
      width: 20px;
      height: 20px;
    }

    .short-answer textarea {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid var(--light-gray);
      border-radius: 8px;
      font-family: 'Inter', sans-serif;
      resize: vertical;
    }

    .feedback {
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 8px;
      animation: slideIn 0.3s ease;
    }

    .feedback.hidden {
      display: none;
    }

    .feedback.correct {
      background: #d4edda;
      border-left: 4px solid #28a745;
    }

    .feedback.incorrect {
      background: #f8d7da;
      border-left: 4px solid #dc3545;
    }

    .feedback .answer-key {
      background: white;
      padding: 1rem;
      border-radius: 6px;
      border: 1px solid var(--light-gray);
    }

    .quiz-controls {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 2px solid var(--light-gray);
    }

    .result-panel {
      margin-top: 2rem;
      padding: 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: var(--border-radius);
      animation: fadeIn 0.5s ease;
    }

    .result-panel.hidden {
      display: none;
    }

    .grade-display {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .grade-circle {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      background: white;
      color: var(--dark);
    }

    .grade-a { border: 8px solid #28a745; }
    .grade-b { border: 8px solid #ffc107; }
    .grade-c { border: 8px solid #dc3545; }

    .grade-circle .percentage {
      font-size: 2rem;
      font-weight: 800;
    }

    .grade-details {
      flex: 1;
    }

    .retry-suggestion {
      margin-top: 1rem;
      padding: 0.75rem;
      background: rgba(255,255,255,0.2);
      border-radius: 8px;
    }

    /* Final Exam Styles */
    #final-lock {
      text-align: center;
      padding: 3rem 2rem;
      background: linear-gradient(135deg, #fff3cd, #ffeaa7);
      border-left: 6px solid #f39c12;
    }

    #final-lock strong {
      display: block;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .progress-summary {
      margin-top: 1.5rem;
      padding: 1rem;
      background: rgba(255,255,255,0.7);
      border-radius: 10px;
    }

    .exam-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .exam-sections {
      display: grid;
      gap: 2rem;
    }

    .exam-section {
      background: white;
      padding: 2rem;
      border-radius: var(--border-radius);
      box-shadow: var(--shadow);
    }

    .exam-section h3 {
      margin-bottom: 1rem;
      color: var(--primary);
    }

    .questions-grid {
      display: grid;
      gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .exam-question {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 10px;
      border-left: 4px solid #3498db;
    }

    .scenario-question {
      background: #f0f7ff;
      padding: 2rem;
      border-radius: 10px;
      margin-bottom: 1.5rem;
      border: 2px solid #bbdefb;
    }

    .scenario-text {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      font-style: italic;
      border-left: 4px solid #4a90e2;
    }

    .exam-controls {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin: 2rem 0;
      padding-top: 2rem;
      border-top: 2px solid var(--light-gray);
    }

    .exam-results {
      margin-top: 2rem;
    }

    .exam-grade {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 3rem;
      border-radius: var(--border-radius);
      text-align: center;
    }

    .final-score {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      margin: 2rem 0;
    }

    .final-grade {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      background: white;
      color: var(--dark);
    }

    .final-grade.a { border: 8px solid #28a745; }
    .final-grade.b { border: 8px solid #ffc107; }
    .final-grade.c { border: 8px solid #dc3545; }
    .final-grade.d { border: 8px solid #6c757d; }
    .final-grade.f { border: 8px solid #e74c3c; }

    .final-grade .letter {
      font-size: 3.5rem;
      font-weight: 900;
    }

    .final-grade .percent {
      font-size: 1.5rem;
      opacity: 0.9;
    }

    .score-breakdown {
      background: rgba(255,255,255,0.9);
      color: var(--dark);
      padding: 1.5rem;
      border-radius: 10px;
      text-align: left;
      min-width: 250px;
    }

    .performance-summary {
      background: rgba(255,255,255,0.2);
      padding: 1.5rem;
      border-radius: 10px;
      margin-top: 2rem;
    }

    .performance-metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .metric {
      background: rgba(255,255,255,0.9);
      padding: 1rem;
      border-radius: 8px;
      border-left: 4px solid var(--primary);
    }

    .metric-label {
      font-weight: 600;
      display: block;
      color: var(--gray);
    }

    .metric-value {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--dark);
    }

    /* Answer Keys */
    .answer-sections {
      display: grid;
      gap: 1.5rem;
    }

    details {
      background: white;
      border-radius: var(--border-radius);
      padding: 1rem;
      box-shadow: var(--shadow);
    }

    summary {
      font-weight: bold;
      cursor: pointer;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 8px;
      list-style: none;
    }

    summary::-webkit-details-marker {
      display: none;
    }

    summary:after {
      content: "▼";
      float: right;
      transition: transform 0.3s;
    }

    details[open] summary:after {
      transform: rotate(180deg);
    }

    .answers-content {
      padding: 1.5rem;
    }

    .chapter-answers {
      margin-bottom: 2rem;
    }

    .chapter-answers h3 {
      margin-bottom: 1rem;
      color: var(--primary);
    }

    .chapter-answers ol {
      margin-left: 1.5rem;
    }

    .chapter-answers li {
      margin-bottom: 1rem;
      padding-left: 0.5rem;
    }

    .tf-grid, .mc-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
    }

    .tf-answer, .mc-answer {
      padding: 0.75rem;
      background: #f8f9fa;
      border-radius: 6px;
    }

    .scenario-answers {
      display: grid;
      gap: 1.5rem;
    }

    .scenario {
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid var(--primary);
    }

    /* Animations */
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      #app {
        padding: 1rem;
      }

      .brand {
        flex-direction: column;
        text-align: center;
      }

      .top-nav {
        justify-content: center;
      }

      .grid.two {
        grid-template-columns: 1fr;
      }

      .chapters-grid {
        grid-template-columns: 1fr;
      }

      .chapter-actions {
        flex-direction: column;
        gap: 1rem;
      }

      .quiz-controls, .exam-controls {
        flex-direction: column;
      }

      .grade-display, .final-score {
        flex-direction: column;
        text-align: center;
      }

      .performance-metrics {
        grid-template-columns: 1fr;
      }
    }

    /* Footer */
    .site-footer {
      text-align: center;
      padding: 2rem;
      background: var(--dark);
      color: white;
      margin-top: 3rem;
    }

    .footer-nav {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
      flex-wrap: wrap;
    }

    .footer-nav button {
      background: transparent;
      color: white;
      border: 1px solid rgba(255,255,255,0.3);
    }

    .footer-nav button:hover {
      background: rgba(255,255,255,0.1);
    }

    /* Utility Classes */
    .hidden {
      display: none !important;
    }

    .muted {
      color: var(--gray);
    }

    .success {
      background: #d4edda;
      border-left: 4px solid #28a745;
    }

    .warning {
      background: #fff3cd;
      border-left: 4px solid #ffc107;
    }

    .info {
      background: #d1ecf1;
      border-left: 4px solid #17a2b8;
    }

    .code-block {
      background: #2d3748;
      color: #e2e8f0;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
      margin: 1rem 0;
      font-family: 'Monaco', 'Menlo', monospace;
      font-size: 0.9rem;
    }

    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  </style>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <header class="site-header">
    <div class="brand">
      <div class="logo">DV</div>
      <div class="title">
        <h1>Comprehensive Summary of Data Visualization Course</h1>
        <p>Prepared by Alwaleed • Complete Chapters 1–8 • Interactive Quizzes • Final Test • Charts Reference</p>
      </div>
    </div>
    <nav class="top-nav">
      <button class="nav-btn" data-target="home">Home</button>
      <button class="nav-btn" data-target="chapters">Chapters</button>
      <button class="nav-btn" data-target="answers">Answer Keys</button>
      <button class="nav-btn" data-target="final">Final Test</button>
    </nav>
  </header>

  <main id="app">
    <!-- Home View -->
    <section id="home" class="view active">
      <div class="card hero">
        <h2>Complete Midterm Study App</h2>
        <p>This comprehensive interactive app covers all key concepts from Chapters 1-8. Each chapter includes detailed content and ends with a practice quiz with immediate feedback. After completing all chapters, take the comprehensive final test.</p>
        <div class="cta-row">
          <button class="primary" data-target="chapters">Start Complete Chapters</button>
          <button class="secondary" data-target="answers">View Answer Keys</button>
        </div>
        <div class="progress">
          <div class="progress-label">Study Progress</div>
          <div class="progress-bar"><div id="progress-fill" style="width:0%"></div></div>
          <div class="progress-stats"><span id="progress-text">0/7 chapters completed</span></div>
        </div>
      </div>
      <div class="grid two">
        <div class="card">
          <h3>Complete Content</h3>
          <ul class="tick-list">
            <li>Full chapter summaries with all key concepts</li>
            <li>Detailed explanations of principles and techniques</li>
            <li>Interactive quizzes with immediate feedback</li>
            <li>Comprehensive final exam with explanations</li>
            <li>Complete charts reference with correct visualizations</li>
            <li>All pros/cons, uses, and Python implementations</li>
          </ul>
        </div>
        <div class="card">
          <h3>Study Features</h3>
          <ul class="tick-list">
            <li>Progressive chapter unlocking</li>
            <li>Instant answer feedback with explanations</li>
            <li>Corrected chart demonstrations</li>
            <li>Mobile-responsive design</li>
            <li>Self-paced learning experience</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Chapters Index -->
    <section id="chapters" class="view">
      <h2>Complete Chapter Guide</h2>
      <div class="chapters-grid">
        <!-- Chapter cards will be populated by JavaScript -->
      </div>
    </section>

    <!-- Chapter 1 -->
    <section id="chapter-1" class="view chapter">
      <div class="chapter-header">
        <div class="chapter-badge">Chapter 1</div>
        <h2>Introduction to Data Visualization</h2>
      </div>
      
      <article class="card">
        <h3>Definition and Importance</h3>
        <p><strong>Data visualization</strong> is the graphical representation of information and data using charts and images. It creates visual representations that communicate complex information in an easy-to-understand manner and helps to uncover hidden patterns, correlations, and outliers.</p>
        <div class="key-points">
          <h4>Key Points:</h4>
          <ul>
            <li><strong>"Data is the new oil"</strong> – a cliché but true; raw data is worthless until refined, analyzed, and understood (Disney 2017)</li>
            <li>Data is only as good as your ability to understand and communicate it</li>
            <li>By presenting data visually, it becomes easier to identify patterns, trends, outliers, and relationships</li>
            <li>Data visualization allows non-experts to analyze data at scale and extract potentially complex insights</li>
            <li><strong>Critical:</strong> Choose the right method for data visualization. For example, trends cannot be shown using a pie chart</li>
            <li>It reveals insights and patterns that are not immediately visible in the raw data</li>
            <li><strong>Speed:</strong> Humans process visuals 60,000 times faster than text</li>
          </ul>
        </div>
      </article>

      <article class="card">
        <h3>Why Data Visualization is Important</h3>
        <ul>
          <li><strong>Sense-making:</strong> Crucial for making sense of large and complex data sets</li>
          <li><strong>Pattern identification:</strong> Quickly identify patterns and trends difficult to see in tables/spreadsheets</li>
          <li><strong>Accessibility:</strong> Simplifies complex information for wider audiences, especially non-experts</li>
          <li><strong>Speed:</strong> Human brains excel at identifying patterns in tangible formats</li>
          <li><strong>Trend detection:</strong> Easy to get trends and outliers using charts</li>
          <li><strong>Impact:</strong> Improves the impact and recall of your message or argument</li>
        </ul>
      </article>

      <article class="card">
        <h3>Types of Data</h3>
        <div class="data-classification">
          <h4>1. Based on Nature</h4>
          <div class="indent">
            <h5>A) Qualitative (Categorical) Data:</h5>
            <ul>
              <li><strong>Nominal:</strong> Categories without order (e.g., gender, religion, eye color)</li>
              <li><strong>Ordinal:</strong> Categories with order/ranking (e.g., education level, satisfaction scale)</li>
            </ul>
            <h5>B) Quantitative (Numerical) Data:</h5>
            <ul>
              <li><strong>Discrete:</strong> Countable numbers (e.g., number of students, goals scored)</li>
              <li><strong>Continuous:</strong> Measurable on a scale, can take any value (e.g., height, weight, temperature)</li>
            </ul>
          </div>
          <h4>2. Based on Source</h4>
          <ul>
            <li><strong>Primary Data:</strong> Collected first-hand (e.g., surveys, experiments)</li>
            <li><strong>Secondary Data:</strong> Already collected by others (e.g., books, reports, online databases)</li>
          </ul>
          <h4>3. Based on Measurement Scale (Stevens' Classification)</h4>
          <ul>
            <li><strong>Nominal:</strong> Labels or names (no order)</li>
            <li><strong>Ordinal:</strong> Ordered categories</li>
            <li><strong>Interval:</strong> Numeric, equal intervals but no true zero (e.g., temperature in °C)</li>
            <li><strong>Ratio:</strong> Numeric, equal intervals with true zero (e.g., age, income, weight)</li>
          </ul>
          <h4>4. Based on Structure</h4>
          <ul>
            <li><strong>Structured Data:</strong> Organized in rows & columns (e.g., databases, spreadsheets)</li>
            <li><strong>Unstructured Data:</strong> No fixed format (e.g., text, images, videos)</li>
            <li><strong>Semi-Structured Data:</strong> Some organization but not strict (e.g., JSON, XML, logs)</li>
          </ul>
        </div>
      </article>

      <div class="chapter-actions">
        <button class="secondary" data-target="chapters">← Back to Chapters</button>
        <button class="primary start-quiz" data-quiz="1">Take Chapter 1 Quiz</button>
      </div>
      <div id="quiz-1" class="quiz hidden"></div>
    </section>

    <!-- Chapter 2 -->
    <section id="chapter-2" class="view chapter">
      <div class="chapter-header">
        <div class="chapter-badge">Chapter 2</div>
        <h2>Data Visualization Principles and Categories</h2>
      </div>

      <article class="card">
        <h3>Data Visualization Principles</h3>
        <p>Data visualization is not just about making pretty graphs; it's about making data accessible, understandable, and actionable. There are principles serving as guidance to authors who seek to improve their visual representation:</p>
       
        <div class="principles-list">
          <div class="principle">
            <h4>1. Diagram First</h4>
            <p>Least technical but very important factor. First envision the information you want to share mentally or on paper. Think about the core information being conveyed and your visual objective: comparison, ranking, or composition.</p>
          </div>
          <div class="principle">
            <h4>2. Choose the Right Software</h4>
            <p>Command over 1 or 2 visualization tools/software is essential. Have in-depth knowledge of at least one tool known for drawing complex figures. Choose the most suitable tool for your needs.</p>
          </div>
          <div class="principle">
            <h4>3. Use of Effective Geometry</h4>
            <p>Effectively use shapes and features in your figures. Consider geometries based on objectives:</p>
            <ul>
              <li><strong>Amounts/Comparisons:</strong> Generally represented using bars and line charts</li>
              <li><strong>Compositions/Proportions:</strong> Wide range but generally use pie charts</li>
              <li><strong>Distributions:</strong> Data scattering shown using box plots and density plots</li>
              <li><strong>Relationships:</strong> Correlation between data attributes using scatter plots, heat maps</li>
            </ul>
          </div>
        </div>
      </article>

      <div class="chapter-actions">
        <button class="secondary" data-target="chapters">← Back to Chapters</button>
        <button class="primary start-quiz" data-quiz="2">Take Chapter 2 Quiz</button>
      </div>
      <div id="quiz-2" class="quiz hidden"></div>
    </section>

    <!-- Chapter 3 -->
    <section id="chapter-3" class="view chapter">
      <div class="chapter-header">
        <div class="chapter-badge">Chapter 3</div>
        <h2>Data Preprocessing and Transformation Techniques</h2>
      </div>

      <article class="card">
        <h3>Data Preprocessing Overview</h3>
        <p><strong>Data preprocessing</strong> is a process applied to raw data to make it ready for further analysis or processing tasks. It converts raw data into a format that can be processed more efficiently and accurately in tasks such as data analysis, machine learning, data science, and AI.</p>
       
        <h4>Major Tasks:</h4>
        <ul>
          <li>Data cleaning</li>
          <li>Data integration</li>
          <li>Data transformation</li>
          <li>Data reduction</li>
        </ul>
      </article>

      <div class="chapter-actions">
        <button class="secondary" data-target="chapters">← Back to Chapters</button>
        <button class="primary start-quiz" data-quiz="3">Take Chapter 3 Quiz</button>
      </div>
      <div id="quiz-3" class="quiz hidden"></div>
    </section>

    <!-- Chapter 4 -->
    <section id="chapter-4" class="view chapter">
      <div class="chapter-header">
        <div class="chapter-badge">Chapter 4</div>
        <h2>Python Implementation of Basic and Advanced Visualization Techniques</h2>
      </div>

      <article class="card">
        <h3>Python Library for Plotting: Matplotlib</h3>
        <p><strong>Matplotlib</strong> is a comprehensive library for creating static, animated, and interactive visualizations in Python. <strong>Pyplot</strong> is a collection of functions within Matplotlib that provides a MATLAB-like interface for creating visualizations.</p>
        <p>Each pyplot function makes some change to a figure: creates a figure, creates a plotting area, plots lines, decorates with labels, etc.</p>
        
        <h4>Basic Import:</h4>
        <div class="code-block">
          <pre>import matplotlib.pyplot as plt</pre>
        </div>
      </article>

      <div class="chapter-actions">
        <button class="secondary" data-target="chapters">← Back to Chapters</button>
        <button class="primary start-quiz" data-quiz="4">Take Chapter 4 Quiz</button>
      </div>
      <div id="quiz-4" class="quiz hidden"></div>
    </section>

    <!-- Chapter 5 would go here -->

    <!-- Chapter 6 -->
    <section id="chapter-6" class="view chapter">
      <div class="chapter-header">
        <div class="chapter-badge">Chapter 6</div>
        <h2>Multivariate Data Visualization</h2>
      </div>

      <article class="card">
        <h3>Definition and Importance</h3>
        <p><strong>Multivariate Data Visualization</strong> involves the graphical representation and analysis of more than two variables simultaneously. Unlike univariate (one variable) or bivariate (two variables) analysis, multivariate techniques are essential for uncovering deeper, complex patterns and correlations in multidimensional datasets.</p>
      </article>

      <div class="chapter-actions">
        <button class="secondary" data-target="chapters">← Back to Chapters</button>
        <button class="primary start-quiz" data-quiz="6">Take Chapter 6 Quiz</button>
      </div>
      <div id="quiz-6" class="quiz hidden"></div>
    </section>

    <!-- Chapter 7 -->
    <section id="chapter-7" class="view chapter">
      <div class="chapter-header">
        <div class="chapter-badge">Chapter 7</div>
        <h2>Text Visualization</h2>
      </div>

      <article class="card">
        <h3>Definition and Overview</h3>
        <p><strong>Text Visualization</strong> is the graphical representation of qualitative data frequency, such as keywords or customer feedback. It gives prominence to frequently appearing words to help users get the "gist" of a document quickly.</p>
      </article>

      <div class="chapter-actions">
        <button class="secondary" data-target="chapters">← Back to Chapters</button>
        <button class="primary start-quiz" data-quiz="7">Take Chapter 7 Quiz</button>
      </div>
      <div id="quiz-7" class="quiz hidden"></div>
    </section>

    <!-- Chapter 8 -->
    <section id="chapter-8" class="view chapter">
      <div class="chapter-header">
        <div class="chapter-badge">Chapter 8</div>
        <h2>Time Series Analysis and Visualization</h2>
      </div>

      <article class="card">
        <h3>Definition and Fundamentals</h3>
        <p><strong>Time Series Data</strong> consists of an ordered sequence of timestamp values taken at equally spaced intervals. Unlike other data, it is chronologically ordered, making it suitable for forecasting and trend analysis.</p>
      </article>

      <div class="chapter-actions">
        <button class="secondary" data-target="chapters">← Back to Chapters</button>
        <button class="primary start-quiz" data-quiz="8">Take Chapter 8 Quiz</button>
      </div>
      <div id="quiz-8" class="quiz hidden"></div>
    </section>

    <!-- Final Exam -->
    <section id="final" class="view">
      <div class="chapter-header">
        <div class="chapter-badge">Final Exam</div>
        <h2>Comprehensive Data Visualization Final Test</h2>
      </div>
      
      <article class="card">
        <h3>📋 Exam Instructions</h3>
        <p>This comprehensive final test covers all material from Chapters 1-8. Complete all chapter quizzes first to unlock this test.</p>
        <div class="exam-info">
          <div class="info-item">
            <strong>Duration:</strong> 60 minutes (recommended)
          </div>
          <div class="info-item">
            <strong>Questions:</strong> 58 total questions
          </div>
          <div class="info-item">
            <strong>Passing Grade:</strong> 70% or higher
          </div>
        </div>
      </article>

      <!-- Locked State -->
      <div id="final-lock" class="card warning">
        <div class="lock-icon">🔒</div>
        <h3>Final Test Locked</h3>
        <p>Complete all 7 chapter quizzes to unlock the comprehensive final test.</p>
        <div class="progress-summary">
          <div class="progress-tracker">
            <span id="completed-count">0</span> of 7 chapters completed
          </div>
        </div>
      </div>

      <!-- Exam Content -->
      <div id="final-container" class="hidden">
        <!-- Dynamically generated by JavaScript -->
      </div>
    </section>

    <!-- Answer Keys -->
    <section id="answers" class="view">
      <div class="chapter-header">
        <div class="chapter-badge">Answer Keys</div>
        <h2>Complete Answer Keys & Explanations</h2>
      </div>
      
      <div class="card">
        <p class="muted">Comprehensive answer keys for all quizzes and tests with detailed explanations. Use after attempting the questions.</p>
      </div>

      <div class="answer-sections">
        <details class="card">
          <summary><strong>📚 Chapter Quiz Answers (1-4,6-8)</strong></summary>
          <div class="answers-content">
            <div class="chapter-answers">
              <h3>Chapter 1 Quiz Answers</h3>
              <ol>
                <li><strong>False</strong> - Data visualization is useful for both experts and non-experts.</li>
                <li><strong>False</strong> - Nominal data has no inherent order.</li>
                <li><strong>True</strong> - A histogram shows the distribution of one variable.</li>
                <li><strong>b) Discrete</strong> - Discrete data is countable.</li>
                <li><strong>b) Keep it simple and uncluttered</strong> - Simplicity is key.</li>
                <li><strong>Bar chart</strong> - Best for comparing categorical data.</li>
              </ol>
            </div>
            <div class="chapter-answers">
              <h3>Chapter 2 Quiz Answers</h3>
              <ol>
                <li><strong>False</strong> - The first principle is "Diagram First".</li>
                <li><strong>True</strong> - Bar charts are excellent for categorical data.</li>
                <li><strong>False</strong> - There are around 7-9 principles.</li>
                <li><strong>c) Qualitative</strong> - For categories without order.</li>
                <li><strong>b) Line chart</strong> - Designed for trends over time.</li>
                <li><strong>Scatter plot</strong> - For correlation between variables.</li>
              </ol>
            </div>
            <div class="chapter-answers">
              <h3>Chapter 3 Quiz Answers</h3>
              <ol>
                <li><strong>False</strong> - Data cleaning is MOST important.</li>
                <li><strong>True</strong> - Imputation handles missing values.</li>
                <li><strong>True</strong> - Uses (G,S,M) strategy.</li>
                <li><strong>a) Binning</strong> - For handling noisy data.</li>
                <li><strong>b) Mean and standard deviation</strong> - Z-score formula.</li>
                <li><strong>Remove duplicates, impute missing values</strong> - Standard preprocessing.</li>
              </ol>
            </div>
            <div class="chapter-answers">
              <h3>Chapter 4 Quiz Answers</h3>
              <ol>
                <li><strong>False</strong> - Matplotlib is low-level.</li>
                <li><strong>True</strong> - plt.show() displays plots.</li>
                <li><strong>True</strong> - Seaborn is built on Matplotlib.</li>
                <li><strong>b) plt.hist()</strong> - Creates histograms.</li>
                <li><strong>c) wordcloud</strong> - Special library import.</li>
                <li><strong>Use plt.plot() multiple times</strong> - With labels and legend.</li>
              </ol>
            </div>
            <div class="chapter-answers">
              <h3>Chapter 6 Quiz Answers</h3>
              <ol>
                <li><strong>False</strong> - More than two variables.</li>
                <li><strong>True</strong> - Heat maps detect correlations.</li>
                <li><strong>True</strong> - Correlation range -1 to +1.</li>
                <li><strong>b) Parallel Coordinates</strong> - Uses parallel axes.</li>
                <li><strong>a) Data Preparation</strong> - First step.</li>
                <li><strong>Scatterplot Matrix and Parallel Coordinates</strong> - Two techniques.</li>
              </ol>
            </div>
            <div class="chapter-answers">
              <h3>Chapter 7 Quiz Answers</h3>
              <ol>
                <li><strong>False</strong> - For qualitative data.</li>
                <li><strong>True</strong> - TF-IDF evaluates importance.</li>
                <li><strong>True</strong> - Tokenization breaks text.</li>
                <li><strong>b) Stemming</strong> - Reduces to root form.</li>
                <li><strong>a) Word Clouds</strong> - Visualizes frequency.</li>
                <li><strong>Term Frequency-Inverse Document Frequency</strong> - Measures word importance.</li>
              </ol>
            </div>
            <div class="chapter-answers">
              <h3>Chapter 8 Quiz Answers</h3>
              <ol>
                <li><strong>True</strong> - Ordered timestamp values.</li>
                <li><strong>False</strong> - Line charts are better.</li>
                <li><strong>True</strong> - Stationarity checks variance.</li>
                <li><strong>c) Line Charts</strong> - For tracking trends.</li>
                <li><strong>b) Resampling</strong> - Changes frequency.</li>
                <li><strong>Trends and Seasonality</strong> - Two key components.</li>
              </ol>
            </div>
          </div>
        </details>

        <details class="card">
          <summary><strong>🎯 Final Test Answer Key</strong></summary>
          <div class="answers-content">
            <div class="final-answers">
              <h3>True/False Answers (1-25)</h3>
              <div class="tf-grid">
                <div class="tf-answer">1. <strong>F</strong> - Raw data needs processing</div>
                <div class="tf-answer">2. <strong>F</strong> - Ordinal data HAS order</div>
                <div class="tf-answer">3. <strong>F</strong> - Scatter plot is bivariate</div>
                <div class="tf-answer">4. <strong>F</strong> - Avoid cluttered designs</div>
                <div class="tf-answer">5. <strong>F</strong> - Diagram First is FIRST</div>
                <div class="tf-answer">6. <strong>F</strong> - Line charts for continuous data</div>
                <div class="tf-answer">7. <strong>F</strong> - Interactivity IS considered</div>
                <div class="tf-answer">8. <strong>F</strong> - Charts for categorical too</div>
                <div class="tf-answer">9. <strong>T</strong> - Cleaning is preprocessing</div>
                <div class="tf-answer">10. <strong>F</strong> - Missing values need handling</div>
                <div class="tf-answer">11. <strong>F</strong> - Z-score uses mean/std dev</div>
                <div class="tf-answer">12. <strong>F</strong> - Data reduction DECREASES size</div>
                <div class="tf-answer">13. <strong>T</strong> - plt.ion() provides interactive mode</div>
                <div class="tf-answer">14. <strong>F</strong> - plt.barh() creates HORIZONTAL bars</div>
                <div class="tf-answer">15. <strong>T</strong> - WordCloud needs special import</div>
                <div class="tf-answer">16. <strong>F</strong> - Area charts show cumulative</div>
                <div class="tf-answer">17. <strong>F</strong> - Visuals processed faster</div>
                <div class="tf-answer">18. <strong>F</strong> - Primary data is first-hand</div>
                <div class="tf-answer">19. <strong>F</strong> - Binning handles noise</div>
                <div class="tf-answer">20. <strong>F</strong> - Seaborn is HIGH-level</div>
                <div class="tf-answer">21. <strong>T</strong> - Multivariate >2 variables</div>
                <div class="tf-answer">22. <strong>F</strong> - Text visualization qualitative</div>
                <div class="tf-answer">23. <strong>T</strong> - Time series chronological</div>
                <div class="tf-answer">24. <strong>F</strong> - Parallel coordinates multivariate</div>
                <div class="tf-answer">25. <strong>T</strong> - TF-IDF downweights common</div>
              </div>
            </div>
            <div class="final-answers">
              <h3>Multiple-Choice Answers (1-25)</h3>
              <div class="mc-grid">
                <div class="mc-answer">1. <strong>b)</strong> Graphical representation</div>
                <div class="mc-answer">2. <strong>b)</strong> Height (measurable)</div>
                <div class="mc-answer">3. <strong>a)</strong> Sankey diagram</div>
                <div class="mc-answer">4. <strong>b)</strong> Provide context</div>
                <div class="mc-answer">5. <strong>b)</strong> Diagram First</div>
                <div class="mc-answer">6. <strong>b)</strong> Box plot</div>
                <div class="mc-answer">7. <strong>a)</strong> Data type</div>
                <div class="mc-answer">8. <strong>b)</strong> Graph</div>
                <div class="mc-answer">9. <strong>b)</strong> Integration</div>
                <div class="mc-answer">10. <strong>b)</strong> Imputation</div>
                <div class="mc-answer">11. <strong>a)</strong> Min-max</div>
                <div class="mc-answer">12. <strong>b)</strong> Reduce storage</div>
                <div class="mc-answer">13. <strong>b)</strong> import matplotlib.pyplot as plt</div>
                <div class="mc-answer">14. <strong>a)</strong> plt.pie()</div>
                <div class="mc-answer">15. <strong>b)</strong> Reveals correlations</div>
                <div class="mc-answer">16. <strong>b)</strong> Plotly</div>
                <div class="mc-answer">17. <strong>b)</strong> True zero</div>
                <div class="mc-answer">18. <strong>b)</strong> Positive/negative</div>
                <div class="mc-answer">19. <strong>a)</strong> Human error</div>
                <div class="mc-answer">20. <strong>b)</strong> Statistical visualizations</div>
                <div class="mc-answer">21. <strong>c)</strong> More than two variables</div>
                <div class="mc-answer">22. <strong>a)</strong> Tokenization</div>
                <div class="mc-answer">23. <strong>b)</strong> Trends</div>
                <div class="mc-answer">24. <strong>a)</strong> Heatmap</div>
                <div class="mc-answer">25. <strong>c)</strong> Resampling</div>
              </div>
            </div>
            <div class="final-answers">
              <h3>Scenario Model Answers</h3>
              <div class="scenario-answers">
                <div class="scenario">
                  <h4>1. Temperature vs Ice Cream Sales</h4>
                  <p><strong>Answer:</strong> Scatter plot - shows correlation between continuous variables.</p>
                </div>
                <div class="scenario">
                  <h4>2. Category Sales Proportions</h4>
                  <p><strong>Answer:</strong> Pie chart. <strong>Pros:</strong> Intuitive proportions. <strong>Cons:</strong> Hard to compare small segments.</p>
                </div>
                <div class="scenario">
                  <h4>3. Dataset with Outliers and Missing Values</h4>
                  <p><strong>Answer:</strong> 1) Detect outliers (IQR/z-score), 2) Handle missing values (imputation/deletion), 3) Remove duplicates.</p>
                </div>
                <div class="scenario">
                  <h4>4. Histogram for Age Distribution</h4>
                  <p><strong>Answer:</strong> <code>plt.hist(ages, bins=10); plt.show()</code></p>
                </div>
                <div class="scenario">
                  <h4>5. Product Sales Across Regions</h4>
                  <p><strong>Answer:</strong> Grouped bar chart - compares multiple products across regions.</p>
                </div>
                <div class="scenario">
                  <h4>6. Project Tasks with Dates</h4>
                  <p><strong>Answer:</strong> Gantt chart using <code>plt.barh()</code>.</p>
                </div>
                <div class="scenario">
                  <h4>7. Multiple Variables Correlation</h4>
                  <p><strong>Answer:</strong> Heatmap or scatterplot matrix.</p>
                </div>
                <div class="scenario">
                  <h4>8. Text Data Frequency</h4>
                  <p><strong>Answer:</strong> Word cloud or TF-IDF.</p>
                </div>
              </div>
            </div>
          </div>
        </details>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="logo">DV</div>
    <p>© 2025 Complete Data Visualization Study Guide</p>
    <nav class="footer-nav">
      <button class="nav-btn" data-target="home">Home</button>
      <button class="nav-btn" data-target="chapters">Chapters</button>
      <button class="nav-btn" data-target="answers">Answer Keys</button>
      <button class="nav-btn" data-target="final">Final Test</button>
    </nav>
  </footer>

  <script>
    // Complete Quiz and Exam System for Data Visualization Study Guide

    // Quiz database with expanded questions
    const quizDatabase = {
      1: {
        title: "Introduction to Data Visualization",
        questions: [
          {
            type: "truefalse",
            question: "True or False: Data visualization is only useful for experts in data analysis.",
            answer: false,
            explanation: "False - Data visualization makes data accessible to both experts and non-experts by simplifying complex information."
          },
          {
            type: "truefalse",
            question: "True or False: Nominal data has an inherent order.",
            answer: false,
            explanation: "False - Nominal data has no inherent order (like gender, color). Ordinal data has order."
          },
          {
            type: "truefalse",
            question: "True or False: A histogram is an example of univariate visualization.",
            answer: true,
            explanation: "True - A histogram shows the distribution of one variable."
          },
          {
            type: "multiple",
            question: "Which type of quantitative data is countable?",
            options: ["Continuous", "Discrete", "Both", "Neither"],
            answer: 1,
            explanation: "Discrete - Discrete data is countable (like number of students)."
          },
          {
            type: "multiple",
            question: "What is a key best practice for data visualization?",
            options: [
              "Use as many colors as possible",
              "Keep it simple and uncluttered",
              "Include all available data points",
              "Use 3D effects for depth"
            ],
            answer: 1,
            explanation: "Keep it simple and uncluttered - Simplicity is crucial for effective communication."
          },
          {
            type: "short",
            question: "What visualization would you use to compare sales of different products?",
            answer: "bar chart",
            explanation: "Bar chart or column chart - Best for comparing categorical data across a single dimension."
          },
          {
            type: "multiple",
            question: "Which measurement scale has a true zero point?",
            options: ["Nominal", "Ordinal", "Interval", "Ratio"],
            answer: 3,
            explanation: "Ratio scale has a true zero point (e.g., weight, age)."
          },
          {
            type: "truefalse",
            question: "Primary data is collected by others and repurposed for your analysis.",
            answer: false,
            explanation: "False - Primary data is collected firsthand; secondary data is collected by others."
          }
        ]
      },
      2: {
        title: "Data Visualization Principles and Categories",
        questions: [
          {
            type: "truefalse",
            question: "True or False: The first visualization principle is 'Choose the Right Software'.",
            answer: false,
            explanation: "False - The first principle is 'Diagram First' - envision information before choosing tools."
          },
          {
            type: "truefalse",
            question: "True or False: Bar charts are excellent for comparing categorical data.",
            answer: true,
            explanation: "True - Bar charts are specifically designed for categorical comparisons."
          },
          {
            type: "truefalse",
            question: "True or False: There are exactly ten principles of data visualization.",
            answer: false,
            explanation: "False - The chapter discusses 7-9 principles, not exactly ten."
          },
          {
            type: "multiple",
            question: "Which color scheme is used for categories without order?",
            options: ["Sequential", "Diverging", "Qualitative", "Binary"],
            answer: 2,
            explanation: "Qualitative color schemes are for showing categories without inherent order."
          },
          {
            type: "multiple",
            question: "What is the best visualization for showing trends over time?",
            options: ["Pie chart", "Line chart", "Scatter plot", "Bar chart"],
            answer: 1,
            explanation: "Line chart - Specifically designed for showing trends over time."
          },
          {
            type: "short",
            question: "What visualization would you use to show correlation between temperature and sales?",
            answer: "scatter plot",
            explanation: "Scatter plot - Perfect for showing correlation between two continuous variables."
          },
          {
            type: "multiple",
            question: "Which visualization technique is NOT suitable for showing distributions?",
            options: ["Histogram", "Box plot", "Pie chart", "Violin plot"],
            answer: 2,
            explanation: "Pie chart - Shows proportions, not distributions."
          }
        ]
      },
      3: {
        title: "Data Preprocessing and Transformation",
        questions: [
          {
            type: "truefalse",
            question: "True or False: Data cleaning is the least important step in preprocessing.",
            answer: false,
            explanation: "False - Data cleaning is the MOST important step in preprocessing."
          },
          {
            type: "truefalse",
            question: "True or False: Imputation is a method to handle missing values.",
            answer: true,
            explanation: "True - Imputation uses mean, median, or mode to fill missing values."
          },
          {
            type: "multiple",
            question: "Which technique is used for handling noisy data?",
            options: ["Binning", "Normalization", "Integration", "Compression"],
            answer: 0,
            explanation: "Binning - Groups data points to smooth out noise."
          },
          {
            type: "multiple",
            question: "What does Z-score normalization use?",
            options: ["Min and max", "Mean and standard deviation", "Median and range", "Mode and variance"],
            answer: 1,
            explanation: "Mean and standard deviation - Z-score = (value - mean) / standard deviation."
          },
          {
            type: "short",
            question: "Describe steps to handle duplicates and missing values in a dataset.",
            answer: "remove duplicates, impute missing values",
            explanation: "1) Remove duplicates using deduplication. 2) Handle missing values through imputation or deletion."
          },
          {
            type: "multiple",
            question: "Which of these is NOT a data preprocessing task?",
            options: ["Data cleaning", "Data visualization", "Data integration", "Data reduction"],
            answer: 1,
            explanation: "Data visualization is not a preprocessing task - it comes after preprocessing."
          }
        ]
      },
      4: {
        title: "Python Implementation of Visualization Techniques",
        questions: [
          {
            type: "truefalse",
            question: "True or False: Matplotlib is a high-level library compared to Seaborn.",
            answer: false,
            explanation: "False - Matplotlib is low-level; Seaborn is high-level and built on Matplotlib."
          },
          {
            type: "truefalse",
            question: "True or False: plt.show() is used to display plots in Matplotlib.",
            answer: true,
            explanation: "True - plt.show() displays the current figure."
          },
          {
            type: "truefalse",
            question: "True or False: Seaborn is built on top of Matplotlib.",
            answer: true,
            explanation: "True - Seaborn provides a high-level interface built on Matplotlib."
          },
          {
            type: "multiple",
            question: "Which function creates a histogram?",
            options: ["plt.plot()", "plt.hist()", "plt.bar()", "plt.scatter()"],
            answer: 1,
            explanation: "plt.hist() - Specifically creates histograms."
          },
          {
            type: "multiple",
            question: "Which import is needed for word cloud visualization?",
            options: ["matplotlib", "seaborn", "wordcloud", "pandas"],
            answer: 2,
            explanation: "wordcloud - A specialized library for creating word clouds."
          },
          {
            type: "short",
            question: "How would you plot multiple lines on one chart in Matplotlib?",
            answer: "multiple plt.plot() calls",
            explanation: "Call plt.plot() multiple times with different data, then use plt.legend() to label them."
          },
          {
            type: "multiple",
            question: "What does plt.barh() create?",
            options: ["Vertical bars", "Horizontal bars", "3D bars", "Stacked bars"],
            answer: 1,
            explanation: "Horizontal bars - The 'h' stands for horizontal."
          }
        ]
      },
      6: {
        title: "Multivariate Data Visualization",
        questions: [
          {
            type: "truefalse",
            question: "True or False: Multivariate visualization involves exactly two variables.",
            answer: false,
            explanation: "False - Multivariate involves MORE than two variables."
          },
          {
            type: "truefalse",
            question: "True or False: Heat maps are good for detecting correlations without clutter.",
            answer: true,
            explanation: "True - Heat maps use color to show correlations in a compact format."
          },
          {
            type: "truefalse",
            question: "True or False: Correlation measures range from -1 to +1.",
            answer: true,
            explanation: "True - -1 = perfect negative, 0 = no correlation, +1 = perfect positive."
          },
          {
            type: "multiple",
            question: "Which technique uses parallel axes for multidimensional data?",
            options: ["Scatterplot Matrix", "Parallel Coordinates", "Heat Map", "Box Plot"],
            answer: 1,
            explanation: "Parallel Coordinates - Each variable gets its own parallel axis."
          },
          {
            type: "multiple",
            question: "What is the first step in multivariate analysis?",
            options: ["Data Preparation", "Visualization", "Interpretation", "Correlation Calculation"],
            answer: 0,
            explanation: "Data Preparation - Clean and organize data first."
          },
          {
            type: "short",
            question: "Name two geometric projection techniques for multivariate data.",
            answer: "scatterplot matrix, parallel coordinates",
            explanation: "Scatterplot matrix and parallel coordinates are two common geometric projection techniques."
          }
        ]
      },
      7: {
        title: "Text Visualization",
        questions: [
          {
            type: "truefalse",
            question: "True or False: Text visualization is for quantitative data frequency.",
            answer: false,
            explanation: "False - Text visualization is for QUALITATIVE data frequency."
          },
          {
            type: "truefalse",
            question: "True or False: TF-IDF evaluates the importance of words in documents.",
            answer: true,
            explanation: "True - TF-IDF measures word importance relative to a corpus."
          },
          {
            type: "truefalse",
            question: "True or False: Tokenization breaks texts into smaller units like words.",
            answer: true,
            explanation: "True - Tokenization splits text into tokens (words, phrases)."
          },
          {
            type: "multiple",
            question: "Which technique reduces 'likes' to 'like'?",
            options: ["Tokenization", "Stemming", "TF-IDF", "Bag of Words"],
            answer: 1,
            explanation: "Stemming - Reduces words to their root form."
          },
          {
            type: "multiple",
            question: "What is commonly used to visualize word frequency?",
            options: ["Word Clouds", "Sankey Chart", "Line Chart", "Histogram"],
            answer: 0,
            explanation: "Word Clouds - Visualize word frequency with size."
          },
          {
            type: "short",
            question: "What is TF-IDF?",
            answer: "Term Frequency-Inverse Document Frequency",
            explanation: "A numerical statistic that reflects how important a word is to a document in a collection."
          }
        ]
      },
      8: {
        title: "Time Series Analysis and Visualization",
        questions: [
          {
            type: "truefalse",
            question: "True or False: Time series data consists of ordered timestamp values.",
            answer: true,
            explanation: "True - Time series is chronological data at regular intervals."
          },
          {
            type: "truefalse",
            question: "True or False: Bar charts are best for tracking continuous trends over time.",
            answer: false,
            explanation: "False - Line charts are better for continuous trends; bar charts for discrete comparisons."
          },
          {
            type: "truefalse",
            question: "True or False: Stationarity checks for constant variance over time.",
            answer: true,
            explanation: "True - Stationary series have constant mean and variance."
          },
          {
            type: "multiple",
            question: "Which chart tracks trends over time?",
            options: ["Bar Charts", "Area Charts", "Line Charts", "Pie Charts"],
            answer: 2,
            explanation: "Line Charts - Specifically designed for time series trends."
          },
          {
            type: "multiple",
            question: "What changes the frequency of time series data?",
            options: ["Binning", "Resampling", "Normalization", "Smoothing"],
            answer: 1,
            explanation: "Resampling - Changes data frequency (e.g., daily to monthly)."
          },
          {
            type: "short",
            question: "Name two key components of time series data.",
            answer: "trend, seasonality",
            explanation: "Trend (long-term direction) and Seasonality (regular repeating patterns)."
          }
        ]
      }
    };

    // Final Exam Questions
    const finalExamQuestions = {
      trueFalse: [
        {
          question: "Data visualization is only useful for experts in data analysis.",
          answer: false,
          explanation: "False - Visualization makes data accessible to both experts and non-experts."
        },
        {
          question: "A scatter plot is an example of univariate visualization.",
          answer: false,
          explanation: "False - Scatter plots show relationships between TWO variables (bivariate)."
        },
        {
          question: "The 'Diagram First' principle suggests choosing software before planning.",
          answer: false,
          explanation: "False - Always plan your visualization first, then choose tools."
        },
        {
          question: "Using complex 3D effects always improves data visualization clarity.",
          answer: false,
          explanation: "False - 3D effects often reduce clarity and can mislead."
        },
        {
          question: "Line charts should only be used for categorical data.",
          answer: false,
          explanation: "False - Line charts are for continuous/temporal data."
        },
        {
          question: "Interactive elements are never useful in data visualizations.",
          answer: false,
          explanation: "False - Interactivity enhances exploration for complex datasets."
        },
        {
          question: "Charts can only display numerical data.",
          answer: false,
          explanation: "False - Charts can display categorical, temporal, and other data types."
        },
        {
          question: "Data cleaning is part of the preprocessing phase.",
          answer: true,
          explanation: "True - Cleaning is a crucial preprocessing step."
        },
        {
          question: "Missing values in a dataset can be safely ignored in most analyses.",
          answer: false,
          explanation: "False - Missing values need appropriate handling (imputation/deletion)."
        },
        {
          question: "Primary data is collected by others and repurposed.",
          answer: false,
          explanation: "False - Primary data is collected firsthand; secondary is from others."
        }
      ],
      multipleChoice: [
        {
          question: "What is data visualization primarily about?",
          options: [
            "Making pretty charts",
            "Graphical representation of information",
            "Data storage",
            "Statistical analysis only"
          ],
          answer: 1,
          explanation: "Graphical representation of information to communicate complex data."
        },
        {
          question: "Which of these is an example of continuous quantitative data?",
          options: [
            "Number of students",
            "Temperature in Celsius",
            "Eye color",
            "Education level"
          ],
          answer: 1,
          explanation: "Temperature is continuous and measurable on a scale."
        },
        {
          question: "What visualization would show connections or flows between elements?",
          options: [
            "Sankey diagram",
            "Histogram",
            "Bar chart",
            "Pie chart"
          ],
          answer: 0,
          explanation: "Sankey diagrams show flows and connections."
        },
        {
          question: "When creating visualizations for non-technical audiences, what should you emphasize?",
          options: [
            "Complex statistical methods",
            "Provide more context and simplicity",
            "All raw data points",
            "Technical jargon"
          ],
          answer: 1,
          explanation: "Provide more context and keep visualizations simple."
        },
        {
          question: "Which preprocessing technique handles outliers in noisy data?",
          options: [
            "Normalization",
            "Binning",
            "Integration",
            "Compression"
          ],
          answer: 1,
          explanation: "Binning groups data to smooth outliers and noise."
        },
        {
          question: "What does plt.barh() create in Matplotlib?",
          options: [
            "Vertical bars",
            "Horizontal bars",
            "3D bars",
            "Stacked bars"
          ],
          answer: 1,
          explanation: "Horizontal bars - 'h' stands for horizontal."
        },
        {
          question: "Which library is built on top of Matplotlib?",
          options: [
            "Pandas",
            "Seaborn",
            "NumPy",
            "Plotly"
          ],
          answer: 1,
          explanation: "Seaborn provides high-level interface built on Matplotlib."
        },
        {
          question: "What visualization shows correlations in multivariate data?",
          options: [
            "Heatmap",
            "Pie chart",
            "Line chart",
            "Bar chart"
          ],
          answer: 0,
          explanation: "Heatmaps use color to show correlations between multiple variables."
        }
      ],
      scenario: [
        {
          scenario: "You have temperature data and ice cream sales data for a year. You want to show if there's a relationship.",
          question: "What visualization would you choose and why?",
          answer: "scatter plot",
          explanation: "Scatter plot shows correlation between two continuous variables over time."
        },
        {
          scenario: "You need to show market share percentages for 5 product categories to executives.",
          question: "What visualization would you use, and what are its pros/cons?",
          answer: "pie chart",
          explanation: "Pie chart: Pros - intuitive for proportions; Cons - hard to compare small segments."
        },
        {
          scenario: "You have a dataset with outliers and missing values that needs preprocessing.",
          question: "Describe the steps you would take to prepare this data.",
          answer: "detect outliers, handle missing values, remove duplicates",
          explanation: "1) Detect outliers using IQR or z-score. 2) Handle missing values via imputation. 3) Remove duplicates."
        },
        {
          scenario: "You need to create a histogram showing age distribution of survey respondents.",
          question: "Write the Python code to create this histogram.",
          answer: "plt.hist(ages, bins=10)",
          explanation: "plt.hist(ages, bins=10); plt.xlabel('Age'); plt.ylabel('Frequency'); plt.show()"
        }
      ]
    };

    class QuizManager {
      constructor() {
        this.completedChapters = JSON.parse(localStorage.getItem('dvCompletedChapters') || '[]');
        this.chapterScores = JSON.parse(localStorage.getItem('dvChapterScores') || '{}');
        this.initializeApp();
        this.setupEventListeners();
      }

      initializeApp() {
        this.renderChapterCards();
        this.initializeQuizzes();
        this.updateProgress();
      }

      renderChapterCards() {
        const chaptersGrid = document.querySelector('.chapters-grid');
        if (!chaptersGrid) return;

        const chapters = [
          { num: 1, title: "Introduction to Data Visualization", desc: "Definition, importance, types of data, visualization types, best practices, tools, and applications." },
          { num: 2, title: "Data Visualization Principles and Categories", desc: "All visualization principles, choosing techniques, categories, basic and advanced techniques with pros/cons." },
          { num: 3, title: "Data Preprocessing and Transformation", desc: "Data cleaning, integration, transformation techniques, reduction methods, normalization, discretization." },
          { num: 4, title: "Python Implementation of Visualization Techniques", desc: "Matplotlib vs Seaborn, all plotting functions, chart types with Python code examples." },
          { num: 6, title: "Multivariate Data Visualization", desc: "Definition, importance, techniques, steps, examples, and concepts." },
          { num: 7, title: "Text Visualization", desc: "Definition, techniques, TF-IDF, visualization types, examples, and concepts." },
          { num: 8, title: "Time Series Analysis and Visualization", desc: "Definition, charts, analysis examples, case study, examples, and concepts." }
        ];

        chaptersGrid.innerHTML = chapters.map(chapter => {
          const isCompleted = this.completedChapters.includes(chapter.num);
          return `
            <article class="chapter-card ${isCompleted ? 'completed' : ''}" data-chapter="${chapter.num}">
              <div class="chapter-badge">Chapter ${chapter.num}</div>
              <h3>${chapter.title}</h3>
              <p>${chapter.desc}</p>
              <button class="primary go-chapter" data-chapter="${chapter.num}">
                ${isCompleted ? 'Review Chapter' : 'Study Chapter'}
              </button>
            </article>
          `;
        }).join('');
      }

      initializeQuizzes() {
        Object.keys(quizDatabase).forEach(chapter => {
          const quizContainer = document.getElementById(`quiz-${chapter}`);
          if (quizContainer) {
            this.renderQuiz(quizContainer, quizDatabase[chapter], chapter);
          }
        });
      }

      renderQuiz(container, quizData, chapterNum) {
        container.innerHTML = `
          <div class="quiz-header">
            <h3>${quizData.title} Quiz</h3>
            <div class="quiz-stats">
              <span class="score-display">Score: <span id="score-${chapterNum}">0/${quizData.questions.length}</span></span>
              <span class="status" id="status-${chapterNum}">Not Started</span>
            </div>
          </div>
          <div class="questions-container">
            ${quizData.questions.map((q, index) => `
              <div class="question-card" data-question="${index}">
                <div class="question-text">${index + 1}. ${q.question}</div>
                ${this.renderQuestionInput(q, chapterNum, index)}
                <div class="feedback hidden" id="fb-${chapterNum}-${index}"></div>
              </div>
            `).join('')}
          </div>
          <div class="quiz-controls">
            <button class="primary submit-quiz" data-chapter="${chapterNum}">Submit Quiz</button>
            <button class="secondary reset-quiz" data-chapter="${chapterNum}">Reset Answers</button>
            <button class="secondary show-answers" data-chapter="${chapterNum}">Show Answers</button>
          </div>
          <div class="result-panel hidden" id="result-${chapterNum}"></div>
        `;
      }

      renderQuestionInput(question, chapterNum, index) {
        if (question.type === 'truefalse') {
          return `
            <div class="options">
              <label class="option">
                <input type="radio" name="q${chapterNum}_${index}" value="true">
                <span>True</span>
              </label>
              <label class="option">
                <input type="radio" name="q${chapterNum}_${index}" value="false">
                <span>False</span>
              </label>
            </div>
          `;
        } else if (question.type === 'multiple') {
          return `
            <div class="options">
              ${question.options.map((opt, optIndex) => `
                <label class="option">
                  <input type="radio" name="q${chapterNum}_${index}" value="${optIndex}">
                  <span>${String.fromCharCode(65 + optIndex)}) ${opt}</span>
                </label>
              `).join('')}
            </div>
          `;
        } else {
          return `
            <div class="short-answer">
              <textarea placeholder="Type your answer here..." rows="2"></textarea>
            </div>
          `;
        }
      }

      setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
          btn.addEventListener('click', () => this.showView(btn.dataset.target));
        });

        // Chapter navigation
        document.addEventListener('click', (e) => {
          if (e.target.classList.contains('go-chapter')) {
            this.showView(`chapter-${e.target.dataset.chapter}`);
          }
        });

        // Quiz buttons
        document.addEventListener('click', (e) => {
          if (e.target.classList.contains('start-quiz')) {
            const quizNum = e.target.dataset.quiz;
            const quiz = document.getElementById(`quiz-${quizNum}`);
            quiz.classList.remove('hidden');
            quiz.scrollIntoView({ behavior: 'smooth' });
          }

          if (e.target.classList.contains('submit-quiz')) {
            this.submitQuiz(e.target.dataset.chapter);
          }

          if (e.target.classList.contains('reset-quiz')) {
            this.resetQuiz(e.target.dataset.chapter);
          }

          if (e.target.classList.contains('show-answers')) {
            this.showQuizAnswers(e.target.dataset.chapter);
          }

          if (e.target.id === 'submit-final-exam') {
            this.submitFinalExam();
          }
        });

        // Initialize final exam if needed
        const finalContainer = document.getElementById('final-container');
        if (finalContainer && this.completedChapters.length >= 7) {
          this.renderFinalExam();
        }
      }

      submitQuiz(chapterNum) {
        const quizData = quizDatabase[chapterNum];
        let score = 0;
        const total = quizData.questions.length;

        quizData.questions.forEach((q, index) => {
          const questionElement = document.querySelector(`#quiz-${chapterNum} [data-question="${index}"]`);
          const feedback = document.getElementById(`fb-${chapterNum}-${index}`);
          
          let userAnswer;
          if (q.type === 'truefalse') {
            const selected = questionElement.querySelector(`input[name="q${chapterNum}_${index}"]:checked`);
            userAnswer = selected ? selected.value === 'true' : null;
          } else if (q.type === 'multiple') {
            const selected = questionElement.querySelector(`input[name="q${chapterNum}_${index}"]:checked`);
            userAnswer = selected ? parseInt(selected.value) : null;
          } else {
            userAnswer = questionElement.querySelector('textarea').value.trim().toLowerCase();
          }

          let isCorrect = false;
          if (userAnswer !== null && userAnswer !== '') {
            if (q.type === 'short') {
              isCorrect = q.answer.toLowerCase().split(' ').some(word => 
                userAnswer.includes(word.toLowerCase())
              );
            } else {
              isCorrect = userAnswer === q.answer;
            }
          }

          if (isCorrect) score++;
          
          feedback.innerHTML = `<div class="${isCorrect ? 'correct' : 'incorrect'}">
            <strong>${isCorrect ? '✓ Correct' : '✗ Incorrect'}</strong><br>
            ${q.explanation}
          </div>`;
          feedback.classList.remove('hidden');
        });

        // Update score display
        const percentage = Math.round((score / total) * 100);
        const scoreElement = document.getElementById(`score-${chapterNum}`);
        const statusElement = document.getElementById(`status-${chapterNum}`);
        const resultPanel = document.getElementById(`result-${chapterNum}`);
        
        scoreElement.textContent = `${score}/${total}`;
        statusElement.textContent = `${percentage}%`;
        statusElement.className = `status ${percentage >= 70 ? 'passed' : 'failed'}`;

        resultPanel.innerHTML = `
          <h4>Quiz Results</h4>
          <div class="grade-display">
            <div class="grade-circle ${percentage >= 70 ? 'grade-a' : percentage >= 50 ? 'grade-b' : 'grade-c'}">
              <span class="percentage">${percentage}%</span>
            </div>
            <div class="grade-details">
              <p><strong>Score:</strong> ${score} out of ${total} correct</p>
              <p><strong>Status:</strong> ${percentage >= 70 ? 'PASSED' : 'NOT PASSED'}</p>
              ${percentage < 70 ? '<p class="retry-suggestion">Review the chapter and try again!</p>' : ''}
            </div>
          </div>
        `;
        resultPanel.classList.remove('hidden');

        // Save progress if passed
        if (percentage >= 70 && !this.completedChapters.includes(parseInt(chapterNum))) {
          this.completedChapters.push(parseInt(chapterNum));
          this.chapterScores[chapterNum] = percentage;
          localStorage.setItem('dvCompletedChapters', JSON.stringify(this.completedChapters));
          localStorage.setItem('dvChapterScores', JSON.stringify(this.chapterScores));
          this.updateProgress();
          
          // If all chapters completed, unlock final exam
          if (this.completedChapters.length >= 7) {
            this.unlockFinalExam();
          }
        }
      }

      resetQuiz(chapterNum) {
        const quizContainer = document.getElementById(`quiz-${chapterNum}`);
        quizContainer.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
        quizContainer.querySelectorAll('textarea').forEach(ta => ta.value = '');
        quizContainer.querySelectorAll('.feedback').forEach(fb => {
          fb.classList.add('hidden');
          fb.innerHTML = '';
        });
        
        document.getElementById(`score-${chapterNum}`).textContent = `0/${quizDatabase[chapterNum].questions.length}`;
        document.getElementById(`status-${chapterNum}`).textContent = 'Not Started';
        document.getElementById(`status-${chapterNum}`).className = 'status';
        document.getElementById(`result-${chapterNum}`).classList.add('hidden');
      }

      showQuizAnswers(chapterNum) {
        const quizData = quizDatabase[chapterNum];
        
        quizData.questions.forEach((q, index) => {
          const feedback = document.getElementById(`fb-${chapterNum}-${index}`);
          
          let correctAnswer;
          if (q.type === 'truefalse') {
            correctAnswer = q.answer ? 'True' : 'False';
          } else if (q.type === 'multiple') {
            correctAnswer = `${String.fromCharCode(65 + q.answer)}) ${q.options[q.answer]}`;
          } else {
            correctAnswer = q.answer;
          }
          
          feedback.innerHTML = `<div class="answer-key">
            <strong>Correct Answer:</strong> ${correctAnswer}<br>
            <strong>Explanation:</strong> ${q.explanation}
          </div>`;
          feedback.classList.remove('hidden');
        });
      }

      updateProgress() {
        const totalChapters = 7;
        const completed = this.completedChapters.length;
        const percentage = Math.min((completed / totalChapters) * 100, 100);
        
        // Update progress bar
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        const completedCount = document.getElementById('completed-count');
        
        if (progressFill) progressFill.style.width = `${percentage}%`;
        if (progressText) progressText.textContent = `${completed}/${totalChapters} chapters completed`;
        if (completedCount) completedCount.textContent = completed;
        
        // Update chapter cards
        this.renderChapterCards();
      }

      unlockFinalExam() {
        const finalLock = document.getElementById('final-lock');
        const finalContainer = document.getElementById('final-container');
        
        if (finalLock) finalLock.classList.add('hidden');
        if (finalContainer) {
          finalContainer.classList.remove('hidden');
          this.renderFinalExam();
        }
      }

      renderFinalExam() {
        const container = document.getElementById('final-container');
        if (!container) return;
        
        container.innerHTML = `
          <div class="exam-header">
            <h3>📝 Final Examination</h3>
            <div class="exam-timer">
              <span class="timer-label">Time:</span>
              <span class="timer">60:00</span>
            </div>
          </div>
          
          <div class="exam-sections">
            <section class="exam-section">
              <h4>Section A: True/False (${finalExamQuestions.trueFalse.length} marks)</h4>
              <p>Mark each statement as True or False based on your understanding.</p>
              <div id="true-false-questions" class="questions-grid"></div>
            </section>
            
            <section class="exam-section">
              <h4>Section B: Multiple Choice (${finalExamQuestions.multipleChoice.length} marks)</h4>
              <p>Choose the BEST answer for each question.</p>
              <div id="multiple-choice-questions" class="questions-grid"></div>
            </section>
            
            <section class="exam-section">
              <h4>Section C: Scenario Analysis (${finalExamQuestions.scenario.length} marks)</h4>
              <p>Apply your knowledge to real-world data visualization scenarios.</p>
              <div id="scenario-questions" class="scenario-grid"></div>
            </section>
          </div>
          
          <div class="exam-controls">
            <button class="primary" id="submit-final-exam">Submit Final Exam</button>
            <button class="secondary" id="reset-exam">Clear All Answers</button>
            <button class="secondary" id="save-exam">Save Progress</button>
          </div>
          
          <div class="exam-results hidden" id="exam-results"></div>
        `;
        
        this.renderFinalQuestions();
        
        // Add event listeners for exam buttons
        document.getElementById('reset-exam')?.addEventListener('click', () => this.resetFinalExam());
      }

      renderFinalQuestions() {
        // True/False questions
        const tfContainer = document.getElementById('true-false-questions');
        if (tfContainer) {
          tfContainer.innerHTML = finalExamQuestions.trueFalse.map((q, index) => `
            <div class="exam-question" data-type="tf" data-index="${index}">
              <div class="question-number">${index + 1}.</div>
              <div class="question-content">
                <p class="question-text">${q.question}</p>
                <div class="tf-options">
                  <label class="tf-option">
                    <input type="radio" name="tf_${index}" value="true">
                    <span>True</span>
                  </label>
                  <label class="tf-option">
                    <input type="radio" name="tf_${index}" value="false">
                    <span>False</span>
                  </label>
                </div>
                <div class="question-feedback hidden"></div>
              </div>
            </div>
          `).join('');
        }

        // Multiple Choice questions
        const mcContainer = document.getElementById('multiple-choice-questions');
        if (mcContainer) {
          mcContainer.innerHTML = finalExamQuestions.multipleChoice.map((q, index) => `
            <div class="exam-question" data-type="mc" data-index="${index}">
              <div class="question-number">${index + 1}.</div>
              <div class="question-content">
                <p class="question-text">${q.question}</p>
                <div class="options">
                  ${q.options.map((opt, optIndex) => `
                    <label class="option">
                      <input type="radio" name="mc_${index}" value="${optIndex}">
                      <span>${String.fromCharCode(65 + optIndex)}) ${opt}</span>
                    </label>
                  `).join('')}
                </div>
                <div class="question-feedback hidden"></div>
              </div>
            </div>
          `).join('');
        }

        // Scenario questions
        const scContainer = document.getElementById('scenario-questions');
        if (scContainer) {
          scContainer.innerHTML = finalExamQuestions.scenario.map((q, index) => `
            <div class="scenario-question" data-type="sc" data-index="${index}">
              <div class="scenario-text">
                <strong>Scenario ${index + 1}:</strong> ${q.scenario}
              </div>
              <div class="question-text">${q.question}</div>
              <div class="answer-input">
                <textarea placeholder="Your response..." rows="3"></textarea>
              </div>
              <div class="question-feedback hidden"></div>
            </div>
          `).join('');
        }
      }

      submitFinalExam() {
        let tfScore = 0;
        let mcScore = 0;
        let scScore = 0;
        
        // Check True/False answers
        finalExamQuestions.trueFalse.forEach((q, index) => {
          const element = document.querySelector(`[data-type="tf"][data-index="${index}"]`);
          const selected = element?.querySelector('input:checked');
          const feedback = element?.querySelector('.question-feedback');
          
          if (selected && selected.value === q.answer.toString()) {
            tfScore++;
            if (feedback) {
              feedback.innerHTML = '<div class="correct">✓ Correct</div>';
              feedback.classList.remove('hidden');
            }
          } else if (feedback) {
            feedback.innerHTML = `<div class="incorrect">✗ Incorrect. ${q.explanation}</div>`;
            feedback.classList.remove('hidden');
          }
        });

        // Check Multiple Choice answers
        finalExamQuestions.multipleChoice.forEach((q, index) => {
          const element = document.querySelector(`[data-type="mc"][data-index="${index}"]`);
          const selected = element?.querySelector('input:checked');
          const feedback = element?.querySelector('.question-feedback');
          
          if (selected && parseInt(selected.value) === q.answer) {
            mcScore++;
            if (feedback) {
              feedback.innerHTML = '<div class="correct">✓ Correct</div>';
              feedback.classList.remove('hidden');
            }
          } else if (feedback) {
            feedback.innerHTML = `<div class="incorrect">✗ Incorrect. ${q.explanation}</div>`;
            feedback.classList.remove('hidden');
          }
        });

        // Check Scenario answers (simplified - checks for keywords)
        finalExamQuestions.scenario.forEach((q, index) => {
          const element = document.querySelector(`[data-type="sc"][data-index="${index}"]`);
          const answer = element?.querySelector('textarea')?.value.trim().toLowerCase();
          const feedback = element?.querySelector('.question-feedback');
          
          // Simple keyword matching for scenarios
          const keywords = q.answer.toLowerCase().split(' ');
          let matches = 0;
          keywords.forEach(keyword => {
            if (answer?.includes(keyword)) matches++;
          });
          
          if (matches >= keywords.length * 0.5) { // 50% keyword match
            scScore++;
            if (feedback) {
              feedback.innerHTML = '<div class="correct">✓ Good answer!</div>';
              feedback.classList.remove('hidden');
            }
          } else if (feedback) {
            feedback.innerHTML = `<div class="incorrect">✗ Could be improved. ${q.explanation}</div>`;
            feedback.classList.remove('hidden');
          }
        });

        // Calculate total score
        const totalScore = tfScore + mcScore + scScore;
        const totalQuestions = finalExamQuestions.trueFalse.length + 
                              finalExamQuestions.multipleChoice.length + 
                              finalExamQuestions.scenario.length;
        const percentage = Math.round((totalScore / totalQuestions) * 100);

        // Determine grade
        let gradeLetter = 'F';
        if (percentage >= 90) gradeLetter = 'A';
        else if (percentage >= 80) gradeLetter = 'B';
        else if (percentage >= 70) gradeLetter = 'C';
        else if (percentage >= 60) gradeLetter = 'D';

        // Display results
        const resultsPanel = document.getElementById('exam-results');
        if (resultsPanel) {
          resultsPanel.innerHTML = `
            <div class="exam-grade">
              <h3>🎉 Final Exam Results</h3>
              <div class="final-score">
                <div class="final-grade ${gradeLetter.toLowerCase()}">
                  <span class="letter">${gradeLetter}</span>
                  <span class="percent">${percentage}%</span>
                </div>
                <div class="score-breakdown">
                  <h4>Score Breakdown</h4>
                  <div class="score-item">
                    <span>True/False:</span>
                    <span>${tfScore}/${finalExamQuestions.trueFalse.length}</span>
                  </div>
                  <div class="score-item">
                    <span>Multiple Choice:</span>
                    <span>${mcScore}/${finalExamQuestions.multipleChoice.length}</span>
                  </div>
                  <div class="score-item">
                    <span>Scenario Analysis:</span>
                    <span>${scScore}/${finalExamQuestions.scenario.length}</span>
                  </div>
                  <div class="score-total">
                    <span>Total Score:</span>
                    <span>${totalScore}/${totalQuestions}</span>
                  </div>
                  <div class="exam-status ${percentage >= 70 ? 'status-pass' : 'status-fail'}">
                    ${percentage >= 70 ? '✅ PASSED' : '❌ FAILED - Review Required'}
                  </div>
                </div>
              </div>
              <div class="performance-summary">
                <h4>Performance Summary</h4>
                <div class="performance-metrics">
                  <div class="metric">
                    <span class="metric-label">True/False:</span>
                    <span class="metric-value">${tfScore}/${finalExamQuestions.trueFalse.length}</span>
                  </div>
                  <div class="metric">
                    <span class="metric-label">Multiple Choice:</span>
                    <span class="metric-value">${mcScore}/${finalExamQuestions.multipleChoice.length}</span>
                  </div>
                  <div class="metric">
                    <span class="metric-label">Scenarios:</span>
                    <span class="metric-value">${scScore}/${finalExamQuestions.scenario.length}</span>
                  </div>
                </div>
              </div>
              <button class="primary" id="review-answers">Review Answers</button>
            </div>
          `;
          resultsPanel.classList.remove('hidden');
          resultsPanel.scrollIntoView({ behavior: 'smooth' });

          // Add review button listener
          document.getElementById('review-answers')?.addEventListener('click', () => {
            document.querySelectorAll('.question-feedback').forEach(fb => fb.classList.remove('hidden'));
          });
        }
      }

      resetFinalExam() {
        document.querySelectorAll('#final-container input[type="radio"]').forEach(input => input.checked = false);
        document.querySelectorAll('#final-container textarea').forEach(ta => ta.value = '');
        document.querySelectorAll('#final-container .question-feedback').forEach(fb => {
          fb.classList.add('hidden');
          fb.innerHTML = '';
        });
        document.getElementById('exam-results')?.classList.add('hidden');
      }

      showView(viewId) {
        // Hide all views
        document.querySelectorAll('.view').forEach(view => {
          view.classList.remove('active');
        });
        
        // Show target view
        const targetView = document.getElementById(viewId);
        if (targetView) {
          targetView.classList.add('active');
          
          // Update progress when showing home view
          if (viewId === 'home') {
            this.updateProgress();
          }
          
          // Render final exam if showing final view and it's unlocked
          if (viewId === 'final' && this.completedChapters.length >= 7) {
            const finalContainer = document.getElementById('final-container');
            if (finalContainer && !finalContainer.innerHTML) {
              this.renderFinalExam();
            }
          }
        }
      }
    }

    // Initialize the application
    document.addEventListener('DOMContentLoaded', () => {
      const quizManager = new QuizManager();
      
      // Show home view by default
      quizManager.showView('home');
    });
  </script>
</body>
</html>
