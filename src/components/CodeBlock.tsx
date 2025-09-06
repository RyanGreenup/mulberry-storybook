import { createEffect, createSignal } from "solid-js";
// Import the full highlight.js bundle with common languages included
import hljs from "highlight.js";
// Import org-mode language separately as it's not in the common bundle
import qml from "highlight.js/lib/languages/qml";
import awk from "highlight.js/lib/languages/awk";
import "highlight.js/styles/github-dark.css";

// Register org-mode language
hljs.registerLanguage("qml", qml);
hljs.registerLanguage("awk", awk);

interface CodeBlockProps {
  children: string;
  language?: string;
  class?: string;
}

export function CodeBlock(props: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = createSignal("");
  let codeRef: HTMLElement | undefined;

  createEffect(() => {
    const code = props.children;
    const language = props.language || "javascript";

    try {
      const result = hljs.highlight(code, { language });
      setHighlightedCode(result.value);
    } catch (err) {
      // Fallback to auto-detection
      try {
        const result = hljs.highlightAuto(code);
        setHighlightedCode(result.value);
      } catch (autoErr) {
        // If all fails, use plain text
        setHighlightedCode(code);
      }
    }
  });

  return (
    <pre class={props.class}>
      <code
        ref={codeRef}
        innerHTML={highlightedCode()}
      />
    </pre>
  );
}
