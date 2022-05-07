const list = [
  {
    id: 0,
    title: "DASHBOARD",
    items: [
      {
        id: "a0",
        name: "Dashboard",
        icon: "Dashboard",
      },
    ],
  },
  {
    id: 1,
    title: "SERVICE MANAGEMENT",
    items: [
      {
        id: "b0",
        name: "Service Zones",
        icon: "Map",
      },
      {
        id: "b1",
        name: "Service Categories",
        icon: "DashboardCustomize",
        subitems: [
          {
            id: "b10",
            name: "Category 1",
          },
          {
            id: "b11",
            name: "Category 2",
          },
        ],
      },
      {
        id: "b2",
        name: "Services",
        icon: "Handyman",
        subitems: [
          {
            id: "b20",
            name: "Service List",
          },
          {
            id: "b21",
            name: "Add New Service",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "PROMOTION MANAGEMENT",
    items: [
      {
        id: "c0",
        name: "Discounts",
        icon: "LocalOffer",
      },
      {
        id: "c1",
        name: "Coupons",
        icon: "LocalOffer",
      },
      {
        id: "c2",
        name: "Campaigns",
        icon: "LocalOffer",
      },
      {
        id: "c3",
        name: "Promotional Banners",
        icon: "Flag",
      },
    ],
  },
  {
    id: 3,
    title: "BOOKING MANAGEMENT",
    items: [
      {
        id: "d0",
        name: "Bookings",
        icon: "CalendarMonth",
      },
    ],
  },
  {
    id: 4,
    title: "PROVIDER MANAGEMENT",
    items: [
      {
        id: "e0",
        name: "Provider List",
        icon: "Engineering",
      },
      {
        id: "e1",
        name: "Onboarding Request",
        icon: "Description",
      },
    ],
  },
  {
    id: 5,
    title: "SYSTEM MANAGEMENT",
    items: [
      {
        id: "e0",
        name: "Business Settings",
        icon: "BusinessCenter",
      },
      {
        id: "e1",
        name: "File Manager",
        icon: "Folder",
      },
      {
        id: "e2",
        name: "Configurations",
        icon: "MiscellaneousServices",
      },
      {
        id: "e3",
        name: "Theme Settings",
        icon: "QrCode",
      },
      {
        id: "e4",
        name: "Page Settings",
        icon: "Receipt",
      },
    ],
  },
];

export { list };
