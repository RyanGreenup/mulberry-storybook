import{a as i,t as c,i as p,c as l}from"./iframe-PFBARcnl.js";import{H as g}from"./Header-DU6R3FlQ.js";import"./preload-helper-D9Z9MdNV.js";import"./css-C_pJ_J0K.js";import"./Kbd-Czq9cEOx.js";import"./create-recipe-B6K2Nja6.js";var m=c('<article><section class=storybook-page><h2>Pages in Storybook</h2><p>We recommend building UIs with a <a href=https://componentdriven.org target=_blank rel="noopener noreferrer"><strong>component-driven</strong></a> process starting with atomic components and ending with pages.</p><p>Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:</p><ul><li>Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories</li><li>Assemble data in the page component from your services. You can mock these services out using Storybook.</li></ul><p>Get a guided tutorial on component-driven development at <a href=https://storybook.js.org/tutorials/ target=_blank rel="noopener noreferrer">Storybook tutorials</a>. Read more in the <a href=https://storybook.js.org/docs target=_blank rel="noopener noreferrer">docs</a>.</p><div class=tip-wrapper><span class=tip>Tip</span> Adjust the width of the canvas with the <svg width=10 height=10 viewBox="0 0 12 12"xmlns=http://www.w3.org/2000/svg><g fill=none fill-rule=evenodd><path d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"id=a fill=#999></path></g></svg>Viewports addon in the toolbar');const u=()=>{const[a,t]=i(void 0);return(()=>{var e=m(),r=e.firstChild;return p(e,l(g,{get user(){return a()},onLogin:()=>t({name:"Jane Doe"}),onLogout:()=>t(void 0),onCreateAccount:()=>t({name:"Jane Doe"})}),r),e})()},{expect:s,userEvent:d,within:h}=__STORYBOOK_MODULE_TEST__,k={title:"Example/Page",component:u,parameters:{layout:"fullscreen"}},o={},n={play:async({canvasElement:a})=>{const t=h(a),e=t.getByRole("button",{name:/Log in/i});await s(e).toBeInTheDocument(),await d.click(e),await s(e).not.toBeInTheDocument();const r=t.getByRole("button",{name:/Log out/i});await s(r).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole("button", {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};const _=["LoggedOut","LoggedIn"];export{n as LoggedIn,o as LoggedOut,_ as __namedExportsOrder,k as default};
