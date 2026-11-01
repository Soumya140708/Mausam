# Mausam — Personalized Weather App Prototype

Mausam is a personalized weather application concept. Instead of showing the same weather data to everyone, it prioritises the information that matters to each user, such as travel, health and fitness, farming, family, commuting, events or daily life.

> **Status:** Frontend prototype (HTML, CSS, JavaScript). All weather values are demonstration data. There is no live weather API, backend or database yet.

Built as part of a team project for the **Smart India Hackathon internal selection**. Our team cleared the first round.

## The Idea

Weather apps usually show the same numbers to every user. Mausam interprets the weather according to the user's interests, and is designed to combine it with safety and hazard information for travel decisions.

## User Journey

1. **Profile setup:** name, age, email and city
2. **Interest selection:** choose one or more personas (Traveler, Health & Fitness, Farming, Family, Daily Commute, Events, Daily Life)
3. **Personalized home page:** weather summary and cards prioritised for the chosen interests
4. **Weather, Alerts, Safety & Hazards and Community Report pages**

## Pages

| Page | File | What it shows |
|------|------|---------------|
| Profile setup | `index.html` | Sign-up style form (saved in the browser only) |
| Interests | `persona.html` | Select what matters to you |
| Home | `home.html` | Current weather, personalised cards, timeline |
| Weather | `weather.html` | Timeline, 5-day forecast, forecast confidence |
| Alerts | `alerts.html` | Priority alert, other conditions, impact for the user |
| Safety & Hazards | `hazards.html` | Destination safety score, hazards, information sources |
| Report | `report.html` | Community weather observation form |

## Features in the Prototype

- Multi-interest personalisation using the browser's `localStorage`
- Location field to switch the displayed place
- Hourly timeline and 5-day forecast (demo data)
- Priority alert with impact explanations for each interest
- Destination safety page with hazards such as heavy rain, waterlogging, strong wind and low visibility (demo data)
- Community report form that saves the latest report in the browser
- Responsive layout for desktop and mobile

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, media queries)
- JavaScript (DOM manipulation, `localStorage`)

## How to View the Project

**Live demo:** https://soumya140708.github.io/Mausam/

**Locally:**
1. Download this repository (**Code → Download ZIP**) and extract it.
2. Open `index.html` in a web browser and follow the flow from there.

## Current Limitations

- All weather, alert and safety values are hard-coded demo data
- No live weather API, backend or database
- Sign-up details are stored only in the user's browser and there is no real login or password handling
- The location permission checkbox is saved but geolocation is not used
- The hazard map is a placeholder
- Community reports store only the latest report locally, and the photo upload is not saved
- Route-based hazard checks (floods, landslides, earthquakes) are planned, not implemented

## Planned Improvements

- Python backend with live weather, forecast and alert data
- Route and destination hazard information, such as Mumbai flooding, heavy rainfall and landslide alerts
- Real hazard map and verified community reports
- Database for users, preferences and reports

## Team Project

Developed as a team project for the Smart India Hackathon internal selection.

- **Frontend (this repository):** designed and developed by Soumya
- **Backend:** developed separately by a teammate; not included in this repository and not yet connected to this frontend

## Author

**Soumya**, B.Sc. Computer Science student, VES College, Chembur, Mumbai
GitHub: [Soumya140708](https://github.com/Soumya140708)
