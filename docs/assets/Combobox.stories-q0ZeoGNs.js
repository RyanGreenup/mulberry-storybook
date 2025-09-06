import{c as d,a as h,t as b,s as e,i,m as C,d as I}from"./iframe-PFBARcnl.js";import{S as v,M as w,K as $}from"./Kbd-Czq9cEOx.js";import"./preload-helper-D9Z9MdNV.js";import"./css-C_pJ_J0K.js";import"./create-recipe-B6K2Nja6.js";var D=b('<div tabindex=0 style="background-color:var(--colors-base-100);border-radius:0.5rem;box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1);min-width:24rem"><h3 style=font-size:1.125rem;font-weight:600>Single Selection (with selected item)</h3><p style=font-size:0.875rem>Selected: '),T=b('<div tabindex=0 style="background-color:var(--colors-base-100);border-radius:0.5rem;box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1);min-width:24rem"><h3 style=font-size:1.125rem;font-weight:600>Single Selection (Pre-selected)'),N=b('<div tabindex=0 style="background-color:var(--colors-base-100);border-radius:0.5rem;box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1);min-width:24rem"><h3 style=font-size:1.125rem;font-weight:600>Programming Languages'),B=b('<div tabindex=0 style="background-color:var(--colors-base-100);border-radius:0.5rem;box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1);min-width:24rem"><h3 style=font-size:1.125rem;font-weight:600>Multiple Selection'),W=b('<div tabindex=0 style="background-color:var(--colors-base-100);border-radius:0.5rem;box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1);min-width:24rem"><h3 style=font-size:1.125rem;font-weight:600>Multiple Selection (Pre-selected)'),H=b('<div tabindex=0 style="background-color:var(--colors-base-100);border-radius:0.5rem;box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1);min-width:24rem"><h3 style=font-size:1.125rem;font-weight:600>Controlled Multiple Selection</h3><div style=flex-direction:column><div><button style=background-color:#ef4444;border-radius:0.25rem>Clear All</button><button style=background-color:#3b82f6;border-radius:0.25rem>Select All</button></div><p>Selected: <!> items'),j=b('<div tabindex=0 style="background-color:var(--colors-base-100);border-radius:0.5rem;box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1);min-width:40rem"><h3 style=font-size:1.25rem;font-weight:700>Combobox Comparison</h3><div style=flex-direction:column><div><h4 style=font-size:1.125rem;font-weight:600>Single Selection</h4></div><div><h4 style=font-size:1.125rem;font-weight:600>Multiple Selection'),J=b('<div tabindex=0 style="background-color:var(--colors-base-100);border-radius:0.5rem;box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1);min-width:24rem"><h3 style=font-size:1.125rem;font-weight:600>Global Keybinding Example</h3><div style=background-color:var(--colors-base-200);border-radius:0.375rem;margin-bottom:1.5rem;font-size:0.875rem><p style=font-weight:600>Try the keyboard shortcut:</p><p><span>+</span><span>or</span><span>+</span><span style=margin-left:0.5rem>to focus the search</span></p></div><p style=font-size:0.875rem>Selected: ');const Z={title:"Components/Combobox",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the input"},label:{control:"text",description:"Aria label for the combobox"},options:{control:"object",description:"Array of options to choose from"}}},x=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon","Mango","Orange","Papaya","Quince","Raspberry","Strawberry","Tangerine","Ugli fruit","Vanilla bean","Watermelon"],F=["JavaScript","TypeScript","Python","Java","C++","C#","Go","Rust","Ruby","PHP","Swift","Kotlin","Scala","Clojure","Haskell","OCaml","F#","Elixir","Erlang","Dart"],_={render:o=>{const[n,t]=h("Banana");return(()=>{var r=D(),c=r.firstChild,l=c.nextSibling;return l.firstChild,e(r,"padding","2rem"),e(r,"border","1px solid var(--colors-base-300)"),e(r,"outline","none"),e(c,"margin","0 0 1rem 0"),i(r,d(v,C(o,{get value(){return n()},onChange:t})),l),e(l,"margin","1rem 0 0 0"),e(l,"color","var(--colors-base-content)"),i(l,()=>n()||"None",null),r})()},args:{options:x,placeholder:"Select a fruit...",label:"Fruit Selection"}},k={render:o=>{const[n,t]=h("Apple");return(()=>{var r=T(),c=r.firstChild;return e(r,"padding","2rem"),e(r,"border","1px solid var(--colors-base-300)"),e(r,"outline","none"),e(c,"margin","0 0 1rem 0"),i(r,d(v,C(o,{get value(){return n()},onChange:t})),null),r})()},args:{options:x,placeholder:"Select a fruit...",label:"Fruit Selection"}},M={render:o=>(()=>{var n=N(),t=n.firstChild;return e(n,"padding","2rem"),e(n,"border","1px solid var(--colors-base-300)"),e(n,"outline","none"),e(t,"margin","0 0 1rem 0"),i(n,d(v,o),null),n})(),args:{options:F,placeholder:"Choose a programming language...",label:"Programming Language Selection"}},z={args:{options:[],placeholder:"No options available",label:"Empty Selection"}},V={args:{options:Array.from({length:100},(o,n)=>`Option ${n+1}`),placeholder:"Search from 100 options...",label:"Large List Selection"}},L={render:o=>(()=>{var n=B(),t=n.firstChild;return e(n,"padding","2rem"),e(n,"border","1px solid var(--colors-base-300)"),e(n,"outline","none"),e(t,"margin","0 0 1rem 0"),i(n,d(w,{get options(){return o.options},get placeholder(){return o.placeholder},get label(){return o.label}}),null),n})(),args:{options:x,placeholder:"Select fruits...",label:"Multiple Fruit Selection"}},K={render:o=>{const[n,t]=h(["Apple","Banana","Cherry"]);return(()=>{var r=W(),c=r.firstChild;return e(r,"padding","2rem"),e(r,"border","1px solid var(--colors-base-300)"),e(r,"outline","none"),e(c,"margin","0 0 1rem 0"),i(r,d(w,C(o,{get value(){return n()},onChange:t})),null),r})()},args:{options:x,placeholder:"Select fruits...",label:"Multiple Fruit Selection"}},P={render:o=>d(w,{get options(){return o.options},get placeholder(){return o.placeholder},get label(){return o.label}}),args:{options:F,placeholder:"Choose programming languages...",label:"Multiple Programming Language Selection"}},A={render:o=>{const[n,t]=h([]),r=()=>t([]),c=()=>t([...o.options]);return(()=>{var l=H(),a=l.firstChild,p=a.nextSibling,m=p.firstChild,u=m.firstChild,s=u.nextSibling,g=m.nextSibling,S=g.firstChild,f=S.nextSibling;return f.nextSibling,e(l,"padding","2rem"),e(l,"border","1px solid var(--colors-base-300)"),e(l,"outline","none"),e(a,"margin","0 0 1rem 0"),e(p,"display","flex"),e(p,"gap","1rem"),i(p,d(w,C(o,{get value(){return n()},onChange:t})),m),e(m,"display","flex"),e(m,"gap","0.5rem"),u.$$click=r,e(u,"padding","0.5rem 1rem"),e(u,"color","white"),e(u,"border","none"),e(u,"cursor","pointer"),s.$$click=c,e(s,"padding","0.5rem 1rem"),e(s,"color","white"),e(s,"border","none"),e(s,"cursor","pointer"),i(g,()=>n().length,f),l})()},args:{options:x.slice(0,8),placeholder:"Select fruits...",label:"Controlled Multiple Selection"}},E={render:o=>{const[n,t]=h(""),[r,c]=h([]);return(()=>{var l=j(),a=l.firstChild,p=a.nextSibling,m=p.firstChild,u=m.firstChild,s=m.nextSibling,g=s.firstChild;return e(l,"padding","2rem"),e(l,"border","1px solid var(--colors-base-300)"),e(l,"outline","none"),e(a,"margin","0 0 2rem 0"),e(p,"display","flex"),e(p,"gap","2rem"),e(u,"margin","0 0 1rem 0"),i(m,d(v,{get options(){return o.options},placeholder:"Select one fruit...",get value(){return n()},onChange:t}),null),e(g,"margin","0 0 1rem 0"),i(s,d(w,{get options(){return o.options},placeholder:"Select multiple fruits...",get value(){return r()},onChange:c}),null),l})()},args:{options:x.slice(0,10)}},O={render:o=>{const[n,t]=h("");let r;const c=a=>{(a.ctrlKey||a.metaKey)&&a.key==="/"&&(a.preventDefault(),r?.focus(),r?.select())},l=()=>{document.removeEventListener("keydown",c)};return document.addEventListener("keydown",c),setTimeout(()=>l,0),(()=>{var a=J(),p=a.firstChild,m=p.nextSibling,u=m.firstChild,s=u.nextSibling,g=s.firstChild,S=g.nextSibling,f=S.nextSibling,R=f.nextSibling,y=m.nextSibling;return y.firstChild,e(a,"padding","2rem"),e(a,"border","1px solid var(--colors-base-300)"),e(a,"outline","none"),e(p,"margin","0 0 1rem 0"),e(m,"padding","1rem"),e(u,"margin","0 0 0.5rem 0"),e(s,"margin","0"),i(s,d($,{size:"sm",children:"Ctrl"}),g),e(g,"margin","0 0.25rem"),i(s,d($,{size:"sm",children:"/"}),S),e(S,"margin","0 0.5rem"),i(s,d($,{size:"sm",children:"⌘"}),f),e(f,"margin","0 0.25rem"),i(s,d($,{size:"sm",children:"/"}),R),i(a,d(v,C(o,{get value(){return n()},onChange:t,ref:G=>{r=G}})),y),e(y,"margin","1rem 0 0 0"),e(y,"color","var(--colors-base-content)"),i(y,()=>n()||"None",null),a})()},args:{options:x,placeholder:"Press Ctrl+/ to focus and search...",label:"Searchable Fruit Selection"}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = createSignal("Banana");
    return <div tabIndex={0} style={{
      padding: "2rem",
      "background-color": "var(--colors-base-100)",
      border: "1px solid var(--colors-base-300)",
      "border-radius": "0.5rem",
      "box-shadow": "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      "min-width": "24rem",
      outline: "none"
    }}>
        <h3 style={{
        margin: "0 0 1rem 0",
        "font-size": "1.125rem",
        "font-weight": "600"
      }}>
          Single Selection (with selected item)
        </h3>
        <SingleCombobox {...args} value={value()} onChange={setValue} />
        <p style={{
        margin: "1rem 0 0 0",
        "font-size": "0.875rem",
        color: "var(--colors-base-content)"
      }}>
          Selected: {value() || "None"}
        </p>
      </div>;
  },
  args: {
    options: defaultOptions,
    placeholder: "Select a fruit...",
    label: "Fruit Selection"
  }
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = createSignal("Apple");
    return <div tabIndex={0} style={{
      padding: "2rem",
      "background-color": "var(--colors-base-100)",
      border: "1px solid var(--colors-base-300)",
      "border-radius": "0.5rem",
      "box-shadow": "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      "min-width": "24rem",
      outline: "none"
    }}>
        <h3 style={{
        margin: "0 0 1rem 0",
        "font-size": "1.125rem",
        "font-weight": "600"
      }}>
          Single Selection (Pre-selected)
        </h3>
        <SingleCombobox {...args} value={value()} onChange={setValue} />
      </div>;
  },
  args: {
    options: defaultOptions,
    placeholder: "Select a fruit...",
    label: "Fruit Selection"
  }
}`,...k.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <div tabIndex={0} style={{
    padding: "2rem",
    "background-color": "var(--colors-base-100)",
    border: "1px solid var(--colors-base-300)",
    "border-radius": "0.5rem",
    "box-shadow": "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    "min-width": "24rem",
    outline: "none"
  }}>
      <h3 style={{
      margin: "0 0 1rem 0",
      "font-size": "1.125rem",
      "font-weight": "600"
    }}>
        Programming Languages
      </h3>
      <SingleCombobox {...args} />
    </div>,
  args: {
    options: programmingLanguages,
    placeholder: "Choose a programming language...",
    label: "Programming Language Selection"
  }
}`,...M.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    options: [],
    placeholder: "No options available",
    label: "Empty Selection"
  }
}`,...z.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    options: Array.from({
      length: 100
    }, (_, i) => \`Option \${i + 1}\`),
    placeholder: "Search from 100 options...",
    label: "Large List Selection"
  }
}`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <div tabIndex={0} style={{
    padding: "2rem",
    "background-color": "var(--colors-base-100)",
    border: "1px solid var(--colors-base-300)",
    "border-radius": "0.5rem",
    "box-shadow": "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    "min-width": "24rem",
    outline: "none"
  }}>
      <h3 style={{
      margin: "0 0 1rem 0",
      "font-size": "1.125rem",
      "font-weight": "600"
    }}>
        Multiple Selection
      </h3>
      <MultiCombobox options={args.options} placeholder={args.placeholder} label={args.label} />
    </div>,
  args: {
    options: defaultOptions,
    placeholder: "Select fruits...",
    label: "Multiple Fruit Selection"
  }
}`,...L.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = createSignal(["Apple", "Banana", "Cherry"]);
    return <div tabIndex={0} style={{
      padding: "2rem",
      "background-color": "var(--colors-base-100)",
      border: "1px solid var(--colors-base-300)",
      "border-radius": "0.5rem",
      "box-shadow": "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      "min-width": "24rem",
      outline: "none"
    }}>
        <h3 style={{
        margin: "0 0 1rem 0",
        "font-size": "1.125rem",
        "font-weight": "600"
      }}>
          Multiple Selection (Pre-selected)
        </h3>
        <MultiCombobox {...args} value={value()} onChange={setValue} />
      </div>;
  },
  args: {
    options: defaultOptions,
    placeholder: "Select fruits...",
    label: "Multiple Fruit Selection"
  }
}`,...K.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <MultiCombobox options={args.options} placeholder={args.placeholder} label={args.label} />,
  args: {
    options: programmingLanguages,
    placeholder: "Choose programming languages...",
    label: "Multiple Programming Language Selection"
  }
}`,...P.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = createSignal<string[]>([]);
    const handleReset = () => setValue([]);
    const handleSelectAll = () => setValue([...args.options]);
    return <div tabIndex={0} style={{
      padding: "2rem",
      "background-color": "var(--colors-base-100)",
      border: "1px solid var(--colors-base-300)",
      "border-radius": "0.5rem",
      "box-shadow": "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      "min-width": "24rem",
      outline: "none"
    }}>
        <h3 style={{
        margin: "0 0 1rem 0",
        "font-size": "1.125rem",
        "font-weight": "600"
      }}>
          Controlled Multiple Selection
        </h3>
        <div style={{
        display: "flex",
        "flex-direction": "column",
        gap: "1rem"
      }}>
          <MultiCombobox {...args} value={value()} onChange={setValue} />
          <div style={{
          display: "flex",
          gap: "0.5rem"
        }}>
            <button onclick={handleReset} style={{
            padding: "0.5rem 1rem",
            "background-color": "#ef4444",
            color: "white",
            border: "none",
            "border-radius": "0.25rem",
            cursor: "pointer"
          }}>
              Clear All
            </button>
            <button onclick={handleSelectAll} style={{
            padding: "0.5rem 1rem",
            "background-color": "#3b82f6",
            color: "white",
            border: "none",
            "border-radius": "0.25rem",
            cursor: "pointer"
          }}>
              Select All
            </button>
          </div>
          <p>Selected: {value().length} items</p>
        </div>
      </div>;
  },
  args: {
    options: defaultOptions.slice(0, 8),
    placeholder: "Select fruits...",
    label: "Controlled Multiple Selection"
  }
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [singleValue, setSingleValue] = createSignal("");
    const [multiValue, setMultiValue] = createSignal<string[]>([]);
    return <div tabIndex={0} style={{
      padding: "2rem",
      "background-color": "var(--colors-base-100)",
      border: "1px solid var(--colors-base-300)",
      "border-radius": "0.5rem",
      "box-shadow": "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      "min-width": "40rem",
      outline: "none"
    }}>
        <h3 style={{
        margin: "0 0 2rem 0",
        "font-size": "1.25rem",
        "font-weight": "700"
      }}>
          Combobox Comparison
        </h3>
        <div style={{
        display: "flex",
        "flex-direction": "column",
        gap: "2rem"
      }}>
          <div>
            <h4 style={{
            margin: "0 0 1rem 0",
            "font-size": "1.125rem",
            "font-weight": "600"
          }}>
              Single Selection
            </h4>
            <SingleCombobox options={args.options} placeholder="Select one fruit..." value={singleValue()} onChange={setSingleValue} />
          </div>
          <div>
            <h4 style={{
            margin: "0 0 1rem 0",
            "font-size": "1.125rem",
            "font-weight": "600"
          }}>
              Multiple Selection
            </h4>
            <MultiCombobox options={args.options} placeholder="Select multiple fruits..." value={multiValue()} onChange={setMultiValue} />
          </div>
        </div>
      </div>;
  },
  args: {
    options: defaultOptions.slice(0, 10)
  }
}`,...E.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = createSignal("");
    let inputRef: HTMLInputElement | undefined;

    // Set up global keybinding (Ctrl+/ or Cmd+/)
    const handleGlobalKeydown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "/") {
        e.preventDefault();
        inputRef?.focus();
        inputRef?.select(); // Select all text if any
      }
    };

    // Add event listener on mount, remove on cleanup
    const cleanup = () => {
      document.removeEventListener("keydown", handleGlobalKeydown);
    };
    document.addEventListener("keydown", handleGlobalKeydown);

    // Clean up when component unmounts (Solid.js will call this)
    setTimeout(() => {
      return cleanup;
    }, 0);
    return <div tabIndex={0} style={{
      padding: "2rem",
      "background-color": "var(--colors-base-100)",
      border: "1px solid var(--colors-base-300)",
      "border-radius": "0.5rem",
      "box-shadow": "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      "min-width": "24rem",
      outline: "none"
    }}>
        <h3 style={{
        margin: "0 0 1rem 0",
        "font-size": "1.125rem",
        "font-weight": "600"
      }}>
          Global Keybinding Example
        </h3>
        <div style={{
        "background-color": "var(--colors-base-200)",
        padding: "1rem",
        "border-radius": "0.375rem",
        "margin-bottom": "1.5rem",
        "font-size": "0.875rem"
      }}>
          <p style={{
          margin: "0 0 0.5rem 0",
          "font-weight": "600"
        }}>
            Try the keyboard shortcut:
          </p>
          <p style={{
          margin: "0"
        }}>
            <Kbd size="sm">Ctrl</Kbd>
            <span style={{
            margin: "0 0.25rem"
          }}>+</span>
            <Kbd size="sm">/</Kbd>
            <span style={{
            margin: "0 0.5rem"
          }}>or</span>
            <Kbd size="sm">⌘</Kbd>
            <span style={{
            margin: "0 0.25rem"
          }}>+</span>
            <Kbd size="sm">/</Kbd>
            <span style={{
            "margin-left": "0.5rem"
          }}>to focus the search</span>
          </p>
        </div>
        <SingleCombobox {...args} value={value()} onChange={setValue} ref={el => {
        inputRef = el;
      }} />
        <p style={{
        margin: "1rem 0 0 0",
        "font-size": "0.875rem",
        color: "var(--colors-base-content)"
      }}>
          Selected: {value() || "None"}
        </p>
      </div>;
  },
  args: {
    options: defaultOptions,
    placeholder: "Press Ctrl+/ to focus and search...",
    label: "Searchable Fruit Selection"
  }
}`,...O.parameters?.docs?.source}}};I(["click"]);const ee=["SingleDefault","SingleWithValue","SingleProgrammingLanguages","SingleEmpty","SingleLongList","MultiDefault","MultiWithValues","MultiProgrammingLanguages","MultiControlled","Comparison","GlobalKeybinding"];export{E as Comparison,O as GlobalKeybinding,A as MultiControlled,L as MultiDefault,P as MultiProgrammingLanguages,K as MultiWithValues,_ as SingleDefault,z as SingleEmpty,V as SingleLongList,M as SingleProgrammingLanguages,k as SingleWithValue,ee as __namedExportsOrder,Z as default};
