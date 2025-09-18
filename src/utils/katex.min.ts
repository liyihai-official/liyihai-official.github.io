import katex from "katex";

// 将字符串里的 $$...$$（块）与 $...$（行内）渲染成 HTML
export function renderInlineMath(text: string): string {
  if (!text) return "";
  // 先处理块级 $$...$$（允许跨行）
  const blockDone = text.replace(/\$\$([\s\S]+?)\$\$/g, (_m, g1) =>
    katex.renderToString(g1, { displayMode: true, throwOnError: false })
  );
  // 再处理行内 $...$
  return blockDone.replace(/\$([^$\n]+?)\$/g, (_m, g1) =>
    katex.renderToString(g1, { displayMode: false, throwOnError: false })
  );
}
