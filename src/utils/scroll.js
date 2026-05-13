const DEFAULT_SCROLL_OFFSET = 80;

const getScrollOffset = () => {
  if (typeof window === "undefined") return DEFAULT_SCROLL_OFFSET;

  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--scroll-offset")
    .trim();
  const parsed = Number.parseInt(raw, 10);

  return Number.isNaN(parsed) ? DEFAULT_SCROLL_OFFSET : parsed;
};

const normalizeId = (idOrHash) => {
  if (!idOrHash) return "";
  return idOrHash.startsWith("#") ? idOrHash.slice(1) : idOrHash;
};

export const scrollToId = (idOrHash, options = {}) => {
  if (typeof window === "undefined") return;

  const id = normalizeId(idOrHash);
  const target = document.getElementById(id);
  if (!target) return;

  const offset = options.offset ?? getScrollOffset();
  const behavior = options.behavior ?? "smooth";
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior });
};

export const handleAnchorScroll = (event, idOrHash, options) => {
  event?.preventDefault();
  scrollToId(idOrHash, options);
};
