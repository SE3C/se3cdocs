import { useEffect } from "react";

const siteUrl = "https://se3c.mcv.kr";
const defaultDescription = "SE3C는 위성 시스템, 로켓공학, 로보틱스·AI, 공학 소프트웨어를 설계·제작·시험·기록하는 우주탐사공학실험동아리입니다.";

function updateMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) { element = document.createElement("meta"); element.setAttribute(attribute, key); document.head.append(element); }
  element.content = content;
}

export function useDocumentMeta(title: string, description = defaultDescription) {
  useEffect(() => {
    document.title = `${title} | SE3C`;
    updateMeta('meta[name="description"]', "name", "description", description);
    updateMeta('meta[property="og:title"]', "property", "og:title", `${title} | SE3C`);
    updateMeta('meta[property="og:description"]', "property", "og:description", description);
    updateMeta('meta[name="twitter:title"]', "name", "twitter:title", `${title} | SE3C`);
    updateMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.append(canonical); }
    canonical.href = `${siteUrl}${window.location.pathname}`;
  }, [description, title]);
}
