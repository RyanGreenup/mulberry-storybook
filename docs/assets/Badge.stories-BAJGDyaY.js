import{c as n,m as v,t as B,i as r,e as o,f as u}from"./iframe-PFBARcnl.js";import{c as t}from"./css-C_pJ_J0K.js";import{I as f,a,B as p}from"./Kbd-Czq9cEOx.js";import"./preload-helper-D9Z9MdNV.js";import"./create-recipe-B6K2Nja6.js";var h=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],x=e=>n(f,v(e,{iconNode:h,name:"mail"})),m=x,g=B("<div>");const _={title:"Components/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","error","neutral"],description:"Badge variant"}}},s={args:{children:"Badge"}},i={render:()=>(()=>{var e=g();return r(e,n(a,{variant:"default",children:"Default"}),null),r(e,n(a,{variant:"success",children:"Success"}),null),r(e,n(a,{variant:"warning",children:"Warning"}),null),r(e,n(a,{variant:"error",children:"Error"}),null),r(e,n(a,{variant:"neutral",children:"Neutral"}),null),o(()=>u(e,t({display:"flex",gap:"0.5rem",flexWrap:"wrap"}))),e})()},l={render:()=>(()=>{var e=g();return r(e,n(p,{get class(){return t({display:"inline-flex",justifyContent:"space-between",gap:"0.5rem"})},get children(){return[n(m,{size:16}),"Inbox",n(a,{variant:"error",children:"3"})]}}),null),r(e,n(p,{get class(){return t({position:"relative",display:"inline-flex",alignItems:"center",gap:"0.5rem",px:"1rem",py:"0.5rem",bg:"transparent",color:"base.content",border:"default",borderRadius:"md",cursor:"pointer",_hover:{bg:"base.200"}})},get children(){return[n(m,{size:16}),"Messages",n(a,{variant:"success",get class(){return t({ml:"auto"})},children:"12"})]}}),null),r(e,n(p,{variant:"ghost",get class(){return t({position:"relative",display:"inline-flex",alignItems:"center"})},get children(){return[n(m,{size:20}),n(a,{variant:"error",get class(){return t({position:"absolute",top:"-0.25rem",right:"-0.25rem",minW:"1.25rem",h:"1.25rem",px:"0.25rem",fontSize:"0.625rem",display:"flex",alignItems:"center",justifyContent:"center"})},children:"99+"})]}}),null),o(()=>u(e,t({display:"flex",gap:"1rem",alignItems:"center"}))),e})()},d={render:()=>(()=>{var e=g();return r(e,n(a,{variant:"default",children:"1"}),null),r(e,n(a,{variant:"success",children:"5"}),null),r(e,n(a,{variant:"warning",children:"23"}),null),r(e,n(a,{variant:"error",children:"99+"}),null),r(e,n(a,{variant:"neutral",children:"New"}),null),o(()=>u(e,t({display:"flex",gap:"0.5rem",alignItems:"center"}))),e})()},c={render:()=>(()=>{var e=g();return r(e,n(a,{variant:"success",children:"Online"}),null),r(e,n(a,{variant:"warning",children:"Away"}),null),r(e,n(a,{variant:"error",children:"Offline"}),null),r(e,n(a,{variant:"neutral",children:"Unknown"}),null),r(e,n(a,{variant:"default",children:"Active"}),null),o(()=>u(e,t({display:"flex",gap:"0.5rem",flexWrap:"wrap"}))),e})()};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Badge"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div class={css({
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap"
  })}>
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div class={css({
    display: "flex",
    gap: "1rem",
    alignItems: "center"
  })}>
      <Button class={css({
      display: "inline-flex",
      justifyContent: "space-between",
      gap: "0.5rem"
    })}>
        <Mail size={16} />
        Inbox
        <Badge variant="error">3</Badge>
      </Button>

      <Button class={css({
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      px: "1rem",
      py: "0.5rem",
      bg: "transparent",
      color: "base.content",
      border: "default",
      borderRadius: "md",
      cursor: "pointer",
      _hover: {
        bg: "base.200"
      }
    })}>
        <Mail size={16} />
        Messages
        <Badge variant="success" class={css({
        ml: "auto"
      })}>
          12
        </Badge>
      </Button>

      <Button variant="ghost" class={css({
      position: "relative",
      display: "inline-flex",
      alignItems: "center"
    })}>
        <Mail size={20} />
        <Badge variant="error" class={css({
        position: "absolute",
        top: "-0.25rem",
        right: "-0.25rem",
        minW: "1.25rem",
        h: "1.25rem",
        px: "0.25rem",
        fontSize: "0.625rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      })}>
          99+
        </Badge>
      </Button>
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div class={css({
    display: "flex",
    gap: "0.5rem",
    alignItems: "center"
  })}>
      <Badge variant="default">1</Badge>
      <Badge variant="success">5</Badge>
      <Badge variant="warning">23</Badge>
      <Badge variant="error">99+</Badge>
      <Badge variant="neutral">New</Badge>
    </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div class={css({
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap"
  })}>
      <Badge variant="success">Online</Badge>
      <Badge variant="warning">Away</Badge>
      <Badge variant="error">Offline</Badge>
      <Badge variant="neutral">Unknown</Badge>
      <Badge variant="default">Active</Badge>
    </div>
}`,...c.parameters?.docs?.source}}};const z=["Default","AllVariants","InButton","NumberBadges","StatusBadges"];export{i as AllVariants,s as Default,l as InButton,d as NumberBadges,c as StatusBadges,z as __namedExportsOrder,_ as default};
