<h1>AligNet-Human-Validation Experiment</h1>

<p><strong>Created by Frieda Born, May 2025</strong></p>

<p>
This repository contains the code and documentation for the online behavioral experiment used to validate representational differences between <strong>AligNet</strong> and <strong>UnaligNet</strong>—two fine-tuned versions of the ViT-B model.
</p>

<p>
The study was conducted by the <em>Adaptive Memory and Decision Making</em> group at the Max Planck Institute for Human Development, in collaboration with <em>BIFOLD</em> at TU Berlin.
</p>

<hr>

<h2>🧠 Study Overview</h2>

<p>
In order to further ascertain the origin of the differences between the AligNet and UnaligNet tuned versions of ViT-B, we compared representations within each ImageNet category to find the largest disagreements between the two models. Specifically, within each category we identified the pair of images for which the models' representations most strongly disagreed in both directions: the pair that the AligNet model represented much more similary than UnaligNet, and the pair that UnaligNet represented much more similarly than AligNet (Note that in this context, since both models start from the same base model, it is equivalent to compare similarities directly or to compare the change in similarity from the base model.) We took the top 100 disagreements (in magnitude) in both directions across categories, for a total of 200 image pairs --- half of which AligNet represents much more similarly than UnaligNet, and half of which UnaligNet represents much more similarly than AligNet.
<p>

<hr>

<h2>📁 Repository Structure</h2>

<pre><code>
📁 analysis/      # Scripts and notebooks for data analysis and visualization
📁 docs/          # Project documentation and manuscript-related materials
📁 experiment/    # Full experiment implementation (HTML, JS, stimuli, setup)
📄 LICENSE        # License file (MIT)
📄 README.md      # This file
</code></pre>

<hr>

<h2>🧪 Experiment Details (<code>/experiment/</code>)</h2>

<p>
This experiment was built using <strong>jsPsych v7.3.3</strong> 
(<a href="https://www.jspsych.org/7.3/" target="_blank">jspsych.org</a>), 
a JavaScript library for browser-based behavioral experiments.
</p>

<p>
Some jsPsych plugins were <strong>customized</strong> to support specific features needed for this experiment. All changes are clearly marked within the plugin code via comments.
</p>

<h3>Key Files and Folders</h3>

<ul>
  <li><code>index.js</code>: Main entry point running the task logic and jsPsych timeline</li>
  <li><code>jspsych/</code>: Contains jsPsych plugins (custom and default)</li>
  <li><code>stimuli/</code>: Image files used in the experiment
    <ul>
      <li><code>consent_form/</code>: Consent form assets</li>
      <li><code>instructions/</code>: Participant instruction visuals</li>
    </ul>
  </li>
</ul>

<hr>

<h2>📊 Analysis & Visualization (<code>/analysis/</code>)</h2>

<ul>
  <li><code>analysis_visualization.ipynb</code>: Statistical analysis and figure generation for human similarity ratings and model comparison</li>
</ul>

<hr>

<h2>🔧 Requirements</h2>

<p>To run or edit the experiment locally:</p>
<ul>
  <li>A modern browser (Chrome, Firefox, Safari)</li>
  <li><em>Optional:</em> A code editor like <strong>Visual Studio Code</strong></li>
  <li><em>Optional:</em> Local installation of jsPsych (if modifying code)</li>
</ul>

<hr>

<h2>📄 License</h2>

<p>This project is distributed under the <a href="LICENSE">MIT License</a>.</p>

<hr>

<h2>🙏 Acknowledgments</h2>

<p>This project was developed with support from:</p>
<ul>
  <li>Lukas Muttenthaler</li>
  <li>Mike Mozer</li>
  <li>Andrew Lampinen</li>
  <li>Bernhard Spitzer</li>
</ul>

<hr>

<h2>📬 Contact</h2>

<p>
For questions or feedback, contact:<br>
<strong>Frieda Born</strong><br>
<code>born[at]mpib-berlin.mpg.de</code>
</p>
