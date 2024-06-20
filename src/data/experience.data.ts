export type Experience = {
  position: string;
  company: string;
  summary: string;
  description: string;
  site: string;
  startDate: string;
  endDate?: string;
  currentlyWorking: boolean;
  tech: string[];
};

export const experiences = [
  {
    position: "Founding Engineer",
    company: "Dialy",
    summary:
      "Built the entire payments infrastructure within 3 days of being hired, for subscriptions as well as one time payments using Stripe.",
    description:
      "Built the entire payments infrastructure consisting of subscriptions + one time top-ups using Stripe & Webhooks. Added a cron job to schedule calls according to the user’s preferred timings between 8am to 7pm with support for 7 days a week across 428 timezones. Integrated user’s calendar using Google’s Calendar API to the user’s Workspace. Built a test call modal with Custom Prompt support, using the OpenAI API in < 3h. Designed and implemented a versatile Do-Not-Disturb feature, configurable for both public and workspace scope, with automated maintenance of records. Added cron jobs to delete all DND records > 1yr old. Established secure OTP verification using Twilio. Fixed dozens of cache invalidation issues. Implemented a Playback controller to listen to the recordings of any particular call. Added a Fully customizable Filtering and Sorting of Calls and Recordings as per duration, cost, campaign, date and more. Integrated an email provider and wrote personalized emails for a myriad of events such as passwords-reset, workspace invitations, low balance warning etc. along with their respective implementations, from scratch. Integrated MagicBell as a notification provider. Built a ton of forms(type-safe and secure), including all the settings pages throughout the application. (**till Jan 30 2024**)",
    site: "https://dialy.io/",
    startDate: "2023 December",
    endDate: "2024 April",
    currentlyWorking: false,
    tech: [
      "NextJS",
      "TypeScript",
      "Prisma",
      "shadcn/ui",
      "Next-Auth",
      "MongoDB",
    ],
  },
] satisfies Experience[];
