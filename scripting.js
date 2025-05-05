const vendors = [
    "The Grand Caterers",
    "Elite Events",
    "Celebration Co.",
    "Royal Cuisine",
    "Sparkle Hospitality",
    "The Happy Host",
    "Epicure Chefs"
  ];
  
  function createVendorCard(name) {
    return `
      <div class="vendor-card">
        <h3>${name}</h3>
        <p>Organic Ingredient • On-Site Chef • Private Dining</p>
        <p>⭐ 4.9 (130 reviews)</p>
        <button>Contact Vendor</button>
      </div>
    `;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("vendorList");
    vendors.forEach(vendor => {
      container.innerHTML += createVendorCard(vendor);
    });
  });
  