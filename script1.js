const vendors = [
    "The Grand Caterers",
    "Elite Events",
    "Celebration Co.",
    "Royal Cuisine"
  ];
  
  function createVendorCard(name) {
    return `
      <div class="vendor-card">
        <h3>${name}</h3>
        <p>Locally Sourced • On-Site Chef</p>
        <p>⭐ 4.9 (120 reviews)</p>
        <button>Contact Vendor</button>
      </div>
    `;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("vendorList");
    vendors.forEach(vendor => {
      list.innerHTML += createVendorCard(vendor);
    });
  
    // Toggle dropdown
    const groupBtn = document.querySelector(".group-btn");
    const groupContainer = document.querySelector(".group-container");
    groupBtn.addEventListener("click", () => {
      groupContainer.classList.toggle("show");
    });
  
    document.addEventListener("click", (e) => {
      if (!groupContainer.contains(e.target)) {
        groupContainer.classList.remove("show");
      }
    });
  });
  