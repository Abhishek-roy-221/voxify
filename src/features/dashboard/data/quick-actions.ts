export interface QuickAction {
    title: string;
    description: string;
    gradient: string;
    href: string;
};

export const quickActions: QuickAction[] = [
{
  title: "Podcast Intro",
  description: "Generate a professional podcast opening voice",
  gradient: "from-purple-400 to-purple-50",
  href: "/text-to-speech?text=Welcome back to another episode of The Curious Mind, where we explore ideas that shape the world. I'm your host, and today we're diving into something that might just change the way you see everything around you.",
},

{
  title: "Motivational Speech",
  description: "Feel a surge of energy with powerful AI motivation",
  gradient: "from-orange-400 to-orange-50",
  href: "/text-to-speech?text=You are not behind in life. You are exactly where you need to be to become who you are meant to be. Every step, every failure, every delay is shaping a stronger version of you. Keep moving forward — your breakthrough is closer than you think.",
},

{
  title: "Horror Whisper",
  description: "Create a chilling, spine-tingling narration",
  gradient: "from-red-500 to-red-100",
  href: "/text-to-speech?text=The door creaked open on its own. There was no wind, no sound — just silence. But as you stepped inside, you realized something was breathing... and it wasn’t you.",
},

{
  title: "Guided Meditation",
  description: "Relax with calm and soothing AI guidance",
  gradient: "from-green-400 to-green-50",
  href: "/text-to-speech?text=Close your eyes gently. Take a deep breath in... and slowly let it out. Feel your body relax, your mind becoming lighter, as each breath carries away tension and brings in peace.",
},


{
  title: "Advertisement Voiceover",
  description: "Create catchy product promos with energy",
  gradient: "from-yellow-400 to-yellow-50",
  href: "/text-to-speech?text=Introducing the all-new Voxify — where your words come alive. Whether it's storytelling, podcasts, or content creation, Voxify gives your voice the power it deserves. Try it today!",
},

{
  title: "Sci-Fi Transmission",
  description: "Generate futuristic AI communication audio",
  gradient: "from-indigo-400 to-indigo-50",
  href: "/text-to-speech?text=This is a transmission from Sector 7. We have detected an unknown signal originating beyond the outer rim. If anyone receives this message, respond immediately. Time is running out.",
},

];