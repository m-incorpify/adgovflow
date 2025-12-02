# Abu Dhabi Company Setup Journey

A beautiful, interactive presentation showcasing the company setup journey for tech startups and standard companies in Abu Dhabi.

## Features

- **Two Journey Types**: Tech Startup Journey and Standard Company Journey
- **Interactive Stages**: Expandable accordion sections for each stage
- **Beautiful UI**: Built with ShadCN components using white and purple theme
- **Smooth Animations**: Fade-in and slide-in animations for content loading
- **Icons**: Lucide React icons throughout for better visual representation
- **Responsive Design**: Works on all device sizes

## Setup

1. Install dependencies:
```bash
npm install
```

2. Add the Abu Dhabi logo:
   - Place your logo image in `/public/abu-dhabi-logo.png` (or update the path in `components/journey-map.tsx`)
   - The logo should be placed in the header section

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Logo Setup

To add the Abu Dhabi government logo:

1. Save the logo image to `/public/abu-dhabi-logo.png`
2. Update the logo section in `components/journey-map.tsx` (around line 45) to use:
```tsx
<Image 
  src="/abu-dhabi-logo.png" 
  alt="Abu Dhabi Government Logo" 
  width={96} 
  height={96} 
  className="object-contain"
/>
```

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- ShadCN UI Components
- Lucide React Icons

## Project Structure

```
ADGOVFLOW/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── journey-map.tsx (Main component)
│   └── ui/ (ShadCN components)
├── lib/
│   └── utils.ts
└── public/ (Place logo here)
```

