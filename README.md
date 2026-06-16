# Coalition Technologies Patient Dashboard

A React-based patient dashboard built for the Coalition Technologies Front-End Developer Skills Assessment.

## Overview

This application consumes the Coalition Technologies Patient Data API and displays medical information for **Jessica Taylor** based on the provided Adobe XD design.

The dashboard includes:

* Patient sidebar
* Patient profile information
* Diagnosis history section
* Blood pressure chart visualization
* Respiratory rate, temperature, and heart rate cards
* Diagnostic list
* Lab results section

## Tech Stack

* React
* Vite
* Axios
* Chart.js
* React Chart.js 2
* CSS

## API Integration

Data is fetched from the Coalition Technologies Patient Data API using HTTP Basic Authentication.

Only Jessica Taylor's data is displayed in the main dashboard as required by the assessment instructions.

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd coalition-patient-dashboard
```

Install dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Production Build

Generate a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Features Implemented

* API integration using Axios
* Basic Authentication
* Dynamic patient data rendering
* Blood pressure line chart
* Responsive dashboard layout
* Loading and error handling states
* Sidebar patient list with active patient highlighting

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── ProfileCard.jsx
│   ├── BloodPressureChart.jsx
│   ├── DiagnosisCards.jsx
│
├── services/
│   └── api.js
│
├── styles/
│   └── app.css
│
├── App.jsx
└── main.jsx
```

## Notes

* Patient information is retrieved from the provided API.
* The dashboard focuses on Jessica Taylor as specified in the assessment requirements.
* The chart is implemented using Chart.js.
* The application was developed using React and Vite.

## Author

Abhinav
