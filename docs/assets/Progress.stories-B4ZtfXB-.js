import{a as e,g as M,t as D,s as A,i as s,c as l,e as L,f as v}from"./iframe-PFBARcnl.js";import{P as r}from"./Kbd-Czq9cEOx.js";import{c as m}from"./css-C_pJ_J0K.js";import"./preload-helper-D9Z9MdNV.js";import"./create-recipe-B6K2Nja6.js";var E=D("<div>"),B=D("<div><div><p>Small</p></div><div><p>Medium</p></div><div><p>Large"),O=D("<div><h3>Progress Overview"),R=D("<div><div><p>Score: 85/120</p></div><div><p>Tasks: 12/20</p></div><div><p>Storage: 750GB/1TB");const q={title:"Components/Progress",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value"},max:{control:{type:"number",min:1},description:"Maximum value"},variant:{control:"select",options:["default","success","warning","error"],description:"Progress bar variant"},size:{control:"select",options:["sm","md","lg"],description:"Progress bar size"},showLabel:{control:"boolean",description:"Show percentage label"}}},P={render:t=>{const[d,g]=e(t.value),[i,o]=e(t.max),[a,n]=e(t.showLabel);return M(()=>g(t.value)),M(()=>o(t.max)),M(()=>n(t.showLabel)),(()=>{var c=E();return A(c,"width","300px"),s(c,l(r,{value:d,max:i,showLabel:a,get variant(){return t.variant},get size(){return t.size}})),c})()},args:{value:65,showLabel:!0,variant:"default",size:"md",max:100}},z={render:()=>{const[t]=e(25),[d]=e(50),[g]=e(75),[i]=e(90),[o]=e(!0);return(()=>{var a=E();return s(a,l(r,{value:t,variant:"default",showLabel:o}),null),s(a,l(r,{value:d,variant:"success",showLabel:o}),null),s(a,l(r,{value:g,variant:"warning",showLabel:o}),null),s(a,l(r,{value:i,variant:"error",showLabel:o}),null),L(()=>v(a,m({display:"flex",flexDirection:"column",gap:"1rem",width:"300px"}))),a})()}},y={render:()=>{const[t]=e(45),[d]=e(65),[g]=e(85),[i]=e(!0);return(()=>{var o=B(),a=o.firstChild,n=a.firstChild,c=a.nextSibling,b=c.firstChild,p=c.nextSibling,w=p.firstChild;return s(a,l(r,{value:t,size:"sm",variant:"success",showLabel:i}),null),s(c,l(r,{value:d,size:"md",variant:"default",showLabel:i}),null),s(p,l(r,{value:g,size:"lg",variant:"warning",showLabel:i}),null),L(h=>{var f=m({display:"flex",flexDirection:"column",gap:"1rem",width:"300px"}),S=m({fontSize:"0.875rem",mb:"0.5rem",color:"base.content"}),u=m({fontSize:"0.875rem",mb:"0.5rem",color:"base.content"}),x=m({fontSize:"0.875rem",mb:"0.5rem",color:"base.content"});return f!==h.e&&v(o,h.e=f),S!==h.t&&v(n,h.t=S),u!==h.a&&v(b,h.a=u),x!==h.o&&v(w,h.o=x),h},{e:void 0,t:void 0,a:void 0,o:void 0}),o})()}},_={render:()=>{const[t]=e(15),[d]=e(30),[g]=e(45),[i]=e(70),[o]=e(95),[a]=e(!0);return(()=>{var n=O(),c=n.firstChild;return s(n,l(r,{value:t,variant:"error",showLabel:a}),null),s(n,l(r,{value:d,variant:"warning",showLabel:a}),null),s(n,l(r,{value:g,variant:"default",showLabel:a}),null),s(n,l(r,{value:i,variant:"success",showLabel:a}),null),s(n,l(r,{value:o,variant:"success",showLabel:a}),null),L(b=>{var p=m({display:"flex",flexDirection:"column",gap:"0.75rem",width:"400px",p:"1.5rem",bg:"base.50",borderRadius:"md"}),w=m({fontSize:"1.125rem",fontWeight:"semibold",mb:"0.5rem"});return p!==b.e&&v(n,b.e=p),w!==b.t&&v(c,b.t=w),b},{e:void 0,t:void 0}),n})()}},C={render:()=>{const[t]=e(85),[d]=e(120),[g]=e(12),[i]=e(20),[o]=e(750),[a]=e(1e3),[n]=e(!0);return(()=>{var c=R(),b=c.firstChild,p=b.firstChild,w=b.nextSibling,h=w.firstChild,f=w.nextSibling,S=f.firstChild;return s(b,l(r,{value:t,max:d,variant:"success",showLabel:n}),null),s(w,l(r,{value:g,max:i,variant:"warning",showLabel:n}),null),s(f,l(r,{value:o,max:a,variant:"error",showLabel:n}),null),L(u=>{var x=m({display:"flex",flexDirection:"column",gap:"1rem",width:"300px"}),W=m({fontSize:"0.875rem",mb:"0.5rem",color:"base.content"}),T=m({fontSize:"0.875rem",mb:"0.5rem",color:"base.content"}),V=m({fontSize:"0.875rem",mb:"0.5rem",color:"base.content"});return x!==u.e&&v(c,u.e=x),W!==u.t&&v(p,u.t=W),T!==u.a&&v(h,u.a=T),V!==u.o&&v(S,u.o=V),u},{e:void 0,t:void 0,a:void 0,o:void 0}),c})()}},$={render:()=>{const[t]=e(20),[d]=e(40),[g]=e(60),[i]=e(80),[o]=e(100),[a]=e(!1);return(()=>{var n=E();return s(n,l(r,{value:t,variant:"error",showLabel:a}),null),s(n,l(r,{value:d,variant:"warning",showLabel:a}),null),s(n,l(r,{value:g,variant:"default",showLabel:a}),null),s(n,l(r,{value:i,variant:"success",showLabel:a}),null),s(n,l(r,{value:o,variant:"success",showLabel:a}),null),L(()=>v(n,m({display:"flex",flexDirection:"column",gap:"0.5rem",width:"300px"}))),n})()}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = createSignal(args.value);
    const [max, setMax] = createSignal(args.max);
    const [showLabel, setShowLabel] = createSignal(args.showLabel);

    // Update signals when args change
    createEffect(() => setValue(args.value));
    createEffect(() => setMax(args.max));
    createEffect(() => setShowLabel(args.showLabel));
    return <div style={{
      width: "300px"
    }}>
        <Progress value={value} max={max} showLabel={showLabel} variant={args.variant} size={args.size} />
      </div>;
  },
  args: {
    value: 65,
    showLabel: true,
    variant: "default",
    size: "md",
    max: 100
  }
}`,...P.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1] = createSignal(25);
    const [value2] = createSignal(50);
    const [value3] = createSignal(75);
    const [value4] = createSignal(90);
    const [showLabel] = createSignal(true);
    return <div class={css({
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "300px"
    })}>
        <Progress value={value1} variant="default" showLabel={showLabel} />
        <Progress value={value2} variant="success" showLabel={showLabel} />
        <Progress value={value3} variant="warning" showLabel={showLabel} />
        <Progress value={value4} variant="error" showLabel={showLabel} />
      </div>;
  }
}`,...z.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1] = createSignal(45);
    const [value2] = createSignal(65);
    const [value3] = createSignal(85);
    const [showLabel] = createSignal(true);
    return <div class={css({
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "300px"
    })}>
        <div>
          <p class={css({
          fontSize: "0.875rem",
          mb: "0.5rem",
          color: "base.content"
        })}>
            Small
          </p>
          <Progress value={value1} size="sm" variant="success" showLabel={showLabel} />
        </div>
        <div>
          <p class={css({
          fontSize: "0.875rem",
          mb: "0.5rem",
          color: "base.content"
        })}>
            Medium
          </p>
          <Progress value={value2} size="md" variant="default" showLabel={showLabel} />
        </div>
        <div>
          <p class={css({
          fontSize: "0.875rem",
          mb: "0.5rem",
          color: "base.content"
        })}>
            Large
          </p>
          <Progress value={value3} size="lg" variant="warning" showLabel={showLabel} />
        </div>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1] = createSignal(15);
    const [value2] = createSignal(30);
    const [value3] = createSignal(45);
    const [value4] = createSignal(70);
    const [value5] = createSignal(95);
    const [showLabel] = createSignal(true);
    return <div class={css({
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      width: "400px",
      p: "1.5rem",
      bg: "base.50",
      borderRadius: "md"
    })}>
        <h3 class={css({
        fontSize: "1.125rem",
        fontWeight: "semibold",
        mb: "0.5rem"
      })}>
          Progress Overview
        </h3>

        <Progress value={value1} variant="error" showLabel={showLabel} />
        <Progress value={value2} variant="warning" showLabel={showLabel} />
        <Progress value={value3} variant="default" showLabel={showLabel} />
        <Progress value={value4} variant="success" showLabel={showLabel} />
        <Progress value={value5} variant="success" showLabel={showLabel} />
      </div>;
  }
}`,..._.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1] = createSignal(85);
    const [max1] = createSignal(120);
    const [value2] = createSignal(12);
    const [max2] = createSignal(20);
    const [value3] = createSignal(750);
    const [max3] = createSignal(1000);
    const [showLabel] = createSignal(true);
    return <div class={css({
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "300px"
    })}>
        <div>
          <p class={css({
          fontSize: "0.875rem",
          mb: "0.5rem",
          color: "base.content"
        })}>
            Score: 85/120
          </p>
          <Progress value={value1} max={max1} variant="success" showLabel={showLabel} />
        </div>
        <div>
          <p class={css({
          fontSize: "0.875rem",
          mb: "0.5rem",
          color: "base.content"
        })}>
            Tasks: 12/20
          </p>
          <Progress value={value2} max={max2} variant="warning" showLabel={showLabel} />
        </div>
        <div>
          <p class={css({
          fontSize: "0.875rem",
          mb: "0.5rem",
          color: "base.content"
        })}>
            Storage: 750GB/1TB
          </p>
          <Progress value={value3} max={max3} variant="error" showLabel={showLabel} />
        </div>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1] = createSignal(20);
    const [value2] = createSignal(40);
    const [value3] = createSignal(60);
    const [value4] = createSignal(80);
    const [value5] = createSignal(100);
    const [showLabel] = createSignal(false);
    return <div class={css({
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      width: "300px"
    })}>
        <Progress value={value1} variant="error" showLabel={showLabel} />
        <Progress value={value2} variant="warning" showLabel={showLabel} />
        <Progress value={value3} variant="default" showLabel={showLabel} />
        <Progress value={value4} variant="success" showLabel={showLabel} />
        <Progress value={value5} variant="success" showLabel={showLabel} />
      </div>;
  }
}`,...$.parameters?.docs?.source}}};const F=["Default","AllVariants","AllSizes","ProgressList","WithCustomMax","WithoutLabel"];export{y as AllSizes,z as AllVariants,P as Default,_ as ProgressList,C as WithCustomMax,$ as WithoutLabel,F as __namedExportsOrder,q as default};
