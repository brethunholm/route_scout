# 🧭 RouteScout — Road Trip Planner

RouteScout is a modern road-trip planning application built with **Next.js**, **Mapbox**, and **AI-assisted trip suggestions**.  
It helps users plan a drive, explore curated stops along the route (gas, food, hotels, attractions, dog-friendly locations), and optimize their trip using filters or an integrated AI Copilot.

This project was designed and developed as part of my professional portfolio to showcase my skills in **frontend architecture, interactive mapping, API integration, UI/UX design, and modern React/Next.js development**.

---

## ✨ Key Features

### 🚗 Trip Planning

- Enter **start** and **destination** to generate a driving route
- Interactive map with zoom, pan, and retro-inspired styling
- Clean, responsive UI with SCSS Modules

### 🏕 Route-Aware Suggestions

Automatic recommendations along the drive:

- Gas stations
- Restaurants & cafés
- Hotels
- Attractions
- Dog-friendly stops (keyword/attribute filtering)

Filtering options include:

- Rating threshold (e.g., 4.0+)
- Max detour distance/time
- Stop categories

### 📍 Stop Details & Itinerary Builder

- View ratings, categories, distance off route, and photos
- Add stops to a lightweight, client-side itinerary
- Save itinerary in localStorage

### 🤖 AI Copilot (Optional)

A chat-based planning assistant powered by the **OpenAI API**:

- "Suggest a lunch stop 2 hours into my drive"
- "Split this into a 2-day trip with an overnight stay"
- "Show me dog-friendly cafés along this route"
- Returns structured suggestions you can add to the itinerary

---

## 🧰 Tech Stack

### Frontend

- **Next.js (App Router)**
- **React**
- **SCSS Modules + global design tokens**
- **Mapbox GL JS** for map rendering and custom styling

### Backend (within Next.js)

- Next.js **Route Handlers** in `/app/api`
- Server-side fetching of:
  - Routing
  - Geocoding
  - Places / POIs
  - AI responses

### Data Providers

#### Maps & Routing

- **Mapbox GL JS**  
  https://docs.mapbox.com/mapbox-gl-js/

#### Routing & Geocoding (choose one)

- **Google Directions + Geocoding API**  
   https://developers.google.com/maps/documentation  
  or
- **Geoapify Routing API**  
  https://www.geoapify.com/api/

#### Places Data (Gas, Food, Hotels, Attractions)

- **Google Places API**  
   https://developers.google.com/maps/documentation/places/web-service  
  or
- **Foursquare Places API**  
   https://location.foursquare.com/developer/reference/places-api  
  or
- **Geoapify Places API**  
  https://www.geoapify.com/places-api

#### AI Copilot

- **OpenAI API**  
  https://platform.openai.com/docs

---
