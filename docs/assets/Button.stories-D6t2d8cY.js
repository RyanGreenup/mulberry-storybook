import{c as t,t as u,s as e,i as a}from"./iframe-PFBARcnl.js";import{B as r}from"./Kbd-Czq9cEOx.js";import"./preload-helper-D9Z9MdNV.js";import"./css-C_pJ_J0K.js";import"./create-recipe-B6K2Nja6.js";var k=u("<div style=flex-wrap:wrap;background-color:var(--colors-base-100);border-radius:0.5rem;max-width:50rem>"),z=u("<div style=align-items:center;background-color:var(--colors-base-100);border-radius:0.5rem><div style=flex-direction:column;align-items:center><span style=font-size:0.75rem>xs</span></div><div style=flex-direction:column;align-items:center><span style=font-size:0.75rem>sm</span></div><div style=flex-direction:column;align-items:center><span style=font-size:0.75rem>md (default)</span></div><div style=flex-direction:column;align-items:center><span style=font-size:0.75rem>lg</span></div><div style=flex-direction:column;align-items:center><span style=font-size:0.75rem>xl"),_=u("<div style=flex-direction:column;background-color:var(--colors-base-100);border-radius:0.5rem><div style=align-items:center><h3 style=font-size:1rem;font-weight:600>Normal</h3></div><div style=align-items:center><h3 style=font-size:1rem;font-weight:600>Disabled"),C=u("<div style=flex-direction:column;background-color:var(--colors-base-100);border-radius:0.5rem>"),$=u("<div style=flex-direction:column;background-color:var(--colors-base-100);border-radius:0.5rem;max-width:40rem><h3 style=font-size:1.125rem;font-weight:600>Interactive Examples</h3><div style=flex-wrap:wrap></div><div style=align-items:center>");const A={title:"Components/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","accent","neutral","info","success","warning","error","ghost","outline","link"],description:"Button variant/style"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Size of the button"},fullWidth:{control:"boolean",description:"Make button take full width"},disabled:{control:"boolean",description:"Disable the button"},children:{control:"text",description:"Button content"}}},p={render:()=>t(r,{children:"Button"}),parameters:{docs:{source:{code:"<Button>Button</Button>"}}}},v={args:{children:"Button"}},g={render:()=>(()=>{var n=k();return e(n,"display","flex"),e(n,"gap","1rem"),e(n,"padding","2rem"),a(n,t(r,{variant:"primary",children:"Primary"}),null),a(n,t(r,{variant:"secondary",children:"Secondary"}),null),a(n,t(r,{variant:"accent",children:"Accent"}),null),a(n,t(r,{variant:"neutral",children:"Neutral"}),null),a(n,t(r,{variant:"info",children:"Info"}),null),a(n,t(r,{variant:"success",children:"Success"}),null),a(n,t(r,{variant:"warning",children:"Warning"}),null),a(n,t(r,{variant:"error",children:"Error"}),null),a(n,t(r,{variant:"ghost",children:"Ghost"}),null),a(n,t(r,{variant:"outline",children:"Outline"}),null),a(n,t(r,{variant:"link",children:"Link"}),null),n})()},y={render:()=>(()=>{var n=z(),i=n.firstChild,o=i.firstChild,l=i.nextSibling,s=l.firstChild,d=l.nextSibling,x=d.firstChild,c=d.nextSibling,b=c.firstChild,m=c.nextSibling,S=m.firstChild;return e(n,"display","flex"),e(n,"gap","1rem"),e(n,"padding","2rem"),e(i,"display","flex"),e(i,"gap","0.5rem"),a(i,t(r,{size:"xs",children:"Extra Small"}),o),e(o,"color","var(--colors-base-content)"),e(l,"display","flex"),e(l,"gap","0.5rem"),a(l,t(r,{size:"sm",children:"Small"}),s),e(s,"color","var(--colors-base-content)"),e(d,"display","flex"),e(d,"gap","0.5rem"),a(d,t(r,{size:"md",children:"Medium"}),x),e(x,"color","var(--colors-base-content)"),e(c,"display","flex"),e(c,"gap","0.5rem"),a(c,t(r,{size:"lg",children:"Large"}),b),e(b,"color","var(--colors-base-content)"),e(m,"display","flex"),e(m,"gap","0.5rem"),a(m,t(r,{size:"xl",children:"Extra Large"}),S),e(S,"color","var(--colors-base-content)"),n})()},f={render:()=>(()=>{var n=_(),i=n.firstChild,o=i.firstChild,l=i.nextSibling,s=l.firstChild;return e(n,"display","flex"),e(n,"gap","2rem"),e(n,"padding","2rem"),e(i,"display","flex"),e(i,"gap","1rem"),e(o,"margin","0"),a(i,t(r,{variant:"primary",children:"Normal"}),null),a(i,t(r,{variant:"secondary",children:"Normal"}),null),a(i,t(r,{variant:"outline",children:"Normal"}),null),e(l,"display","flex"),e(l,"gap","1rem"),e(s,"margin","0"),a(l,t(r,{variant:"primary",disabled:!0,children:"Disabled"}),null),a(l,t(r,{variant:"secondary",disabled:!0,children:"Disabled"}),null),a(l,t(r,{variant:"outline",disabled:!0,children:"Disabled"}),null),n})()},h={render:()=>(()=>{var n=C();return e(n,"display","flex"),e(n,"gap","1rem"),e(n,"padding","2rem"),e(n,"width","30rem"),a(n,t(r,{variant:"primary",fullWidth:!0,children:"Full Width Primary"}),null),a(n,t(r,{variant:"secondary",fullWidth:!0,children:"Full Width Secondary"}),null),a(n,t(r,{variant:"outline",fullWidth:!0,children:"Full Width Outline"}),null),n})()},B={render:()=>(()=>{var n=$(),i=n.firstChild,o=i.nextSibling,l=o.nextSibling;return e(n,"display","flex"),e(n,"gap","2rem"),e(n,"padding","2rem"),e(i,"margin","0"),e(o,"display","flex"),e(o,"gap","1rem"),a(o,t(r,{variant:"primary",onClick:()=>alert("Primary button clicked!"),children:"Click Me"}),null),a(o,t(r,{variant:"success",onClick:()=>alert("Success!"),children:"Save Changes"}),null),a(o,t(r,{variant:"error",onClick:()=>confirm("Are you sure you want to delete this?"),children:"Delete"}),null),a(o,t(r,{variant:"ghost",onClick:()=>console.log("Ghost button clicked"),children:"Cancel"}),null),e(l,"display","flex"),e(l,"gap","1rem"),a(l,t(r,{variant:"link",href:"#",onClick:s=>s.preventDefault(),children:"Learn More"}),null),a(l,t(r,{variant:"outline",size:"sm",children:"Secondary Action"}),null),n})()};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Button>Button</Button>,
  parameters: {
    docs: {
      source: {
        code: "<Button>Button</Button>"
      }
    }
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    "flex-wrap": "wrap",
    gap: "1rem",
    padding: "2rem",
    "background-color": "var(--colors-base-100)",
    "border-radius": "0.5rem",
    "max-width": "50rem"
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="info">Info</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    "align-items": "center",
    gap: "1rem",
    padding: "2rem",
    "background-color": "var(--colors-base-100)",
    "border-radius": "0.5rem"
  }}>
      <div style={{
      display: "flex",
      "flex-direction": "column",
      gap: "0.5rem",
      "align-items": "center"
    }}>
        <Button size="xs">Extra Small</Button>
        <span style={{
        "font-size": "0.75rem",
        color: "var(--colors-base-content)"
      }}>
          xs
        </span>
      </div>
      <div style={{
      display: "flex",
      "flex-direction": "column",
      gap: "0.5rem",
      "align-items": "center"
    }}>
        <Button size="sm">Small</Button>
        <span style={{
        "font-size": "0.75rem",
        color: "var(--colors-base-content)"
      }}>
          sm
        </span>
      </div>
      <div style={{
      display: "flex",
      "flex-direction": "column",
      gap: "0.5rem",
      "align-items": "center"
    }}>
        <Button size="md">Medium</Button>
        <span style={{
        "font-size": "0.75rem",
        color: "var(--colors-base-content)"
      }}>
          md (default)
        </span>
      </div>
      <div style={{
      display: "flex",
      "flex-direction": "column",
      gap: "0.5rem",
      "align-items": "center"
    }}>
        <Button size="lg">Large</Button>
        <span style={{
        "font-size": "0.75rem",
        color: "var(--colors-base-content)"
      }}>
          lg
        </span>
      </div>
      <div style={{
      display: "flex",
      "flex-direction": "column",
      gap: "0.5rem",
      "align-items": "center"
    }}>
        <Button size="xl">Extra Large</Button>
        <span style={{
        "font-size": "0.75rem",
        color: "var(--colors-base-content)"
      }}>
          xl
        </span>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    "flex-direction": "column",
    gap: "2rem",
    padding: "2rem",
    "background-color": "var(--colors-base-100)",
    "border-radius": "0.5rem"
  }}>
      <div style={{
      display: "flex",
      gap: "1rem",
      "align-items": "center"
    }}>
        <h3 style={{
        margin: "0",
        "font-size": "1rem",
        "font-weight": "600"
      }}>
          Normal
        </h3>
        <Button variant="primary">Normal</Button>
        <Button variant="secondary">Normal</Button>
        <Button variant="outline">Normal</Button>
      </div>

      <div style={{
      display: "flex",
      gap: "1rem",
      "align-items": "center"
    }}>
        <h3 style={{
        margin: "0",
        "font-size": "1rem",
        "font-weight": "600"
      }}>
          Disabled
        </h3>
        <Button variant="primary" disabled>
          Disabled
        </Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
        <Button variant="outline" disabled>
          Disabled
        </Button>
      </div>
    </div>
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    "flex-direction": "column",
    gap: "1rem",
    padding: "2rem",
    "background-color": "var(--colors-base-100)",
    "border-radius": "0.5rem",
    width: "30rem"
  }}>
      <Button variant="primary" fullWidth>
        Full Width Primary
      </Button>
      <Button variant="secondary" fullWidth>
        Full Width Secondary
      </Button>
      <Button variant="outline" fullWidth>
        Full Width Outline
      </Button>
    </div>
}`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    "flex-direction": "column",
    gap: "2rem",
    padding: "2rem",
    "background-color": "var(--colors-base-100)",
    "border-radius": "0.5rem",
    "max-width": "40rem"
  }}>
      <h3 style={{
      margin: "0",
      "font-size": "1.125rem",
      "font-weight": "600"
    }}>
        Interactive Examples
      </h3>

      <div style={{
      display: "flex",
      gap: "1rem",
      "flex-wrap": "wrap"
    }}>
        <Button variant="primary" onClick={() => alert("Primary button clicked!")}>
          Click Me
        </Button>

        <Button variant="success" onClick={() => alert("Success!")}>
          Save Changes
        </Button>

        <Button variant="error" onClick={() => confirm("Are you sure you want to delete this?")}>
          Delete
        </Button>

        <Button variant="ghost" onClick={() => console.log("Ghost button clicked")}>
          Cancel
        </Button>
      </div>

      <div style={{
      display: "flex",
      gap: "1rem",
      "align-items": "center"
    }}>
        <Button variant="link" href="#" onClick={e => e.preventDefault()}>
          Learn More
        </Button>

        <Button variant="outline" size="sm">
          Secondary Action
        </Button>
      </div>
    </div>
}`,...B.parameters?.docs?.source}}};const F=["Default","WithArgs","Variants","Sizes","States","FullWidth","Interactive"];export{p as Default,h as FullWidth,B as Interactive,y as Sizes,f as States,g as Variants,v as WithArgs,F as __namedExportsOrder,A as default};
