# EHCP Strategies: Classroom How-To (KS3/KS4)

A video-first microlearning web app for teachers implementing EHCP strategies in KS3/KS4 classrooms. Helps translate EHCP wording into practical classroom actions.

## Overview

This app provides:
- **6 core strategies** with video explanations, worked examples, and implementation guides
- **Video-first learning** with 60-120 second explainer videos
- **Audio-only mode** for transcript-based learning
- **Printable summaries** and checklists for each strategy
- **SENCO/Coach resources** including observation frameworks and feedback scripts
- **Progress tracking** using browser localStorage

## Target Audience

- KS3/KS4 teachers and TAs supporting pupils working at around KS1 level
- SENCOs and instructional coaches
- **Not for direct use with pupils** - content is adult-toned and direct

## Strategies Included

1. **Chunking into 1-Step Instructions** - Breaking multi-step tasks into single, clear instructions
2. **Backward Chaining** - Teaching the last step first so pupils always experience completion
3. **Task Analysis** - Breaking complex tasks into small, teachable steps
4. **Prompt Fading** - Systematically reducing support toward independence
5. **Visual Supports / Now–Next** - Using visual cues for predictability and transitions
6. **Errorless Learning** - Designing tasks for first-attempt success

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
cd ehcp-strategies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ehcp-strategies/
├── public/
│   ├── videos/           # Place MP4 video files here
│   └── captions/         # VTT caption files
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── library/      # Strategy library page
│   │   ├── senco/        # SENCO resources page
│   │   └── strategies/   # Individual strategy pages
│   ├── components/       # React components
│   │   ├── layout/       # Header, Footer
│   │   ├── strategy/     # Strategy-specific components
│   │   ├── ui/           # Shared UI components
│   │   └── video/        # Video player component
│   ├── data/
│   │   └── strategies/   # Strategy content (JSON-like TypeScript)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript type definitions
```

## Adding Your Own Videos

The app is designed to work with placeholder videos during development. To add real videos:

### Step 1: Record Your Videos

Each strategy requires 5 videos:
1. **What It Is** (1-2 mins) - Explains the strategy and why it helps
2. **How To Do It** (1-2 mins) - Practical implementation steps
3. **Worked Example 1** (~1 min) - Subject-specific demonstration
4. **Worked Example 2** (~1 min) - Different subject demonstration
5. **Worked Example 3** (~1 min) - Routine demonstration

Use the **video scripts** in each strategy's data file (`src/data/strategies/*.ts`) as your recording guide. Each script includes:
- Full dialogue/narration
- On-screen text suggestions
- B-roll suggestions
- Shot list with timing

### Step 2: Export Videos

- Format: MP4 (H.264 codec recommended)
- Resolution: 1080p or 720p
- Naming convention: Match the filenames in the strategy data

Example filenames:
```
chunking-what-it-is.mp4
chunking-how-to.mp4
chunking-example-maths.mp4
chunking-example-english.mp4
chunking-example-routine.mp4
```

### Step 3: Add Videos to Public Folder

Place MP4 files in `/public/videos/`:

```bash
cp your-videos/*.mp4 public/videos/
```

### Step 4: Update Captions

VTT caption files are in `/public/captions/`. Each caption file should match its video filename:

```
public/captions/chunking-what-it-is.vtt
```

Generate VTT files from the transcripts in the strategy data, or use auto-captioning tools and edit for accuracy.

VTT format example:
```vtt
WEBVTT

00:00:00.000 --> 00:00:05.000
First line of caption text.

00:00:05.000 --> 00:00:10.000
Second line of caption text.
```

### Step 5: Verify

Run the dev server and check each video plays correctly with captions.

## Video File Reference

All required video files by strategy:

### Chunking into 1-Step Instructions
- `chunking-what-it-is.mp4` (1:42)
- `chunking-how-to.mp4` (1:38)
- `chunking-example-maths.mp4` (1:15)
- `chunking-example-english.mp4` (1:22)
- `chunking-example-routine.mp4` (1:05)

### Backward Chaining
- `backward-chaining-what-it-is.mp4` (1:48)
- `backward-chaining-how-to.mp4` (1:52)
- `backward-example-english.mp4` (1:28)
- `backward-example-maths.mp4` (1:18)
- `backward-example-routine.mp4` (1:10)

### Task Analysis
- `task-analysis-what-it-is.mp4` (1:35)
- `task-analysis-how-to.mp4` (1:42)
- `task-analysis-example-science.mp4` (1:20)
- `task-analysis-example-english.mp4` (1:15)
- `task-analysis-example-routine.mp4` (1:05)

### Prompt Fading
- `prompt-fading-what-it-is.mp4` (1:45)
- `prompt-fading-how-to.mp4` (1:50)
- `prompt-fading-example-maths.mp4` (1:18)
- `prompt-fading-example-english.mp4` (1:25)
- `prompt-fading-example-routine.mp4` (1:12)

### Visual Supports / Now–Next
- `visual-supports-what-it-is.mp4` (1:42)
- `visual-supports-how-to.mp4` (1:55)
- `visual-supports-example-maths.mp4` (1:15)
- `visual-supports-example-english.mp4` (1:10)
- `visual-supports-example-routine.mp4` (1:18)

### Errorless Learning
- `errorless-learning-what-it-is.mp4` (1:55)
- `errorless-learning-how-to.mp4` (1:48)
- `errorless-example-maths.mp4` (1:25)
- `errorless-example-english.mp4` (1:18)
- `errorless-example-routine.mp4` (1:08)

**Total: 30 videos**

## Customizing Content

### Editing Strategy Content

Strategy content lives in `/src/data/strategies/`. Each strategy is a TypeScript file exporting a `Strategy` object with:

- Video metadata and transcripts
- Worked examples with teacher scripts
- Troubleshooting FAQ
- Prep plan steps
- Printable summary content
- Quick checklist items

Edit these files to customize wording, add examples, or adjust for your context.

### Adding New Strategies

1. Create a new file in `/src/data/strategies/` (use existing files as template)
2. Import and add to the `strategies` array in `/src/data/strategies/index.ts`
3. Create corresponding video and caption files

## Features

### Progress Tracking

Progress is stored in browser localStorage:
- Videos watched
- Strategies completed
- Audio-only mode preference

Users can reset progress from the browser console:
```javascript
localStorage.removeItem('ehcp-strategies-progress')
```

### Print Functionality

Each strategy has a "Print Summary" button that generates a clean, printer-friendly version with:
- Strategy overview
- Key techniques
- Quick checklist (with checkboxes)

### Audio-Only Mode

Toggle in the header to switch between:
- **Video mode**: Full video player with controls
- **Audio mode**: Transcript + key takeaways (no video)

Useful for quick review or low-bandwidth situations.

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data**: Structured TypeScript files (no database needed)
- **Storage**: Browser localStorage for progress

## Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy via Vercel CLI or GitHub integration
```

### Self-Hosted

```bash
npm run build
npm start
```

The app runs on port 3000 by default.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

Internal use only. Do not distribute without permission.

## Support

For issues with:
- **Content accuracy**: Contact your SENCO or instructional design team
- **Technical problems**: Check browser console for errors, ensure Node.js version is compatible

---

Built for teachers who want to turn EHCP words into classroom actions.
