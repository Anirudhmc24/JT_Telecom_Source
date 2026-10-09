/*
  ────────────────────────────────────────────────────────────────────────────
  EDITABLE BUSINESS DETAILS
  Replace every value below to publish this page. The visual map is decorative;
  the directions and review links are the source of truth for customer actions.
  ────────────────────────────────────────────────────────────────────────────
*/
const BUSINESS = {
  name: "JT Telecom",
  category: "Mobile Repair Shop",
  address: "No. 60/A, Srinivasa Nagar Main Rd, near Maruthi Temple, Govindaraja Nagar Ward, Pattegarhpalya, Nagarbhavi, Bengaluru, Karnataka 560072",
  directionsUrl: "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwjwmeDi2q2XAxUAAAAAHQAAAAAQGg..i&udm&fvr=1&pvq=Cg0vZy8xMXRmbmY5M3Y5IhAKCmp0IHRlbGVjb20QAhgDiQGudEJztBCftg&lqi=CgpqdCB0IHRlbGVjb20gSMme0sa2uYCACFoUEAAQARgAGAEiCmp0IHRlbGVjb22SARpjZWxsX3Bob25lX2FjY2Vzc29yeV9zdG9yZQ&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3bae3dd313fb70f5:0xb69f10b4734274ae",
  reviewUrl: "", // Add the direct Google review URL here when available.
  websiteUrl: "https://www.instagram.com/jt_telecom2020?exln=cW9neGl4anJ2dGFx",
  phone: "9916494131",
  whatsappUrl: "https://wa.me/919916494131",
  colors: {
    brand: "#A77B22",
    brandDeep: "#17130D",
    accent: "#D9B75A",
  },
};

const $ = (id) => document.getElementById(id);
const initials = (name) => name
  .replace(/[\[\]]/g, "")
  .split(/\s+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((word) => word[0])
  .join("")
  .toUpperCase() || "BN";

function applyBusinessDetails() {
  document.documentElement.style.setProperty("--brand", BUSINESS.colors.brand);
  document.documentElement.style.setProperty("--brand-deep", BUSINESS.colors.brandDeep);
  document.documentElement.style.setProperty("--accent", BUSINESS.colors.accent);

  document.title = `${BUSINESS.name} | Leave a Review`;
  $("business-name").textContent = BUSINESS.name;
  $("footer-business-name").textContent = BUSINESS.name;
  $("business-category").textContent = BUSINESS.category;
  $("business-address").textContent = BUSINESS.address;
  $("footer-address").textContent = BUSINESS.address;
  $("map-label").textContent = BUSINESS.name;
  $("map-visual").setAttribute("aria-label", `Map preview for ${BUSINESS.name}`);
  $("review-link").setAttribute("aria-label", `Leave ${BUSINESS.name} a Google Review`);
  if (BUSINESS.reviewUrl) {
    $("review-link").href = BUSINESS.reviewUrl;
  } else {
    $("review-link").removeAttribute("href");
    $("review-link").setAttribute("aria-disabled", "true");
    $("review-link").classList.add("is-pending");
    $("review-link").querySelector("span:nth-child(2)").textContent = "Google Review link coming soon";
  }
  $("directions-link").href = BUSINESS.directionsUrl;
  $("website-link").href = BUSINESS.websiteUrl;
  $("whatsapp-link").href = BUSINESS.whatsappUrl;
  $("phone-link").href = `tel:${BUSINESS.phone.replace(/[^+\d]/g, "")}`;
}

applyBusinessDetails();
