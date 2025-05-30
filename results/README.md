# 🧠  Behavioral Results -  Relevant Variables

This folder contains the cleaned behavioral dataset used in our analysis of human semantic similarity judgments.

### 📁 File: AligNet_Human_Validation_results.csv

Below we list the variable names relevant for working with this dataset.

### Relevant Variables:
- **prolific_id**:         An anonymized ID of the participant (e.g., subject_1, subject_2).
- **exp_trial_type**:       Indicating if it was `training_trial` or a `exp_trial` (can be used for filtering for experiment trial).
- trial_num:           Trial number for each participant.
- **response**:            Participant rating (1–5 Likert scale) indicating perceived semantic similarity.
- response_time:        Response time needed to make similarity decision.
- consent_button_press1 and consent_button_press2: Variables indicating that participant consented to study participation.
- **image1Path**:          Filename of the image shown on the left side.
- **image2Path**:          Filename of the image shown on the right side.

Only variables listed above are used in the statistical analysis and plots provided in the `analysis/` folder.
