import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { article } from "../styled-system/recipes";
import { CodeBlock } from "../src/components/CodeBlock";

const meta = {
  title: "Recipes/Article",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <article class={article()}>
      <h1>The Future of Web Development</h1>

      <p>
        Web development continues to evolve at a rapid pace, with new
        frameworks, tools, and methodologies emerging regularly. This article
        explores the current state of the field and looks ahead to what
        developers can expect in the coming years.
      </p>

      <h2>Modern Frontend Frameworks</h2>

      <p>
        The frontend landscape has been dominated by React, Vue, and Angular for
        several years. However, newer frameworks like <a href="#">SolidJS</a>,
        Svelte, and Qwik are gaining traction due to their performance benefits
        and developer experience improvements.
      </p>

      <h3>Performance Considerations</h3>

      <p>
        When choosing a framework, developers should consider several factors:
      </p>

      <ul>
        <li>Bundle size and loading performance</li>
        <li>Runtime performance and reactivity system</li>
        <li>Developer experience and tooling</li>
        <li>Community support and ecosystem</li>
        <li>Long-term maintenance and stability</li>
      </ul>

      <h2>CSS-in-JS and Styling Solutions</h2>

      <p>
        The debate between CSS-in-JS and traditional CSS continues, with new
        solutions like <code>@pandacss/dev</code> offering compile-time CSS
        generation that combines the benefits of both approaches.
      </p>

      <blockquote>
        "The best styling solution is the one that fits your team's workflow and
        project requirements, not necessarily the most popular one."
      </blockquote>

      <h3>Code Example</h3>

      <p>Here's how you might use a modern styling solution:</p>

      <CodeBlock language="typescript">{`import { css } from './styled-system/css'

const buttonStyles = css({
  bg: 'blue.500',
  color: 'white',
  px: 4,
  py: 2,
  borderRadius: 'md'
})

export function Button(props) {
  return <button class={buttonStyles}>{props.children}</button>
}`}</CodeBlock>

      <h2>Accessibility and Inclusive Design</h2>

      <p>
        Modern web development places increasing emphasis on accessibility.
        Developers must consider users with disabilities and ensure their
        applications work with assistive technologies.
      </p>

      <h4>Key Accessibility Principles</h4>

      <ol>
        <li>
          <strong>Perceivable</strong> - Information must be presentable in ways
          users can perceive
        </li>
        <li>
          <strong>Operable</strong> - Interface components must be operable by
          all users
        </li>
        <li>
          <strong>Understandable</strong> - Information and UI operation must be
          understandable
        </li>
        <li>
          <strong>Robust</strong> - Content must be robust enough for various
          assistive technologies
        </li>
      </ol>

      <div class="note">
        <div class="title">Important Note</div>
        <p>
          Always test your applications with screen readers and keyboard
          navigation to ensure they're truly accessible to all users.
        </p>
      </div>

      <h2>Performance Optimization</h2>

      <p>
        Web performance remains crucial for user experience and SEO. Modern
        optimization techniques include:
      </p>

      <dl>
        <dt>Code Splitting</dt>
        <dd>
          Breaking your application into smaller chunks that load on demand
        </dd>

        <dt>Lazy Loading</dt>
        <dd>
          Loading resources only when they're needed or about to be viewed
        </dd>

        <dt>Service Workers</dt>
        <dd>Enabling offline functionality and background resource caching</dd>

        <dt>Web Vitals Optimization</dt>
        <dd>Focusing on Core Web Vitals metrics like LCP, FID, and CLS</dd>
      </dl>

      <hr />

      <h2>Looking Forward</h2>

      <p>
        The future of web development will likely see continued emphasis on
        performance, accessibility, and developer experience. New technologies
        like WebAssembly, edge computing, and AI-assisted development tools will
        shape how we build web applications.
      </p>

      <h5>Emerging Technologies</h5>

      <p>Keep an eye on these developing areas:</p>

      <ul>
        <li>WebAssembly for performance-critical applications</li>
        <li>Progressive Web Apps (PWAs) for native-like experiences</li>
        <li>Edge computing for reduced latency</li>
        <li>AI-powered development tools and code generation</li>
      </ul>

      <h6>Conclusion</h6>

      <p>
        Web development continues to be an exciting and rapidly evolving field.
        By staying informed about new technologies and best practices,
        developers can build better, more performant, and more accessible web
        applications.
      </p>

      <h2>Installation Guide</h2>
      
      <p>Getting started with modern web development tools:</p>
      
      <CodeBlock language="bash">{`# Install dependencies
npm install @pandacss/dev solid-js

# Generate CSS utilities
npm run prepare

# Start development server
npm run dev`}</CodeBlock>

      <p>Then configure your styles:</p>

      <CodeBlock language="json">{`{
  "name": "my-project",
  "scripts": {
    "prepare": "panda codegen",
    "dev": "vite dev"
  },
  "dependencies": {
    "@pandacss/dev": "^1.0.0",
    "solid-js": "^1.9.0"
  }
}`}</CodeBlock>

      <div class="footnotes">
        <p>
          <strong>References:</strong> This article is based on current industry
          trends and best practices as of 2024. Technologies and recommendations
          may evolve over time.
        </p>
      </div>
    </article>
  ),
};

export const WithTable: Story = {
  render: () => (
    <article class={article()}>
      <h1>Framework Comparison</h1>

      <p>
        Choosing the right frontend framework depends on various factors. Here's
        a comparison of popular options:
      </p>

      <table>
        <thead>
          <tr>
            <th>Framework</th>
            <th>Bundle Size</th>
            <th>Performance</th>
            <th>Learning Curve</th>
            <th>Ecosystem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React</td>
            <td>42kb</td>
            <td>Good</td>
            <td>Moderate</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>Vue</td>
            <td>34kb</td>
            <td>Good</td>
            <td>Easy</td>
            <td>Good</td>
          </tr>
          <tr>
            <td>SolidJS</td>
            <td>7kb</td>
            <td>Excellent</td>
            <td>Moderate</td>
            <td>Growing</td>
          </tr>
          <tr>
            <td>Svelte</td>
            <td>10kb</td>
            <td>Excellent</td>
            <td>Easy</td>
            <td>Good</td>
          </tr>
        </tbody>
      </table>

      <p>
        Each framework has its strengths and is suitable for different types of
        projects and team preferences.
      </p>

      <h3>Sample React vs SolidJS</h3>
      
      <p>Here's how the same component looks in both frameworks:</p>
      
      <CodeBlock language="javascript">{`// React
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</CodeBlock>

      <CodeBlock language="typescript">{`// SolidJS
function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button onClick={() => setCount(count() + 1)}>
      Count: {count()}
    </button>
  );
}`}</CodeBlock>
    </article>
  ),
};

export const ShortForm: Story = {
  render: () => (
    <article class={article()}>
      <h1>Quick Tips for Better Code</h1>

      <p>
        Writing clean, maintainable code is essential for long-term project
        success. Here are some quick tips:
      </p>

      <ul>
        <li>Use meaningful variable and function names</li>
        <li>Keep functions small and focused</li>
        <li>Write tests for your code</li>
        <li>Comment complex logic, not obvious code</li>
        <li>Follow consistent formatting rules</li>
      </ul>

      <p>
        Remember: <em>code is read more often than it's written</em>. Optimize
        for readability and maintainability.
      </p>
    </article>
  ),
};
