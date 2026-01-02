/* Enhanced JavaScript for comprehensive data visualization study app with ALL corrected charts */
const state = {
  completedChapters: new Set(),
  chapterQuizzes: {},
  finalUnlocked: false,
  charts: [
    {
      id: 'bar',
      title: 'Bar Chart',
      type: 'bar',
      labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
      data: [45, 67, 23, 89, 34],
      strengths: ['Clear categorical comparison', 'Easy to read exact values', 'Flexible with groups', 'Works well with few or many categories'],
      weaknesses: ['Can be cluttered with too many bars', 'Not suitable for continuous data', 'Spacing issues with long labels'],
      use: 'Compare values across distinct categories or groups',
      python: "plt.bar(categories, values)\nplt.xlabel('Categories')\nplt.ylabel('Values')\nplt.title('Bar Chart Comparison')\nplt.show()",
      description: "Bar charts are fundamental for comparing discrete categories. Each bar's height represents the magnitude of the value, making it easy to compare quantities across different groups. Best used when you have categorical data on the x-axis and numerical data on the y-axis."
    },
    {
      id: 'line',
      title: 'Line Chart',
      type: 'line',
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      data: [30, 45, 60, 35, 50, 40, 40, 55],
      strengths: ['Excellent for showing trends over time', 'Easy to track changes and patterns', 'Can display multiple series', 'Shows continuity in data'],
      weaknesses: ['Not suited for categorical x-axis data', 'Can become cluttered with too many lines', 'Requires ordered data points'],
      use: 'Display trends, changes, and patterns over continuous periods (especially time series)',
      python: "plt.plot(x_values, y_values, marker='o')\nplt.xlabel('Time Period')\nplt.ylabel('Values')\nplt.title('Trend Over Time')\nplt.grid(True)\nplt.show()",
      description: "Line charts excel at showing how data changes over continuous intervals, typically time. The connecting lines between points emphasize the flow and trend of the data, making patterns and changes immediately visible."
    },
    {
      id: 'scatter',
      title: 'Scatter Plot',
      type: 'scatter',
      labels: Array.from({length:25}, (_, i) => i + 1),
      data: Array.from({length:25}, () => Math.round(15 + Math.random() * 70)),
      strengths: ['Reveals relationships and correlations', 'Shows clusters and outliers clearly', 'Good for regression analysis', 'Handles large datasets well'],
      weaknesses: ['Overplotting in very large datasets', 'No inherent temporal sequence', 'Can be misleading without proper scaling'],
      use: 'Explore relationships between two continuous numerical variables',
      python: "plt.scatter(x_values, y_values, alpha=0.7)\nplt.xlabel('X Variable')\nplt.ylabel('Y Variable')\nplt.title('Scatter Plot Analysis')\nplt.show()",
      description: "Scatter plots are perfect for investigating relationships between two numerical variables. Each point represents one observation, and the overall pattern reveals correlation, clustering, or outliers in the data."
    },
    {
      id: 'hist',
      title: 'Histogram',
      type: 'bar',
      labels: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70'],
      data: [5, 12, 18, 25, 20, 8, 3],
      strengths: ['Shows distribution shape clearly', 'Reveals data skewness and modality', 'Good for identifying normal distributions', 'Easy frequency interpretation'],
      weaknesses: ['Sensitive to bin size selection', 'Can be misleading with poor bin choices', 'Loses individual data point information'],
      use: 'Display frequency distribution of a single numerical variable',
      python: "plt.hist(data, bins=10, edgecolor='black', alpha=0.7)\nplt.xlabel('Value Ranges')\nplt.ylabel('Frequency')\nplt.title('Distribution Histogram')\nplt.show()",
      description: "Histograms reveal the underlying frequency distribution of numerical data by grouping values into bins. The shape of the histogram helps identify patterns like normality, skewness, or multimodal distributions."
    },
    {
      id: 'box',
      title: 'Box Plot',
      type: 'image',
      imageUrl: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/bbe19445-8094-42f7-a86c-101c6e987e9a.png',
      strengths: ['Summarizes distribution with 5-number summary', 'Clearly displays outliers', 'Great for comparing multiple distributions', 'Compact visualization of spread'],
      weaknesses: ['Hides underlying distribution shape', 'Can be misinterpreted without statistical knowledge', 'May not show multimodal patterns'],
      use: 'Compare distributions and identify outliers across groups or time periods',
      python: "plt.boxplot(data_groups, labels=group_names)\nplt.ylabel('Values')\nplt.title('Distribution Comparison')\nplt.grid(True, alpha=0.3)\nplt.show()",
      description: "Box plots (box-and-whisker plots) provide a standardized way to display distribution through quartiles. The box shows the interquartile range (IQR), the line inside shows the median, whiskers extend to reasonable extremes, and points beyond are outliers. Perfect for comparing distributions across groups."
    },
    {
      id: 'pie',
      title: 'Pie Chart',
      type: 'pie',
      labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
      data: [30, 25, 20, 15, 10],
      strengths: ['Intuitive for part-to-whole relationships', 'Easy to understand proportions', 'Visually appealing for presentations', 'Good for few categories'],
      weaknesses: ['Difficult to compare small differences', 'Poor with many categories', 'Cannot show trends over time', '3D versions can be misleading'],
      use: 'Show proportions of a whole when you have few categories (ideally 2-5)',
      python: "plt.pie(values, labels=categories, autopct='%1.1f%%', startangle=90)\nplt.title('Proportion Distribution')\nplt.axis('equal')\nplt.show()",
      description: "Pie charts are designed to show parts of a whole, where each slice represents a proportion of the total. They work best with a small number of categories where the proportional relationships are the main focus."
    },
    {
      id: 'heat',
      title: 'Heatmap',
      type: 'image',
      imageUrl: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/bf29e23b-9025-4ff4-a577-b7e4c07bd96a.png',
      strengths: ['Excellent for correlation matrices', 'Patterns visible at a glance', 'Scales well with matrices', 'Good for large datasets', 'Color encoding is intuitive'],
      weaknesses: ['Color perception varies between individuals', 'Can be overwhelming with too much data', 'Requires good color scale selection'],
      use: 'Visualize correlation matrices, 2D data intensity, or patterns in large datasets',
      python: "import seaborn as sns\nsns.heatmap(correlation_matrix, \n annot=True, cmap='coolwarm', \n center=0, square=True)\nplt.title('Correlation Heatmap')\nplt.show()",
      description: "Heatmaps use color intensity to represent values in a 2D matrix. They're particularly powerful for correlation matrices, showing relationships between multiple variables, or displaying patterns in large datasets where individual values would be hard to read."
    },
    {
      id: 'area',
      title: 'Area Chart',
      type: 'image',
      imageUrl: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/2026296c-e157-4c1e-8b2b-de7630e90b80.png',
      strengths: ['Emphasizes magnitude and volume', 'Great for cumulative data', 'Shows part-to-whole over time', 'Visually impactful for presentations'],
      weaknesses: ['Stacked areas difficult to compare', 'Overlapping can cause confusion', 'Can misrepresent data if not used carefully'],
      use: 'Display cumulative totals over time or show how parts contribute to a whole over time',
      python: "plt.fill_between(x_values, y_values, alpha=0.4, label='Area')\nplt.plot(x_values, y_values, linewidth=2)\nplt.xlabel('Time')\nplt.ylabel('Cumulative Value')\nplt.title('Area Chart')\nplt.show()",
      description: "Area charts are essentially line charts with the area below the line filled. They're perfect for showing cumulative data over time or emphasizing the magnitude of changes. Stacked area charts can show how different categories contribute to a total over time."
    },
    {
      id: 'gantt',
      title: 'Gantt Chart',
      type: 'image',
      imageUrl: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/352a032a-56fa-4dd6-a15c-4b9700f76ba7.png',
      strengths: ['Excellent for project planning', 'Shows task dependencies clearly', 'Provides timeline overview', 'Helps with resource allocation'],
      weaknesses: ['Can become complex with many tasks', 'Doesn\'t show resource constraints', 'May not reflect actual priorities', 'Maintenance intensive'],
      use: 'Project management, task scheduling, and timeline visualization with dependencies',
      python: "# Using matplotlib for basic Gantt\nfig, ax = plt.subplots(figsize=(10, 6))\nax.barh(tasks, durations, left=start_dates, height=0.6)\nax.set_xlabel('Timeline')\nax.set_ylabel('Tasks')\nax.set_title('Project Gantt Chart')\nplt.show()",
      description: "Gantt charts are specialized bar charts for project management. They show tasks as horizontal bars positioned along a timeline, making it easy to see project schedules, task durations, dependencies, and overall project progress."
    },
    {
      id: 'funnel',
      title: 'Funnel Chart',
      type: 'image',
      imageUrl: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/ba55a1a2-28ca-4a87-8e10-91af9904be1a.png',
      strengths: ['Perfect for conversion analysis', 'Clearly shows drop-off rates', 'Intuitive funnel metaphor', 'Great for process optimization'],
      weaknesses: ['Assumes linear sequential process', 'Limited to simple workflows', 'Doesn\'t show reasons for drop-offs', 'Can oversimplify complex processes'],
      use: 'Sales pipelines, conversion processes, user journey analysis, and sequential workflows',
      python: "# Using plotly for funnel charts\nimport plotly.express as px\nfig = px.funnel(df, x='count', y='stage', \n title='Conversion Funnel')\nfig.show()\n\n# Or with matplotlib (simplified)\nwidths = [100, 80, 60, 40, 20]\ny_pos = range(len(stages))\nplt.barh(y_pos, widths, align='center')\nplt.yticks(y_pos, stages)\nplt.show()",
      description: "Funnel charts visualize sequential processes where each stage has fewer items than the previous one. They're essential for analyzing conversion rates in sales, marketing, and user experience, clearly showing where the biggest drop-offs occur."
    },
    {
      id: 'wordcloud',
      title: 'Word Cloud',
      type: 'image',
      imageUrl: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/34f8cb96-70ca-45f7-8c32-f44125671f0d.png',
      strengths: ['Visually appealing for text data', 'Quick overview of key terms', 'Good for presentations', 'Intuitive frequency representation', 'Engaging for audiences'],
      weaknesses: ['Lacks precise quantitative information', 'Can be misleading with font sizes', 'No context for relationships', 'Aesthetic over analytical', 'Poor for exact comparisons'],
      use: 'Text analysis, keyword visualization, social media content analysis, survey responses, content themes',
      python: "from wordcloud import WordCloud\nimport matplotlib.pyplot as plt\n\n# Generate word cloud\nwordcloud = WordCloud(width=800, height=400, \n background_color='white',\n colormap='viridis',\n max_words=100).generate(text)\n\n# Display\nplt.figure(figsize=(10, 5))\nplt.imshow(wordcloud, interpolation='bilinear')\nplt.axis('off')\nplt.title('Word Cloud Visualization')\nplt.show()",
      description: "Word clouds display text data where word size represents frequency or importance. While visually striking and engaging for presentations, they should be used carefully as they can be misleading and lack precise quantitative information. Best for getting a quick visual sense of dominant themes in text data."
    },
    {
      id: 'violin',
      title: 'Violin Plot',
      type: 'image',
      imageUrl: 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/8f04a3a9-a1aa-4fc6-8207-8145392170f9.png',
      strengths: ['Shows full distribution shape', 'Combines box plot with density curves', 'Excellent for comparing distributions', 'Reveals multimodal patterns', 'More informative than box plots alone'],
      weaknesses: ['Complex for non-statistical audiences', 'Can be misleading with small samples', 'Requires statistical understanding', 'Takes more space than simple plots'],
      use: 'Advanced statistical analysis, comparing complex distributions, research presentations, showing distribution shapes',
      python: "import seaborn as sns\nimport matplotlib.pyplot as plt\n\n# Create violin plot\nsns.violinplot(data=df, x='category', y='values', \n inner='box', palette='Set2')\nplt.title('Distribution Comparison - Violin Plot')\nplt.xlabel('Categories')\nplt.ylabel('Values')\nplt.show()\n\n# Alternative with matplotlib\nparts = plt.violinplot([group1_data, group2_data, group3_data],\n positions=[1, 2, 3])\nplt.show()",
      description: "Violin plots combine box plots with kernel density estimation to show both summary statistics and the full distribution shape. The 'violin' shape shows the density of data at different values - wider sections indicate more data points at that value. They're powerful for statistical analysis but require audience familiarity with statistical concepts."
    },
    {
      id: 'scatterplot_matrix',
      title: 'Scatterplot Matrix',
      type: 'image',
      imageUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20230307171405/output-for-pair()-function-2-768.png',
      strengths: ['Shows pairwise relationships', 'Reveals correlations across variables', 'Good for multivariate analysis', 'Identifies patterns in multidimensional data'],
      weaknesses: ['Can be overwhelming with many variables', 'Diagonal is less useful', 'Requires space for multiple plots'],
      use: 'Multivariate data exploration, correlation analysis',
      python: "import seaborn as sns\nsns.pairplot(df)\nplt.show()",
      description: "Scatterplot matrices display pairwise relationships between multiple variables in a grid format. Each cell shows a scatter plot of two variables, making it easy to spot correlations and patterns in multivariate data."
    },
    {
      id: 'parallel_coordinates',
      title: 'Parallel Coordinates',
      type: 'image',
      imageUrl: 'https://datavizproject.com/wp-content/uploads/types/Parallel-Coordinates.png',
      strengths: ['Visualizes high-dimensional data', 'Shows relationships across multiple variables', 'Good for clustering detection', 'Reveals patterns in multivariate datasets'],
      weaknesses: ['Can become cluttered with many lines', 'Order of axes affects interpretation', 'Scalability issues with large datasets'],
      use: 'Multidimensional data analysis, pattern discovery in multivariate data',
      python: "from pandas.plotting import parallel_coordinates\nparallel_coordinates(df, class_column='category')\nplt.show()",
      description: "Parallel coordinates plot multidimensional data as lines crossing parallel axes, each representing a variable. This allows visualization of high-dimensional patterns and clusters."
    },
    {
      id: 'word_tree',
      title: 'Word Tree',
      type: 'image',
      imageUrl: 'https://static.anychart.com/docs/images/basic-charts-word-tree.png',
      strengths: ['Shows word context and hierarchies', 'Visualizes phrase patterns', 'Good for text exploration', 'Reveals common sequences'],
      weaknesses: ['Limited to specific phrases', 'Can be complex for long texts', 'Requires interactive exploration'],
      use: 'Text pattern analysis, phrase context visualization',
      python: "# Word trees typically require specialized libraries or custom implementation\n# Example using graphviz for tree structure\nimport graphviz\ndot = graphviz.Digraph()\ndot.node('root', 'cats')\ndot.edge('root', 'eat')\ndot.edge('root', 'sleep')\nprint(dot.source)",
      description: "Word trees display hierarchical context around words or phrases in text data, branching out to show common preceding or following words."
    },
    {
      id: 'slope_chart',
      title: 'Slope Chart',
      type: 'image',
      imageUrl: 'https://datavizproject.com/wp-content/uploads/types/Slope-Chart.png',
      strengths: ['Shows changes between two points', 'Emphasizes increases/decreases', 'Good for before-after comparisons', 'Simple and focused'],
      weaknesses: ['Limited to two time points', 'Can be cluttered with many lines', 'No intermediate data shown'],
      use: 'Before-after comparisons, change visualization over two periods',
      python: "plt.plot([0,1], [start_values, end_values])\nplt.xticks([0,1], ['Before', 'After'])\nplt.show()",
      description: "Slope charts connect values between two time points or categories, emphasizing the magnitude and direction of changes."
    },
    {
      id: 'treemap',
      title: 'Treemap',
      type: 'image',
      imageUrl: 'https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/treemap-chart-example.svg',
      strengths: ['Displays hierarchical data', 'Shows part-to-whole relationships', 'Efficient space usage', 'Good for large datasets'],
      weaknesses: ['Hard to compare small areas', 'Limited for non-hierarchical data', 'Color coding essential'],
      use: 'Hierarchical data visualization, file systems, organizational structures',
      python: "import squarify\nsquarify.plot(sizes=values, label=labels, color=colors)\nplt.axis('off')\nplt.show()",
      description: "Treemaps display hierarchical data as nested rectangles, where size represents quantity and nesting shows hierarchy."
    },
    {
      id: 'sankey',
      title: 'Sankey Chart',
      type: 'image',
      imageUrl: 'https://us1.discourse-cdn.com/flex024/uploads/plot/optimized/3X/b/a/bac438eaccb392e50470e3715160cada6dfa5c52_2_1024x508.png',
      strengths: ['Visualizes flow quantities', 'Shows energy/material transfers', 'Good for process analysis', 'Intuitive width representation'],
      weaknesses: ['Complex for many nodes', 'Limited scalability', 'Requires careful layout'],
      use: 'Flow diagrams, energy transfers, process visualization',
      python: "import plotly.graph_objects as go\nfig = go.Figure(data=[go.Sankey(...)])\nfig.show()",
      description: "Sankey charts show flow quantities between nodes, with link width proportional to flow magnitude."
    },
    {
      id: 'waterfall',
      title: 'Waterfall Chart',
      type: 'image',
      imageUrl: 'https://roadmap2health.io/berdapps/waterfall/waterfall_sample.png',
      strengths: ['Shows sequential changes', 'Visualizes cumulative effects', 'Good for financial analysis', 'Clear positive/negative impacts'],
      weaknesses: ['Limited to sequential data', 'Can be complex with many steps', 'Requires specific implementation'],
      use: 'Financial statements, budget analysis, cumulative changes over time',
      python: "# Waterfall typically requires custom implementation\n# Using matplotlib\nplt.bar(range(len(values)), values, bottom=cumulative)\nplt.show()",
      description: "Waterfall charts display sequential additions and subtractions to a starting value, showing how each change contributes to the final total."
    }
  ]
};
/* Enhanced Quiz Data with More Questions */
const QUIZZES = {
  1: {
    title: 'Chapter 1: Introduction to Data Visualization - Comprehensive Quiz',
    questions: [
      {
        type: 'tf',
        text: 'Data visualization is only useful for experts in data analysis.',
        answer: false,
        explanation: 'FALSE: Data visualization is designed to make data accessible to both experts and non-experts. One of its main purposes is to help non-technical audiences understand complex data through visual representation.'
      },
      {
        type: 'tf',
        text: 'Nominal data has an inherent order or ranking.',
        answer: false,
        explanation: 'FALSE: Nominal data has no inherent order (e.g., gender, colors, brands). Ordinal data is the type that has order or ranking (e.g., education levels, satisfaction ratings).'
      },
      {
        type: 'tf',
        text: 'A histogram is a univariate visualization technique.',
        answer: true,
        explanation: 'TRUE: Histograms show the frequency distribution of a single variable, making them univariate (one variable) visualizations.'
      },
      {
        type: 'tf',
        text: 'Humans process visual information 60,000 times faster than text.',
        answer: true,
        explanation: 'TRUE: This is a well-established fact in cognitive psychology - visual processing is significantly faster than text processing, which is why data visualization is so effective.'
      },
      {
        type: 'tf',
        text: 'Primary data is collected from secondary sources like books and reports.',
        answer: false,
        explanation: 'FALSE: Primary data is collected first-hand through surveys, experiments, and direct observation. Secondary data comes from books, reports, and databases created by others.'
      },
      {
        type: 'mc',
        text: 'Which type of data is countable but not measurable on a continuous scale?',
        options: ['Continuous', 'Discrete', 'Nominal', 'Ordinal'],
        answer: 1,
        explanation: 'ANSWER: b) Discrete. Discrete data consists of countable values (like number of students, cars, etc.) but cannot take any value within a range like continuous data can.'
      },
      {
        type: 'mc',
        text: 'What is the best design practice for data visualization?',
        options: ['Make it as complex as possible', 'Keep it simple and uncluttered', 'Use random colors', 'Avoid labels'],
        answer: 1,
        explanation: 'ANSWER: b) Keep it simple and uncluttered. Simplicity and clarity are fundamental principles of effective data visualization design.'
      },
      {
        type: 'mc',
        text: 'Which measurement scale has a true zero point?',
        options: ['Nominal', 'Ordinal', 'Interval', 'Ratio'],
        answer: 3,
        explanation: 'ANSWER: d) Ratio. Ratio scales have all properties of other scales plus a true zero point, allowing for meaningful ratios (e.g., height, weight, age).'
      },
      {
        type: 'mc',
        text: 'Specialized visualizations include:',
        options: ['Only basic charts', 'Sankey diagrams and network graphs', 'Just pie charts', 'Only bar charts'],
        answer: 1,
        explanation: 'ANSWER: b) Sankey diagrams and network graphs. These are examples of specialized visualizations for specific purposes like flow analysis and relationship mapping.'
      },
      {
        type: 'open',
        text: 'Scenario: You have sales data for different products in a single year. What chart is best to compare the sales across products and why?',
        rubric: 'Bar chart - allows clear comparison of categorical data (products) with numerical values (sales)',
        explanation: 'ANSWER: Bar chart. This is ideal because you have categorical data (different products) on one axis and numerical data (sales figures) on the other. Bar charts excel at comparing quantities across distinct categories, making it easy to see which products performed best.'
      },
      {
        type: 'open',
        text: 'Explain the difference between structured and unstructured data with examples.',
        rubric: 'Structured: organized in rows/columns (databases, spreadsheets). Unstructured: no fixed format (text, images, videos)',
        explanation: 'ANSWER: Structured data is organized in defined formats like rows and columns (e.g., databases, spreadsheets, CSV files). Unstructured data has no predefined format or organization (e.g., text documents, images, videos, social media posts). Semi-structured data falls between these, having some organization but not strict formatting (e.g., JSON, XML).'
      }
    ]
  },
  2: {
    title: 'Chapter 2: Data Visualization Principles and Categories - Enhanced Quiz',
    questions: [
      {
        type: 'tf',
        text: 'The first principle of data visualization is to choose the software before planning.',
        answer: false,
        explanation: 'FALSE: The first principle is "Diagram First" - you should envision and plan your visualization concept before selecting tools or software.'
      },
      {
        type: 'tf',
        text: 'Bar charts are excellent for displaying categorical data.',
        answer: true,
        explanation: 'TRUE: Bar charts are specifically designed for comparing categorical data, making them one of the best choices for this type of data.'
      },
      {
        type: 'tf',
        text: 'There are exactly ten principles listed in the data visualization guidelines.',
        answer: false,
        explanation: 'FALSE: The chapter discusses around 7-9 main principles, not exactly ten. The principles include Diagram First, Choose Right Software, Effective Geometry, Appropriate Colors, Context and Consistency, Detailed Captions, and Get Feedback.'
      },
      {
        type: 'tf',
        text: 'Colorful visualizations have higher memorability scores than monochrome ones.',
        answer: true,
        explanation: 'TRUE: Research shows that colorful visualizations are more memorable than black and white ones, though color should be used purposefully, not randomly.'
      },
      {
        type: 'tf',
        text: 'Interactive visualizations are not considered when choosing visualization techniques.',
        answer: false,
        explanation: 'FALSE: Interactivity is specifically mentioned as an important factor when choosing visualization techniques, especially for digital platforms and user engagement.'
      },
      {
        type: 'mc',
        text: 'Which color scheme is best for showing categories without inherent order?',
        options: ['Sequential', 'Diverging', 'Qualitative', 'Grayscale'],
        answer: 2,
        explanation: 'ANSWER: c) Qualitative. Qualitative color schemes use distinct colors to represent different categories that have no natural ordering or hierarchy.'
      },
      {
        type: 'mc',
        text: 'For showing trends over time, which visualization is most suitable?',
        options: ['Pie chart', 'Line chart', 'Histogram', 'Box plot'],
        answer: 1,
        explanation: 'ANSWER: b) Line chart. Line charts are specifically designed to show trends and changes over continuous time periods.'
      },
      {
        type: 'mc',
        text: 'What is a key factor in choosing the right visualization technique?',
        options: ['Data type and structure', 'Weather conditions', 'Time of day', 'Personal preference only'],
        answer: 0,
        explanation: 'ANSWER: a) Data type and structure. The nature of your data (categorical, numerical, temporal) is the primary factor in selecting appropriate visualization techniques.'
      },
      {
        type: 'mc',
        text: 'Which category is best for displaying trends and relationships over time?',
        options: ['Chart', 'Graph', 'Table', 'Dashboard'],
        answer: 1,
        explanation: 'ANSWER: b) Graph. Graphs (like line graphs, area graphs) are specifically designed to display trends, relationships, and correlations over time or across variables.'
      },
      {
        type: 'open',
        text: 'Scenario: You need to show the correlation between temperature and ice cream sales over several months. Which visualization technique should you use and why?',
        rubric: 'Scatter plot - perfect for showing relationship/correlation between two continuous numerical variables',
        explanation: 'ANSWER: Scatter plot. This is ideal because you have two continuous numerical variables (temperature and sales) on one axis and want to explore their relationship. Each point represents one time period, and the overall pattern will reveal the correlation between temperature and ice cream sales.'
      },
      {
        type: 'open',
        text: 'Explain why "Diagram First" is considered the most important principle in data visualization.',
        rubric: 'Forces you to think about the core message and visual objective before getting distracted by tools and technical details',
        explanation: 'ANSWER: "Diagram First" is crucial because it forces you to clarify your communication objectives before getting caught up in technical details. By envisioning the information you want to convey and deciding whether you\'re doing comparison, ranking, or composition, you ensure your visualization will actually serve its intended purpose rather than just looking pretty.'
      }
    ]
  },
  3: {
    title: 'Chapter 3: Data Preprocessing and Transformation - Advanced Quiz',
    questions: [
      {
        type: 'tf',
        text: 'Data cleaning is the least important step in the preprocessing pipeline.',
        answer: false,
        explanation: 'FALSE: Data cleaning is explicitly stated as the MOST important step in preprocessing because it ensures your data is accurate and ready for analysis.'
      },
      {
        type: 'tf',
        text: 'Missing values can be handled through imputation using mean, median, or mode.',
        answer: true,
        explanation: 'TRUE: These are standard imputation methods - mean for normally distributed numerical data, median for skewed numerical data, and mode for categorical data.'
      },
      {
        type: 'tf',
        text: 'Data integration uses a triple (G, S, M) strategy.',
        answer: true,
        explanation: 'TRUE: The formal approach uses G (Global schema), S (heterogeneous Source schemas), and M (Mapping between source and global schemas).'
      },
      {
        type: 'tf',
        text: 'Z-score normalization uses minimum and maximum values.',
        answer: false,
        explanation: 'FALSE: Z-score normalization uses the mean and standard deviation: (value - mean) / standard deviation. Min-max normalization uses minimum and maximum values.'
      },
      {
        type: 'tf',
        text: 'Data reduction techniques are used to increase data storage requirements.',
        answer: false,
        explanation: 'FALSE: Data reduction techniques are specifically designed to REDUCE storage and computation costs while preserving essential information.'
      },
      {
        type: 'mc',
        text: 'Which is a primary technique for handling noisy data?',
        options: ['Binning', 'Generalization', 'Aggregation', 'All of the above'],
        answer: 0,
        explanation: 'ANSWER: a) Binning. While other techniques exist, binning is specifically mentioned as the primary method for handling noisy data by grouping values and smoothing them.'
      },
      {
        type: 'mc',
        text: 'Z-score normalization uses which statistical measures?',
        options: ['Min and max values', 'Mean and standard deviation', 'Median and mode', 'Range and quartiles'],
        answer: 1,
        explanation: 'ANSWER: b) Mean and standard deviation. Z-score normalization transforms data using (value - mean) / standard deviation.'
      },
      {
        type: 'mc',
        text: 'What is a major task in data preprocessing?',
        options: ['Data visualization', 'Data integration', 'Data deletion', 'Data duplication'],
        answer: 1,
        explanation: 'ANSWER: b) Data integration. The four major tasks in preprocessing are: data cleaning, data integration, data transformation, and data reduction.'
      },
      {
        type: 'mc',
        text: 'Which normalization technique scales data to a [0,1] range?',
        options: ['Z-score normalization', 'Min-max normalization', 'Decimal scaling', 'Log transformation'],
        answer: 1,
        explanation: 'ANSWER: b) Min-max normalization. This technique transforms data to fit within a [0,1] range using (value - min) / (max - min).'
      },
      {
        type: 'open',
        text: 'Scenario: Your dataset has many duplicates and missing values in a numerical column. Describe the preprocessing steps you would take.',
        rubric: 'Remove duplicates using deduplication methods; handle missing values through imputation (mean/median/KNN) or deletion; validate results',
        explanation: 'ANSWER: 1) First, identify and remove duplicates using appropriate deduplication techniques. 2) For missing numerical values, choose imputation method based on data distribution: use mean for normal distribution, median for skewed data, or KNN for more sophisticated imputation. 3) Document the percentage of missing data and chosen method. 4) Validate that the imputation maintains data integrity and doesn\'t introduce bias.'
      },
      {
        type: 'open',
        text: 'Explain the difference between dimensionality reduction and numerosity reduction with examples.',
        rubric: 'Dimensionality: removes features/variables (PCA). Numerosity: reduces number of data points (sampling, clustering)',
        explanation: 'ANSWER: Dimensionality reduction reduces the number of features/variables in the dataset (e.g., using PCA to reduce 100 features to 10 principal components, or feature selection to remove irrelevant variables). Numerosity reduction reduces the number of data records/instances (e.g., sampling to take every 10th record, or clustering to represent groups with centroids).'
      }
    ]
  },
  4: {
    title: 'Chapter 4: Python Implementation - Comprehensive Technical Quiz',
    questions: [
      {
        type: 'tf',
        text: 'Matplotlib is a high-level library compared to Seaborn.',
        answer: false,
        explanation: 'FALSE: Matplotlib is LOW-level and requires more code for complex plots. Seaborn is HIGH-level and built on top of Matplotlib, providing easier interfaces for statistical visualizations.'
      },
      {
        type: 'tf',
        text: 'plt.show() is used to display plots in Matplotlib.',
        answer: true,
        explanation: 'TRUE: plt.show() is the standard function to render and display plots in Matplotlib. It\'s essential for actually seeing your visualizations.'
      },
      {
        type: 'tf',
        text: 'Seaborn is built on top of Matplotlib.',
        answer: true,
        explanation: 'TRUE: Seaborn is a higher-level statistical data visualization library that uses Matplotlib as its underlying plotting engine.'
      },
      {
        type: 'tf',
        text: 'plt.barh() creates vertical bar charts.',
        answer: false,
        explanation: 'FALSE: plt.barh() creates HORIZONTAL bar charts. plt.bar() creates vertical bar charts.'
      },
      {
        type: 'tf',
        text: 'WordCloud visualization requires importing from the matplotlib library.',
        answer: false,
        explanation: 'FALSE: WordCloud requires a separate import: "from wordcloud import WordCloud". It\'s not part of the standard matplotlib library.'
      },
      {
        type: 'mc',
        text: 'Which function creates a histogram in Matplotlib?',
        options: ['plt.plot()', 'plt.hist()', 'plt.bar()', 'plt.pie()'],
        answer: 1,
        explanation: 'ANSWER: b) plt.hist(). This function specifically creates histograms by binning numerical data and showing frequency distributions.'
      },
      {
        type: 'mc',
        text: 'For text frequency visualization, you need to import from:',
        options: ['matplotlib', 'numpy', 'wordcloud', 'pandas'],
        answer: 2,
        explanation: 'ANSWER: c) wordcloud. Word cloud visualizations require the separate wordcloud library: "from wordcloud import WordCloud".'
      },
      {
        type: 'mc',
        text: 'Which is the correct import statement for Matplotlib plotting?',
        options: ['import plt.matplotlib', 'import matplotlib.pyplot as plt', 'import seaborn as plt', 'import numpy.plot as plt'],
        answer: 1,
        explanation: 'ANSWER: b) import matplotlib.pyplot as plt. This is the standard way to import Matplotlib\'s pyplot interface.'
      },
      {
        type: 'mc',
        text: 'What is a key advantage of Seaborn over Matplotlib?',
        options: ['Lower-level control', 'More lines of code required', 'Built-in statistical plotting functions', 'Slower performance'],
        answer: 2,
        explanation: 'ANSWER: c) Built-in statistical plotting functions. Seaborn provides high-level functions for complex statistical visualizations that would require many lines of code in pure Matplotlib.'
      },
      {
        type: 'mc',
        text: 'Which function would you use to create a correlation heatmap?',
        options: ['plt.heat()', 'sns.heatmap()', 'plt.correlation()', 'np.heatmap()'],
        answer: 1,
        explanation: 'ANSWER: b) sns.heatmap(). Seaborn\'s heatmap function is specifically designed for creating correlation matrices and other heatmap visualizations.'
      },
      {
        type: 'open',
        text: 'Scenario: You want to plot sales over time for multiple products. What function and library would you use? Write the basic code structure.',
        rubric: 'Use plt.plot() for multiple lines or seaborn plt.lineplot; include labels and legend',
        explanation: 'ANSWER: Use plt.plot() with multiple calls or seaborn\'s lineplot(). Code example:\n```python\nplt.plot(dates, sales_product1, label=\'Product 1\')\nplt.plot(dates, sales_product2, label=\'Product 2\')\nplt.xlabel(\'Date\')\nplt.ylabel(\'Sales\')\nplt.legend()\nplt.title(\'Sales Trends Over Time\')\nplt.show()\n```\nAlternatively: sns.lineplot(data=df, x=\'date\', y=\'sales\', hue=\'product\')'
      },
      {
        type: 'open',
        text: 'Write the complete code to create a histogram of age data with proper labels and styling.',
        rubric: 'Include plt.hist(), labels, title, bins parameter, and plt.show()',
        explanation: 'ANSWER: Complete histogram code:\n```python\nimport matplotlib.pyplot as plt\n\nplt.hist(ages, bins=15, edgecolor=\'black\', alpha=0.7)\nplt.xlabel(\'Age\')\nplt.ylabel(\'Frequency\')\nplt.title(\'Age Distribution Histogram\')\nplt.grid(True, alpha=0.3)\nplt.show()\n```\nKey elements: bins parameter for grouping, edgecolor for clarity, alpha for transparency, labels, and grid for readability.'
      }
    ]
  },
  5: {
    title: 'Chapter 5: Visual Encoding - Comprehensive Quiz',
    questions: [
      {
        type: 'tf',
        text: 'Marks are geometric primitives like points (0D) and lines (1D).',
        answer: true,
        explanation: 'TRUE: Marks are basic graphical elements classified by dimensionality: points (0D), lines (1D), areas (2D).'
      },
      {
        type: 'tf',
        text: 'Channels control the appearance of marks, such as position and color.',
        answer: true,
        explanation: 'TRUE: Channels like position, color, size encode data differences independently of mark geometry.'
      },
      {
        type: 'tf',
        text: 'Expressiveness ensures visualizations include everything needed without misleading elements.',
        answer: true,
        explanation: 'TRUE: Expressiveness means showing all relevant data accurately without implying false relationships.'
      },
      {
        type: 'tf',
        text: 'Color hue is the best channel for representing quantitative data.',
        answer: false,
        explanation: 'FALSE: Position or length is better for quantitative data. Hue is for categorical data.'
      },
      {
        type: 'tf',
        text: 'Visual popout is also known as preattentive processing.',
        answer: true,
        explanation: 'TRUE: Popout allows instant detection of distinct items without serial search.'
      },
      {
        type: 'mc',
        text: 'Which channel is most effective for quantitative data?',
        options: ['Color hue', 'Position', 'Shape', 'Texture'],
        answer: 1,
        explanation: 'ANSWER: b) Position. Position on a common scale is the most accurate for comparing quantities.'
      },
      {
        type: 'mc',
        text: 'What principle matches attribute importance to channel noticeability?',
        options: ['Expressiveness', 'Effectiveness', 'Discriminability', 'Separability'],
        answer: 1,
        explanation: 'ANSWER: b) Effectiveness. The effectiveness principle states important attributes get highly salient channels.'
      },
      {
        type: 'mc',
        text: 'Which is the primary criterion for channel effectiveness?',
        options: ['Accuracy', 'Cost', 'Speed', 'Size'],
        answer: 0,
        explanation: 'ANSWER: a) Accuracy. How closely perceptual judgment matches objective measurement (per Stevens’ Power Law).'
      },
      {
        type: 'mc',
        text: 'What describes how easily viewers distinguish visual elements?',
        options: ['Accuracy', 'Discriminability', 'Separability', 'Popout'],
        answer: 1,
        explanation: 'ANSWER: b) Discriminability. Measures perceptible differences in channels like color contrast or size differences.'
      },
      {
        type: 'mc',
        text: 'Which channel pair is highly separable?',
        options: ['Size and hue', 'Position and hue', 'Horizontal and vertical size', 'Red and green channels'],
        answer: 1,
        explanation: 'ANSWER: b) Position and hue. They are independent and can be perceived separately without interference.'
      },
      {
        type: 'open',
        text: 'Scenario: You need to encode quantitative data in a visualization. What channel should you use and why?',
        rubric: 'Position or length - most accurate for magnitude judgments',
        explanation: 'ANSWER: Use position (e.g., on a scale) or length (e.g., bar length). These are the highest-ranked magnitude channels for quantitative data per the effectiveness principle, as humans perceive them most accurately for comparing quantities.'
      },
      {
        type: 'open',
        text: 'Explain the difference between identity and magnitude channels with examples.',
        rubric: 'Identity: what/where (shape, color hue). Magnitude: how much (length, size)',
        explanation: 'ANSWER: Identity channels identify categories or locations without implying order (e.g., shape: circle vs square for gender; color hue: red vs blue for departments). Magnitude channels show quantities or ordered values (e.g., length: bar height for sales; size: bubble area for population). Match identity to categorical data and magnitude to quantitative/ordinal data.'
      }
    ]
  },
  6: {
    title: 'Chapter 6: Multivariate Visualization - Enhanced Quiz',
    questions: [
      {
        type: 'tf',
        text: 'Multivariate visualization involves exactly two variables.',
        answer: false,
        explanation: 'FALSE: Multivariate means MORE than two variables. Bivariate is exactly two.'
      },
      {
        type: 'tf',
        text: 'Heat maps are effective for detecting correlations without clutter.',
        answer: true,
        explanation: 'TRUE: Heat maps use color to show pairwise correlations cleanly in matrices.'
      },
      {
        type: 'tf',
        text: 'Correlation measures range from -1 to +1.',
        answer: true,
        explanation: 'TRUE: -1 (perfect negative), 0 (none), +1 (perfect positive correlation).'
      },
      {
        type: 'tf',
        text: 'Parallel coordinates are good for 2D data only.',
        answer: false,
        explanation: 'FALSE: Parallel coordinates are designed for multidimensional (high-D) data visualization.'
      },
      {
        type: 'tf',
        text: 'Dimensionality reduction is a key step in multivariate analysis.',
        answer: true,
        explanation: 'TRUE: Techniques like PCA reduce variables while preserving information.'
      },
      {
        type: 'mc',
        text: 'Which technique uses parallel axes for multidimensional data?',
        options: ['Scatterplot Matrix', 'Parallel Coordinates', 'Heat Map', 'Treemap'],
        answer: 1,
        explanation: 'ANSWER: b) Parallel Coordinates. Lines cross parallel axes representing different variables.'
      },
      {
        type: 'mc',
        text: 'What is the first step in multivariate analysis?',
        options: ['Data Preparation', 'Interpretation', 'Visualization', 'Publication'],
        answer: 0,
        explanation: 'ANSWER: a) Data Preparation. Clean and organize data before analysis.'
      },
      {
        type: 'mc',
        text: 'Which is a geometric projection technique?',
        options: ['Heat Map', 'Scatterplot Matrix', 'Dimensional Stacking', 'Pixel Bar'],
        answer: 1,
        explanation: 'ANSWER: b) Scatterplot Matrix. It projects pairs of variables onto a grid of scatterplots.'
      },
      {
        type: 'mc',
        text: 'Pixel-oriented techniques are good for:',
        options: ['Small datasets only', 'Detecting relationships without clutter', 'Hierarchical data', 'Time series only'],
        answer: 1,
        explanation: 'ANSWER: b) Detecting relationships without clutter. Use pixels and color scales efficiently.'
      },
      {
        type: 'mc',
        text: 'Hierarchical display techniques include:',
        options: ['Scatterplot Matrix', 'Parallel Coordinates', 'Dimensional Stacking', 'Heat Map'],
        answer: 2,
        explanation: 'ANSWER: c) Dimensional Stacking. Subdivides space hierarchically.'
      },
      {
        type: 'open',
        text: 'Scenario: You have a dataset with 5 variables. What technique would you use to visualize pairwise relationships?',
        rubric: 'Scatterplot Matrix or pairplot - shows all pairs in a grid',
        explanation: 'ANSWER: Scatterplot Matrix (or sns.pairplot in Python). This creates a grid where each cell is a scatterplot of two variables, allowing quick visual inspection of all pairwise relationships and correlations.'
      },
      {
        type: 'open',
        text: 'Explain the steps for multivariate data analysis.',
        rubric: 'Preparation, variable selection, dimensionality reduction, visualization, interpretation',
        explanation: 'ANSWER: 1) Data Preparation: Clean and organize. 2) Variable Selection: Choose relevant ones. 3) Dimensionality Reduction: Use PCA if needed. 4) Visualization Selection: Choose technique like heatmap or parallel coordinates. 5) Interpretation: Analyze patterns and insights.'
      }
    ]
  },
  7: {
    title: 'Chapter 7: Text Visualization - Comprehensive Quiz',
    questions: [
      {
        type: 'tf',
        text: 'Text visualization is primarily for quantitative data frequency.',
        answer: false,
        explanation: 'FALSE: It\'s for qualitative text data, showing word frequencies and patterns.'
      },
      {
        type: 'tf',
        text: 'TF-IDF evaluates word importance in documents relative to a corpus.',
        answer: true,
        explanation: 'TRUE: Term Frequency-Inverse Document Frequency measures relevance.'
      },
      {
        type: 'tf',
        text: 'Tokenization breaks texts into smaller units like words or characters.',
        answer: true,
        explanation: 'TRUE: Fundamental text processing step for analysis.'
      },
      {
        type: 'tf',
        text: 'Stemming increases word variations instead of reducing them.',
        answer: false,
        explanation: 'FALSE: Stemming reduces words to root form (likes → like).'
      },
      {
        type: 'tf',
        text: 'Word clouds provide precise quantitative analysis of text.',
        answer: false,
        explanation: 'FALSE: They\'re more aesthetic; sizes are approximate, lack exact counts.'
      },
      {
        type: 'mc',
        text: 'Which technique reduces inflected words to their root form?',
        options: ['Tokenization', 'Stemming', 'Bag of Words', 'TF-IDF'],
        answer: 1,
        explanation: 'ANSWER: b) Stemming. E.g., "running" → "run", "likes" → "like".'
      },
      {
        type: 'mc',
        text: 'What is commonly used to visualize word frequency in text?',
        options: ['Word Clouds', 'Sankey Chart', 'Waterfall Chart', 'Gantt Chart'],
        answer: 0,
        explanation: 'ANSWER: a) Word Clouds. Size represents frequency/importance.'
      },
      {
        type: 'mc',
        text: 'Which shows hierarchical relationships in text?',
        options: ['Slope Chart', 'Word Tree', 'Parallel Coordinates', 'Heat Map'],
        answer: 1,
        explanation: 'ANSWER: b) Word Tree. Shows context branching from root words.'
      },
      {
        type: 'mc',
        text: 'TF-IDF stands for:',
        options: ['Text Frequency-Inverse Data', 'Term Frequency-Inverse Document Frequency', 'Token Frequency-ID Format', 'Text Flow-IDF'],
        answer: 1,
        explanation: 'ANSWER: b) Term Frequency-Inverse Document Frequency. Measures word importance.'
      },
      {
        type: 'mc',
        text: 'Which visualization shows flow quantities?',
        options: ['Word Cloud', 'Treemap', 'Sankey Chart', 'Slope Chart'],
        answer: 2,
        explanation: 'ANSWER: c) Sankey Chart. Width represents quantity in flows.'
      },
      {
        type: 'open',
        text: 'Scenario: You have customer reviews text data. What visualization would show key themes?',
        rubric: 'Word cloud - visualizes frequent words as themes',
        explanation: 'ANSWER: Word Cloud. Generate from processed text to show frequent words larger, giving quick overview of main themes and sentiments in reviews.'
      },
      {
        type: 'open',
        text: 'Explain how to calculate TF-IDF with a simple example.',
        rubric: 'TF = term freq in doc, IDF = log(total docs / docs with term), TF-IDF = TF * IDF',
        explanation: 'ANSWER: TF = (term occurrences in doc) / (total words in doc). IDF = log(total docs / docs containing term). TF-IDF = TF * IDF. Example: Term "quick" in doc1: TF=2/5=0.4, IDF=log(3/2)≈0.176, TF-IDF≈0.07.'
      }
    ]
  },
  8: {
    title: 'Chapter 8: Time Series Visualization - Enhanced Quiz',
    questions: [
      {
        type: 'tf',
        text: 'Time series data consists of ordered timestamp values at equal intervals.',
        answer: true,
        explanation: 'TRUE: Chronologically ordered at regular intervals for trend analysis.'
      },
      {
        type: 'tf',
        text: 'Bar charts are best for showing continuous trends over time.',
        answer: false,
        explanation: 'FALSE: Line charts are better for continuous trends; bars for discrete comparisons.'
      },
      {
        type: 'tf',
        text: 'Stationarity means constant variance and mean over time.',
        answer: true,
        explanation: 'TRUE: Essential for many forecasting models; check before analysis.'
      },
      {
        type: 'tf',
        text: 'Area charts illustrate cumulative totals effectively.',
        answer: true,
        explanation: 'TRUE: Filled areas show accumulation over time periods.'
      },
      {
        type: 'tf',
        text: 'Resampling increases data frequency only.',
        answer: false,
        explanation: 'FALSE: Resampling can upsample or downsample to change frequency.'
      },
      {
        type: 'mc',
        text: 'Which chart tracks trends over time?',
        options: ['Bar Charts', 'Area Charts', 'Line Charts', 'Pie Charts'],
        answer: 2,
        explanation: 'ANSWER: c) Line Charts. Connect points to show continuous changes.'
      },
      {
        type: 'mc',
        text: 'What changes the frequency of time series data?',
        options: ['Binning', 'Resampling', 'Normalization', 'Imputation'],
        answer: 1,
        explanation: 'ANSWER: b) Resampling. Aggregates or interpolates to new frequency.'
      },
      {
        type: 'mc',
        text: 'Which is a key component of time series?',
        options: ['Color scheme', 'Seasonality', 'Font size', 'Label position'],
        answer: 1,
        explanation: 'ANSWER: b) Seasonality. Repeating patterns, along with trend and outliers.'
      },
      {
        type: 'mc',
        text: 'Waterfall charts display:',
        options: ['Hierarchical data', 'Sequential changes', 'Word frequencies', 'Correlations'],
        answer: 1,
        explanation: 'ANSWER: b) Sequential changes. Shows additions/subtractions cumulatively.'
      },
      {
        type: 'mc',
        text: 'For electricity consumption analysis, use:',
        options: ['Pie chart', 'Line plot with resampling', 'Word cloud', 'Treemap'],
        answer: 1,
        explanation: 'ANSWER: b) Line plot with resampling. Shows trends, weekly/monthly patterns.'
      },
      {
        type: 'open',
        text: 'Scenario: You have daily stock prices. How to visualize weekly trends?',
        rubric: 'Resample to weekly means, plot line chart',
        explanation: 'ANSWER: Use pandas resample: df.resample(\'W\').mean().plot(). Shows smoothed weekly trends from daily data.'
      },
      {
        type: 'open',
        text: 'Explain time series components with examples.',
        rubric: 'Trend (long-term direction), Seasonality (repeating patterns), Outliers (anomalies)',
        explanation: 'ANSWER: Trend: overall increase/decrease (e.g., rising sales). Seasonality: repeating cycles (e.g., holiday peaks). Outliers: unusual points (e.g., sudden spike). Abrupt changes: structural breaks (e.g., policy change effect).'
      }
    ]
  }
};
/* Enhanced Final Test Data */
const FINAL = {
  tf: [
    {text:'Data is valuable in its raw form without any processing or analysis.', answer:false, explanation:'FALSE: Raw data needs to be processed, cleaned, and analyzed to extract valuable insights. "Data is the new oil" only when refined.'},
    {text:'Ordinal data has no inherent order or sequence.', answer:false, explanation:'FALSE: Ordinal data HAS order (like education levels: high school < bachelor < master). Nominal data has no order.'},
    {text:'A scatter plot is a univariate visualization technique.', answer:false, explanation:'FALSE: Scatter plots are BIVARIATE - they show relationships between TWO variables (x and y axes).'},
    {text:'Best practices in data visualization include using cluttered and complex designs.', answer:false, explanation:'FALSE: Best practices emphasize simplicity and avoiding clutter to ensure clear communication.'},
    {text:'According to visualization principles, "Diagram First" is the second most important principle.', answer:false, explanation:'FALSE: "Diagram First" is the FIRST and most important principle - plan before implementing.'},
    {text:'Line charts are primarily designed for displaying categorical data.', answer:false, explanation:'FALSE: Line charts are for continuous data over time. Bar charts are better for categorical data.'},
    {text:'Interactivity is not considered an important factor when choosing visualization techniques.', answer:false, explanation:'FALSE: Interactivity IS specifically mentioned as an important consideration for digital platforms.'},
    {text:'Charts are designed only for continuous numerical data.', answer:false, explanation:'FALSE: Charts work for both categorical (bar charts, pie charts) and continuous data (line charts, histograms).'},
    {text:'Data preprocessing includes data cleaning as one of its major tasks.', answer:true, explanation:'TRUE: The four major preprocessing tasks are: cleaning, integration, transformation, and reduction.'},
    {text:'Missing values in datasets can always be safely ignored without consequences.', answer:false, explanation:'FALSE: Missing values can significantly affect analysis results and must be handled through deletion or imputation.'},
    {text:'Z-score normalization uses minimum and maximum values for scaling.', answer:false, explanation:'FALSE: Z-score uses MEAN and STANDARD DEVIATION. Min-max normalization uses min/max values.'},
    {text:'Data reduction techniques are designed to increase data storage requirements.', answer:false, explanation:'FALSE: Data reduction techniques DECREASE storage and computation costs while preserving information.'},
    {text:'Matplotlib provides an interactive mode through plt.ion().', answer:true, explanation:'TRUE: plt.ion() enables interactive mode in Matplotlib for dynamic plot updates.'},
    {text:'The plt.barh() function creates vertical bar charts.', answer:false, explanation:'FALSE: plt.barh() creates HORIZONTAL bar charts. plt.bar() creates vertical bar charts.'},
    {text:'Word Cloud visualization requires a special import beyond standard matplotlib.', answer:true, explanation:'TRUE: You need "from wordcloud import WordCloud" - it\'s not part of standard matplotlib.'},
    {text:'Area charts are excellent for showing individual data point values with precision.', answer:false, explanation:'FALSE: Area charts emphasize cumulative trends and magnitude, not precise individual values.'},
    {text:'Research shows that humans process visual information faster than text.', answer:true, explanation:'TRUE: Humans process visuals about 60,000 times faster than text, which is why data visualization is so effective.'},
    {text:'Primary data refers to information collected from secondary sources like books.', answer:false, explanation:'FALSE: Primary data is collected FIRST-HAND (surveys, experiments). Secondary data comes from books/reports.'},
    {text:'Binning is the primary technique used for handling duplicate records.', answer:false, explanation:'FALSE: Binning handles NOISY data by grouping values. Duplicate removal uses different deduplication techniques.'},
    {text:'Seaborn is considered a low-level visualization library.', answer:false, explanation:'FALSE: Seaborn is HIGH-LEVEL, built on Matplotlib to provide easier statistical visualization interfaces.'},
    {text:'Marks in visual encoding are classified by their dimensionality.', answer:true, explanation:'TRUE: Points (0D), lines (1D), areas (2D), volumes (3D).'},
    {text:'Channels are dependent on the geometry of marks.', answer:false, explanation:'FALSE: Channels control appearance independent of mark geometry.'},
    {text:'Expressiveness principle requires showing ordered data as unordered.', answer:false, explanation:'FALSE: Ordered data should appear ordered; unordered should not imply order.'},
    {text:'Position is a low-ranked channel for quantitative data.', answer:false, explanation:'FALSE: Position is the HIGHEST-ranked for quantitative data.'},
    {text:'Visual popout works well for complex channel combinations.', answer:false, explanation:'FALSE: Popout is best for single channels; most pairs don\'t support it.'}
  ],
  mc: [
    {text:'What is the fundamental definition of data visualization?', options:['Text-based representation','Graphical representation of data','Audio-based analysis','Video documentation'], answer:1, explanation:'ANSWER: b) Graphical representation of data. Data visualization uses visual elements like charts and graphs to represent information.'},
    {text:'Which of these is an example of quantitative data?', options:['Gender categories','Height measurements','Color preferences','Brand names'], answer:1, explanation:'ANSWER: b) Height measurements. Quantitative data consists of numerical, measurable values.'},
    {text:'Which is an example of specialized data visualization?', options:['Sankey diagram','Simple table','Plain text list','Basic spreadsheet'], answer:0, explanation:'ANSWER: a) Sankey diagram. These show flow and connections, representing specialized visualization beyond basic charts.'},
    {text:'What is the best practice when designing visualizations for non-technical audiences?', options:['Avoid context entirely','Provide clear context and explanations','Use only complex terminology','Ignore aesthetic considerations'], answer:1, explanation:'ANSWER: b) Provide clear context and explanations. Non-technical audiences need additional context to understand data properly.'},
    {text:'What is identified as the first and most important visualization principle?', options:['Choose expensive software','Diagram First - plan your concept','Use complex colors','Get feedback last'], answer:1, explanation:'ANSWER: b) Diagram First. Planning your visual concept before implementation is the foundational principle.'},
    {text:'For displaying data distributions and spread, which visualization is most appropriate?', options:['Pie chart','Box plot','Simple table','Geographic map'], answer:1, explanation:'ANSWER: b) Box plot. Box plots are specifically designed to show distribution summary statistics and spread.'},
    {text:'What is the primary factor when choosing a visualization technique?', options:['Data type and structure','Current weather','Time of day creation','Designer preference only'], answer:0, explanation:'ANSWER: a) Data type and structure. The nature of your data (categorical, numerical, temporal) determines appropriate visualization choices.'},
    {text:'Which category is specifically designed for showing trends and relationships over time?', options:['Static chart','Graph (line/area)','Simple table','Text dashboard'], answer:1, explanation:'ANSWER: b) Graph. Graphs like line charts and area charts excel at showing trends and relationships across time periods.'},
    {text:'What is considered a major task in the data preprocessing pipeline?', options:['Data visualization creation','Data integration','Data deletion permanently','Data duplication intentionally'], answer:1, explanation:'ANSWER: b) Data integration. The major preprocessing tasks are cleaning, integration, transformation, and reduction.'},
    {text:'What is the recommended approach for handling missing values?', options:['Always ignore them','Use imputation or deletion strategies','Always delete entire dataset','Add random values'], answer:1, explanation:'ANSWER: b) Use imputation or deletion strategies. Choose method based on data type and missing percentage.'},
    {text:'Which normalization technique is commonly used in data preprocessing?', options:['Min-max scaling','Random scaling','Deletion scaling','Duplication scaling'], answer:0, explanation:'ANSWER: a) Min-max scaling. This scales data to a specific range, commonly [0,1].'},
    {text:'What is the primary purpose of data reduction techniques?', options:['Increase storage costs','Reduce storage and computation requirements','Add complexity','Remove all data'], answer:1, explanation:'ANSWER: b) Reduce storage and computation requirements while preserving essential information patterns.'},
    {text:'What is the correct way to import Matplotlib for plotting?', options:['import plt.matplotlib','import matplotlib.pyplot as plt','import seaborn as matplotlib','import numpy.plot as plt'], answer:1, explanation:'ANSWER: b) import matplotlib.pyplot as plt. This is the standard conventional import for Matplotlib plotting.'},
    {text:'Which function is used to create pie charts in Matplotlib?', options:['plt.pie()','plt.bar()','plt.hist()','plt.scatter()'], answer:0, explanation:'ANSWER: a) plt.pie(). This function specifically creates pie charts for proportional data.'},
    {text:'What is a key strength of scatter plots for data analysis?', options:['Shows temporal trends','Reveals correlations between variables','Displays proportions','Shows distributions'], answer:1, explanation:'ANSWER: b) Reveals correlations between variables. Scatter plots excel at showing relationships between two numerical variables.'},
    {text:'For creating funnel visualizations, which library provides the best built-in support?', options:['Basic matplotlib','Plotly','Standard numpy','Simple pandas'], answer:1, explanation:'ANSWER: b) Plotly. Plotly provides excellent built-in funnel chart capabilities with px.funnel().'},
    {text:'What characteristic distinguishes ratio scale data from other measurement scales?', options:['No zero point','True zero point','No mathematical operations','Only categorical values'], answer:1, explanation:'ANSWER: b) True zero point. Ratio scales have meaningful zero points allowing for ratio calculations (e.g., height, weight).'},
    {text:'Diverging color schemes are most appropriate for representing what type of data?', options:['Simple categories','Positive and negative values around center','Sequential increases only','Random unrelated values'], answer:1, explanation:'ANSWER: b) Positive and negative values around center. Diverging schemes highlight deviations from a central value.'},
    {text:'What is a common cause of noisy data in datasets?', options:['Human error during collection','Perfect data collection','Ideal conditions only','Error-free processes'], answer:0, explanation:'ANSWER: a) Human error during collection. Along with faulty instruments and transmission issues, human error is a primary source of noisy data.'},
    {text:'What is Seaborn specifically designed for compared to basic Matplotlib?', options:['Low-level plotting control','Statistical data visualizations','Data cleaning operations','Data reduction techniques'], answer:1, explanation:'ANSWER: b) Statistical data visualizations. Seaborn provides high-level statistical plotting functions with better default aesthetics.'},
    {text:'Which channel is most effective for quantitative data?', options:['Color hue', 'Position', 'Shape', 'Texture'], answer:1, explanation:'ANSWER: b) Position. Position on a common scale is the most accurate for comparing quantities.'},
    {text:'What principle matches attribute importance to channel noticeability?', options:['Expressiveness', 'Effectiveness', 'Discriminability', 'Separability'], answer:1, explanation:'ANSWER: b) Effectiveness. The effectiveness principle states important attributes get highly salient channels.'},
    {text:'Which is the primary criterion for channel effectiveness?', options:['Accuracy', 'Cost', 'Speed', 'Size'], answer:0, explanation:'ANSWER: a) Accuracy. How closely perceptual judgment matches objective measurement (per Stevens’ Power Law).'},
    {text:'What describes how easily viewers distinguish visual elements?', options:['Accuracy', 'Discriminability', 'Separability', 'Popout'], answer:1, explanation:'ANSWER: b) Discriminability. Measures perceptible differences in channels like color contrast or size differences.'},
    {text:'Which channel pair is highly separable?', options:['Size and hue', 'Position and hue', 'Horizontal and vertical size', 'Red and green channels'], answer:1, explanation:'ANSWER: b) Position and hue. They are independent and can be perceived separately without interference.'}
  ],
  scn: [
    {text:'Given a dataset with temperature readings and ice cream sales over several months, what is the best chart to show their relationship and why?', rubric:'Scatter plot - shows correlation between two continuous numerical variables', explanation:'ANSWER: Scatter plot. This visualization is perfect because both temperature and sales are continuous numerical variables, and you want to explore their correlation. Each point represents one time period, and the overall pattern will reveal whether there\'s a positive relationship between temperature and ice cream sales.'},
    {text:'You have sales data showing proportions for different product categories. What chart should you use, and what are its main pros and cons?', rubric:'Pie chart; Pros: intuitive proportions, easy to understand; Cons: hard to compare small segments, limited to few categories', explanation:'ANSWER: Pie chart. PROS: Intuitive for showing part-to-whole relationships, easy to understand proportions visually, effective for presentations. CONS: Difficult to compare small differences between segments, not suitable for many categories (>5-7), cannot show trends over time, can be misleading if not properly scaled.'},
    {text:'Your dataset contains outliers and missing values in numerical columns. Describe a comprehensive preprocessing approach.', rubric:'Detect outliers using IQR or z-score; handle missing values through imputation or deletion; document decisions', explanation:'ANSWER: 1) OUTLIER DETECTION: Use IQR method (values beyond Q1-1.5*IQR or Q3+1.5*IQR) or z-score analysis (|z|>3). 2) OUTLIER HANDLING: Decide whether to remove, cap, or investigate outliers based on domain knowledge. 3) MISSING VALUES: Choose imputation method based on data distribution - mean for normal data, median for skewed data, or KNN for sophisticated imputation. 4) DOCUMENTATION: Record percentage of missing data and chosen methods for reproducibility.'},
    {text:'Write complete Python code to create a histogram for age distribution with proper styling and labels.', rubric:'Include plt.hist(), bins parameter, labels, title, and plt.show() with proper formatting', explanation:'ANSWER:\n```python\nimport matplotlib.pyplot as plt\n\n# Create histogram\nplt.figure(figsize=(10, 6))\nplt.hist(ages, bins=15, edgecolor=\'black\', alpha=0.7, color=\'skyblue\')\n\n# Add labels and styling\nplt.xlabel(\'Age Groups\')\nplt.ylabel(\'Frequency\')\nplt.title(\'Age Distribution Histogram\')\nplt.grid(True, alpha=0.3)\n\n# Display\nplt.show()\n```'},
    {text:'You need to compare product sales across different regions. What visualization technique is most appropriate and why?', rubric:'Grouped bar chart or stacked bar chart - allows comparison across multiple dimensions', explanation:'ANSWER: Grouped bar chart (or stacked bar chart). This is ideal because you have two categorical dimensions (products and regions) with numerical sales data. Grouped bars allow easy comparison of each product\'s performance across regions, while stacked bars can show total regional sales with product contributions. Choose grouped for easier individual comparisons, stacked for part-to-whole analysis.'},
    {text:'Design a Gantt chart for project management. What chart type is this, and how would you implement it in Python?', rubric:'Gantt chart using horizontal bars; implement with plt.barh() using start times and durations', explanation:'ANSWER: Gantt chart - a specialized horizontal bar chart for project timelines.\n```python\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# Data\ntasks = [\'Task A\', \'Task B\', \'Task C\', \'Task D\']\nstart_dates = [0, 2, 1, 4] # Start days\ndurations = [3, 4, 5, 2] # Duration in days\n\n# Create Gantt chart\nfig, ax = plt.subplots(figsize=(10, 6))\nax.barh(tasks, durations, left=start_dates, height=0.6)\nax.set_xlabel(\'Timeline (Days)\')\nax.set_ylabel(\'Project Tasks\')\nax.set_title(\'Project Gantt Chart\')\nax.grid(True, alpha=0.3)\nplt.show()\n```'},
    {text:'You need to encode quantitative data in a visualization. What channel should you use and why?', rubric:'Position or length - most accurate for magnitude judgments', explanation:'ANSWER: Use position (e.g., on a scale) or length (e.g., bar length). These are the highest-ranked magnitude channels for quantitative data per the effectiveness principle, as humans perceive them most accurately for comparing quantities.'},
    {text:'Explain the difference between identity and magnitude channels with examples.', rubric:'Identity: what/where (shape, color hue). Magnitude: how much (length, size)', explanation:'ANSWER: Identity channels identify categories or locations without implying order (e.g., shape: circle vs square for gender; color hue: red vs blue for departments). Magnitude channels show quantities or ordered values (e.g., length: bar height for sales; size: bubble area for population). Match identity to categorical data and magnitude to quantitative/ordinal data.'}
  ]
};

 

/* Navigation and UI Management */
const views = document.querySelectorAll('.view');
function showView(id) {
  views.forEach(v => v.classList.toggle('active', v.id === id));
  window.scrollTo({top: 0, behavior: 'smooth'});
 
  // Update navigation highlighting
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === id);
  });
}
// Add event listeners for navigation
document.querySelectorAll('[data-target]').forEach(btn => {
  btn.addEventListener('click', () => showView(btn.dataset.target));
});
// Chapter navigation
document.querySelectorAll('.go-chapter').forEach(btn => {
  btn.addEventListener('click', () => {
    showView(`chapter-${btn.dataset.chapter}`);
  });
});

// Add this function to your existing app.js
function checkFormulaImages() {
  // Check if we're on GitHub Pages
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  if (isGitHubPages) {
    // Hide all external formula images and show local fallbacks
    const externalImages = document.querySelectorAll('.formula-img-external');
    const localFallbacks = document.querySelectorAll('.formula-local');
    
    externalImages.forEach(img => img.style.display = 'none');
    localFallbacks.forEach(fallback => fallback.style.display = 'block');
  }
  
  // Also add onerror handlers dynamically as backup
  document.querySelectorAll('.formula-img-external').forEach(img => {
    img.onerror = function() {
      this.style.display = 'none';
      const formulaType = this.closest('.formula-display').dataset.formula;
      const fallback = document.querySelector(`.formula-local[data-formula="${formulaType}"]`);
      if (fallback) fallback.style.display = 'block';
    };
  });
}

// Call this function when the formulas section loads
document.addEventListener('DOMContentLoaded', function() {
  // ... your existing code ...
  
  // Add formula image checker
  checkFormulaImages();
  
  // Re-check when navigating to formulas section
  document.addEventListener('navChange', function(e) {
    if (e.detail.target === 'formulas') {
      setTimeout(checkFormulaImages, 100);
    }
  });
});

/* Progress Management */
function updateProgressUI() {
  const completed = state.completedChapters.size;
  const percentage = Math.round((completed / 8) * 100);
 
  document.getElementById('progress-fill').style.width = percentage + '%';
  document.getElementById('progress-text').textContent = `${completed}/8 chapters completed`;
 
  // Update completed count in final test
  document.getElementById('completed-count').textContent = completed;
 
  // Unlock final test when all chapters complete
  if (completed === 8) {
    state.finalUnlocked = true;
    document.getElementById('final-lock').classList.add('hidden');
    document.getElementById('final-container').classList.remove('hidden');
  }
}
// Initialize progress
updateProgressUI();
/* Enhanced Quiz System with Feedback */
function renderQuiz(containerId, quizId) {
  const container = document.getElementById(containerId);
  const quiz = QUIZZES[quizId];
 
  container.innerHTML = '';
 
  const title = document.createElement('h3');
  title.textContent = quiz.title;
  container.appendChild(title);
  quiz.questions.forEach((question, index) => {
    const questionBlock = document.createElement('div');
    questionBlock.className = 'question';
   
    const questionHeader = document.createElement('h4');
    questionHeader.textContent = `Question ${index + 1}: ${question.text}`;
    questionBlock.appendChild(questionHeader);
    if (question.type === 'tf') {
      const optionsDiv = document.createElement('div');
      optionsDiv.className = 'options';
     
      ['True', 'False'].forEach((option, i) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${quizId}_${index}`;
        input.value = option === 'True';
       
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsDiv.appendChild(label);
      });
     
      questionBlock.appendChild(optionsDiv);
    } else if (question.type === 'mc') {
      const optionsDiv = document.createElement('div');
      optionsDiv.className = 'options';
     
      question.options.forEach((option, i) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${quizId}_${index}`;
        input.value = i;
       
        const optionText = document.createElement('div');
        optionText.innerHTML = `<strong>${String.fromCharCode(97 + i)})</strong> ${option}`;
       
        label.appendChild(input);
        label.appendChild(optionText);
        optionsDiv.appendChild(label);
      });
     
      questionBlock.appendChild(optionsDiv);
    } else if (question.type === 'open') {
      const textarea = document.createElement('textarea');
      textarea.rows = 4;
      textarea.placeholder = 'Type your detailed answer here...';
      textarea.name = `q${quizId}_${index}_open`;
      questionBlock.appendChild(textarea);
     
     
    }
    container.appendChild(questionBlock);
  });
  // Add action buttons
  const actions = document.createElement('div');
  actions.className = 'actions';
 
  const submitBtn = document.createElement('button');
  submitBtn.className = 'primary';
  submitBtn.textContent = 'Submit Quiz';
  submitBtn.addEventListener('click', () => gradeQuiz(quizId, containerId));
 
  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'secondary';
  cancelBtn.textContent = 'Cancel';
  cancelBtn.addEventListener('click', () => container.classList.add('hidden'));
 
  actions.appendChild(cancelBtn);
  actions.appendChild(submitBtn);
  container.appendChild(actions);
}
function gradeQuiz(quizId, containerId) {
  const quiz = QUIZZES[quizId];
  const container = document.getElementById(containerId);
  let correctCount = 0;
  let totalAutoGraded = 0;
  // Clear previous feedback
  container.querySelectorAll('.feedback').forEach(el => el.remove());
  quiz.questions.forEach((question, index) => {
    const questionBlock = container.children[index + 1]; // +1 for title
    if (question.type === 'tf') {
      totalAutoGraded++;
      const selected = document.querySelector(`input[name="q${quizId}_${index}"]:checked`);
      const isCorrect = selected && (String(selected.value) === String(question.answer));
     
      if (isCorrect) correctCount++;
     
      // Add feedback
      const feedback = document.createElement('div');
      feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
      feedback.innerHTML = `<strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</strong><br>${question.explanation}`;
      questionBlock.appendChild(feedback);
     
    } else if (question.type === 'mc') {
      totalAutoGraded++;
      const selected = document.querySelector(`input[name="q${quizId}_${index}"]:checked`);
      const isCorrect = selected && (Number(selected.value) === question.answer);
     
      if (isCorrect) correctCount++;
     
      // Add feedback
      const feedback = document.createElement('div');
      feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
      feedback.innerHTML = `<strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</strong><br>${question.explanation}`;
      questionBlock.appendChild(feedback);
     
    } else if (question.type === 'open') {
      // Add explanation for open-ended questions
      const feedback = document.createElement('div');
      feedback.className = 'feedback correct';
      feedback.innerHTML = `<strong>💡 Model Answer:</strong><br>${question.explanation}`;
      questionBlock.appendChild(feedback);
    }
  });
  // Add overall results
  const percentage = Math.round((correctCount / totalAutoGraded) * 100);
  const resultsDiv = document.createElement('div');
  resultsDiv.className = 'card success';
  resultsDiv.style.marginTop = '20px';
  resultsDiv.innerHTML = `
    <h4>Quiz Results</h4>
    <p><strong>Score:</strong> ${correctCount}/${totalAutoGraded} (${percentage}%)</p>
    <p>Open-ended questions have been provided with model answers for your review.</p>
    ${percentage >= 80 ? '<p>🎉 Excellent work! You\'re ready to move on.</p>' : '<p>💪 Review the explanations and try again if needed.</p>'}
  `;
  container.appendChild(resultsDiv);
  // Mark chapter as completed
  state.completedChapters.add(String(quizId));
  updateProgressUI();
  // Scroll to results
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
/* Quiz Event Listeners */
document.querySelectorAll('.start-quiz').forEach(btn => {
  btn.addEventListener('click', () => {
    const quizId = btn.dataset.quiz;
    const containerId = `quiz-${quizId}`;
    renderQuiz(containerId, quizId);
    document.getElementById(containerId).classList.remove('hidden');
    document.getElementById(containerId).scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
/* Enhanced Charts Rendering with Fixed Word Cloud and Violin Plot */
function renderCharts() {
  const grid = document.getElementById('charts-grid');
  if (!grid) return;
 
  grid.innerHTML = '';
  state.charts.forEach(chart => {
    const card = document.createElement('article');
    card.className = 'card chart-card';
    // Title
    const title = document.createElement('h3');
    title.textContent = chart.title;
    card.appendChild(title);
    // Chart visualization
    if (chart.type === 'image') {
      const img = document.createElement('img');
      img.src = chart.imageUrl;
      img.alt = `${chart.title} example`;
      img.style.width = '100%';
      img.style.height = '240px';
      img.style.objectFit = 'contain';
      img.style.border = '1px solid var(--border)';
      img.style.borderRadius = '8px';
      img.style.backgroundColor = 'white';
      card.appendChild(img);
    } else {
      // Create canvas for Chart.js
      const canvas = document.createElement('canvas');
      canvas.id = `chart-${chart.id}`;
      canvas.width = 400;
      canvas.height = 240;
      card.appendChild(canvas);
    }
    // Description
    if (chart.description) {
      const desc = document.createElement('div');
      desc.className = 'chart-description';
      desc.innerHTML = `<p><strong>Description:</strong> ${chart.description}</p>`;
      desc.style.marginTop = '12px';
      desc.style.padding = '12px';
      desc.style.backgroundColor = 'var(--surface-elevated)';
      desc.style.borderRadius = '8px';
      desc.style.fontSize = '14px';
      card.appendChild(desc);
    }
    // Metadata
    const meta = document.createElement('div');
    meta.className = 'chart-meta';
    meta.innerHTML = `
      <div><span class="meta-tag">Use Case</span> ${chart.use}</div>
      <div><span class="meta-tag">Strengths</span> ${chart.strengths.join(' • ')}</div>
      <div><span class="meta-tag">Weaknesses</span> ${chart.weaknesses.join(' • ')}</div>
    `;
    card.appendChild(meta);
    // Python code
    const codeBlock = document.createElement('div');
    codeBlock.className = 'code-block';
    codeBlock.innerHTML = `<div class="meta-tag">Python Implementation</div><pre>${chart.python}</pre>`;
    card.appendChild(codeBlock);
    grid.appendChild(card);
    // Render Chart.js visualization (if not image)
    if (chart.type !== 'image') {
      setTimeout(() => {
        const canvas = document.getElementById(`chart-${chart.id}`);
        if (canvas) {
          const ctx = canvas.getContext('2d');
          const config = createChartConfig(chart);
          if (config) {
            new Chart(ctx, config);
          }
        }
      }, 100);
    }
  });
}
function createChartConfig(chart) {
  const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'];
 
  switch (chart.type) {
    case 'bar':
      return {
        type: 'bar',
        data: {
          labels: chart.labels,
          datasets: [{
            label: chart.title,
            data: chart.data,
            backgroundColor: colors.slice(0, chart.data.length),
            borderColor: colors.slice(0, chart.data.length),
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true }
          }
        }
      };
    case 'line':
      return {
        type: 'line',
        data: {
          labels: chart.labels,
          datasets: [{
            label: chart.title,
            data: chart.data,
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            fill: true,
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } }
        }
      };
    case 'scatter':
      return {
        type: 'scatter',
        data: {
          datasets: [{
            label: chart.title,
            data: chart.labels.map((x, i) => ({ x: x, y: chart.data[i] })),
            backgroundColor: '#3b82f6',
            borderColor: '#2563eb'
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { title: { display: true, text: 'X Values' } },
            y: { title: { display: true, text: 'Y Values' } }
          }
        }
      };
    case 'pie':
      return {
        type: 'pie',
        data: {
          labels: chart.labels,
          datasets: [{
            data: chart.data,
            backgroundColor: colors.slice(0, chart.data.length)
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'bottom' }
          }
        }
      };
    default:
      return null;
  }
}
// Initialize charts
renderCharts();
/* Final Test Implementation */
function renderFinalTest() {
  const tfContainer = document.getElementById('final-tf');
  const mcContainer = document.getElementById('final-mc');
  const scnContainer = document.getElementById('final-scn');
  if (!tfContainer) return;
  // Render True/False questions
  tfContainer.innerHTML = '';
  FINAL.tf.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `
      <h4>T/F ${index + 1}. ${question.text}</h4>
      <div class="options">
        <label><input type="radio" name="final_tf_${index}" value="true"> True</label>
        <label><input type="radio" name="final_tf_${index}" value="false"> False</label>
      </div>
    `;
    tfContainer.appendChild(questionDiv);
  });
  // Render Multiple Choice questions
  mcContainer.innerHTML = '';
  FINAL.mc.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
   
    const optionsHtml = question.options.map((option, i) =>
      `<label><input type="radio" name="final_mc_${index}" value="${i}">
       <div><strong>${String.fromCharCode(97 + i)})</strong> ${option}</div></label>`
    ).join('');
   
    questionDiv.innerHTML = `
      <h4>MCQ ${index + 1}. ${question.text}</h4>
      <div class="options">${optionsHtml}</div>
    `;
    mcContainer.appendChild(questionDiv);
  });
  // Render Scenario questions
  scnContainer.innerHTML = '';
  FINAL.scn.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `
      <h4>Scenario ${index + 1}. ${question.text}</h4>
      <textarea name="final_scn_${index}" rows="4" placeholder="Provide a comprehensive answer..."></textarea>
      <div class="muted">Hint: ${question.rubric}</div>
    `;
    scnContainer.appendChild(questionDiv);
  });
}
function submitFinalTest() {
  let tfScore = 0;
  let mcScore = 0;
  // Grade T/F questions
  FINAL.tf.forEach((question, index) => {
    const selected = document.querySelector(`input[name="final_tf_${index}"]:checked`);
    if (selected && (String(selected.value) === String(question.answer))) {
      tfScore++;
    }
  });
  // Grade MC questions
  FINAL.mc.forEach((question, index) => {
    const selected = document.querySelector(`input[name="final_mc_${index}"]:checked`);
    if (selected && (Number(selected.value) === question.answer)) {
      mcScore++;
    }
  });
  const tfPercentage = Math.round((tfScore / FINAL.tf.length) * 100);
  const mcPercentage = Math.round((mcScore / FINAL.mc.length) * 100);
  const overallPercentage = Math.round(((tfScore + mcScore) / (FINAL.tf.length + FINAL.mc.length)) * 100);
  // Display results
  const resultsDiv = document.getElementById('final-result');
  resultsDiv.classList.remove('hidden');
  resultsDiv.innerHTML = `
    <h3>🎯 Final Test Results</h3>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
      <div>
        <h4>True/False Section</h4>
        <p><strong>Score:</strong> ${tfScore}/${FINAL.tf.length}</p>
        <p><strong>Percentage:</strong> ${tfPercentage}%</p>
      </div>
      <div>
        <h4>Multiple Choice Section</h4>
        <p><strong>Score:</strong> ${mcScore}/${FINAL.mc.length}</p>
        <p><strong>Percentage:</strong> ${mcPercentage}%</p>
      </div>
    </div>
    <div style="text-align: center; padding: 20px; background: var(--primary-light); border-radius: 10px;">
      <h4>Overall Performance</h4>
      <p style="font-size: 24px; font-weight: bold; color: var(--primary);">${overallPercentage}%</p>
      <p>${overallPercentage >= 85 ? '🎉 Excellent! You have mastered the material.' :
           overallPercentage >= 70 ? '👍 Good job! Review areas for improvement.' :
           '📚 Keep studying and review the explanations.'}</p>
    </div>
    <p><em>Scenario questions have model answers in the Answer Keys section for your review.</em></p>
    <button class="primary" onclick="showDetailedFeedback()">View Detailed Feedback</button>
  `;
  resultsDiv.scrollIntoView({ behavior: 'smooth' });
}
function showDetailedFeedback() {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.8); z-index: 1000;
    display: flex; align-items: center; justify-content: center;
    padding: 20px; overflow-y: auto;
  `;
 
  const content = document.createElement('div');
  content.style.cssText = `
    background: var(--surface); border-radius: 15px; padding: 30px;
    max-width: 800px; max-height: 80vh; overflow-y: auto;
    border: 1px solid var(--border);
  `;
 
  let feedbackHtml = '<h3>Detailed Answer Explanations</h3>';
 
  // T/F feedback
  feedbackHtml += '<h4>True/False Questions</h4>';
  FINAL.tf.forEach((question, index) => {
    const selected = document.querySelector(`input[name="final_tf_${index}"]:checked`);
    const isCorrect = selected && (String(selected.value) === String(question.answer));
    feedbackHtml += `
      <div style="margin: 15px 0; padding: 15px; background: var(--surface-elevated); border-radius: 8px; border-left: 4px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
        <strong>Q${index + 1}: ${question.text}</strong><br>
        <span style="color: ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
          ${isCorrect ? '✅ Correct' : '❌ Incorrect'}
        </span><br>
        <small>${question.explanation}</small>
      </div>
    `;
  });
 
  // MC feedback
  feedbackHtml += '<h4>Multiple Choice Questions</h4>';
  FINAL.mc.forEach((question, index) => {
    const selected = document.querySelector(`input[name="final_mc_${index}"]:checked`);
    const isCorrect = selected && (Number(selected.value) === question.answer);
    feedbackHtml += `
      <div style="margin: 15px 0; padding: 15px; background: var(--surface-elevated); border-radius: 8px; border-left: 4px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
        <strong>Q${index + 1}: ${question.text}</strong><br>
        <span style="color: ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
          ${isCorrect ? '✅ Correct' : '❌ Incorrect'}
        </span><br>
        <small>${question.explanation}</small>
      </div>
    `;
  });
 
  feedbackHtml += '<button class="primary" onclick="this.parentElement.parentElement.remove()">Close</button>';
 
  content.innerHTML = feedbackHtml;
  modal.appendChild(content);
  document.body.appendChild(modal);
 
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}
// Initialize final test
renderFinalTest();
// Final test event listeners
document.getElementById('submit-final')?.addEventListener('click', submitFinalTest);
document.getElementById('reset-final')?.addEventListener('click', () => {
  renderFinalTest();
  document.getElementById('final-result').classList.add('hidden');
});
/* Initialize App */
document.addEventListener('DOMContentLoaded', () => {
  // Set up initial state
  updateProgressUI();
  renderCharts();
 
  // Check if final test should be unlocked
  if (state.completedChapters.size === 8) {
    state.finalUnlocked = true;
    document.getElementById('final-lock')?.classList.add('hidden');
    document.getElementById('final-container')?.classList.remove('hidden');
  }
});
