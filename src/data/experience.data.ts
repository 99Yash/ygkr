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
    startDate: "2023 December 11",
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
  {
    position: "Founding Engineer",
    company: "Labquote",
    summary: "I'm building a platform for Americans to auction equipments.",
    description: `- Architected an application centered around auctioning of laboratory equipments
- Built on the philosophy of lowest first: "buyers" post listings and "sellers" bid on the item. Lowest bidder wins, currently supporting 10 different types of listings, including Remote Support and Instrument Leasing
- Sellers can choose to be notified against selling of specific instruments for specific listings, implemented a dynamic 2-dimensional checkbox to empower the user to edit their preferences
(Instruments <-> Listing Types)
- Added AUTO Bid feature for Sellers for bidding on their behalf. Designed and implemented the algorithm for the same + commission based on slabs
- Wrote formal emails and built templates around authentication, notification of a new instrument, approval notification of sellers as well as congratulatory message for winners
- Integrated the new Google Places API to autocomplete user's address based on (debounced) input
- Implemented a robust phone number input component that verifies whether a given number is valid for the specific country it's from
- Wrote TRPC procedures for Role Based Authorization (Buyers / Sellers / Admins)
- Wrote the entire application from scratch (no designs) + ensured responsive images for all screen sizes
    `,
    site: "https://labquote.vercel.app/",
    startDate: "2024 May 12",
    endDate: undefined,
    currentlyWorking: true,
    tech: [
      "NextJS",
      "TypeScript",
      "Prisma",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
    ],
  },
] satisfies Experience[];
