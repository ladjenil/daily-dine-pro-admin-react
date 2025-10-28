export const DATA = {
  dashboard: {
    totalCustomers: 128,
    totalMessOwners: 42,
    totalOrders: 560,
    totalRevenue: 32000,
  },
  customers: [
    { id: 1, name: "Riya Shah", email: "riya@example.com", status: "Active" },
    { id: 2, name: "Amit Patel", email: "amit@example.com", status: "Inactive" },
    { id: 3, name: "Priya Desai", email: "priya@example.com", status: "Active" },
  ],
  messOwners: [
    { id: 1, name: "Mess Delight", owner: "Nirav Mehta", status: "Approved" },
    { id: 2, name: "FoodZone", owner: "Kiran Joshi", status: "Pending" },
  ],
  dailyMenu: [
    { id: 1, dish: "Paneer Butter Masala", price: "₹120" },
    { id: 2, dish: "Dal Tadka", price: "₹80" },
    { id: 3, dish: "Jeera Rice", price: "₹60" },
  ],
  queries: [
    { id: 1, name: "Manav", message: "Issue with order #231", status: "Open" },
    { id: 2, name: "Neha", message: "Requesting refund", status: "Closed" },
  ],
};
