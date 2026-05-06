const data = window.siteData || {};

const setText = (id, value) => {
  const element = document.getElementById(id);
  element.textContent = value || "";
  return element;
};

const clearAndAppend = (id, children) => {
  const element = document.getElementById(id);
  element.replaceChildren(...children);
  return element;
};

const link = (label, url) => {
  const anchor = document.createElement("a");
  anchor.textContent = label;
  anchor.href = url;
  anchor.rel = "noreferrer";
  return anchor;
};

const linkedName = (person) => {
  if (person.url) return link(person.name, person.url);
  return document.createTextNode(person.name);
};

const joinInline = (items, separator = ", ") => {
  const nodes = [];
  items.forEach((item, index) => {
    if (index > 0) nodes.push(document.createTextNode(separator));
    nodes.push(item);
  });
  return nodes;
};

const socialLink = (item) => {
  const anchor = link(item.label, item.url);
  anchor.className = "social-link";
  anchor.title = item.label;
  anchor.setAttribute("aria-label", item.label);

  if (item.icon) {
    const icon = document.createElement("img");
    icon.src = item.icon;
    icon.alt = "";
    icon.width = 22;
    icon.height = 22;
    anchor.replaceChildren(icon);
  }

  return anchor;
};

document.title = data.name || "Academic Homepage";
setText("person-name", data.name);

const role = setText("role", data.role);
if (!data.role) {
  role.classList.add("is-hidden");
}

const affiliation = setText("affiliation", data.affiliation);
if (!data.affiliation) {
  affiliation.classList.add("is-hidden");
}

const email = setText("email", data.email);
if (!data.email) {
  email.classList.add("is-hidden");
}

const photo = document.getElementById("profile-photo");
photo.src = data.profileImage || "assets/profile-placeholder.svg";
photo.alt = data.profileImageAlt || `Portrait of ${data.name || "profile owner"}`;

clearAndAppend(
  "bio",
  (data.bio || []).map((paragraph) => {
    const p = document.createElement("p");
    p.innerHTML = paragraph;
    return p;
  })
);

clearAndAppend(
  "social-links",
  (data.socialLinks || data.links || []).map(socialLink)
);

const software = document.getElementById("software");
if (data.software?.length) {
  const heading = document.createElement("div");
  heading.className = "software-heading";
  heading.textContent = "Software";

  const items = data.software.map((item) => {
    const article = document.createElement("article");
    article.className = "software-item";

    const title = document.createElement("a");
    title.className = "software-title";
    title.href = item.url || item.links?.[0]?.url || "#";
    title.textContent = item.title || "";

    const description = document.createElement("div");
    description.className = "software-description";
    description.textContent = item.description || "";

    const itemLinks = document.createElement("div");
    itemLinks.className = "software-links";
    itemLinks.append(...(item.links || []).map((softwareLink) => link(softwareLink.label, softwareLink.url)));

    article.append(title, description, itemLinks);
    return article;
  });

  software.replaceChildren(heading, ...items);
} else {
  software.classList.add("is-hidden");
}

const manuscriptsSection = document.getElementById("manuscripts-section");
if (data.manuscripts?.length) {
  clearAndAppend(
    "manuscripts",
    data.manuscripts.map((title) => {
      const li = document.createElement("li");
      li.textContent = title;
      return li;
    })
  );
} else {
  manuscriptsSection.classList.add("is-hidden");
}

const publicationsSection = document.getElementById("publications-section");
if (data.publications?.length) {
  setText("publication-note", data.publicationNote);
  clearAndAppend(
    "publications",
    data.publications.map((paper) => {
      const article = document.createElement("article");
      article.className = "publication";

      const title = document.createElement("div");
      title.className = "paper-title";
      title.textContent = paper.title || "";

      const authors = document.createElement("div");
      authors.className = "authors";
      authors.append(...joinInline((paper.authors || []).map(linkedName)));

      const venue = document.createElement("div");
      venue.className = "venue";
      venue.textContent = paper.venue || "";

      if (paper.links?.length) {
        venue.append(document.createTextNode(" "));
        venue.append(...paper.links.map((item, index) => {
          const nodes = [];
          if (index > 0) nodes.push(document.createTextNode(" "));
          nodes.push(link(`[${item.label}]`, item.url));
          return nodes;
        }).flat());
      }

      article.append(title, authors, venue);
      return article;
    })
  );
} else {
  publicationsSection.classList.add("is-hidden");
}

const teachingSection = document.getElementById("teaching-section");
if (data.teaching?.length) {
  setText("teaching-note", data.teachingNote);
  clearAndAppend(
    "teaching",
    data.teaching.map((item) => {
      const article = document.createElement("article");
      article.className = "teaching-item";

      const course = document.createElement("div");
      course.className = "course-title";
      course.textContent = [item.course, item.institution].filter(Boolean).join(", ");

      const term = document.createElement("div");
      term.className = "term";
      term.textContent = item.term || "";

      article.append(course, term);

      if (item.links?.length) {
        const itemLinks = document.createElement("div");
        itemLinks.className = "teaching-links";
        itemLinks.append(...item.links.map((material) => link(material.label, material.url)));
        article.append(itemLinks);
      }

      return article;
    })
  );
} else {
  teachingSection.classList.add("is-hidden");
}
